<script setup lang="ts">
import ContactForm from '@/components/form/ContactForm.vue';
import Modal from '@/components/modals/Modal.vue';

export interface IModalItem {
  message: string;
  isError: boolean;
}

const modalItem = ref<IModalItem | null>(null);

const handleModalResponse = (item: IModalItem) => {
  document.body.classList.add('overflow-y-hidden');
  modalItem.value = item;
};

const handleCloseModal = () => {
  document.body.classList.remove('overflow-y-hidden');
  modalItem.value = null;
};
</script>

<template>
  <div class="">
    <div class="">{{ modalItem }}</div>
    <ContactForm @handleModalResponse="handleModalResponse" />
    <Modal :modalItem="modalItem" @handleCloseModal="handleCloseModal" />
  </div>
</template>
