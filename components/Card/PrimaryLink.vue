<script setup>
defineProps({
  href: String,
});
</script>

<template>
  <ButtonLink :href="href">
    <slot></slot>
  </ButtonLink>
</template>
