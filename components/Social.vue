<script setup>
import {
  FaBandsGithub,
  FaEnvelope,
  FaBandsLinkedin,
} from "@kalimahapps/vue-icons";
</script>

<template>
  <div class="flex flex-1 gap-6 text-xl">
    <a
      target="_blank"
      rel="noreferrer"
      href="https://github.com/smetzdev/smetzdev"
    >
      <span class="sr-only">Go to Sascha's GitHub profile</span>
      <FaBandsGithub />
    </a>
    <a
      target="_blank"
      rel="noreferrer"
      href="https://www.linkedin.com/in/smetzdev/"
    >
      <span class="sr-only">Go to Sascha's LinkedIn profile</span>
      <FaBandsLinkedin />
    </a>
    <a
      target="_blank"
      rel="noreferrer"
      href="mailto:hello@smetz.dev?subject=I really think you are one hell of a developer!"
    >
      <span class="sr-only">Write an email to Sascha</span>
      <FaEnvelope />
    </a>
  </div>
</template>
