<script>
  import Showcase from '$lib/components/showcase/Showcase.svelte'
  import { generateSEOTags, pageSEO } from '$lib/utils/seo'
</script>

<svelte:head>
  {@html generateSEOTags(pageSEO.projects)}
</svelte:head>

<section class="flex items-center justify-center w-full min-h-screen">
  <Showcase />
</section>

<style>
</style>
