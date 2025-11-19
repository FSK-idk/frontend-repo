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

import Logo from "assets/images/logo.svg";
</script>
<template>
  <header>
    <div class="left-side">
      <Logo width="160" height="39" />
      <ul class="sections">
        <li v-for="item in navigation">
          <a :href="item.url">{{ item.label }}</a>
        </li>
      </ul>
    </div>
    <div class="right-side">
      <IconText src="assets/images/phone.svg">
        <a href="tel:79009009090">+7 (900) 900-90-90</a>
      </IconText>
      <Button>Оставить заявку</Button>
    </div>
  </header>
</template>
<style lang="scss" scoped>
@use "assets/scss/variables" as *;
@use "assets/scss/mixins" as mixins;

header {
  @include mixins.flex-row;
  justify-content: space-between;
  padding: 24px 88px;
  background-color: $white;
}

.left-side {
  @include mixins.flex-row;
  gap: 80px;
}

.sections {
  @include mixins.flex-row;
  @include mixins.simple-ul;
  gap: 24px;
  font-size: 16px;
}

.sections a {
  color: $dim-gray;
}

.right-side {
  @include mixins.flex-row;
  gap: 24px;
}

.icon-text a {
  color: $dark-slate-gray;
}
</style>
