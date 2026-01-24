<script setup>
defineProps({
  open: Boolean,
});
const emit = defineEmits(["close"]);

import { ref, watch } from "vue";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";

const nameRef = ref(null);
const phoneRef = ref(null);

const { defineField, handleSubmit, resetForm } = useForm({
  validationSchema: toTypedSchema(
    z.object({
      name: z
        .string({
          required_error: "Пожалуйста заполните имя",
        })
        .min(1, "Пожалуйста заполните имя"),
      phone: z
        .string({
          required_error: "Пожалуйста заполните номер телефона",
        })
        .min(11, "Пожалуйста заполните номер телефона"),
      message: z.string().optional(),
    }),
  ),
});

const [name] = defineField("name");
const [phone] = defineField("phone");
const [message] = defineField("message");

watch([name, phone], () => {
  nameRef.value?.setCustomValidity("");
  phoneRef.value?.setCustomValidity("");
});

const onSubmit = handleSubmit(
  (values) => {
    console.log("Success:", values);
    resetForm();
    emit("close");
  },
  ({ errors }) => {
    if (errors.name) {
      nameRef.value.setCustomValidity(errors.name);
      nameRef.value.reportValidity();
    } else if (errors.phone) {
      phoneRef.value.setCustomValidity(errors.phone);
      phoneRef.value.reportValidity();
    }
  },
);
</script>
<template>
  <Modal :open="open" @close="emit('close')">
    <form @submit="onSubmit" :class="$style.mainLayout" novalidate>
      <div :class="$style.topLayout">
        <strong :class="$style.title">Оставить заявку</strong>
        <div :class="$style.fieldLayout">
          <div :class="$style.field">
            <input
              ref="nameRef"
              v-model="name"
              type="text"
              placeholder="Имя"
              :class="$style.input"
            />
          </div>
          <div :class="$style.field">
            <input
              ref="phoneRef"
              v-maska
              data-maska="+# (###) ###-##-##"
              @maska="phone = $event.detail.unmasked"
              :value="phone"
              type="tel"
              placeholder="Телефон"
              :class="$style.input"
            />
          </div>
          <div :class="$style.field">
            <textarea
              v-model="message"
              placeholder="Сообщение"
              :class="$style.textarea"
            />
          </div>
        </div>
      </div>
      <div :class="$style.bottomLayout">
        <Button :class="$style.button" variant="primary">
          Оставить заявку
        </Button>
        <p :class="$style.disclaimer">
          Нажимая на кнопку «Оставить заявку», вы принимаете
          <a href="/user-policy">пользовательское соглашение</a> и
          <a href="/privacy-policy">политику конфиденциальности</a>
        </p>
      </div>
    </form>
  </Modal>
</template>
<style lang="scss" module>
@use "assets/scss/variables" as v;
@use "assets/scss/mixins" as m;

.main-layout {
  @include m.flex(column, 32px);
}

.top-layout {
  @include m.flex(column, 24px);
}

.title {
  @include m.text(160%);
  @include m.font(32px, 700, v.$font-title);
  @include m.paint(null, v.$color-default);
}

.field-layout {
  @include m.flex(column, 24px);
}

.input {
  @include m.box(100%, null, 16.5px 16px, 5px);
  @include m.paint(v.$color-white);
  outline: none;
  @include m.font(16px, 500, v.$font-title);
  @include m.text(180%);

  &::placeholder {
    color: v.$color-gray-darker;
  }
}

.textarea {
  @include m.box(100%, 100px, 16.5px 16px, 5px);
  @include m.paint(v.$color-white);
  outline: none;
  @include m.font(16px, 500, v.$font-title);
  @include m.text(180%);
  resize: none;
  overflow: auto;

  &::placeholder {
    color: v.$color-gray-darker;
  }
}

.bottom-layout {
  @include m.flex(column, 16px, null, center);
}

.button {
  @include m.box(200px, 50px);
}

.disclaimer {
  @include m.font(14px);
  @include m.text(150%, center);

  a {
    color: v.$color-primary;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
