<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true,
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
    <Icon width="16" height="16" />
    <div><slot /></div>
  </div>
</template>
<style lang="scss" scoped>
@use "assets/scss/variables" as *;
@use "assets/scss/mixins" as mixins;

.icon-text {
  @include mixins.flex-row;
  gap: 8px;
  font-family: $font-title;
  font-size: 14px;
}
</style>
