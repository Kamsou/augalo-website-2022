<script setup lang="ts">
onMounted(() => {
    window.scrollTo(0, 0)
})
</script>

<template>
    <div class="lg:max-w-[1512px] lg:mx-auto font-lato">
        <Hero />

        <Who />

        <HowItWorks />

        <Team />

        <Footer />
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

.font-lato {
    font-family: 'Lato', sans-serif;
}
</style>
