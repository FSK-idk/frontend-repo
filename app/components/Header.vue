<script setup>
const emits = defineEmits(["toggle-drawer"]);

const toggleDrawer = () => {
  emits("toggle-drawer");
};

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

import LogoIcon from "assets/images/logo.svg";
import MenuButtonIcon from "assets/images/lines.svg";
</script>
<template>
  <header class="header">
    <div class="left-side">
      <LogoIcon id="logo-icon" />
      <ul class="sections">
        <li v-for="item in navigation">
          <a :href="item.url">{{ item.label }}</a>
        </li>
      </ul>
    </div>
    <div class="right-side">
      <IconText id="phone-icon-text" src="assets/images/phone.svg">
        <a href="tel:79009009090">+7 (900) 900-90-90</a>
      </IconText>
      <Button id="request-button" variant="primary">Оставить заявку</Button>
      <Button id="menu-button" variant="primary" @click="toggleDrawer">
        <MenuButtonIcon id="menu-button-icon" />
      </Button>
    </div>
  </header>
</template>
<style lang="scss" scoped>
@use "assets/scss/variables" as v;
@use "assets/scss/mixins" as m;

.header {
  @include m.row-center;
  justify-content: space-between;
  gap: 24px;

  height: 60px;
  padding: 24px 88px;

  @include m.at-most("large") {
    padding: 24px 24px;
  }
}

.left-side {
  @include m.row-center;
  gap: 80px;
}

#logo-icon {
  flex-shrink: 0;

  width: 160px;
  height: 40px;
}

.sections {
  @include m.row-center;
  justify-content: start;
  flex-wrap: wrap;
  gap: 24px;

  font-size: 16px;

  @include m.at-most("medium") {
    display: none;
  }
}

.right-side {
  @include m.row-center;
  gap: 24px;
}

#phone-icon-text {
  white-space: nowrap;

  color: v.$color-secondary;

  @include m.at-most("small") {
    display: none;
  }
}

#request-button {
  height: 50px;
  width: 200px;
  padding: 16px 40px;

  @include m.at-most("medium") {
    display: none;
  }
}

#menu-button {
  height: 50px;
  width: 55px;
  padding: 16px;

  @include m.at-least("medium") {
    display: none;
  }
}

#menu-button-icon {
  width: max-content;
  height: max-content;
}
</style>
