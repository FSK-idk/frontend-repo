<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: "default",
  },
});
const emits = defineEmits(["click"]);
const click = () => {
  emits("click");
};
</script>
<template>
  <button :class="['button', variant]" @click="click">
    <slot />
  </button>
</template>
<style lang="scss" scoped>
@use "assets/scss/variables" as v;
@use "assets/scss/mixins" as m;

.button {
  @include m.row-center;

  border: none;
  border-radius: 10px;

  font-family: v.$font-title;
  font-size: 14px;

  color: v.$color-white;

  &.default {
    background-color: v.$color-default;
  }

  &.primary {
    background-color: v.$color-primary;
  }

  &.secondary {
    background-color: v.$color-secondary;
  }

  &.transparent {
    background-color: rgba(v.$color-white, 0.2);
  }
}
</style>
