<script lang="ts" module>
  const data: { navMain: { title: string; items: { title: string; url: string; description?: string }[] }[] } = {
    navMain: [
      {
        title: 'Getting Started',
        items: [
          {
            title: 'Introduction',
            url: '/docs/introduction',
            description: 'Learn about the basics of Hevel UI and how to get started.'
          },
          {
            title: 'Installation',
            url: '/docs/installation',
            description: 'How to install Hevel UI in your project.'
          },
          {
            title: 'Importing components',
            url: '/docs/importing-components',
            description: 'How to import Hevel UI and shadcn-svelte components in your project.'
          },
          {
            title: 'Theming',
            url: '/docs/theming',
            description: 'Use CSS Variables to customize the look and feel of your application.'
          }
        ]
      },
      {
        title: 'Custom Components',
        items: [
          {
            title: 'Audio Player',
            url: '#'
          },
          {
            title: 'Combo Box',
            url: '#'
          },
          {
            title: 'Copy Button',
            url: '#'
          },
          {
            title: 'Data Table',
            url: '#'
          },
          {
            title: 'Date Picker',
            url: '#'
          },
          {
            title: 'Date Picker Range',
            url: '#'
          },
          {
            title: 'Light Switch',
            url: '#'
          },
          {
            title: 'Loader',
            url: '#'
          },
          {
            title: 'Loader Button',
            url: '#'
          },
          {
            title: 'Month Picker',
            url: '#'
          },
          {
            title: 'Month Picker Range',
            url: '#'
          },
          {
            title: 'Responsive Dialog',
            url: '#'
          },
          {
            title: 'Sortable List',
            url: '#'
          }
        ]
      },
      {
        title: 'Utils',
        items: [
          {
            title: 'Pagination Query',
            url: '#'
          },
          {
            title: 'Authentification Setup',
            url: '#'
          }
        ]
      }
    ]
  };

  export function getCurrentItem(pathname: string) {
    for (const group of data.navMain) {
      const item = group.items.find((item) => item.url === pathname);
      if (item) {
        return {
          parent: group.title,
          child: item.title,
          childUrl: item.url,
          description: item.description
        };
      }
    }
    return null;
  }
</script>

<script lang="ts">
  import ChevronRight from 'lucide-svelte/icons/chevron-right';
  import type { ComponentProps } from 'svelte';
  import { Collapsible, Sidebar } from '$lib/index';
  import { page } from '$app/state';

  let { ref = $bindable(null), ...restProps }: ComponentProps<typeof Sidebar.Root> = $props();

  const isActive = (url: string) => page.url.pathname.startsWith(url);
</script>

<Sidebar.Root bind:ref {...restProps}>
  <Sidebar.Header>
    <Sidebar.MenuButton size="lg" class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
      <img src="/favicon.png" alt="Hevel UI" class="h-8 w-8" />
      <div class="flex flex-col gap-0.5 leading-none">
        <span class="font-semibold">Hevel UI</span>
        <span class="">Documentation</span>
      </div>
      <!-- <ChevronsUpDown class="ml-auto" /> -->
    </Sidebar.MenuButton>
  </Sidebar.Header>
  <Sidebar.Content class="gap-0">
    <!-- We create a Sidebar.Group for each parent. -->
    {#each data.navMain as group (group.title)}
      <Collapsible.Root title={group.title} open={true} class="group/collapsible">
        <Sidebar.Group>
          <Sidebar.GroupLabel
            class="group/label mb-1 text-sm font-bold text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          >
            {#snippet child({ props })}
              <Collapsible.Trigger {...props}>
                {group.title}
                <ChevronRight class="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
              </Collapsible.Trigger>
            {/snippet}
          </Sidebar.GroupLabel>
          <Collapsible.Content>
            <Sidebar.GroupContent>
              <Sidebar.Menu>
                {#each group.items as item (item.title)}
                  <Sidebar.MenuItem>
                    <Sidebar.MenuButton isActive={isActive(item.url)} class="text-muted-foreground">
                      {#snippet child({ props })}
                        <a href={item.url} {...props}>{item.title}</a>
                      {/snippet}
                    </Sidebar.MenuButton>
                  </Sidebar.MenuItem>
                {/each}
              </Sidebar.Menu>
            </Sidebar.GroupContent>
          </Collapsible.Content>
        </Sidebar.Group>
      </Collapsible.Root>
    {/each}
  </Sidebar.Content>
  <Sidebar.Rail />
</Sidebar.Root>
