<template>
  <section class="min-h-screen flex flex-col justify-center">
    <header class="flex items-center space-x-4 max-w-xl">
      <NuxtImg
        src="/smetzdev-casual.jpg"
        width="96"
        height="96"
        placeholder
        class="rounded-xl h-24 w-24 md:h-36 md:w-36 shadow-xl shadow-brawn-yellow/15"
        alt="Sascha Metz in casual look"
      />
      <h1 class="text-3xl sm:text-4xl font-bold tracking-tight sm:text-5xl">
        Yet another Webdeveloper
      </h1>
    </header>
    <div class="mt-6 !leading-loose text-xl md:text-2xl">
      <p>
        Hey there!👋
        <br />
        I’m Sascha, based in
        <a href="https://www.youtube.com/watch?v=Jkyg9GrvTeg" target="_blank">
          Saarbrücken, Germany </a
        >.
      </p>
      <p class="mt-4">
        I started building websites back in 2012 and consider myself a
        <a target="_blank" href="https://www.youtube.com/watch?v=HtTUsOKjWyQ">
          professional
        </a>
        since 2015. I've spent my first years building WordPress sites, today i
        work on many different projects, at the moment mainly at
        <a target="_blank" href="https://gorilla.build/">Gorilla</a>.
      </p>
      <p class="mt-4">
        I am open for new projects, so if you need help with your website or
        want to build the next big thing feel free to
        <a
          href="mailto:hello@smetz.dev?subject=I really think you are one hell of a developer!"
        >
          Send me a message </a
        >.
      </p>
      <div class="flex items-center space-x-4 mt-12">
        <ButtonLink href="https://cal.com/smetzdev">Book a call</ButtonLink>
        <Social />
      </div>
    </div>
  </section>
</template>
