<script>
import {  computed } from 'vue'
export default {
  setup() {
    const redirectToPlayStore = () => {
      window.location = 'https://play.google.com/store/apps/details?id=com.ionic.augalo.com&gl=FR'
    }
    const redirectToAppStore = () => {
      window.location = 'https://apps.apple.com/fr/app/augalo/id1598737381'
    }
    return { redirectToPlayStore, redirectToAppStore }
  }
}
</script>

<template>
    <section class="relative ml-5 z-10 lg:ml-24">
        <div class="flex absolute top-0 justify-between w-full mt-[2.1vh]">
            <img class="w-[107px] lg:w-[214px] -ml-3" src="@/static/logo-black.png" alt="Logo Augalo" />

            <a href="mailto:contact@augalo.com">
                <div class="flex items-center lg:mr-28 z-40 cursor-pointer">
                    <img class="mr-5" src="@/static/contact.svg" alt="Icone message envoyé" />
                    <span class="hidden lg:block text-white text-[25px]">
                        contact@augalo.com
                    </span>
                </div>
            </a>
      

            <img class="hidden lg:block absolute w-[220px] transform -rotate-[22deg] -left-[250px]" src="@/static/ellipse.png" alt="Ellipse blanche" />
        </div>

        <div class="flex">
            <div class="absolute bottom-0 lg:-translate-y-3/4">
                <h1 class="text-[6vw] leading-[6vw] max-w-[50vw] font-primary font-bold lg:text-[35px] lg:leading-[35px] xl:leading-[50px] lg:max-w-[360px] xl:max-w-[580px] xl:text-[60px]">
                    Espace 
                    <span class="text-primary">
                        incontournable
                    </span>
                    pour les cavaliers
                </h1>

                <p class="text-[4vw] italic max-w-[40vw] mt-3 leading-[5vw] lg:leading-6 lg:text-[18px] xl:text-[20px] lg:max-w-full lg:mt-6 text-secondary">
                    Pour t'entrainer à la théorie des Galops
                </p>

                <div class="flex flex-col gap-[5vw] mt-[220px] lg:mt-[100px] lg:gap-7 lg:flex-row cursor-pointer">
                    <img class="w-[40vw] lg:w-[205px]" src="@/static/apple-store.png" alt="Bouton disponible sur App Store" @click="redirectToAppStore" />
                    <img class="w-[40vw] lg:w-[205px]" src="@/static/play-store.png" alt="Bouton disponible sur Google Play Store" @click="redirectToPlayStore" />
                </div>
            </div>

            <img class="absolute right-[100px] lg:right-0 -top-0 lg:top-[260px] xl:top-[260px] w-[120px] lg:w-[220px] lg:left-[30vw] xl:left-[650px] -z-10" src="@/static/ellipse.png" alt="Ellipse blanche" />

            <div class="w-[90vw] ml-auto lg:max-w-[800px]">
                <img class="w-full block lg:hidden" src="@/static/hero-mobile.png" alt="Mockup téléphone qui montre l'application" />
                
                <img class="w-full hidden lg:block" src="@/static/hero.png" alt="Mockup téléphone qui montre l'application" />
            </div>

            <img class="absolute -bottom-16 lg:bottom-0 w-[162px] lg:w-[220px] left-[100px] lg:left-[50px] transform -rotate-[73deg]" src="@/static/ellipse.png" alt="Ellipse blanche" />
        </div>
    </section>
</template>