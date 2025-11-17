<template>
  <main>
    <Header />
    <Content />
    <Footer />
  </main>
</template>
<style lang="scss">
@use "assets/scss/variables" as *;

body {
  margin: 0;
  padding: 0;
  font-family: $font-text;
  font-size: 24px;
}

p,
button {
  font-family: $font-text;
  font-size: 24px;
}

h1 {
  font-family: $font-title;
  font-size: 36px;
}

a {
  text-decoration: none;
}

html,
body,
#__nuxt,
main {
  height: 100%;
}

main {
  display: flex;
  flex-direction: column;
}
</style>
