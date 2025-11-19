<script setup>
const greetings = [
  "Привет",
  "Hello",
  "Bonjour",
  "Hola",
  "你好",
  "Ciao",
  "Salut",
  "Ola",
  "Goedendag",
  "こんにちは",
  "Shalom",
];

let greeting = ref(greetings[0]);
const changeGreeting = () => {
  greeting.value = greetings[Math.floor(Math.random() * greetings.length)];
};
</script>
<template>
  <div class="greeting">
    <p id="hello-text">{{ greeting }}</p>
    <div>
      <button id="hello-button" @click="changeGreeting">Нажми на меня</button>
    </div>
  </div>
</template>
<style lang="scss">
@use "assets/scss/variables" as *;
@use "assets/scss/mixins" as mixins;

.greeting {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#hello-text {
  height: 50px;
}

#hello-button {
  @include mixins.button($snow);
  margin: 10px;
}
</style>
