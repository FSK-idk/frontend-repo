<script setup>
const drawerRef = ref(null);

const toggleDrawer = () => drawerRef.value?.toggleDrawer();
</script>
<template>
  <main>
    <Drawer ref="drawerRef" />
    <Header @toggle-drawer="toggleDrawer" />
    <NuxtPage class="page" />
    <Footer />
  </main>
</template>
<style lang="scss">
@use "assets/scss/variables" as v;
@use "assets/scss/mixins" as m;

body {
  margin: 0;
  padding: 0;

  @include m.paint(v.$color-white, v.$color-text);

  font-family: v.$font-text;
}

a {
  color: inherit;
  text-decoration: none;
}

html,
body,
#__nuxt {
  height: 100%;
}

* {
  box-sizing: border-box;
}

main {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

.page {
  flex: 1;
}
</style>
