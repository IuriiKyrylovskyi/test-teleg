<script setup lang="ts">
import Webinar from '@/components/webinar/Webinar.vue';
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
  <div class="row">
    <Webinar />
    <ContactForm @handleModalResponse="handleModalResponse" />
    <Modal :modalItem="modalItem" @handleCloseModal="handleCloseModal" />
  </div>
</template>

<style scoped lang="scss">
.row {
  display: flex;
  justify-content: space-between;
  gap: 20px;

  margin: 92px 0;
}
</style>
