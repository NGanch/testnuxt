<template>
  <div
    class="flex flex-col items-start justify-center p-[20px] w-full sm:w-[300px] sm:h-[264px] bg-surface-100 rounded-[20px]">
    <div
      class="pi pi-search text-[25px] lg:text-[42px] mb-[20px] text-green-700"
    ></div>

    <h3
      class="mb-[6px] text-surface-900 text-[20px] font-[700] leading-[1.3] text-center">
      1.29 + В <span class="text-surface-700">результатів</span>
    </h3>
    <p
      class="mb-[10px] text-surface-900 text-body-mobile font-[400] leading-[1.5] text-center">
      Формат : <span class="text-surface-500">exact</span>
    </p>
    <p
      class="mb-[8px] text-surface-900 text-body-mobile font-[400] leading-[1.5] text-center">
      Дата створення : <span class="text-surface-500">2020-08.01</span>
    </p>
    <p
      class="mb-[19px] text-surface-900 text-body-mobile font-[400] leading-[1.5] text-center">
      Дата створення до : <span class="text-surface-500">2020-08.01</span>
    </p>

    <button
      class="flex gap-[6px] items-center self-end h-[21px] text-[#F52222] text-[14px] font-[400] leading-[1.5] text-center">
      Видалити
      <Trash />
    </button>
  </div>
</template>

<script>
import MagnifyingGlass from "@/assets/icons/MagnifyingGlass.vue";
import Trash from "@/assets/icons/Trash.vue";
export default {
  components: {
    MagnifyingGlass, 
    Trash,
  },
};
</script>

<style lang="scss">
.icon {
  width: 42px;
  height: 42px;
}
</style>
