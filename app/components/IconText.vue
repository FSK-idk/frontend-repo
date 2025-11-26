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
  <div :class="['icon-text', variant]">
    <Icon :class="['icon', variant]" />
    <slot />
  </div>
</template>
<style lang="scss" scoped>
@use "assets/scss/variables" as v;
@use "assets/scss/mixins" as m;

.icon-text {
  @include m.row-center;
  align-items: start;
  gap: 8px;

  font-family: v.$font-title;
  font-size: 14px;
}

.icon {
  flex-shrink: 0;

  width: 16px;
  height: 16px;

  &.primary {
    fill: v.$color-primary;
  }

  &.white {
    fill: v.$color-white;
  }
}
</style>
