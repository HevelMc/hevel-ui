<script lang="ts">
  import { Breadcrumb, Separator, Sidebar } from '#lib/index';
  import { page } from '$app/state';
  import DocSidebar, { getCurrentItem } from './DocSidebar.svelte';
  import TableOfContent from './TableOfContent.svelte';

  let { children } = $props();

  let currentItem = $derived(getCurrentItem(page.url.pathname));
</script>

<Sidebar.Provider>
  <DocSidebar />
  <Sidebar.Inset>
    <header
      class="sticky top-0 z-50 flex h-16 w-full shrink-0 items-center gap-4 border-b border-border/40 bg-background bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <Sidebar.Trigger />
      <Separator orientation="vertical" class="mr-2 h-4" />
      <Breadcrumb.Root>
        <Breadcrumb.List>
          <Breadcrumb.Item class="hidden md:block">
            <Breadcrumb.Link class="hover:text-muted-foreground">{currentItem?.parent}</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator class="hidden md:block" />
          <Breadcrumb.Item>
            <Breadcrumb.Page>
              {currentItem?.child}
            </Breadcrumb.Page>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>
    </header>
    <div class="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <div id="doc" class="doc mx-auto flex w-full flex-1 flex-col gap-6 p-4 xl:max-w-4xl xl:p-16 xl:pt-8">
        <div class="space-y-2">
          <h1>
            {currentItem?.child}
          </h1>

          {#if currentItem?.description}
            <p class="text-muted-foreground">
              {currentItem?.description}
            </p>
          {/if}
        </div>

        {@render children()}
      </div>

      <TableOfContent class="sticky top-16 -mt-10 h-[calc(100vh-4rem)] py-8 max-xl:hidden" />
    </div>
  </Sidebar.Inset>
</Sidebar.Provider>
