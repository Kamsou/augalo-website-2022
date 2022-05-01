<template>
    <section>
        <div>
            <router-link to="/">
                <img class="w-[107px] lg:w-[150px] ml-5 mt-5" src="@/static/logo-black.png" alt="Logo Augalo" />
            </router-link>

            <h1 class="text-3xl lg:text-5xl font-primary text-center pt-8 font-bold mt-20">Legal notice</h1>

            <div class="px-5 mx-auto max-w-[800px] mt-32">
                <span class="text-2xl font-primary">Site et Application</span>
                <p class="description">Site internet (ci-après « le Site ») : désigne le site https://augalo.com/
                    Application mobile (ci-après l’« Application ») : désigne l’applications mobile Augalo, disponible pour les smartphones sous iOS (Apple Store) et Android (Play Store).</p>
                </div>
                <div class="px-5 max-w-[800px] mx-auto">
                    <p class="text-2xl font-primary mt-10">Éditeur</p>
                    <p class="description">Camille Coutens, EI dont le siège social est situé au 12 rue Céline Robert - 94300 Vincennes / France, représentée par Camille Coutens. Courriel de contact : contact@augalo.com</p>
                    <div class="mt-10">
                        <span class="text-2xl font-primary">Hébergeur</span>
                        <p class="description">Le Site est hébergé par o2Switch, dont le siège est situé 222-224 Boulevard Gustave Flaubert 63000 Clermont-Ferrand Les données de l’application sont hébergées dans une base de donnée sur la plateforme Heroku et sont aussi consultables par les développeurs sur Mongo DB Atlas</p>
                    </div>
                    <p class="text-2xl font-primary mt-10">Délégué à la protection des données (DPO)</p>
                    <p class="description">Les informations concernant la collecte et le traitement des données personnelles sont fournies dans la Politique de confidentialité.</p>
                </div>

                <div class="px-5 max-w-[800px] mx-auto mt-10">
                    <span class="text-2xl font-primary">Illustrations</span>
                    <p class="description">Les illustrations de la section utilisateur on été créés par macrovector - www.freepik.com</p>
                </div>
            </div>

            <div class="relative my-20 h-[70px] w-[200px] mx-auto cursor-pointer">
                <button class=" bg-black absolute z-10 text-white rounded-md w-full h-[50px] text-[25px]">
                    <router-link to="/">
                        Retour
                    </router-link>
                </button>
                
                <div class="absolute top-2 left-2 z-0 w-full bg-gray-300 h-[50px] rounded-md" />
            </div>
    </section>
</template>