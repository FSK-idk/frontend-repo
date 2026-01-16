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

const requestOpened = ref(false);

import LogoIcon from "assets/icons/logo-alt.svg";
</script>
<template>
  <Request :open="requestOpened" @close="requestOpened = false" />
  <div :class="$style.wrapper">
    <footer :class="$style.mainLayout">
      <NuxtLink to="/">
        <LogoIcon :class="$style.logoIcon" />
      </NuxtLink>
      <ul :class="[$style.sections, $style.navigation]">
        <li v-for="item in navigation">
          <a :href="item.url">{{ item.label }}</a>
        </li>
      </ul>
      <Contacts
        :class="$style.contacts"
        :classes="{ text: $style.contactsText }"
      />
      <Button
        :class="$style.requestButton"
        variant="primary"
        @click="requestOpened = true"
      >
        <p>Оставить заявку</p>
      </Button>
      <ul :class="$style.legalityLayout">
        <p :class="$style.copyright">
          {{ legality[0].label }}
        </p>
        <p :class="$style.privacy">
          <a :href="legality[1].url">{{ legality[1].label }}</a>
        </p>
        <p :class="$style.agreement">
          <a :href="legality[2].url">{{ legality[2].label }}</a>
        </p>
      </ul>
    </footer>
  </div>
</template>
<style lang="scss" module>
@use "sass:color";
@use "assets/scss/variables" as v;
@use "assets/scss/mixins" as m;

.main-layout {
  @include m.grid(repeat(4, 1fr), 24px);
  grid-template-areas:
    "logo      navigation contacts  button"
    "copyright privacy    agreement .";
  @include m.box(null, null, 24px 88px);
  @include m.paint(v.$color-secondary);

  @include m.at-most("large") {
    @include m.box(null, null, 24px 24px);
  }

  @include m.at-most("medium") {
    @include m.flex(column, 40px, none, start);
    @include m.box(null, null, 40px 40px);
  }
}

.logo-icon {
  grid-area: logo;
  @include m.self(null, start, 0);
  @include m.box(160px, 40px);
}

.sections {
  @include m.flex(column, 24px);
  @include m.paint(null, v.$color-white);
  @include m.font(16px);
  @include m.text(null, null, break-spaces);

  &.navigation {
    grid-area: navigation;
  }
}

.contactsText {
  @include m.paint(14px, v.$color-white);
}

.contacts {
  grid-area: contacts;
}

.request-button {
  grid-area: button;
  @include m.self(end, start);
  @include m.box(200px, 50px);
}

.legality-layout {
  display: contents;
  @include m.paint(null, color.change(v.$color-white, $alpha: 0.6));

  @include m.at-most("medium") {
    @include m.flex(column, 24px);
  }
}

.copyright {
  grid-area: copyright;
}

.privacy {
  grid-area: privacy;
}

.agreement {
  grid-area: agreement;
}
</style>
