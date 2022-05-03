<script>
import {  computed } from 'vue'
export default {
  setup() {
    const isAndroid = computed(() => navigator.userAgent.match(/Android/i))
    const isIos = computed(() => navigator.userAgent.match(/iPhone|iPad|iPod/i))
    const downloadApp = () => {
      if (isIos.value) {
        window.location = 'https://apps.apple.com/fr/app/augalo/id1598737381'
        return
      }
      if (isAndroid.value) {
        window.location = 'https://play.google.com/store/apps/details?id=com.ionic.augalo.com&gl=FR'
        return
      }
      alert('Tu dois utiliser ton téléphone pour accéder à l\'application Augalo')
    }
    return { downloadApp }
  }
}
</script>

<template>
    <section class=" mt-[60px] mx-5 mb-[120px] lg:mt-52 lg:flex lg:max-w-[1349px] lg:mx-auto lg:gap-8 lg:px-[80px]">
        <div class="hidden lg:block lg:max-w-[50%]">
            <img class="lg:max-w-full" src="@/static/who.png" alt="Illustration d'un cheval qui galope" />
        </div>

        <div class="mx-auto max-w-[334px] lg:max-w-[50%]">
            <h2 class="text-xl font-primary font-bold lg:text-6xl lg:mb-8">
                Pour qui,
            </h2>
            <p class="text-base lg:text-[20px] lg:leading-[38px]">
                Augalo est une <span class="italic">application mobile</span> permettant aux cavalier(e)s de s'entrainer à la <span class="italic">théorie équestre</span> des examens fédéraux.
            </p>
            <p class="mt-2 text-base lg:text-[20px] lg:leading-[38px]">
              Sous forme de <span class="italic">quiz interactif</span> rédigé par un instructeur d’équitation, <span class="italic">les questions</span> portent sur la thématique et connaissances du cheval et de son environnement.
            </p>
            <p class="mt-2 text-base lg:text-[20px] lg:leading-[38px]">
              Utile pour <span class="italic">s’exercer</span> avant de passer l’examen à la théorie de <span class="italic">son galop</span> en centre équestre.
            </p>

            <div class="relative mt-10 h-[70px]" @click="downloadApp">
                <button class="bg-primary absolute z-10 text-white rounded-md w-full h-[70px] text-[25px]">
                    Télécharger l’app
                </button>
                
                <div class="absolute top-2 left-2 z-0 w-full bg-gray-300 h-[70px] rounded-md" />
            </div>
        </div>
    </section>
</template>