<script setup>
const props = defineProps({
  image: {
    type: Object,
    required: true,
    validator: (value) => {
      return "x1" in value && "x2" in value;
    },
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div :class="$style.wrapper">
    <div :class="$style.mainLayout">
      <div :class="$style.textLayout">
        <strong :class="$style.title">{{ props.title }}</strong>
        <p :class="$style.body">{{ props.body }}</p>
      </div>
      <picture :class="$style.picture">
        <source :srcset="`${props.image.x1} 2x, ${props.image.x2}`" />
        <img :src="props.image.x1" :alt="props.title" />
      </picture>
    </div>
  </div>
</template>
<style lang="scss" module>
@use "sass:list";
@use "assets/scss/variables" as v;
@use "assets/scss/mixins" as m;

.main-layout {
  @include m.flex(row);
  @include m.box(100%, 100%, null, 20px);
  @include m.paint(v.$color-white);

  @include m.at-most("medium") {
    @include m.flex(column-reverse);
  }
}
.text-layout {
  @include m.flex(column, 12px);
  @include m.box(null, 100%, 32px);
}
.title {
  @include m.paint(null, v.$color-title);
  @include m.font(20px, 500, v.$font-title);
  @include m.text(120%);
}
.body {
  @include m.font(16px);
  @include m.text(135%, null, break-spaces);
}
.picture img {
  @include m.box(null, 100%);
  @include m.ratio(list.slash(1, 1), cover);

  @include m.at-most("medium") {
    @include m.box(100%, unset);
  }
}
</style>
