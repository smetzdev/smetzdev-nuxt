<script setup>
const notes = await queryContent("notes").find();
</script>

<template>
  <section>
    <h2 class="font-medium text-2xl md:text-4xl">Open Notes</h2>
    <p class="text-xl md:text-2xl mt-4 !leading-relaxed text-pretty">
      I like the idea of public learning and i do take a lot of notes, so i am
      sharing some of my notes via <a href="https://notion.so">Notion</a>. These
      are not perfect, maybe not even up-to-date, but i find it important to
      share progress and not being affraid of making mistakes to some extend.
    </p>
    <ul class="grid gap-4 mt-8 lg:grid-cols-2 xl:gap-6">
      <Card v-for="note in notes">
        <CardTitle>{{ note.title }}</CardTitle>
        <CardContent>{{ note.description }}</CardContent>

        <template v-slot:links>
          <CardPrimaryLink :href="note.href"> Read more </CardPrimaryLink>
        </template>
      </Card>
    </ul>
  </section>
</template>
