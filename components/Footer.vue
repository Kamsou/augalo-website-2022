<template>
    <section class="bg-primary text-white text-[28px]">
        <div class="flex justify-between items-start px-[25px] py-[50px] flex-col lg:flex-row lg:px-[100px]">
            <div>
                <img class=" w-[70px] lg:w-[146px]" src="@/static/logo-white.png" alt="Portrait de Camille Coutens" />
            </div>

            <div class="mt-5 text-xl">
                <ul class="leading-[57px] font-primary">
                    <router-link to="/purchase">
                        <li>Achats</li>
                    </router-link>

                    <router-link to="/legal-notice">
                        <li>Mentions Légales</li>
                    </router-link>

                    <router-link to="/privacy-policy">
                        <li>Politique de confidentalité</li>
                    </router-link>
                </ul>
            </div>

            <div class="mt-7">
                <div class="flex gap-8 mb-16">
                    <a
                        href="https://www.facebook.com/augaloapp"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <img class="max-w-5xl lg:max-w-14 cursor-pointer" src="@/static/facebook.png" alt="Portrait de Camille Coutens" />
                   </a>
                   <a
                        href="https://www.instagram.com/augalo_app"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <img class="max-w-5xl lg:max-w-14 cursor-pointer" src="@/static/instagram.png" alt="Portrait de Camille Coutens" />
                    </a>
                </div>

                <div class="flex items-center gap-5">
                   <img class=" max-w-[24px] lg:max-w-14" src="@/static/contact.svg" alt="Portrait de Camille Coutens" />
                   <a href="mailto:contact@augalo.com" class="cursor-pointer text-[18px]">
                        contact@augalo.com
                   </a>
                </div>
            </div>
        </div>
        <div class="border-t-2 py-[35px] flex justify-center">
            <span class="text-[13px] lg:text-[28px]">Augalo | Tous droits réservés 2022</span>
        </div>
    </section>
</template>