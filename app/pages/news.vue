<script setup>
definePageMeta({
  title: "Новости",
});
import the_end_1x from "assets/images/the-end.jpg";
import the_end_2x from "assets/images/the-end@2x.jpg";

import library_1x from "assets/images/library.jpg";
import library_2x from "assets/images/library@2x.jpg";

import ice_rails_1x from "assets/images/ice-rails.jpg";
import ice_rails_2x from "assets/images/ice-rails@2x.jpg";

import torch_1x from "assets/images/torch.jpg";
import torch_2x from "assets/images/torch@2x.jpg";

const cardInfos = [
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

// a random generator that supports seed
function splitmix32(a) {
  return function () {
    a |= 0;
    a = (a + 0x9e3779b9) | 0;
    let t = a ^ (a >>> 16);
    t = Math.imul(t, 0x21f0aaad);
    t = t ^ (t >>> 15);
    t = Math.imul(t, 0x735a2d97);
    return ((t = t ^ (t >>> 15)) >>> 0) / 4294967296;
  };
}

const getCardInfos = (pageNumber) => {
  const random = splitmix32(pageNumber);
  return Array.from({ length: 12 }, () => cardInfos[Math.floor(random() * 4)]);
};

const currentCardInfos = ref(getCardInfos(1));
const totalPages = 42;
const onPage = (val) => {
  currentCardInfos.value = getCardInfos(val);
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>
<template>
  <div :class="$style.wrapper">
    <div :class="$style.mainLayout">
      <Breadcrumbs :class="$style.breadcrumbs" />
      <div :class="$style.contentLayout">
        <strong :class="$style.title">Новости</strong>
        <div :class="$style.cardLayout">
          <ArticleCard
            v-for="card_info in currentCardInfos"
            :class="$style.card"
            :image="card_info.image"
            :date="card_info.date"
            :title="card_info.title"
            :body="card_info.body"
          />
        </div>
        <Pagination
          :class="$style.pagination"
          :total="totalPages"
          @onPage="onPage"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss" module>
@use "assets/scss/variables" as v;
@use "assets/scss/mixins" as m;

.main-layout {
  @include m.flex(column, 48px);
  @include m.box(null, null, 40px 88px 80px 88px);

  @include m.at-most("large") {
    @include m.box(null, null, 40px 24px 80px 24px);
  }
}

.title {
  @include m.paint(null, v.$color-title);
  @include m.font(46px, 700, v.$font-title);
  @include m.text(120%);
}

.contentLayout {
  @include m.flex(column, 32px);
}

.card-layout {
  @include m.grid(repeat(4, 1fr), 32px 16px);

  @include m.at-most("ultra") {
    @include m.grid(repeat(3, 1fr), 32px 16px);
  }

  @include m.at-most("large") {
    @include m.grid(repeat(2, 1fr), 32px 16px);
  }

  @include m.at-most("compact") {
    @include m.grid(repeat(1, 1fr), 32px 16px);
  }
}
.card {
  @include m.self(null, null, 0);
  min-width: 300px;
}

.pagination {
  @include m.self(null, center);
}
</style>
