<script setup>
const title = ref('Augalo — Application mobile')
const description = ref('Application mobile pour les cavaliers')

useHead({
  title,
  meta: [
    { name: 'description', content: description },
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ]
})
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>

