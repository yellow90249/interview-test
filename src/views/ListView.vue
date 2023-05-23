<template>
  <div class="container">
    <div class="page-header flex-test">
      <span class="material-symbols-outlined plus-btn hidden"> add </span>
      <h1 class="page-title">書本列表</h1>
      <span class="material-symbols-outlined plus-btn"> library_add </span>
      <!-- <span class="material-symbols-outlined plus-btn"> library_add </span> -->
    </div>

    <div class="grid--2x3x4">
      <BookCard v-for="book in bookList" :key="book.id" :book="book"></BookCard>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getBookListAPI } from '@/js/bookAPI';
import BookCard from '@/components/BookCard.vue';

let bookList = ref([]);

onMounted(async () => {
  const res = await getBookListAPI();
  bookList.value = res.data;
});
</script>
