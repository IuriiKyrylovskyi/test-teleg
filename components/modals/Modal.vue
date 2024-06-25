<script setup lang="ts">
import { ref } from 'vue';
import type { IModalItem } from '~/interfaces/global';

const emit = defineEmits<{
  (e: 'handleCloseModal'): void;
}>();

const handleCloseModal = () => {
  emit('handleCloseModal');
};

const props = defineProps<{
  modalItem: IModalItem | null;
}>();

const { modalItem } = toRefs(props);

const open = ref(false);
const errorClass = ref('');

watchEffect(() => {
  if (modalItem?.value?.message) {
    document.body.classList.add('overflow-y-hidden');
    open.value = true;

    errorClass.value = modalItem?.value?.isError ? 'error' : '';
  }
});

const handleClose = () => {
  open.value = false;
  handleCloseModal();
};
</script>

<template>
  <Transition name="modal">
    <Teleport to="body">
      <div v-if="open" class="modal">
        <div class="modal-inner">
          <img
            v-if="modalItem?.isError"
            src="@/assets/images/email-failed.png"
            alt="error icon"
            class="max-w-[170px]"
          />
          <img
            v-if="!modalItem?.isError"
            src="@/assets/images/email-success.png"
            alt="success icon"
          />
          <p :class="errorClass">{{ modalItem?.message }}</p>

          <button class="close-modal" @click="handleClose">
            <img src="@/assets/images/close.svg" alt="close button" />
          </button>
        </div>
      </div>
    </Teleport>
  </Transition>
</template>

<style scoped lang="scss">
.modal {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  padding: 16px;
  background: rgba(0, 0, 52, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  display: flex;
  justify-content: center;
  align-items: center;

  &-inner {
    position: relative;
    min-width: 300px;

    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
    background: (var(--vt-c-white));
    padding: 44px;
    color: var(--vt-c-black);
    text-align: center;
    font-size: 22px;
    border-radius: 8px;
  }

  & img {
    max-width: 170px;
  }
}

.error {
  color: #f10404;
}

.button {
  border: 2px solid #ffeb3b;
  background: #ffeb3b;
  border-radius: 8px;
  padding: 3px 10px;
  font-size: 16px;
  transition: all 0.3s ease;
}

@media (hover: hover) {
  .button:hover {
    border: 2px solid #0073ff;
    color: #0073ff;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
}

.close-modal {
  position: absolute;
  top: -52px;
  right: -52px;

  @media (hover: hover) {
    &:hover {
      color: #0073ff;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      background: var(--vt-c-rhino);
      cursor: pointer;
    }
  }
  @media (max-width: 500px) {
    right: 2px;
    top: 2px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    background: var(--vt-c-rhino);
    border-radius: 8px;
  }
}
</style>
