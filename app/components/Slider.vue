<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";

const carouselRef = ref();
const currentSlide = ref(0);

const goPrev = () => carouselRef.value?.prev();
const goNext = () => carouselRef.value?.next();
const goTo = (index) => carouselRef.value?.slideTo(index);

import slide1_portrait_1x from "assets/images/slide-1-portrait.jpg";
import slide1_portrait_2x from "assets/images/slide-1-portrait@2x.jpg";
import slide1_landscape_1x from "assets/images/slide-1-landscape.jpg";
import slide1_landscape_2x from "assets/images/slide-1-landscape@2x.jpg";

import slide2_portrait_1x from "assets/images/slide-2-portrait.jpg";
import slide2_portrait_2x from "assets/images/slide-2-portrait@2x.jpg";
import slide2_landscape_1x from "assets/images/slide-2-landscape.jpg";
import slide2_landscape_2x from "assets/images/slide-2-landscape@2x.jpg";

import slide3_portrait_1x from "assets/images/slide-3-portrait.jpg";
import slide3_portrait_2x from "assets/images/slide-3-portrait@2x.jpg";
import slide3_landscape_1x from "assets/images/slide-3-landscape.jpg";
import slide3_landscape_2x from "assets/images/slide-3-landscape@2x.jpg";

const slides = [
  {
    image_portrait: {
      x1: slide1_portrait_1x,
      x2: slide1_portrait_2x,
    },
    image_landscape: {
      x1: slide1_landscape_1x,
      x2: slide1_landscape_2x,
    },
    title: "Не просто постройка, а новый ориентир на карте",
    text: "Готовый дом — это уже часть ландшафта. Путники будут завидовать, смотря на дымок из вашей трубы, а вы будете точно знать, куда идти, когда за спиной останутся долгие исследования дальних краёв.",
  },
  {
    image_portrait: {
      x1: slide2_portrait_1x,
      x2: slide2_portrait_2x,
    },
    image_landscape: {
      x1: slide2_landscape_1x,
      x2: slide2_landscape_2x,
    },
    title: "Профессиональный билд на вашем чанке",
    text: "Мы не нарушаем ландшафт, а вписываемся в него. Строим с учётом природных линий, используем местные материалы. Ваш дом будет выглядеть так, словно он всегда был частью этого мира.",
  },
  {
    image_portrait: {
      x1: slide3_portrait_1x,
      x2: slide3_portrait_2x,
    },
    image_landscape: {
      x1: slide3_landscape_1x,
      x2: slide3_landscape_2x,
    },
    title: "Мы знаем, где добыть лучшие блоки и как их ставить",
    text: "Не тратьте месяцы на гринд. Мы эффективно фармим ресурсы, строим по оптимизированным схемам и прокачиваем ваш дом до максимального уровня комфорта и красоты.",
  },
];

import vars from "assets/scss/export.module.scss";
</script>
<template>
  <div :class="$style.wrapper">
    <Carousel
      :class="$style.carousel"
      ref="carouselRef"
      v-model="currentSlide"
      :wrap-around="true"
      :mouse-drag="true"
      :touch-drag="true"
      :transition="500"
    >
      <Slide v-for="slide in slides" :key="slide.id ?? slide.src">
        <figure :class="$style.slide">
          <picture>
            <source
              :srcset="`${slide.image_landscape.x2} 2x, ${slide.image_landscape.x1}`"
              :media="`(min-width: ${vars.mediumScreenSize})`"
            />
            <source
              :srcset="`${slide.image_portrait.x2} 2x, ${slide.image_portrait.x1}`"
            />
            <img :src="slide.image_portrait.x1" :alt="slide.title" />
          </picture>
          <figcaption :class="$style.caption">
            <strong>{{ slide.title }}</strong>
            <p>{{ slide.text }}</p>
          </figcaption>
        </figure>
      </Slide>
      <template #addons>
        <SliderControls
          :class="$style.sliderControls"
          :count="slides.length"
          :current="currentSlide"
          @prev="goPrev"
          @next="goNext"
          @goTo="goTo"
        />
      </template>
    </Carousel>
  </div>
</template>
<style lang="scss" module>
@use "sass:list";
@use "assets/scss/variables" as v;
@use "assets/scss/mixins" as m;

.carousel {
  @include m.position(relative);
  @include m.box(100%, 100%, null, 30px);
}

.slide {
  @include m.box(100%, 100%);
}

.slide img {
  @include m.box(100%, 100%);
  @include m.effect(50%);
  @include m.ratio(list.slash(21, 9), cover);

  @include m.at-most("medium") {
    @include m.ratio(list.slash(2, 3), cover);
  }
}

.caption {
  @include m.position(absolute, 50%, 0, null, -50%);
  @include m.flex(column, 12px, center);
  @include m.box(70%, 100%, 0 0 0 144px);
  @include m.paint(null, v.$color-white);

  @include m.at-most("medium") {
    @include m.box(100%, 100%, 0 24px);
  }
}

.caption strong {
  @include m.font(46px, 800, v.$font-title);
  @include m.text(120%);

  @include m.at-most("large") {
    @include m.font(30px, 800, v.$font-title);
  }
}

.caption p {
  @include m.font(16px);
  @include m.text(135%);
}

.slider-controls {
  @include m.position(absolute, 0, 0);
  @include m.box(100%, 100%, 40px 16px);

  @include m.at-most("medium") {
    display: none;
  }
}
</style>
