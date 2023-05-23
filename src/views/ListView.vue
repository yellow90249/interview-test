<template>
  <h1>書本列表</h1>
  <p v-for="book in bookList" :key="book.id">{{ book }}</p>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getBookListAPI } from '@/js/bookAPI';

let bookList = ref([]);

onMounted(async () => {
  const res = await getBookListAPI();
  bookList.value = res.data;
});
</script>
