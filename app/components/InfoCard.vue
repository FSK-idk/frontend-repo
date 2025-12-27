<script setup>
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});

const base = import.meta.env.BASE_URL;

const Icon = computed(() => {
  return defineAsyncComponent(() =>
    import(/* @vite-ignore */ `${base}assets/icons/${props.icon}.svg`)
  );
});
</script>
<template>
  <div :class="$style.wrapper">
    <div :class="$style.cardLayout">
      <Icon :class="$style.icon" />
      <div>
        <strong>{{ props.title }}</strong>
        <p>{{ props.body }}</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" module>
@use "assets/scss/variables" as v;
@use "assets/scss/mixins" as m;

.card-layout {
  @include m.flex(column, 24px);
  @include m.box(100%, 100%, 24px, 20px);
  @include m.paint(v.$color-primary-light);
}

.card-layout strong {
  @include m.paint(null, v.$color-title);
  @include m.font(24px, null, v.$font-title);
  @include m.text(120%);
}

.card-layout p {
  @include m.font(20px);
  @include m.text(135%);
}

.icon {
  @include m.svg(24px, 24px, v.$color-primary);
}
</style>
