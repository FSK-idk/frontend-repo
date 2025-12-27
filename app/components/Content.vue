<template>
  <div :class="$style.wrapper">
    <div :class="$style.mainLayout">
      <Slider :class="$style.slider" />
      <Intro :class="$style.intro" />
      <Projects :class="$style.projects" />
      <News :class="$style.news" />
    </div>
  </div>
</template>
<style lang="scss" module>
@use "assets/scss/variables" as v;
@use "assets/scss/mixins" as m;

.main-layout {
  @include m.flex(column);
  @include m.box(null, null, 40px 0 0 0);
}

.slider {
  @include m.box(null, null, 0 88px);

  @include m.at-most("large") {
    @include m.box(null, null, 0 24px);
  }
}

.intro {
  @include m.box(null, null, 120px 88px);

  @include m.at-most("large") {
    @include m.box(null, null, 120px 24px);
  }
}

.news {
  @include m.box(null, null, 60px 88px);

  @include m.at-most("large") {
    @include m.box(null, null, 60px 24px);
  }
}
</style>
