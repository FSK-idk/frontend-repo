<script setup>
import {
  DialogRoot,
  DialogPortal,
  DialogOverlay,
  DialogContent,
} from "reka-ui";

defineProps({
  open: Boolean,
});
const emit = defineEmits(["close"]);

import CrossIcon from "assets/icons/cross.svg";
</script>
<template>
  <DialogRoot :open="open">
    <DialogPortal>
      <DialogOverlay :class="$style.backdrop" />
      <DialogContent
        :class="$style.mainLayout"
        @interact-outside="emit('close')"
      >
        <div :class="$style.modalLayout">
          <slot />
        </div>
        <div :class="$style.closeLayout">
          <Button
            :class="$style.closeButton"
            variant="primary-ghost"
            @click="emit('close')"
          >
            <CrossIcon :class="$style.crossIcon" />
          </Button>
        </div>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
<style lang="scss" module>
@use "assets/scss/variables" as v;
@use "assets/scss/mixins" as m;

.backdrop {
  @include m.position(fixed, 0, 0, null, null, 1000);
  @include m.box(100%, 100%);
  @include m.paint(rgb(0 0 0 / 0.5));
}

.main-layout {
  @include m.position(fixed, 50%, 50%, -50%, -50%, 1000);
  @include m.box(440px, null, null, 10px);
  @include m.paint(v.$color-primary-light);
  max-width: calc(100% - 32px);
  max-height: calc(100% - 32px);
}

.modal-layout {
  @include m.box(null, null, 48px);
}

.close-layout {
  @include m.position(fixed, 0, 0);
  @include m.flex(row-reverse);
  @include m.box(100%, null, 24px);
}

.close-button {
  @include m.box(32px, 32px);
}
.cross-icon {
  @include m.box(12px, 12px);
}
</style>
