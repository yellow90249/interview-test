<template>
  <div class="book-card">
    <span class="material-symbols-outlined card--icon"> book </span>
    <!-- <span class="material-symbols-outlined card--icon"> import_contacts </span> -->
    <p class="card--title">{{ book.title }}</p>
    <p class="card--author">{{ book.author }}</p>
  </div>
</template>

<script setup>
// eslint-disable-next-line no-undef
const props = defineProps({
  book: Object,
});

console.log(props);
</script>
