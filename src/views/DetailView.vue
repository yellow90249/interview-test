<template>
  <h1>{{ book?.title }}</h1>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getBookAPI } from '@/js/bookAPI';

const route = useRoute();
const book = ref(null);
const { bookId } = route.params;

onMounted(async () => {
  const res = await getBookAPI(bookId);
  book.value = res.data;
});
</script>
