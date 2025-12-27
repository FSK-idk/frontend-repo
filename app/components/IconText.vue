<script setup>
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  variant: {
    type: String,
    default: "primary",
  },
});

const base = import.meta.env.BASE_URL;

const Icon = computed(() => {
  return defineAsyncComponent(() =>
    import(/* @vite-ignore */ `${base}assets/icons/${props.icon}.svg`)
  );
});
</script>
<template>
  <div :class="$style.wrapper">
    <div :class="$style.iconText">
      <Icon :class="[$style.icon, $style[variant]]" />
      <slot />
    </div>
  </div>
</template>
<style lang="scss" module>
@use "assets/scss/variables" as v;
@use "assets/scss/mixins" as m;

.icon-text {
  @include m.flex(row, 8px);
  @include m.font(14px, null, v.$font-title);
}

.icon {
  @include m.self(null, null, 0);
  @include m.svg(16px, 16px);

  &.primary {
    @include m.svg(16px, 16px, v.$color-primary);
  }

  &.white {
    @include m.svg(16px, 16px, v.$color-white);
  }
}
</style>
