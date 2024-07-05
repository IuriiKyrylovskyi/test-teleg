<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'custom-input',
  setup() {
    const inputElement = ref(null);

    function onInput(value) {
      this.$emit('update:modelValue', value);
    }

    return {
      inputElement,
      onInput,
    };
  },
  props: {
    id: {
      required: true,
      type: String,
    },
    type: {
      default: 'text',
      type: String,
    },
    required: {
      default: false,
      type: Boolean,
    },
    modelValue: {
      type: [String, Number],
    },
    hasError: {
      type: Boolean,
      default: false,
    },
    errorMessage: {
      type: String,
    },
  },
  emits: ['update:modelValue'],
});
</script>

<template>
  <div class="custom-input formkit-wrapper">
    <div class="mt-1 formkit-inner">
      <input
        :id="`custom-input-${id}`"
        :type="type"
        :required="required"
        @input="onInput($event.target.value)"
        class="custom-input__input formkit-input"
        :value="modelValue"
        placeholder="Ваш номер телефона"
        ref="inputElement"
      />
    </div>
  </div>
</template>

<style lang="scss">
.iti {
  display: block;

  input {
    color: #ffffff;
    padding-left: 40px;
  }
}
</style>
