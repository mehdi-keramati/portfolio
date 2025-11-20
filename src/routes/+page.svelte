<script>
  import Home from '$lib/components/home/Home.svelte'
  import { generateSEOTags, pageSEO } from '$lib/utils/seo'
  import { generateStructuredData, personSchema, websiteSchema } from '$lib/utils/structured-data'
</script>

<svelte:head>
  {@html generateSEOTags(pageSEO.home)}
  {@html generateStructuredData([personSchema, websiteSchema])}
</svelte:head>

<section
  class="flex items-center justify-center w-full h-screen"
>
  <Home />
</section>

<style>
</style>
