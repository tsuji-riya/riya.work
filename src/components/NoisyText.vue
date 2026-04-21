<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Noiser } from '@/script/noiser.ts'

const { text } = defineProps({
  text: {
    required: true,
    type: String,
  },
})

const displayText = ref('')

onMounted(() => {
  new Noiser(10).start(text, (v) => (displayText.value = v))
})
</script>

<template>
  {{ displayText }}
</template>

<style scoped></style>
