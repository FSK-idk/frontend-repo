<script setup>
const props = defineProps({
  count: {
    type: Number,
    required: true,
  },
  current: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(["prev", "next", "goTo"]);
const onPrev = () => emit("prev");
const onNext = () => emit("next");
const onGoTo = (index) => emit("goTo", index);

import LeftArrowIcon from "assets/icons/left-arrow.svg";
import RightArrowIcon from "assets/icons/right-arrow.svg";
</script>
<template>
  <div class="wrapper">
    <div class="main-layout">
      <div class="button-layout">
        <Button class="button" @click="onPrev" variant="primary">
          <LeftArrowIcon class="icon" />
        </Button>
        <Button class="button" @click="onNext" variant="primary">
          <RightArrowIcon class="icon" />
        </Button>
      </div>
      <div class="pagination-layout">
        <button
          v-for="index in props.count"
          class="bullet"
          :key="index - 1"
          :class="{ 'is-active': props.current === index - 1 }"
          :title="`Открыть ${index} слайд`"
          @click="onGoTo(index - 1)"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "assets/scss/variables" as v;
@use "assets/scss/mixins" as m;

.wrapper {
  @include m.interaction(none);
}

.main-layout {
  @include m.position(relative);
  @include m.box(100%, 100%);
}

.button-layout {
  @include m.position(absolute, 50%, 0, null, -50%);
  @include m.flex(row, null, space-between, center);
  @include m.box(100%, 100%);
}

.button {
  @include m.box(48px, 48px);
}

.icon {
  @include m.svg(24px, 24px, v.$color-white);
}

.pagination-layout {
  @include m.position(absolute, 100%, 50%, -50%);
  @include m.flex(row, 16px);
}

.bullet {
  @include m.box(12px, 12px, null, 50%);
  @include m.paint(v.$color-inactive);
  @include m.interaction(auto, pointer);

  &.is-active {
    @include m.paint(v.$color-primary);
  }
}
</style>
