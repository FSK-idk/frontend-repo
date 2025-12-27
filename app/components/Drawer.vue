<script setup>
const isOpen = ref(false);

const toggleDrawer = () => {
  isOpen.value = ~isOpen.value;
};

useHead({
  bodyAttrs: {
    style: computed(() => (isOpen.value ? "overflow: hidden" : "")),
  },
});

defineExpose({ toggleDrawer });

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
    icon: "phone",
    url: "tel:79009009090",
    label: "+7 (900) 900-90-90",
  },
  {
    icon: "mail",
    url: "mailto:info@gmail.com",
    label: "info@gmail.com",
  },
  {
    icon: "map",
    url: "geo:г. Владивосток ул. Выселковая 49, стр. 3",
    label: "г. Владивосток\nул. Выселковая 49, стр. 3",
  },
];

import CloseButtonIcon from "assets/icons/cross.svg";
</script>
<template>
  <div :class="$style.wrapper">
    <div
      :class="[$style.backdrop, { [$style.open]: isOpen }]"
      @click="toggleDrawer"
    />
    <div :class="[$style.drawer, { [$style.open]: isOpen }]">
      <Button
        :class="$style.button"
        variant="transparent"
        @click="toggleDrawer"
      >
        <CloseButtonIcon :class="$style.icon" />
      </Button>
      <div :class="$style.contentLayout">
        <ul :class="$style.sectionsLayout">
          <li v-for="item in navigation">
            <a :href="item.url">{{ item.label }}</a>
          </li>
        </ul>
        <ul :class="$style.sectionsLayout">
          <li v-for="item in contacts">
            <IconText :icon="item.icon" variant="white">
              <a :href="item.url">{{ item.label }}</a>
            </IconText>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="scss" module>
@use "assets/scss/variables" as v;
@use "assets/scss/mixins" as m;

.backdrop {
  @include m.position(fixed, 0, 0, 100%, null, 1000);
  @include m.box(100%, 100%);
  @include m.paint(rgb(0 0 0 / 0.4));

  &.open {
    @include m.position(fixed, 0, 0, 0, null, 1000);
  }
}

.drawer {
  @include m.position(fixed, 0, 100%, 0, null, 1000);
  @include m.flex(column, 40px, end);
  @include m.box(null, 100%, 20px);
  @include m.paint(v.$color-primary);

  &.open {
    @include m.position(fixed, 0, 100%, -100%, null, 1000);
  }
}

.button {
  @include m.self(null, end, 0);
  @include m.box(48px, 48px);
}

.icon {
  @include m.svg(12px, 12px, v.$color-white);
}

.content-layout {
  @include m.flex(column, 0, space-between, center);
  @include m.box(null, 100%);
}

.sections-layout {
  @include m.flex(column, 24px, null, start);
  @include m.paint(null, v.$color-white);
  @include m.font(18px);
  @include m.text(null, null, break-spaces, nowrap);
}
</style>
