<script setup>
const intro_info = {
  title: "Каждый проект для нас — не просто чанк, а целый уникальный мир",
  body: "Мы берём на себя весь цикл работ: от расчистки местности и добычи ресурсов до финальных декоративных деталей.\n\nСадимся с вами за один стол и разбираем ваши скриншоты, чертежи и идеи по блокам. Вместе прорабатываем планировку будущей базы так, чтобы каждый уголок отвечал вашему стилю жизни.",
};
const houses_info = {
  icon: "house",
  title: "57 домов",
  body: "уже были перенесены из креатива в реальный мир",
};
const years_info = {
  icon: "calendar",
  title: "14 лет",
  body: "мы создаём не просто постройки, а наследие для серверов",
};
</script>
<template>
  <div :class="$style.wrapper">
    <div :class="$style.introLayout">
      <div :class="$style.info">
        <strong>{{ intro_info.title }}</strong>
        <p>{{ intro_info.body }}</p>
      </div>
      <div :class="$style.cardLayout">
        <InfoCard
          :class="$style.card"
          :icon="houses_info.icon"
          :title="houses_info.title"
          :body="houses_info.body"
        />
        <InfoCard
          :class="$style.card"
          :icon="years_info.icon"
          :title="years_info.title"
          :body="years_info.body"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss" module>
@use "assets/scss/variables" as v;
@use "assets/scss/mixins" as m;

.intro-layout {
  @include m.grid(1fr 1fr, 16px);
  @include m.box(100%, 100%);

  @include m.at-most("medium") {
    @include m.flex(column, 32px);
  }
}

.info {
  @include m.flex(column, 32px);
  @include m.box(100%, 100%);
}

.info strong {
  @include m.paint(null, v.$color-title);
  @include m.font(38px, 700, v.$font-title);
  @include m.text(120%);
}

.info p {
  @include m.font(20px);
  @include m.text(135%, null, break-spaces);
}

.card-layout {
  @include m.grid(1fr 1fr, 16px);

  @include m.at-most("medium") {
    @include m.flex(column, 12px);
  }
}

.card {
  @include m.flex;
  @include m.self(null, end);
  @include m.box(100%, 80%);
}
</style>
