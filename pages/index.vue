<template>
    <div class="lg:max-w-[1512px] lg:mx-auto font-lato">
        <Hero />

        <Who />

        <HowItWorks />

        <Team />

        <Footer />
    </div>
</template>

<script>
import Hero from '@/components/Hero'
import Who from '@/components/Who'
import HowItWorks from '@/components/HowItWorks'
import Team from '@/components/Team'
import Footer from '@/components/Footer'

export default {
  components: {
    Hero,
    Who,
    HowItWorks,
    Team,
    Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

.font-lato {
    font-family: 'Lato', sans-serif;
}
</style>