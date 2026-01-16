<script setup>
const props = defineProps({
  classes: {
    type: Object,
    default: () => ({
      main: "",
      item: "",
      text: "",
      icon: "",
    }),
  },
});

import { contacts } from "assets/mock/contacts";
</script>
<template>
  <div :class="$style.wrapper">
    <ul :class="[$style.mainLayout, props.classes.main]">
      <IconText
        :icon="contacts.phone.icon"
        variant="primary"
        :classes="{ main: props.classes.item, icon: props.classes.icon }"
      >
        <a
          :class="[$style.phone, props.classes.text, props.classes.phone]"
          :href="contacts.phone.url"
          >{{ contacts.phone.label }}</a
        >
      </IconText>
      <IconText
        :icon="contacts.email.icon"
        variant="primary"
        :classes="{ main: props.classes.item, icon: props.classes.icon }"
      >
        <a :class="props.classes.text" :href="contacts.email.url">{{
          contacts.email.label
        }}</a>
      </IconText>
      <IconText
        :icon="contacts.address.icon"
        variant="primary"
        :classes="{ main: props.classes.item, icon: props.classes.icon }"
      >
        <a :class="props.classes.text" :href="contacts.address.url">{{
          contacts.address.label
        }}</a>
      </IconText>
    </ul>
  </div>
</template>
<style lang="scss" module>
@use "assets/scss/variables" as v;
@use "assets/scss/mixins" as m;

.main-layout {
  @include m.flex(column, 24px);
  @include m.paint(null, v.$color-black);
  @include m.font(14px);
  @include m.text(null, null, break-spaces);
}
</style>
