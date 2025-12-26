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

import LogoIcon from "assets/icons/logo.svg";
import MenuButtonIcon from "assets/icons/lines.svg";
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
      <IconText id="phone-icon-text" src="assets/icons/phone.svg">
        <a href="tel:79009009090">+7 (900) 900-90-90</a>
      </IconText>
      <Button id="request-button" variant="primary">
        <p id="request-button-text">Оставить заявку</p>
      </Button>
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
  @include m.flex(row, 24px, space-between);
  @include m.box(100%, 108px, 0 88px);

  @include m.at-most("large") {
    @include m.box(100%, 108px, 0 24px);
  }
}

.left-side {
  @include m.flex(row, 80px, null, center);
}

#logo-icon {
  @include m.self(null, null, 0);
  @include m.svg(160px, 40px);
}

.sections {
  @include m.flex(row, 24px, start, null, wrap);
  @include m.font(16px);

  @include m.at-most("medium") {
    display: none;
  }
}

.right-side {
  @include m.flex(row, 24px, null, center);
}

#phone-icon-text {
  @include m.paint(null, v.$color-secondary);
  @include m.text(null, null, nowrap);

  @include m.at-most("small") {
    display: none;
  }
}

#request-button {
  @include m.box(200px, 50px);

  @include m.at-most("medium") {
    display: none;
  }
}

#request-button-text {
  @include m.font(14px);
}

#menu-button {
  @include m.box(50px, 50px);

  @include m.at-least("medium") {
    display: none;
  }
}

#menu-button-icon {
  @include m.svg(24px, 14px, v.$color-white);
}
</style>
