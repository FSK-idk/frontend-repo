<template>
  <div class="main">
    <Header />
    <Content />
    <Footer />
  </div>
</template>
<style lang="scss">
@use "assets/scss/variables.scss" as *;

body {
  margin: 0;
  padding: 0;
  font-family: $font-text;
  font-size: 1.5em;
}

p,
button {
  font-family: $font-text;
  font-size: 1.5em;
}

h1 {
  font-family: $font-title;
  font-size: 1.8em;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100vh;
  background-color: $snow;
  color: $night;
}
</style>
