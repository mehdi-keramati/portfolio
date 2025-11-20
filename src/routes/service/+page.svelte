<script>
  import Service from '$lib/components/service/Service.svelte'
  import { generateSEOTags, pageSEO } from '$lib/utils/seo'
</script>

<svelte:head>
  {@html generateSEOTags(pageSEO.service)}
</svelte:head>

<section class="flex items-center justify-center w-full min-h-screen">
  <Service />
</section>

<style>
</style>
