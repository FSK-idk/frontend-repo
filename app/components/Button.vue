<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: "default",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
const emits = defineEmits(["click"]);
const click = () => emits("click");
</script>
<template>
  <div :class="$style.wrapper">
    <button
      :class="[
        $style.button,
        $style[variant],
        { [$style.disabled]: props.disabled },
      ]"
      @click="click"
    >
      <slot />
    </button>
  </div>
</template>
<style lang="scss" module>
@use "sass:color";
@use "assets/scss/variables" as v;
@use "assets/scss/mixins" as m;

.button {
  @include m.flex(row, null, center, center);
  @include m.box(100%, 100%, 0, 10px);
  @include m.font(14px, v.$font-title);
  @include m.interaction(auto, pointer);

  &.disabled {
    @include m.interaction(none);
  }

  &.default {
    @include m.paint(v.$color-default, v.$color-white, v.$color-white);
  }

  &.primary {
    @include m.paint(v.$color-primary, v.$color-white, v.$color-white);
  }

  &.primary-light {
    @include m.paint(
      color.mix(v.$color-primary, #ffffff, 80%),
      v.$color-white,
      v.$color-white
    );
  }

  &.primary-outline {
    @include m.paint(v.$color-white, v.$color-primary, v.$color-primary);
    border: solid v.$color-primary 1px;
  }

  &.primary-ghost {
    @include m.paint(
      color.change(v.$color-primary, $alpha: 0.2),
      v.$color-primary,
      v.$color-primary
    );
  }

  &.inactive {
    @include m.paint(v.$color-gray-light, v.$color-gray, v.$color-gray);
    border: solid v.$color-gray 1px;
  }

  &.secondary {
    @include m.paint(v.$color-secondary, v.$color-white, v.$color-white);
  }

  &.secondary-outline {
    @include m.paint(v.$color-white, v.$color-secondary, v.$color-secondary);
    border: solid v.$color-gray-darker 1px;
  }
}
</style>
