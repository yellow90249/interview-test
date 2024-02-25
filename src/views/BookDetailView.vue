<template>
  <div class="container container">
    <div class="page-header flex-test">
      <span class="material-symbols-outlined prev-btn" @click="goListPage"> arrow_back_ios </span>
      <h1 class="page-title">{{ staticTitle }}</h1>
      <div>
        <span
          class="material-symbols-outlined edit-btn"
          :class="{ hidden: isEditMode, 'not-touch': isEditMode }"
          @click="isEditMode = !isEditMode"
        >
          edit_square
        </span>
        <span
          class="material-symbols-outlined delete-btn"
          :class="{ hidden: isEditMode, 'not-touch': isEditMode }"
          @click="deleteBook(staticTitle)"
        >
          delete
        </span>
      </div>
    </div>

    <div class="input-wrapper">
      <input
        class="input"
        v-model="book.title"
        type="text"
        placeholder=" "
        data-placeholder="E-mail"
        required
        :disabled="!isEditMode"
      />
      <span class="placeholder">名稱</span>
    </div>

    <div class="input-wrapper">
      <input
        class="input"
        v-model="book.author"
        type="text"
        placeholder=" "
        data-placeholder="E-mail"
        required
        :disabled="!isEditMode"
      />
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
        :disabled="!isEditMode"
      ></textarea>
      <span class="placeholder">備註</span>
    </div>

    <div class="btn-wrapper" v-show="isEditMode">
      <button class="outline-btn" @click="isEditMode = false">取消</button>
      <button class="outline-btn" @click="updateBook($route.params.bookId, book)">修改</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getBookAPI, updateBookAPI, deleteBookAPI } from '@/js/bookAPI';
import { successToast, errorToast } from '@/js/alert';
import Swal from 'sweetalert2';

const route = useRoute();
const router = useRouter();
const { bookId } = route.params;

const book = ref({ title: '', author: '', description: '' });
let staticTitle = ref('');
let isEditMode = ref(false);

onMounted(async () => {
  const res = await getBookAPI(bookId);
  book.value = res.data;
  staticTitle = book.value.title;
});

function goListPage() {
  router.push({ name: 'list' });
}

function updateBook(bookId, book) {
  updateBookAPI(bookId, book)
    .then(() => {
      successToast('修改成功');
      goListPage();
    })
    .catch(() => errorToast('修改失敗'));
}

function deleteBook(book) {
  Swal.fire({
    title: `刪除 ${book}`,
    width: 300,
    showCancelButton: true,
    confirmButtonColor: '#42b983',
    cancelButtonColor: '#eb4d4b',
    confirmButtonText: '確認',
    cancelButtonText: '取消',
  }).then((result) => {
    if (result.isConfirmed) {
      deleteBookAPI(bookId).then(() => {
        successToast('刪除成功');
        goListPage();
      });
    }
  });
}
</script>
