<template>
  <div class="container">
    <div class="page-header flex-test">
      <span class="material-symbols-outlined plus-btn hidden"> add </span>
      <h1 class="page-title">書本列表</h1>
      <span class="material-symbols-outlined plus-btn" @click="goAddPage"> add </span>
    </div>

    <div class="grid--2x3x4">
      <BookCard v-for="book in bookList" :key="book.id" :book="book" @click="goDetailPage(book.id)"></BookCard>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { getBookListAPI } from '@/js/bookAPI';
import BookCard from '@/components/BookCard.vue';

const bookList = ref([]);
const router = useRouter();

onMounted(async () => {
  const res = await getBookListAPI();
  bookList.value = res.data;
});

function goAddPage() {
  router.push({ name: 'add' });
}

function goDetailPage(bookId) {
  router.push({ name: 'detail', params: { bookId } });
}
</script>
