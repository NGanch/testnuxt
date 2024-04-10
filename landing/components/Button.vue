<template>
  <button
    class=" flex justify-center items-center text-center w-full h-[46px] mr-[8px] px-[20px] py-3 bg-gradient-to-b from-yellow-400 to-orange-500 hover:to-amber-500 rounded-[100px] gap-2.5
    disabled:bg-surface-300 disabled:from-surface-300 disabled:to-surface-300"
>
    <p class="text-white text-lg font-medium font-['Ubuntu'] leading-snug">
      {{ text }}
    </p>
  </button>
</template>

<script setup>
const emit = defineEmits(['clicked'])

const props = defineProps({
  isDisabled: {
    type: Boolean,
    default: false,
  },
  text: {
    type: String,
    default: '',
  },
})

function handleClick() {
  if (!props.isDisabled) {
    emit('clicked')
  }
}
</script>
