<script lang="ts" setup>
const currentYear = new Date().getFullYear();
</script>

<template>
  <BottomSvg class="-mb-px" />
  <footer class="bg-brawn-yellow text-brawn-black">
    <div class="max-w-4xl mx-auto p-8 text-center">
      &copy; {{ currentYear }} Sascha Metz | Made with
      <a
        href="https://nuxt.com/"
        class="text-brawn-red hover:underline"
        target="_blank"
      >
        Nuxt
      </a>
    </div>
  </footer>
</template>
