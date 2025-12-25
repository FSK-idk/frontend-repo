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
    img: "assets/images/phone.svg",
    url: "tel:79009009090",
    label: "+7 (900) 900-90-90",
  },
  {
    img: "assets/images/mail.svg",
    url: "mailto:info@gmail.com",
    label: "info@gmail.com",
  },
  {
    img: "assets/images/map.svg",
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

import LogoIcon from "assets/images/logo-alt.svg";
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
      <Button id="request-button" variant="primary">Оставить заявку</Button>
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
  @include m.column-center;
  gap: 24px;

  padding: 24px 88px;

  background-color: v.$color-secondary;

  @include m.at-most("large") {
    padding: 24px 24px;
  }

  @include m.at-most("medium") {
    gap: 40px;
    padding: 40px 40px;
  }
}

.top-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 24px;
  row-gap: 24px;
  width: 100%;

  @include m.at-most("medium") {
    @include m.column-center;
    align-items: start;
    gap: 40px;
  }
}

.bottom-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 24px;
  row-gap: 24px;
  width: 100%;

  color: v.$color-white;
  opacity: 0.6;

  font-size: 14px;

  @include m.at-most("medium") {
    @include m.column-center;
    align-items: start;
    gap: 24px;
  }
}

#logo-icon {
  flex-shrink: 0;
  align-self: start;

  width: 160px;
  height: 40px;
}

.sections {
  @include m.column-center;
  align-items: start;
  gap: 24px;
  white-space: break-spaces;

  color: v.$color-white;

  font-size: 16px;
}

#request-button {
  align-self: start;
  justify-self: end;

  height: 50px;
  width: 200px;
  padding: 16px 40px;
}
</style>
