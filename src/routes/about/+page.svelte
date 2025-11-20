<script>
  import About from '$lib/components/about/About.svelte'
  import { generateSEOTags, pageSEO } from '$lib/utils/seo'
</script>

<svelte:head>
  {@html generateSEOTags(pageSEO.about)}
</svelte:head>

<section class="flex items-center justify-center w-full min-h-screen">
  <About />
</section>

<style>
</style>
