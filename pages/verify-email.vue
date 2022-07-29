
<script>
  import axios from 'axios'
  import { ref, onMounted, useRoute, computed } from '@nuxtjs/composition-api'

  export default {
    setup() {
      const route = useRoute()
      const message = ref(null)
      const translationsMessage = {
        "Invalid link": "Votre demande a expiré, veuillez refaire une demande en vous connectant sur l'application Augalo",
        "User verification not found!": "Votre demande a expiré, veuillez refaire une demande en vous connectant sur l'application Augalo"
      }
      const isAndroid = computed(() => navigator.userAgent.match(/Android/i))
      const isIos = computed(() => navigator.userAgent.match(/iPhone|iPad|iPod/i))

      const checkIdAndToken = () => {
        axios.get(`https://desolate-brushlands-18721.herokuapp.com/api/user/${route.value.query.id}/verify/${route.value.query.token}`).then((response) => {
        }).catch((error) => {
          console.log(translationsMessage[error.response.data]);
          message.value = translationsMessage[error.response.data]

        })
      }

      function redirectToApp() {
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

      onMounted(() => {
        checkIdAndToken()
      })

      return {redirectToApp, message}
    }
  }
</script>
<template>
  <client-only>
    <div class="wrapper font-primary">
      <router-link to="/">
        <img
          class="w-[90px] lg:w-[90px] ml-auto md:ml-2 mt-2 mx-auto"
          src="@/static/logo-black.png"
          alt="Logo Augalo"
        />
      </router-link>
      <div class="center-block w-[85%] md:w-[60%]">
        <div class="w-full">
          <div v-if="!message">
            <p class="mt-8">Ton email a été vérifié</p>
            <img class="w-12 h-12 mx-auto block my-5" src="@/static/white-check.png" alt="Check Blanc" />
            <p class="max-w-[68%] mx-auto">Tu peux maintenant te connecter sur ton compte Augalo</p>
          </div>
          <div v-if="message">
            <p>{{message}}</p>
          </div>
          <button class=" border-2 p-2 mt-7 mb-8" @click="redirectToApp">Aller sur Augalo</button>
        </div>
      </div>
    </div>
  </client-only>
</template>

<style scoped>
.wrapper {
  padding: 50px 30px;
  color: #000;
  text-align: center;
  background-color: #28a59b; 
  height: 100vh;
  color: #ffffff;
}

.center-block {
  position: absolute;
  background-color: #2CBBB0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
}


</style>