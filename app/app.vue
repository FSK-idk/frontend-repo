<script setup>
const drawerRef = ref(null);

const toggleDrawer = () => drawerRef.value?.toggleDrawer();
</script>
<template>
  <main>
    <Drawer ref="drawerRef" />
    <Header @toggle-drawer="toggleDrawer" />
    <Content />
    <Footer />
  </main>
</template>
<style lang="scss">
@use "assets/scss/variables" as v;

body {
  margin: 0;
  padding: 0;

  color: v.$color-text;
  background-color: v.$color-white;

  font-family: v.$font-text;
  font-size: 24px;
}

p,
button {
  font-family: v.$font-text;
  font-size: 24px;
}

h1 {
  font-family: v.$font-title;
  font-size: 36px;
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
}
</style>
