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

import Logo from "assets/images/logo-alt.svg";
</script>
<template>
  <footer>
    <Logo width="160" height="39" />
    <ul class="sections">
      <li v-for="item in navigation">
        <a :href="item.url">{{ item.label }}</a>
      </li>
    </ul>
    <ul class="sections">
      <li v-for="item in contacts">
        <IconText :src="item.img">
          <a :href="item.url">{{ item.label }}</a>
        </IconText>
      </li>
    </ul>
    <Button>Оставить заявку</Button>
    <div class="bottom-text">© Загдом, 2021</div>
    <div class="bottom-text">
      <a href="/privacy">Политика конфиденциальности</a>
    </div>
    <div class="bottom-text">
      <a href="/user-agreement">Пользовательское соглашение</a>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
@use "assets/scss/variables" as *;
@use "assets/scss/mixins" as mixins;

footer {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 32px;
  padding: 37px 88px;
  background-color: $dark-slate-gray;
}

.sections {
  @include mixins.flex-column;
  @include mixins.simple-ul;
  gap: 24px;
  font-size: 16px;
  white-space: break-spaces;
}

.sections a {
  color: $white;
}

.bottom-text {
  color: $white;
  opacity: 0.6;
  font-size: 14px;
}

.bottom-text a {
  color: $white;
}

.button {
  justify-self: end;
}
</style>
