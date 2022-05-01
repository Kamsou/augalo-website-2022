<template>
    <section>
        <div>
            <router-link to="/">
                <img class="w-[107px] lg:w-[150px] ml-5 mt-5" src="@/static/logo-black.png" alt="Logo Augalo" />
            </router-link>

            <h1 class="text-3xl lg:text-5xl font-primary text-center pt-8 font-bold mt-20">Achats</h1>

            <div class="flex flex-col mx-5 justify-center items-center gap-5 text-center my-10 text-xl lg:flex-row">
                <div class="bg-primary text-white p-8">
                    <span>Gratuit</span>
                    <p class="font-primary font-bold text-4xl my-7">0€</p>
                    <span>Pack de 10 questions par Galop</span>
                </div>

                <div class="bg-primary text-white p-8">
                    <span>Premium</span>
                    <p class="font-primary font-bold text-4xl my-7">2,99€</p>
                    <span>Pack de 30 questions par Galop</span>
                </div>
            </div>

            <div class="relative mt-20 h-[70px] w-[200px] mx-auto cursor-pointer">
                <button class=" bg-black absolute z-10 text-white rounded-md w-full h-[50px] text-[25px]">
                    <router-link to="/">
                        Retour
                    </router-link>
                </button>
                
                <div class="absolute top-2 left-2 z-0 w-full bg-gray-300 h-[50px] rounded-md" />
            </div>
        </div>
    </section>
</template>