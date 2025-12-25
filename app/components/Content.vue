<template>
  <div class="block-container">
    <div class="block">
      <p>Мы очень отзывчивы...</p>
    </div>
    <div class="block">
      <div style="text-align: center">
        <a href="https://youtu.be/U2Fjfqm-7g8">
          <img
            src="assets/images/maxwell.png"
            alt="Максвелл"
            class="block-image"
          />
        </a>
        <br />
        <b>Здесь</b> мог быть ваш кот
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@use "sass:color" as color;
@use "assets/scss/variables" as v;
@use "assets/scss/mixins" as m;

.block-container {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: 20px;
  height: 100%;
  padding: 20px;
  background-color: cadetblue;
}

.block {
  @include m.card(aqua);
  flex: 1 1 0;
  padding: 20px;
}

.card-container {
  flex: 0 1 auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
}

.card {
  @include m.card(v.$snow);
  flex: 0 1 auto;
}

.block-image {
  width: 60%;
  border-radius: 20px;
}

.block-image:hover {
  opacity: 70%;
}
</style>
