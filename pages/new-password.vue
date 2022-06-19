<script>
  import axios from 'axios'
  import { ref, onMounted, useRoute } from '@nuxtjs/composition-api'

  export default {
    setup() {

      const route = useRoute()
      const password = ref('')
      const message = ref(null)
      const fetching = ref(false)
      const success = ref(false)
      const error = ref(false)
      const translationsMessage = {
        "Password updated success": "Ton nouveau mot de passe a bien été enregistré",
        "Try again, session expired": "Votre demande de nouveau mot de passe a expiré, veuillez refaire une demande",
        'Password is too short!': 'Ton mot de passe est trop court'
      }

      const updatePassword = () => {
        message.value = null
        fetching.value = true
        axios.post('https://desolate-brushlands-18721.herokuapp.com/api/user/new-password', {
          password: password.value,
          token: route.value.query.token,
        }).then((response) => {
          message.value = translationsMessage[response.data]
          fetching.value = false
          success.value = true
        }).catch((err) => {
          message.value = translationsMessage[err.response.data]
          fetching.value = false
        })
      }

      onMounted(() => {
        if (route.value.query.token) return

        error.value = 'Votre demande de nouveau mot de passe a expiré, veuillez refaire une demande'
      })

      return { updatePassword, password, message, fetching, success, error }
    }
  }
</script>
<template>
<client-only>
  <div class="wrapper">
    <div v-if="error">
      <p class="title">{{error}}</p>
    </div>
    <div v-if="!error">
     <img class="w-[107px] lg:w-[130px] mb-6" src="@/static/logo-black.png" alt="Logo Augalo" />
    <div>
      <p class="title">Mot de passe oublié ?</p>
      <p class="description">Entrez votre nouveau mot de passe pour pouvoir vous reconnectez sur l'application Augalo.</p>
      <input v-if="!success" v-model="password" class="inputPassword mt-3" type="text" placeholder="Nouveau mot de passe" />
      <p class="message">{{ message }}</p>
      <a v-if="success" href="https://testflight.apple.com/join/dQqe2mfA">
        <button class="submit">
          Revenir sur l'application
        </button>
      </a>
      <button v-if="!success" :class="[{submitDisabled: fetching}]" @click="updatePassword">
        <span v-if="!fetching">Valider</span>
        <div v-else id="loading"></div>
      </button>
    </div>
    </div>
  </div>
  </client-only>
</template>

<style scoped>

a {
  text-decoration: none;
}
.wrapper {
  padding: 50px 30px;
  color: #000;
  text-align: center;
}

.header {
  text-align: center;
  padding-top: 5.86vw;

  @media screen and (min-width: 1280px) {
    padding-top: 51px;
  }
}

.header  img {
    width: 19.46vw;
    height: 9.33vw;

    @media screen and (min-width: 1280px) {
      width: 190px;
      height: 91px;
    }
  }
.title {
  font-size: 6vw;
  letter-spacing: -0.4vw;
  line-height: 7vw;
  font-weight: bold;

  @media screen and (min-width: 1280px) {
    font-size: 3vw;
    letter-spacing: -0.2vw;
    margin: 0;
  }
}

.description {
  font-size: 4.4vw;
  line-height: 6vw;

  @media screen and (min-width: 1280px) {
    font-size: 1.5vw;
    line-height: 2vw;
    width: 50vw;
    margin: 0 auto 20px;
  }
}

.inputPassword {
  width: 80vw;
  font-size: 4vw;
  text-align: center;
  height: 14vw;
  border-radius: 26.66vw;
  border: 1px solid #000000;

  @media screen and (min-width: 1280px) {
    width: 50vw;
    height: 5vw;
    font-size: 2vw;
  }
}

.inputPassword::placeholder {
    color: rgb(148, 148, 148);
    font-style: italic;
  }

.message {
  font-size: 3vw;
  color: #000000;
  font-weight: bold;

  @media screen and (min-width: 1280px) {
    font-size: 1vw;
    line-height: 1.5vw;
  }
}

button {
  display: block;
  background-color: #000000;
  border: none;
  color: #ffffff;
  width: 40.53vw;
  height: 11vw;
  border-radius: 26.66vw;
  font-size: 3.4vw;
  font-weight: 700;
  cursor: pointer;
  margin: 30px auto 0;

  @media screen and (min-width: 1280px) {
    width: 303px;
    height: 59px;
    font-size: 24px;
  }
}

.submit {
  width: 53vw;
}


#loading {
  display: inline-block;
  width: 6.66vw;
  height: 6.66vw;
  border: 3px solid rgba(255,255,255,.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}
@-webkit-keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}

.submitDisabled {
  pointer-events: none;
}
</style>