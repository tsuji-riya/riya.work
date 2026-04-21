<script setup lang="ts">
import NoisyText from '@/components/NoisyText.vue'
</script>

<template>
  <div class="container">
    <h1 class="title">
      <NoisyText text="Hello 👋" />
      <br />
      <NoisyText text="Welcome to riya.work website!" />
    </h1>
    <p>
      <NoisyText
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      /><br />
      <NoisyText
        text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      /><br />
      <NoisyText
        text="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      /><br />
      <NoisyText
        text=" It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      />
    </p>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  padding: 10rem 0;
}

.title {
  text-align: center;
}
</style>
