<template>
  <div class="container container">
    <div class="page-header flex-test">
      <span class="material-symbols-outlined prev-btn" @click="goListPage"> arrow_back_ios </span>
      <h1 class="page-title">新增書本</h1>
      <span class="material-symbols-outlined edit-btn"> edit_square </span>
    </div>

    <div class="input-wrapper">
      <input class="input" v-model="book.title" type="text" placeholder=" " data-placeholder="E-mail" required />
      <span class="placeholder">名稱</span>
    </div>

    <div class="input-wrapper">
      <input class="input" v-model="book.author" type="text" placeholder=" " data-placeholder="E-mail" required />
      <span class="placeholder">作者</span>
    </div>

    <div class="input-wrapper">
      <textarea
        class="input input--big"
        v-model="book.description"
        type="text"
        placeholder=" "
        data-placeholder="E-mail"
        required
      ></textarea>
      <span class="placeholder">備註</span>
    </div>

    <div class="btn-wrapper">
      <button class="outline-btn" @click="goListPage">取消</button>
      <button class="outline-btn" @click="addBookList(book)">新增</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { addBookListAPI } from '@/js/bookAPI';
import { successToast, errorToast } from '@/js/alert';

const router = useRouter();

const book = ref({ title: '', author: '', description: '' });

function goListPage() {
  router.push({ name: 'list' });
}

function addBookList(book) {
  addBookListAPI(book)
    .then(() => {
      successToast('新增成功');
      goListPage();
    })
    .catch(() => errorToast('新增失敗'));
}
</script>
