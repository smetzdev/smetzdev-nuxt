<script setup>
// Render component only if ?showCV is present in the url-search-params
const showCV = ref(false);
onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search);
  showCV.value = urlParams.has("showCV");
});

const workplaces = await queryContent("workplaces").find();
</script>

<template>
  <section v-if="showCV">
    <h2 class="font-medium text-2xl md:text-4xl">Work Places</h2>
    <p class="text-xl md:text-2xl mt-4 !leading-relaxed text-pretty">
      These are the stations where my career took me so far, call it a CV<br />
      ...at the bottom of the website.
    </p>

    <ul
      class="bg-gray-800 flex flex-col rounded-md mt-8 divide-y divide-gray-700 px-4 sm:px-8"
    >
      <li
        class="flex items-center justify-between py-4 sm:py-8"
        v-for="workplace in workplaces"
      >
        <div class="sm:flex sm:items-center sm:space-x-4">
          <img
            :src="workplace.logo"
            :alt="workplace.company"
            class="w-12 h-12 rounded-lg max-sm:hidden"
          />
          <header>
            <h3 class="sm:text-xl md:font-medium">
              <a target="_blank" :href="workplace.companyLink">{{
                workplace.company
              }}</a>
            </h3>
            <p class="mt-1 text-gray-400 text-sm sm:text-base">
              {{ workplace.job }}
            </p>
          </header>
        </div>
        <span class="text-sm sm:text-base">{{ workplace.yearsActive }}</span>
      </li>
    </ul>
  </section>
</template>
