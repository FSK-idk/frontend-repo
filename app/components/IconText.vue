<script setup>
const props = defineProps({
  src: {
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
    import(/* @vite-ignore */ `${base}${props.src}`)
  );
});
</script>
<template>
  <div class="icon-text">
    <Icon :class="['icon', variant]" />
    <slot />
  </div>
</template>
<style lang="scss" scoped>
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
