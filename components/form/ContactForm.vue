<script setup lang="ts">
import { FormKit } from '@formkit/vue';
import { unsuccessMessage } from '~/utils/constants/unsuccessMessage';
import type { IErrorResponse } from '~/interfaces/error';
import type { IFormikData } from '~/interfaces/formikData';
import type { IData, IModalItem } from '@/interfaces/global';

import VueTelInput from '~/components/common/inputs/VueTelInput.vue';

interface IResponseData {
  message: string;
  code: 400 | 200;
}

const emit = defineEmits<{
  (e: 'handleModalResponse', item: IModalItem): void;
}>();

const handleModalResponse = (item: IModalItem) => {
  emit('handleModalResponse', item);
};

const isLoading = ref(false);
const isPhoneInputValid = ref(false);

const tel = createInput(VueTelInput, {
  props: ['digits'],
});

const sendMessage = async (message: string) => {
  isLoading.value = true;

  try {
    const response = await useFetch(`/api/send-message`, {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: {
        message,
      },
    });

    const data = response.data as unknown as Ref<IResponseData>;

    if (data.value?.code === 400) {
      throw new Error();
    }

    handleModalResponse({
      message: 'Email is sent successfully!',
      isError: false,
    });
  } catch (err: IErrorResponse | any) {
    handleModalResponse({
      message: unsuccessMessage,
      isError: true,
    });
  } finally {
    isLoading.value = false;
  }
};

const sendEmail = async (d: IData) => {
  isLoading.value = true;

  try {
    const { data, pending, error, refresh } = await useFetch(
      `/api/send-me-email`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: {
          subject: 'Visitor question',
          to: d.emailFrom,
          toMeData: d,
        },
      }
    );

    if (error.value) {
      throw new Error();
    }

    handleModalResponse({
      message: 'Email is sent successfully!',
      isError: false,
    });
  } catch (error: IErrorResponse | any) {
    handleModalResponse({
      message: unsuccessMessage,
      isError: true,
    });
  } finally {
    isLoading.value = false;
  }
};

const setValid = (key: boolean) => {
  isPhoneInputValid.value = key;
};

function submitApplication(data: IFormikData, node: FormKitNode) {
  const { email, fullName, phone } = data;

  sendMessage(`Full Name: ${fullName}\nPhone: ${phone}\nEmail: ${email}`);

  sendEmail({
    question: `${data.fullName} visited the site`,
    emailFrom: data.email,
  });
}

console.log('isPhoneInputValid--->>>>>>', isPhoneInputValid.value);
</script>

<template>
  <div class="form-card">
    <div class="form-inner">
      <h2 class="form-title">
        Запишитесь <span>бесплатно</span> и получите подарок
      </h2>
      <div class="form-items">
        <FormKit
          id="fk-univ-app"
          type="form"
          form-class="fk-univ-app"
          submit-label="🛬 Dispatch 🛫"
          incomplete-message="Sorry. The application was not submitted because not all fields are filled out correctly."
          @submit="submitApplication"
          :actions="false"
          #default="{ value, state, disabled }"
        >
          <FormKit
            name="fullName"
            type="text"
            label=""
            validation="required"
            validation-label="fullName"
            validation-visibility="blur"
            placeholder="Ваше имя и фамилия"
          />
          <FormKit
            name="phone"
            :type="tel"
            label=""
            validation="required"
            validation-label="phone"
            validation-visibility="blur"
            placeholder="Ваш номер телефона"
          ></FormKit>
          <FormKit
            name="email"
            type="email"
            label=""
            validation="required|email"
            validation-label="Your email"
            validation-visibility="blur"
            placeholder="example@example.com"
          />
          <FormKit
            v-if="!isLoading"
            type="submit"
            label="Записаться бесплатно"
            :disabled="!state?.valid"
          />
          <button v-if="isLoading" class="button loading">sending...</button>
        </FormKit>
      </div>
      <div class="agree">
        Нажимая на кнопку я согашаюсь
        <a href="#" @click.stop.prevent> с политикой конфидециальности </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.form-card {
  flex: 0 0 366px;
  max-width: 366px;
  width: 100%;
  border-radius: 10px;
  background: var(--vt-c-rhino);
  padding: 50px 60px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 820px) {
    flex: 0 1 366px;
    min-width: 286px;
    padding: 41px 21px;
  }

  @media (max-width: 767px) {
    flex: 0 1 366px;
    min-width: 286px;
    border-radius: 9px;
  }
}

.form-inner {
  flex: 0 0 250px;
  max-width: 250px;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 767px) {
    flex: 0 0 100%;
    max-width: 100%;
    gap: 18px;
  }
}

.form-items {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.form-title {
  text-align: center;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 25.991px; /* 118.14% */

  & span {
    color: var(--vt-c-red);
  }

  @media (max-width: 767px) {
    max-width: 223px;
    font-size: 20px;
    margin: 0 auto;
  }
}

.agree {
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  font-weight: 500;
  line-height: 149%; /* 17.88px */
  & a {
    display: block;
    color: inherit;
  }

  @media (max-width: 767px) {
    font-size: 11px;
  }
}

/* ----- formkit styles ----  */
.formkit-form {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.formkit-wrapper {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

label.formkit-wrapper {
  display: flex;
  gap: 6px;
  margin-bottom: 8px;
}

.formkit-inner {
  max-width: 500px;
  width: 100%;
  border-radius: 4px;
  padding: 0;
  margin: 0;

  input {
    border: 3px solid #272d3d;
  }
}

.formkit-inner input {
  width: 100%;
  height: 51px;
  /* flex-shrink: 0; */
  border-radius: 5px;
  background: #272d3d;

  @media (max-width: 767px) {
    height: 46px;
  }
}
.formkit-inner input:focus-within {
  outline: none;
  border: 3px solid var(--vt-c-blue);
}
.formkit-inner input:focus {
  border: 3px solid var(--vt-c-blue);
}

.formkit-message {
  font-size: 12px;
  color: var(--vt-c-red);
  margin-top: 4px;

  @media (max-width: 767px) {
    height: 11px;
  }
}

.formkit-help {
  font-size: 20px;
  color: var(--vt-c-red);
}

.formkit-input[type='checkbox'] {
  width: 16px;
  height: 16px;
}

span.formkit-label {
  font-size: 20px;
}

button.formkit-input {
  width: 100%;
  max-width: 250px;
  height: 51px;
  flex-shrink: 0;
  background: var(--vt-c-red);
  border-radius: 5px;

  color: var(--vt-c-white);

  font-size: 15px;
  font-weight: 700;
  line-height: 24px; /* 160% */

  transition: all linear 0.3s;
  cursor: pointer;

  &:hover {
    background: rgba(255, 52, 89, 0.8);
  }

  @media (max-width: 767px) {
    height: 46px;
    background: #0048ff;

    font-size: 14px;

    max-width: 222px;
    margin: 0 auto;
  }
}

button.formkit-input:disabled {
  opacity: 0.8;
  cursor: not-allowed;
}
button.formkit-input:disabled:hover {
  background: #ffeb3b;
  color: #000;
}

.loading {
  width: 100%;
  max-width: 250px;
  height: 51px;
  flex-shrink: 0;
  background: #ffeb3b;
  border-radius: 5px;

  color: var(--vt-c-black);

  font-size: 15px;
  font-weight: 700;
  line-height: 24px; /* 160% */

  cursor: not-allowed;

  @media (max-width: 767px) {
    height: 46px;
    font-size: 14px;
    max-width: 222px;
    margin: 0 auto;
  }
}

input.formkit-input {
  color: var(--vt-c-white);
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 184.615% */
  padding: 10px 22px;

  ::placeholder {
    color: var(--vt-c-white-placeholder);
  }
}
</style>
