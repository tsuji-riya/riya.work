<script setup lang="ts">
import { useRouter } from 'vue-router'
import { computed } from 'vue'

const router = useRouter()
const routerPath = computed(() => router.currentRoute.value.path)

const links = [
  {
    to: '/',
    name: 'Home',
  },
  {
    to: '/about',
    name: 'About',
  },
]
</script>

<template>
  <header class="header">
    <img src="/public/avatar.png" alt="avatar" class="avatar" />
    <div class="header-content">
      <RouterLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="link"
        :class="link.to === routerPath ? 'active' : ''"
      >
        {{ link.name }}
      </RouterLink>
    </div>
  </header>
</template>

<style scoped>
.header {
  width: 100%;
  height: 3rem;
  padding: 0 1rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  background-color: #ffe2e7;
  border-bottom: hotpink 2px solid;
}

.avatar {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: hotpink 1px solid;
}

.header-content {
  display: flex;
  gap: 1rem;
}

.link {
  color: hotpink;
  font-size: 1.25rem;
  font-weight: bold;
  font-family: Arial, serif;
  text-decoration: none;
}

.link.active {
  text-decoration: underline;
}
</style>
