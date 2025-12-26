<template>
  <div class="wrapper">
    <div class="main">
      <Slider class="slider" />
      <Intro class="intro" />
    </div>
  </div>
</template>
<style lang="scss">
@use "sass:color" as color;
@use "assets/scss/variables" as v;
@use "assets/scss/mixins" as m;

.main {
  @include m.flex(column);
  @include m.box(100%, 100%, 40px 88px 0 88px);

  @include m.at-most("large") {
    @include m.box(null, 100%, 0 24px);
  }
}

.slider {
  @include m.box(100%, 100%);
}

.intro {
  @include m.box(100%, 100%, 120px 0);
}
</style>
