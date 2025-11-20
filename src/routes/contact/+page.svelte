<script>
  import Contact from '$lib/components/contact/Contact.svelte'
  import { generateSEOTags, pageSEO } from '$lib/utils/seo'
</script>

<svelte:head>
  {@html generateSEOTags(pageSEO.contact)}
</svelte:head>

<section class="flex items-center justify-center w-full min-h-screen">
  <Contact />
</section>

<style>
</style>
