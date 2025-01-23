<script lang="ts" module>
  export type TableOfContentsItem = {
    title: string;
    url: string;
    items: TableOfContentsItem[];
  };

  export type TableOfContents = {
    items: TableOfContentsItem[];
  };
</script>

<script lang="ts">
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import Tree from './Tree.svelte';

  let filteredHeadingsList = $state<TableOfContents>();

  function getHeadingsWithHierarchy(divId: string) {
    const div = document.getElementById(divId);
    console.log(div);

    if (!div) {
      return { items: [] };
    }

    const headings: HTMLHeadingElement[] = Array.from(div.querySelectorAll('h2, h3'));

    console.log(headings);
    const hierarchy: TableOfContents = { items: [] };
    let currentLevel: TableOfContentsItem | undefined = undefined;

    const newIdSet: Set<string> = new Set();
    let count = 1;
    for (const heading of headings) {
      const level = Number.parseInt(heading.tagName.charAt(1));
      if (!heading.id) {
        let newId = heading.innerText
          .replaceAll(/[^a-z0-9 ]/gi, '')
          .replaceAll(' ', '-')
          .toLowerCase();
        if (newIdSet.has(newId)) {
          newId = `${newId}-${count}`;
          count++;
        }
        newIdSet.add(newId);
        heading.id = `${newId}`;
      }

      const item = {
        title: heading.textContent || '',
        url: `#${heading.id}`,
        items: []
      };

      if (level === 2) {
        hierarchy.items.push(item);
        currentLevel = item;
      } else if (level === 3 && currentLevel?.items && !heading.hasAttribute('data-toc-ignore')) {
        currentLevel.items.push(item);
      }
    }

    filteredHeadingsList = hierarchy;
  }

  const activeItems: string[] = $state([]);

  function useActiveItem(itemIds: string[]) {
    const observer = new IntersectionObserver(
      (entries) => {
        for (let entry of entries) {
          if (entry.isIntersecting) {
            if (!activeItems.includes(entry.target.id)) activeItems.push(entry.target.id);
          } else {
            if (activeItems.includes(entry.target.id)) activeItems.splice(activeItems.indexOf(entry.target.id), 1);
          }
        }
        activeItems.sort((a, b) => {
          const aIndex = itemIds.indexOf(a);
          const bIndex = itemIds.indexOf(b);
          return aIndex - bIndex;
        });
      },
      { rootMargin: `0% 0% -10% 0%` }
    );

    const observeElement = (id: string) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    };

    itemIds?.forEach(observeElement);

    return () => {
      const unobserveElement = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      };

      itemIds?.forEach(unobserveElement);
    };
  }

  // Lifecycle
  onMount(() => {
    getHeadingsWithHierarchy('doc');
    const allItemIds: string[] = [];
    filteredHeadingsList?.items.forEach((item: any) => {
      allItemIds.push(item.url.replace('#', ''));
      if (!item.items) return;
      item.items.forEach((subItem: any) => {
        allItemIds.push(subItem.url.replace('#', ''));
      });
    });
    activeItems.push(...allItemIds);
    useActiveItem(allItemIds);
  });
</script>

<div class="space-y-2 pt-8">
  <p class="inline-flex font-medium">On This Page</p>
  <Tree tree={filteredHeadingsList} activeItem={activeItems[0]} />
</div>
