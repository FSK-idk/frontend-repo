<script setup>
definePageMeta({
  title: "Контакты",
});
import {
  YandexMap,
  YandexMapDefaultSchemeLayer,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultMarker,
  YandexMapControls,
  YandexMapZoomControl,
  YandexMapGeolocationControl,
} from "vue-yandex-maps";
</script>
<template>
  <div :class="$style.wrapper">
    <div :class="$style.mainLayout">
      <Breadcrumbs :class="$style.breadcrumbs" />
      <div :class="$style.secondaryLayout">
        <div :class="$style.contactsLayout">
          <strong :class="$style.title">Контакты</strong>

          <Contacts
            :class="$style.contacts"
            :classes="{
              main: $style.contactsMain,
              item: $style.contactsItem,
              text: $style.contactsText,
              icon: $style.contactsIcon,
              phone: $style.contactsPhone,
            }"
          />
        </div>

        <div :class="$style.map">
          <yandex-map
            :settings="{
              location: { center: [131.952377, 43.148998], zoom: 10 },
            }"
          >
            <yandex-map-default-scheme-layer />
            <yandex-map-default-features-layer />
            <yandex-map-controls :settings="{ position: 'right' }">
              <yandex-map-zoom-control />
            </yandex-map-controls>
            <yandex-map-controls :settings="{ position: 'top left' }">
              <yandex-map-geolocation-control />
            </yandex-map-controls>
            <yandex-map-default-marker
              :settings="{ coordinates: [131.952377, 43.148998] }"
            />
          </yandex-map>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" module>
@use "assets/scss/variables" as v;
@use "assets/scss/mixins" as m;

.main-layout {
  @include m.flex(column, 48px);
  @include m.box(null, null, 40px 88px 80px 88px);

  @include m.at-most("large") {
    @include m.box(null, null, 40px 24px 80px 24px);
  }
}

.secondary-layout {
  @include m.flex(row, null, center);

  @include m.at-most("compact") {
    @include m.flex(column, 32px);
  }
}

.contacts-layout {
  @include m.flex(column, 48px);
  @include m.box(400px);

  @include m.at-most("medium") {
    gap: 24px;
  }
}

.title {
  @include m.font(46px, 700, v.$font-title);
  @include m.paint(null, v.$color-black);

  @include m.at-most("medium") {
    @include m.font(32px);
  }
}

.contacts-main {
  gap: 40px;

  @include m.at-most("medium") {
    gap: 32px;
  }
}

.contacts-item {
  gap: 16px;
}

.contacts-text {
  @include m.font(20px);

  @include m.at-most("medium") {
    @include m.font(18px);
  }
}

.contacts-icon {
  @include m.box(20px, 20px);
}

.contacts-phone {
  @include m.font(null, 600);
}

.map {
  @include m.box(500px, 500px);

  @include m.at-most("medium") {
    @include m.box(350px, 350px);
  }

  @include m.at-most("compact") {
    @include m.box(100%, 400px);
  }
}
</style>
