<script setup>
defineProps(["href"]);
</script>

<template>
  <div class="max-md:mb-4">
    <slot name="label" />
    <a target="_blank" :href="href">
      <slot></slot>
    </a>
  </div>
</template>
