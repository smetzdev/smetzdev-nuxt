<script setup>
const projects = await queryContent("projects").find();
</script>

<template>
  <section>
    <h2 class="font-medium text-2xl md:text-4xl">Recent Projects</h2>
    <ul class="grid gap-4 mt-8 lg:grid-cols-2 xl:gap-6">
      <Card v-for="project in projects">
        <CardTitle>{{ project.title }}</CardTitle>
        <CardContent>{{ project.description }}</CardContent>

        <template v-slot:links>
          <CardSecondaryLink
            :href="project.designerLink"
            v-if="project.designerLink"
          >
            <template v-slot:label>
              <span>Design: </span>
            </template>
            {{ project.designerName }}
          </CardSecondaryLink>
          <CardPrimaryLink :href="project.href">
            Go to Project
          </CardPrimaryLink>
        </template>
      </Card>
    </ul>
  </section>
</template>
