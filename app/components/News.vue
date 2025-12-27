<script setup>
import the_end_1x from "assets/images/the-end.jpg";
import the_end_2x from "assets/images/the-end@2x.jpg";

import library_1x from "assets/images/library.jpg";
import library_2x from "assets/images/library@2x.jpg";

import ice_rails_1x from "assets/images/ice-rails.jpg";
import ice_rails_2x from "assets/images/ice-rails@2x.jpg";

import torch_1x from "assets/images/torch.jpg";
import torch_2x from "assets/images/torch@2x.jpg";

const card_infos = [
  {
    image: {
      x1: the_end_1x,
      x2: the_end_2x,
    },
    date: new Date("2021-08-20"),
    title: "Карта проектов растёт: мы начинаем освоение островов Края",
    body: "С гордостью объявляем о выходе за пределы привычных биомов! Наша компания выиграла право на застройку в эксклюзивной локации — архипелаге Энда. Готовятся проекты домов с принципиально новой архитектурой, использующей свойства хорус-фрукта и светящихся материалов.",
  },
  {
    image: {
      x1: library_1x,
      x2: library_2x,
    },
    date: new Date("2021-08-12"),
    title:
      '"Будущее строим вместе": открывается Академия перспективных строителей',
    body: "Мы запускаем образовательный проект для всех, кто хочет освоить современные технологии строительства. В программе — редстоун-механика, безопасная работа в Нижнем мире и принципы эргономики пространства. Лучшие выпускники получат предложение о работе в нашей компании.",
  },
  {
    image: {
      x1: ice_rails_1x,
      x2: ice_rails_2x,
    },
    date: new Date("2021-07-26"),
    title: "Все наши посёлки подключаются к скоростным дорогам",
    body: "Доступность — наш главный принцип. Теперь все наши посёлки будут подключены к скоростной системе ледяных и редстоун-дорог. Это значит, что из любого нашего дома вы сможете добраться до главных торговых хабов, ферм и достопримечательностей за считанные секунды.",
  },
  {
    image: {
      x1: torch_1x,
      x2: torch_2x,
    },
    date: new Date("2021-07-5"),
    title: "Искусство света: как создать уют без факелов на каждом блоке",
    body: 'Ставить факелы через каждые 6 блоков — прошлый век. Наши инженеры оптимизировали схемы освещения. Мы выяснили, что сочетание светокамня определённого уровня с тыквенными лампами на определённой высоте подавляет спаун мобов эффективнее, создавая при этом уютную атмосферу. Это знание позволяет нам делать безопасные, но не "засвеченные" территории.',
  },
];
</script>
<template>
  <div :class="$style.wrapper">
    <div :class="$style.mainLayout">
      <div :class="$style.topLayout">
        <strong :class="$style.title">Новости</strong>
        <Button :class="$style.button" variant="outline">
          <p :class="$style.buttonText">Все новости</p>
        </Button>
      </div>
      <div :class="$style.cardLayout">
        <ArticleCard
          v-for="card_info in card_infos"
          :class="$style.card"
          :image="card_info.image"
          :date="card_info.date"
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
}

.top-layout {
  @include m.flex(row, null, space-between);
}
.title {
  @include m.paint(null, v.$color-title);
  @include m.font(38px, 700, v.$font-title);
  @include m.text(120%);
}
.button {
  @include m.box(150px, 50px);
}
.button-text {
  @include m.font(null, 600);
}

.card-layout {
  @include m.self(null, null, 0);
  @include m.grid(1fr 1fr 1fr 1fr, 16px);
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  overflow: auto;
}
.card {
  @include m.self(null, null, 0);
  min-width: 300px;
}
</style>
