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
  <div :class="$style.wrapper">
    <button :class="[$style.button, $style[variant]]" @click="click">
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
  @include m.paint(null, v.$color-white);
  @include m.font(14px, v.$font-title);
  @include m.interaction(auto, pointer);

  &.default {
    @include m.paint(v.$color-default);
  }

  &.primary {
    @include m.paint(v.$color-primary);
  }

  &.secondary {
    @include m.paint(v.$color-secondary);
  }

  &.transparent {
    @include m.paint(color.change(v.$color-white, $alpha: 0.2));
  }

  &.outline {
    @include m.paint(transparent, v.$color-primary);
    border: solid v.$color-primary 1px;
  }

  &.primary-light {
    @include m.paint(color.change(v.$color-primary, $alpha: 0.2));
  }
}
</style>
