<script setup>
const navigation = [
  {
    url: "/projects",
    label: "Реализованные проекты",
  },
  {
    url: "/news",
    label: "Новости",
  },
  {
    url: "/contacts",
    label: "Контакты",
  },
];
const contacts = [
  {
    img: "assets/icons/phone.svg",
    url: "tel:79009009090",
    label: "+7 (900) 900-90-90",
  },
  {
    img: "assets/icons/mail.svg",
    url: "mailto:info@gmail.com",
    label: "info@gmail.com",
  },
  {
    img: "assets/icons/map.svg",
    url: "geo:г. Владивосток ул. Выселковая 49, стр. 3",
    label: "г. Владивосток\nул. Выселковая 49, стр. 3",
  },
];
const legality = [
  {
    url: null,
    label: "© Загдом, 2021",
  },
  {
    url: "/privacy",
    label: "Политика конфиденциальности",
  },
  {
    url: "/user-agreement",
    label: "Пользовательское соглашение",
  },
];

import LogoIcon from "assets/icons/logo-alt.svg";
</script>
<template>
  <footer class="footer">
    <div class="top-row">
      <LogoIcon id="logo-icon" />
      <ul class="sections">
        <li v-for="item in navigation">
          <a :href="item.url">{{ item.label }}</a>
        </li>
      </ul>
      <ul class="sections">
        <li v-for="item in contacts">
          <IconText :src="item.img" variant="primary">
            <a :href="item.url">{{ item.label }}</a>
          </IconText>
        </li>
      </ul>
      <Button id="request-button" variant="primary">
        <p id="request-button-text">Оставить заявку</p>
      </Button>
    </div>
    <ul class="bottom-row">
      <li v-for="item in legality">
        <template v-if="item.url == null">
          {{ item.label }}
        </template>
        <template v-else>
          <a :href="item.url">{{ item.label }}</a>
        </template>
      </li>
    </ul>
  </footer>
</template>
<style lang="scss" scoped>
@use "assets/scss/variables" as v;
@use "assets/scss/mixins" as m;

.footer {
  @include m.flex(column, 24px);
  @include m.box(null, null, 24px 88px);
  @include m.paint(v.$color-secondary);

  @include m.at-most("large") {
    @include m.box(null, null, 24px 24px);
  }

  @include m.at-most("medium") {
    @include m.flex(column, 40px);
    @include m.box(null, null, 40px 40px);
  }
}

.top-row {
  @include m.grid(repeat(4, 1fr), 24px);

  @include m.at-most("medium") {
    @include m.flex(column, 40px, null);
  }
}

.bottom-row {
  @include m.grid(repeat(4, 1fr), 24px);
  @include m.paint(null, v.$color-white);
  @include m.effect(null, 60%);
  @include m.font(14px);

  @include m.at-most("medium") {
    @include m.flex(column, 24px);
  }
}

#logo-icon {
  @include m.self(null, start, 0);
  @include m.svg(160px, 40px);
}

.sections {
  @include m.flex(column, 24px);
  @include m.paint(null, v.$color-white);
  @include m.font(16px);
  @include m.text(null, null, break-spaces);
}

#request-button {
  @include m.self(end, start);
  @include m.box(200px, 50px);
}

#request-button-text {
  @include m.font(14px);
}
</style>
