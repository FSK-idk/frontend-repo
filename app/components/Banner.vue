<template>
  <div class="banner">
    ВНИМАНИЕ!
    <br />
    Вы зашли на ультра модный сайт
  </div>
</template>
<style lang="scss">
@use "sass:color" as color;
@use "assets/scss/variables.scss" as *;
@use "assets/scss/mixins.scss" as mixins;

.banner {
  @include mixins.card(color.adjust(gold, $whiteness: -50%));
  color: $snow;
  font-weight: bold;
  width: 70%;
  padding: 15px;
  text-align: center;
}
</style>
