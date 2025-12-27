<script setup>
import truncate from "truncate-html";

const props = defineProps({
  image: {
    type: Object,
    required: true,
    validator: (value) => {
      return "x1" in value && "x2" in value;
    },
  },
  date: {
    type: Date,
    required: true,
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
      <picture :class="$style.picture">
        <source :srcset="`${props.image.x1} 2x, ${props.image.x2}`" />
        <img :src="props.image.x1" :alt="props.title" />
      </picture>
      <div :class="$style.textLayout">
        <p :class="$style.date">
          {{
            props.date.toLocaleDateString("ru", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })
          }}
        </p>
        <strong :class="$style.title">{{ props.title }}</strong>
        <p
          :class="$style.body"
          v-html="truncate(props.body, 20, { byWords: true })"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss" module>
@use "sass:list";
@use "assets/scss/variables" as v;
@use "assets/scss/mixins" as m;

.main-layout {
  @include m.flex(column, 16px);
  @include m.box(100%, 100%, null, 20px 20px 0 0);
  @include m.paint(v.$color-white);
}
.text-layout {
  @include m.flex(column, 12px);
  @include m.box(null, 100%);
}

.date {
  @include m.paint(null, v.$color-title);
  @include m.font(14px, 400, v.$font-title);
  @include m.text(120%);
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
  @include m.box(100%);
  @include m.ratio(list.slash(2, 1), cover);
}
</style>
