<template>
    <section class="relative ml-5 z-10 lg:ml-24">
        <div class="flex absolute top-0 justify-between w-full mt-[2.1vh]">
            <img class="w-[107px] lg:w-[214px]" src="@/static/logo-black.png" alt="Logo Augalo" />
            <div class="flex items-center lg:mr-28">
                <img class="mr-5" src="@/static/contact.svg" alt="Icone message envoyé" />
                <span class="hidden lg:block text-white text-[28px]">contact@augalo.com</span>
            </div>
        </div>

        <div class="flex">
            <div class="absolute top-1/2 -translate-y-2/4 lg:-translate-y-3/4">
                <h1 class="text-xl leading-5 max-w-[190px] font-primary font-bold lg:text-[70px] lg:leading-[66px] lg:max-w-[660px]">Espace 
                    <span class="text-primary">incontournable</span> pour les cavaliers
                </h1>
                <p class="text-sm max-w-[180px] mt-3 lg:text-[28px] lg:max-w-[463px] lg:mt-6">Pour t'entrainer à la théorie des Galops</p>
                <div class="flex flex-col gap-2 mt-6 lg:mt-[100px] lg:gap-7 lg:flex-row">
                    <img class="w-[112px] lg:w-[205px]" src="@/static/apple-store.png" alt="Bouton disponible sur App Store" />
                    <img class="w-[112px] lg:w-[205px]" src="@/static/play-store.png" alt="Bouton disponible sur Google Play Store" />
                </div>
            </div>

            <div class="w-[70vw] ml-auto lg:max-w-[900px]">
                <img class="w-full block lg:hidden" src="@/static/hero-mobile.png" alt="Mockup téléphone qui montre l'application" />
                <img class="w-full hidden lg:block" src="@/static/hero.png" alt="Mockup téléphone qui montre l'application" />
            </div>
        </div>
    </section>
</template>