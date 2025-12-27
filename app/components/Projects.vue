<script setup>
import japanese_house_1x from "assets/images/japanese-house.jpg";
import japanese_house_2x from "assets/images/japanese-house@2x.jpg";

import modern_house_1x from "assets/images/modern-house.jpg";
import modern_house_2x from "assets/images/modern-house@2x.jpg";

const card_infos = [
  {
    image: {
      x1: japanese_house_1x,
      x2: japanese_house_2x,
    },
    title: "Дом в японском стиле",
    body: "Многоуровневый дом с белыми стенами, обрамленными темным деревом и камнем, с характерной черепичной крышей и широкими карнизами.\n\nПостройка вдохновлена восточной эстетикой, включает в себя элементы традиционного сада с цветущими розовыми деревьями.",
  },
  {
    image: {
      x1: modern_house_1x,
      x2: modern_house_2x,
    },
    title: "Дом в современном стиле",
    body: "Двухэтажный дом из бревен, камня и темных блоков с плоской крышей и большими панорамными окнами.\n\nПроект отличается современным дизайном, минимализмом и функциональностью, гармонично вписываясь в снежный ландшафт.",
  },
];
</script>
<template>
  <div :class="$style.wrapper">
    <div :class="$style.mainLayout">
      <strong :class="$style.title">Реализованные проекты</strong>
      <div :class="$style.cardLayout">
        <BannerCard
          v-for="card_info in card_infos"
          :class="$style.card"
          :image="card_info.image"
          :title="card_info.title"
          :body="card_info.body"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss" module>
@use "assets/scss/variables" as v;
@use "assets/scss/mixins" as m;

.main-layout {
  @include m.flex(column, 32px);
  @include m.box(null, null, 80px 0);
  @include m.paint(v.$color-primary-light);
}

.title {
  @include m.box(null, null, 0 88px);
  @include m.paint(null, v.$color-title);
  @include m.font(38px, 700, v.$font-title);
  @include m.text(120%);

  @include m.at-most("large") {
    @include m.box(null, null, 0 24px);
  }
}

.card-layout {
  @include m.self(null, null, 0);
  @include m.grid(1fr 1fr, 16px);
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  overflow: auto;
  @include m.box(100%, 100%, 0 88px);

  @include m.at-most("large") {
    @include m.box(100%, 100%, 0 24px);
  }
}

.card {
  @include m.self(null, null, 0);
  @include m.box(100%, 300px);
  min-width: 700px;

  @include m.at-most("medium") {
    @include m.box(100%, 100%);
    min-width: 300px;
  }
}
</style>
