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

import CloseButtonIcon from "assets/images/cross.svg";
</script>
<template>
  <div class="backdrop" :class="{ open: isOpen }" @click="toggleDrawer" />
  <div class="drawer" :class="{ open: isOpen }">
    <Button id="close-button" variant="transparent" @click="toggleDrawer">
      <CloseButtonIcon id="close-button-icon" />
    </Button>
    <div class="content">
      <ul class="sections">
        <li v-for="item in navigation">
          <a :href="item.url">{{ item.label }}</a>
        </li>
      </ul>
      <ul class="sections">
        <li v-for="item in contacts">
          <IconText :src="item.img" variant="white">
            <a :href="item.url">{{ item.label }}</a>
          </IconText>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "assets/scss/variables" as v;
@use "assets/scss/mixins" as m;

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;

  background-color: rgb(0 0 0 / 0.4);

  transform: translateX(100%);

  &.open {
    transform: translateX(0);
  }
}

.drawer {
  @include m.column-center;
  gap: 40px;
  overflow: auto;

  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
  height: calc(100% - 40px);
  padding: 20px;

  background-color: v.$color-primary;

  transform: translateX(100%);

  &.open {
    transform: translateX(0);
  }
}

#close-button {
  align-self: end;

  height: 32px;
  width: 32px;
  padding: 10px;
}

#close-button-icon {
  width: max-content;
  height: max-content;
}

.content {
  @include m.column-center;
  justify-content: space-between;
  height: 100%;
}

.sections {
  @include m.column-center;
  align-items: start;
  gap: 24px;
  white-space: break-spaces;

  color: v.$color-white;

  font-size: 18px;
}
</style>
