<template>
  <div
    class="flex flex-col items-start justify-center p-[20px_27px__30px_30px] w-full sm:w-[410px] bg-surface-100 rounded-[20px]">
    <div class="flex items-center justify-center gap-[30px] mb-[20px]">
      <img
        class="w-[64px] h-[64px] rounded-100"
        src="../assets/pictures/user-img.png"
        alt="devise-info"
        @click="scrollToTop"
        loading="lazy"
      />
      <h3
        class="text-surface-900 text-[20px] font-[700] leading-[1.3] text-center">
        Yomi Denzel
      </h3>
    </div>

    <p
      class="text-surface-900 text-body-mobile font-[400] leading-[1.5] text-center">
      Adligator — це інструмент пошуку продуктів, якого не було багато років.
      Завдяки Minea я можу за кілька кліків знайти найкращі продукти для всіх
      джерел трафіку
    </p>
  </div>
</template>

<script>
import MagnifyingGlass from "@/assets/icons/MagnifyingGlass.vue";

export default {
  components: {
    MagnifyingGlass,
  },
};
</script>

<style lang="scss">
.icon {
  width: 42px;
  height: 42px;
}
</style>
