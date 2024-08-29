<script setup>
defineProps({
  href: String,
});
</script>

<template>
  <a
    class="bg-brawn-yellow text-brawn-gray rounded-lg text-center px-4 py-2 ml-auto"
    target="_blank"
    :href="href"
  >
    <slot />
  </a>
</template>
