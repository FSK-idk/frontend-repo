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

const requestOpened = ref(false);

import LogoIcon from "assets/icons/logo.svg";
import MenuButtonIcon from "assets/icons/lines.svg";
</script>
<template>
  <Request :open="requestOpened" @close="requestOpened = false" />
  <div :class="$style.wrapper">
    <header :class="$style.mainLayout">
      <div :class="$style.leftLayout">
        <NuxtLink to="/">
          <LogoIcon :class="$style.logoIcon" />
        </NuxtLink>
        <nav :class="$style.sectionsLayout">
          <template v-for="item in navigation">
            <NuxtLink :to="item.url" :active-class="$style.activePage">
              {{ item.label }}
            </NuxtLink>
          </template>
        </nav>
      </div>
      <div :class="$style.rightLayout">
        <IconText :class="$style.phone" icon="phone">
          <a href="tel:79009009090">+7 (900) 900-90-90</a>
        </IconText>
        <Button
          :class="$style.requestButton"
          variant="primary"
          @click="requestOpened = true"
        >
          Оставить заявку
        </Button>
        <Button
          :class="$style.menuButton"
          variant="primary"
          @click="toggleDrawer"
        >
          <MenuButtonIcon :class="$style.menuButtonIcon" />
        </Button>
      </div>
    </header>
  </div>
</template>
<style lang="scss" module>
@use "assets/scss/variables" as v;
@use "assets/scss/mixins" as m;

.main-layout {
  @include m.flex(row, 24px, space-between);
  @include m.box(100%, 108px, 0 88px);

  @include m.at-most("large") {
    @include m.box(100%, 108px, 0 24px);
  }
}

.left-layout {
  @include m.flex(row, 80px, null, center);
}

.logo-icon {
  @include m.self(null, null, 0);
  @include m.box(160px, 40px);
}

.sections-layout {
  @include m.flex(row, 24px, start, null, wrap);
  @include m.font(16px);

  @include m.at-most("medium") {
    display: none;
  }
}

.active-page {
  color: v.$color-primary;
}

.right-layout {
  @include m.flex(row, 24px, null, center);
}

.phone {
  @include m.paint(null, v.$color-secondary);
  @include m.text(null, null, nowrap);

  @include m.at-most("small") {
    display: none;
  }
}

.request-button {
  @include m.box(200px, 50px);

  @include m.at-most("medium") {
    display: none;
  }
}

.menu-button {
  @include m.box(50px, 50px);

  @include m.at-least("medium") {
    display: none;
  }
}

.menu-button-icon {
  @include m.box(24px, 14px);
}
</style>
