<template>
  <button class="button"><slot /></button>
</template>
<style lang="scss" scoped>
@use "assets/scss/variables" as *;

button {
  height: 49px;
  width: 204px;
  padding: 16px 40px;
  border: none;
  border-radius: 10px;
  background-color: $shamrock-green;
  color: $white;
  font-family: $font-title;
  font-size: 14px;
}
</style>
