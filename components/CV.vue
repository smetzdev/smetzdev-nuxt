<template>
  <section x-show="$store.showCV">
    <h2 class="font-medium text-2xl md:text-4xl">Work Places</h2>
    <p class="text-xl md:text-2xl mt-4 !leading-relaxed text-pretty">
      These are the stations where my career took me so far, call it a CV<br />
      ...at the bottom of the website.
    </p>

    <ul
      class="bg-gray-800 flex flex-col rounded-md mt-8 divide-y divide-gray-700 px-4 sm:px-8"
    >
      <Workplace
        company="Gorilla"
        companyLink="https://gorilla.build/"
        logo="/gorilla.svg"
        job="Software Engineer"
        yearsActive="2021 - today"
      />
      <Workplace
        company="Holoux"
        companyLink="https://hololux.de/"
        logo="/hlx.svg"
        job="Fullstack Web Developer"
        yearsActive="2023 - today"
      />
      <Workplace
        company="Browsaar"
        companyLink="https://browsaar.de"
        logo="/browsaar.svg"
        job="CEO, CTO & Founder 😎"
        yearsActive="2023 - today"
      />
      <Workplace
        company="Azury Living"
        companyLink="https://azury.de/"
        logo="/azury.svg"
        job="Fullstack Web Developer"
        yearsActive="2020 - 2023"
      />
      <Workplace
        company="raum3"
        companyLink="https://raum3.de"
        logo="/r3.svg"
        job="Web Developer"
        yearsActive="2015 - 2020"
      />
    </ul>
  </section>
</template>
