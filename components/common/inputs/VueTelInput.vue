<script>
import { VueTelInput } from 'vue-tel-input';

export default {
  components: { VueTelInput },
  props: ['isPhoneInputValid'],
  setup(props) {
    const isPhoneInputValid = props.isPhoneInputValid;
  },
  data() {
    return {
      vueTel: {
        phone: '',
        props: {
          preferredCountries: ['US', 'GB'],
          placeholder: 'Ваш номер телефона',
          mode: 'international',
          inputOptions: {
            showDialCode: true,
          },
          disabledFormatting: false,
          wrapperClasses: 'country-phone-input',
        },
      },
    };
  },
  methods: {
    setValid(key) {
      this.$emit('setValid', key);
    },

    acceptNumber(object) {
      let value = this.vueTel.phone;

      if (value.replace(/\s/g, '').length === 14) {
        const vueTelString = Array.from(this.vueTel.phone);
        const length = vueTelString.length;
        this.vueTel.phone = vueTelString
          .slice(0, length - 1)
          .join()
          .replaceAll(',', '');
        return;
      }

      const phoneCharacters = [
        '+',
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
      ];

      if (!phoneCharacters.includes(object.data)) {
        const vueTelString = Array.from(this.vueTel.phone);
        const length = vueTelString.length;
        this.vueTel.phone = vueTelString
          .slice(0, length - 1)
          .join()
          .replaceAll(',', '');
      }
    },
    handleValidate(object) {
      this.setValid(object.valid);
    },
    handleDelete() {
      const last = Array.from(this.vueTel.phone).pop();
      this.vueTel.phone = this.vueTel.phone + last;
    },
  },
};
</script>

<template>
  <div class="formkit-inner vue-tel">
    <vue-tel-input
      class="formkit-input"
      v-model="vueTel.phone"
      v-bind="vueTel.props"
      @input="acceptNumber"
      @validate="handleValidate"
      @keydown.delete.stop="handleDelete"
    >
      ></vue-tel-input
    >
  </div>
</template>

<style lang="scss">
.vue-tel-input {
  border: unset !important;
  display: flex;
}
.vue-tel-input:focus-within {
  box-shadow: unset !important;
}
.vti__dropdown:hover {
  background-color: transparent !important;
}
.vti__dropdown-list {
  background-color: #272d3d !important;
}
.vti__input.vti__phone {
  flex-shrink: 1;
}
.vti__dropdown-item.highlighted {
  color: #272d3d;
}
.vti__input.vti__phone {
  color: #ffffff;
}

.vue-tel {
  input {
    flex-shrink: 1 !important;
  }
}

.formkit-input {
  color: var(--vt-c-white);
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  padding: 10px 0px;
}
</style>
