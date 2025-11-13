<template>
  <header>
    <div class="left-side">
      <img src="assets/images/logo.svg" width="160" height="39" />
      <div class="sections">
        <div>Реализованные проекты</div>
        <div>Новости</div>
        <div>Контакты</div>
      </div>
    </div>
    <div class="right-side">
      <IconText src="phone.svg">+7 (900) 900-90-90</IconText>
      <Button>Оставить заявку</Button>
    </div>
  </header>
</template>
<style lang="scss" scoped>
@use "assets/scss/variables" as *;
@use "assets/scss/mixins" as mixins;

header {
  @include mixins.flex-row;
  justify-content: space-between;
  padding: 24px 88px;
  background-color: $white;
}

.left-side {
  @include mixins.flex-row;
  gap: 80px;
}

.sections {
  @include mixins.flex-row;
  gap: 24px;
  color: $dim-gray;
  font-size: 16px;
}

.right-side {
  @include mixins.flex-row;
  gap: 24px;
}
</style>
