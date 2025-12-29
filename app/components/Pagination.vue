<script setup>
import {
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrev,
  PaginationRoot,
  PaginationEllipsis,
} from "reka-ui";

const props = defineProps({
  total: {
    type: Number,
    required: true,
  },
});

import { useMediaQuery } from "@vueuse/core";
import vars from "assets/scss/export.module.scss";
const isAtMostCompact = useMediaQuery(`(max-width: ${vars.compactScreenSize})`);
const siblingCount = computed(() => (isAtMostCompact.value ? 0 : 1));

const emit = defineEmits(["onPage"]);
const onPage = (val) => emit("onPage", val);

import LeftArrowIcon from "assets/icons/left-arrow.svg";
import RightArrowIcon from "assets/icons/right-arrow.svg";
</script>
<template>
  <PaginationRoot
    v-slot="{ page }"
    :total="props.total"
    :items-per-page="1"
    :sibling-count="siblingCount"
    @update:page="onPage"
    show-edges
  >
    <PaginationList v-slot="{ items }" :class="$style.mainLayout">
      <PaginationPrev as-child>
        <Button
          :class="$style.button"
          :variant="page === 1 ? 'inactive' : 'primary'"
          :disabled="page === 1"
        >
          <LeftArrowIcon :class="$style.icon" />
        </Button>
      </PaginationPrev>

      <div :class="$style.buttonLayout">
        <template v-for="(item, index) in items">
          <PaginationListItem
            v-if="item.type === 'page'"
            :key="index"
            :value="item.value"
            as-child
          >
            <Button
              v-if="item.type === 'page'"
              :class="$style.button"
              :variant="page === item.value ? 'secondary' : 'secondary-outline'"
            >
              <p
                :class="[
                  $style.buttonText,
                  { [$style.isActive]: page === item.value },
                ]"
              >
                {{ item.value }}
              </p>
            </Button>
          </PaginationListItem>

          <PaginationEllipsis v-else :key="item.type" :index="index" as-child>
            <Button
              :class="$style.button"
              variant="secondary-outline"
              :disabled="true"
            >
              <p :class="$style.buttonText">&#8230;</p>
            </Button>
          </PaginationEllipsis>
        </template>
      </div>

      <PaginationNext as-child>
        <Button
          :class="$style.button"
          :variant="page === total ? 'inactive' : 'primary'"
          :disabled="page === total"
        >
          <RightArrowIcon :class="$style.icon" />
        </Button>
      </PaginationNext>
    </PaginationList>
  </PaginationRoot>
</template>

<style lang="scss" module>
@use "assets/scss/variables" as v;
@use "assets/scss/mixins" as m;

.main-layout {
  @include m.flex(row, 24px);
}

.buttonLayout {
  @include m.flex(row, 8px);
}
.button {
  @include m.box(48px, 48px);
}
.button-text {
  @include m.font(16px);

  &:not(.is-active) {
    @include m.font(16px, 600);
  }
}

.icon {
  @include m.box(24px, 24px);
}
</style>
