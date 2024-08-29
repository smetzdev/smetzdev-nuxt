<script setup>
defineProps({
  logo: String,
  company: String,
  companyLink: String,
  job: String,
  yearsActive: String,
});
</script>

<template>
  <li class="flex items-center justify-between py-4 sm:py-8">
    <div class="sm:flex sm:items-center sm:space-x-4">
      <img
        :src="logo"
        :alt="company"
        class="w-12 h-12 rounded-lg max-sm:hidden"
      />
      <header>
        <h3 class="sm:text-xl md:font-medium">
          <a target="_blank" :href="companyLink">{{ company }}</a>
        </h3>
        <p class="mt-1 text-gray-400 text-sm sm:text-base">{{ job }}</p>
      </header>
    </div>
    <span class="text-sm sm:text-base">{{ yearsActive }}</span>
  </li>
</template>
