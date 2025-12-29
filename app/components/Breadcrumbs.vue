<script setup>
const route = useRoute();
const router = useRouter();

const breadcrumbs = computed(() => {
  return [
    {
      label: router.resolve("/").meta.title,
      to: "/",
    },
    ...route.matched
      .filter((item) => item.path !== "/")
      .map((item) => {
        return {
          label: item.meta.title,
          to: item.path,
        };
      }),
  ];
});
</script>
<template>
  <div :class="$style.wrapper">
    <nav>
      <ol :class="$style.mainLayout">
        <li v-for="crumb in breadcrumbs" :class="$style.item">
          <NuxtLink
            :to="crumb.to"
            :class="$style.link"
            :active-class="$style.isActive"
          >
            {{ crumb.label }}
          </NuxtLink>
        </li>
      </ol>
    </nav>
  </div>
</template>

<style lang="scss" module>
@use "assets/scss/variables" as v;
@use "assets/scss/mixins" as m;

.main-layout {
  @include m.flex(row);
}

.link {
  @include m.paint(null, v.$color-primary);
  @include m.font(20px);
  @include m.text(135%);

  &.is-active {
    color: v.$color-text;
    pointer-events: none;
  }
}

.item:not(:last-child)::after {
  content: "/";
  @include m.box(null, null, 0 5px);
  @include m.paint(null, v.$color-text);
  @include m.font(20px);
  @include m.text(135%);
}
</style>
