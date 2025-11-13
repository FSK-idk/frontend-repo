<template>
  <div class="block-container">
    <div class="block">
      <p>Верстаем шапку...</p>
    </div>
    <div class="block" id="main-block">
      <Banner />
      <Greeting />
      <div class="card-container">
        <div class="card">Сюда</div>
        <div class="card">Туда</div>
      </div>
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
@use "assets/scss/variables.scss" as *;
@use "assets/scss/mixins.scss" as mixins;

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
  @include mixins.card(aqua);
  flex: 1 1 0;
  padding: 20px;
}

#main-block {
  flex: 2 2 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: gold;
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
  @include mixins.card($snow);
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
