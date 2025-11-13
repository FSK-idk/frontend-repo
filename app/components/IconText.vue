<script setup>
const base = import.meta.env.BASE_URL;

defineProps({
  src: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div class="container">
    <img :src="`${base}assets/images/${src}`" />
    <div><slot /></div>
  </div>
</template>
<style lang="scss" scoped>
@use "assets/scss/variables" as *;
@use "assets/scss/mixins" as mixins;

.container {
  @include mixins.flex-row;
  gap: 8px;
  color: $dark-slate-gray;
  font-family: $font-title;
  font-size: 14px;
}
</style>
