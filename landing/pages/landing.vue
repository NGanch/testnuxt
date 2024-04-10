<template>

<!-- sm	640px	@media (min-width: 640px) { ... }

md	768px	@media (min-width: 768px) { ... }
lg	1024px	@media (min-width: 1024px) { ... }
xl	1280px	@media (min-width: 1280px) { ... }

2xl	1536px	@media (min-width: 1536px) { ... } -->

  <!-- section-1 -->
  <section class="mt-[49px]">
    <div class="container flex items-center justify-center">
      <div class="flex items-center justify-center">

        <div class="flex items-center flex-col lg:w-[50%] xl:w-[500px]">
          <h1
          class="mb-[20px] text-black text-[36px] font-[700] leading-[1.1] text-center
          lg:text-[48px]  lg:leading-[1.2] lg:text-left">
            Будь в темі <span class="text-orange-500">рекламних</span> кампаній своїх конкурентів!
          </h1>
          <p
          class="mb-[60px] text-black text-[14px] font-[400] leading-[1.3] text-left
          lg:text-body-mobile lg:leading-[1.5]">
            Відкрийте для себе рекламні кампанії своїх конкурентів і розробіть
            стратегію за допомогою найнадійнішого інструменту аналізу реклами на
            ринку.
          </p>

          <button
          class="p-[17px_20px] flex justify-center items-center text-center w-[300px] h-[56px] mr-[8px] px-[20px] py-3 bg-orange-500 bg-gradient-to-b from-yellow-400 to-orange-500 hover:to-amber-500 rounded-[100px] gap-2.5
        disabled:bg-surface-300 disabled:from-surface-300 disabled:to-surface-300">
           <p class="text-white text-[18px] font-medium font-['Ubuntu'] leading-[1.2] text-center">
            Почати
            </p>
          </button>
          <!-- <div class="w-[786px] h-[441.95px] rotate-[-27.67 deg] bg-[url('/assets/pictures/bg-blue.png')]">
          </div> -->
        </div>
        <div class="hidden lg:contents">
          <div class="flex justify-center items-center lg:w-[50%] lg:h-[400px] xl:w-[641px] xl:h-[610px] bg-[url('/assets/pictures/hero.png')] bg-center bg-cover bg-no-repeat">
            <Alligator />
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- section-1 -->

  <!-- section-2 -->
  <section class="mt-[60px] md:mt-[90px] lg:mt-[180px]">
    <div class="flex flex-col gap-[30px] md:gap-[60px] xl:flex-row xl:items-center xl:gap-[140px]">

      <img
        class="w-[317px] h-[210px] self-start lg:w-[620px] lg:h-[417px]"
        src="../assets/pictures/devise-info.png"
        alt="devise-info"
        @click="scrollToTop"
        loading="lazy"
      />

      <div class=" ml-auto mr-auto xl:ml-0 xl:mr-auto pl-[15px] pr-[15px] xl:w-[582px]">

        <h2
        class="mb-[60px] text-black text-[36px] font-[700] leading-[1.1] text-center
         lg:text-[48px]  lg:leading-[1.2] lg:text-left">
          Ми маємо для вас
        </h2>

        <ul class="flex flex-col  gap-[20px] md:gap-[30px] lg:gap-[40px] w-[317px] md:w-[100%] xl:w-[582px]">
          <li class="flex flex-row  gap-[15px] lg:gap-[30px]">
            <div class="pi pi-search text-[25px] lg:text-[32px] text-orange-500"></div>
            <div>
              <h3
                class="mb-[19px] text-black text-[18px] font-[700] leading-[2]
                lg:text-[20px] lg:leading-[1.3] text-left">
                Зручний пошук
              </h3>

              <p
                class="text-black text-[14px] font-[400] leading-[1.3] text-left
                lg:text-body-mobile lg:leading-[1.5]">
                Легко шукайте та фільтруйте оголошення за типом оголошення,
                країною, форматом, галуззю, датою та іншими критеріями.
              </p>
            </div>
          </li>
          <li class="flex gap-[15px] lg:gap-[30px]">
            <div class="pi pi-folder-open text-[25px] lg:text-[32px] text-orange-500"></div>
       
            <div>
              <h3
                class="mb-[19px] text-black text-[18px] font-[700] leading-[2]
                lg:text-[20px] lg:leading-[1.3] text-left">
                Велику базу даних
              </h3>
              <p
                class="text-black text-[14px] font-[400] leading-[1.3] text-left
                lg:text-body-mobile lg:leading-[1.5]">
                Щоденні тренди оголошень, відібраних нашою потужною аналітикою
                великих даних і інтелектуальними алгоритмами.
              </p>
            </div>
          </li>
          <li class="flex gap-[15px] lg:gap-[30px]">
            <div class="w-[25px] h-[25px] lg:w-[32px] lg:h-[32px]">
              <PencilSimpleLine />
            </div>
      
            <div>
              <h3
                class="mb-[19px] text-black text-[18px] font-[700] leading-[2]
                lg:text-[20px] lg:leading-[1.3] text-left">
                Інформативний блог
              </h3>
              <p
                class="text-black text-[14px] font-[400] leading-[1.3] text-left
                lg:text-body-mobile lg:leading-[1.5]">
                Корисні статті про афілейований маркетинг, прив’язку трафіку та
                багато іншого.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <!-- section-2 -->


  <!-- section-3 -->
  <section class="mt-[60px] md:mt-[90px] lg:mt-[197px]">
    <div class="container">
      <div class="flex justify-center items-center flex-col gap-[30px] xl:flex-row">
        <!-- Ліва колонка -->
        <div class="flex flex-col md:flex-row xl:flex-col items-center gap-[30px]">
          <div
            class="shadow-custom-green bg-surface-100 w-[317px] md:w-[350px] lg:w-[410px] h-[170px] md:h-[180px] lg:h-[200px] rounded-[20px]">
            <h3
              class="p-[25px_0_25px_30px] lg:p-[31px_0_32px_30px] text-surface-900 text-[18px] font-[700] leading-[2]
                lg:text-[20px] lg:leading-[1.3] text-left">
              Креативів є
            </h3>
            <h1
              class="text-green-700 text-[36px] lg:text-[48px] font-[700] leading-[1.1] text-center">
              1.21 + В
            </h1>
          </div>

          <div
          class="shadow-custom-green bg-surface-100 w-[317px] md:w-[350px] lg:w-[410px] h-[170px] md:h-[180px] lg:h-[200px] rounded-[20px] shadow-xs">
            <h3
            class="p-[25px_0_25px_30px] lg:p-[31px_0_32px_30px] text-surface-900 text-[18px] font-[700] leading-[2]
                lg:text-[20px] lg:leading-[1.3] text-left">
              Додано за місяць
            </h3>
            <h1
            class="text-green-700 text-[36px] lg:text-[48px] font-[700] leading-[1.1] text-center">
              39 + М
            </h1>
          </div>
        </div>
        <!-- Центральна колонка -->
        <div
          class="flex flex-col items-center pt-[40px] pb-[20px] relative bg-white
          w-[317px] lg:w-[410px] lg:h-[516px] rounded-[20px] shadow-xs">
          <h2
            class="mb-[21px] text-black text-[36px] lg:text-[48px] font-[700] leading-[1.1] text-center">
            Креативи
          </h2>
          <p
            class="lg:w-[283px] m-[0_30px_29px_30px]  lg:m-[0_64px_29px_64px] text-black text-[14px] lg:text-body-mobile font-[400] leading-[1.5] text-center">
            Колекція оголошень для різних ніш та воронок
          </p>
          <div class="w-[317px] lg:w-[352px] lg:h-[276px]">
            <Creatives />
          </div>
     <div class="absolute w-[36px] h-[36px] lg:w-[56px] lg:h-[56px]">
      <ArrowUpRight class="absolute w-[36px] h-[36px] lg:w-[56px] lg:h-[56px] top-[22rem] ml-[124px] lg:top-[25rem] lg:ml-[150px]" />
     </div>

        </div>
        <!-- Права колонка -->
        <div class="flex flex-col md:flex-row xl:flex-col items-center gap-[30px]">
          <div
          class="shadow-custom-green bg-surface-100 w-[317px] md:w-[350px] lg:w-[410px] h-[170px] md:h-[180px] lg:h-[200px] rounded-[20px] shadow-xs">
            <h3
            class="p-[25px_0_25px_30px] lg:p-[31px_0_32px_30px] text-surface-900 text-[18px] font-[700] leading-[2]
                lg:text-[20px] lg:leading-[1.3] text-left">
              Додано за тиждень
            </h3>
            <h1
            class="text-green-700 text-[36px] lg:text-[48px] font-[700] leading-[1.1] text-center">
              9 + М
            </h1>
          </div>

          <div
          class="shadow-custom-green bg-surface-100 w-[317px] md:w-[350px] lg:w-[410px] h-[170px] md:h-[180px] lg:h-[200px] rounded-[20px] shadow-xs">
            <h3
            class="p-[25px_0_25px_30px] lg:p-[31px_0_32px_30px] text-surface-900 text-[18px] font-[700] leading-[2]
                lg:text-[20px] lg:leading-[1.3] text-left">
              Креативів застосунків
            </h3>
            <h1
            class="text-green-700 text-[36px] lg:text-[48px] font-[700] leading-[1.1] text-center">
              37 + М
            </h1>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- section-3 -->

  <!-- section-4 -->
  <section class="mt-[60px] md:mt-[90px] lg:mt-[217px]">
    <div class="container">
      <div class="flex justify-center items-center flex-col gap-[30px] xl:flex-row">
        <!-- Ліва колонка -->
        <div class="flex flex-col md:flex-row xl:flex-col items-center gap-[30px]">
          <div
          class="shadow-custom-orange bg-surface-100 w-[317px] md:w-[350px] lg:w-[410px] h-[170px] md:h-[180px] lg:h-[200px] rounded-[20px] shadow-xs">
            <h3
            class="p-[25px_0_25px_30px] lg:p-[31px_0_32px_30px] text-surface-900 text-[18px] font-[700] leading-[2]
                lg:text-[20px] lg:leading-[1.3] text-left">
              Усього просувалося
            </h3>
            <h1
              class="text-orange-500 text-[36px] lg:text-[48px] font-[700] leading-[1.1] text-center">
              398 + К
            </h1>
          </div>

          <div
          class="shadow-custom-orange bg-surface-100 w-[317px] md:w-[350px] lg:w-[410px] h-[170px] md:h-[180px] lg:h-[200px] rounded-[20px] shadow-xs">
            <h3
            class="p-[25px_0_25px_30px] lg:p-[31px_0_32px_30px] text-surface-900 text-[18px] font-[700] leading-[2]
                lg:text-[20px] lg:leading-[1.3] text-left">
              Просувалося за місяць
            </h3>
            <h1
            class="text-orange-500 text-[36px] lg:text-[48px] font-[700] leading-[1.1] text-center">
              12 + К
            </h1>
          </div>
        </div>
        <!-- Центральна колонка -->
        <div
        class="flex flex-col items-center pt-[40px] pb-[20px] relative bg-white
          w-[317px] lg:w-[410px] lg:h-[516px] rounded-[20px] shadow-xs">
          <h2
          class="mb-[21px] text-black text-[36px] lg:text-[48px] font-[700] leading-[1.1] text-center">
            Програми
          </h2>
          <p
          class="lg:w-[283px] m-[0_30px_29px_30px]  lg:m-[0_64px_29px_64px] text-black text-[14px] lg:text-body-mobile font-[400] leading-[1.5] text-center">
            Відкривайте для себе рекламу по додатках
          </p>
          <div class="w-[317px] lg:w-[352px] lg:h-[276px]">
            <Program />
          </div>
          <div class="absolute w-[36px] h-[36px] lg:w-[56px] lg:h-[56px]">
      <ArrowUpRight class="absolute w-[36px] h-[36px] lg:w-[56px] lg:h-[56px] top-[22rem] ml-[124px] lg:top-[25rem] lg:ml-[150px]" />
     </div>
        </div>
        <!-- Права колонка -->
        <div class="flex flex-col md:flex-row xl:flex-col items-center gap-[30px]">
          <div
          class="shadow-custom-orange bg-surface-100 w-[317px] md:w-[350px] lg:w-[410px] h-[170px] md:h-[180px] lg:h-[200px] rounded-[20px] shadow-xs">
            <h3
            class="p-[25px_0_25px_30px] lg:p-[31px_0_32px_30px] text-surface-900 text-[18px] font-[700] leading-[2]
                lg:text-[20px] lg:leading-[1.3] text-left">
              IOS-застосунків
            </h3>
            <h1
            class="text-orange-500 text-[36px] lg:text-[48px] font-[700] leading-[1.1] text-center">
              108 + К
            </h1>
          </div>
          <div
          class="shadow-custom-orange bg-surface-100 w-[317px] md:w-[350px] lg:w-[410px] h-[170px] md:h-[180px] lg:h-[200px] rounded-[20px] shadow-xs">
            <h3
            class="p-[25px_0_25px_30px] lg:p-[31px_0_32px_30px] text-surface-900 text-[18px] font-[700] leading-[2]
                lg:text-[20px] lg:leading-[1.3] text-left">
              Android-застосунків
            </h3>
            <h1
            class="text-orange-500 text-[36px] lg:text-[48px] font-[700] leading-[1.1] text-center">
              298 + К
            </h1>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- section-4 -->

  <!-- section-5 -->
  <section class="mt-[60px] md:mt-[90px] lg:mt-[192px] p-[40px_0_55px_0] lg:p-[60px_0_62px_0] bg-[#F8F8FA] rounded-[20px]">
    <div class="container">
      <h2
        class="mb-[62px] text-black text-[36px] lg:text-[48px] font-[700] leading-[1.1] lg:leading-[1.2] text-center">
        Загальна статистика
      </h2>

      <div class="flex flex-col lg:flex-row gap-[40px] lg:gap-[80px] items-end relative">
        <ArrowBig class="
        absolute rotate-[-61deg] top-[9.5rem] left-[-0.5rem] w-[272px]
        sm:rotate-[-55deg] sm:top-[9.5rem] sm-[6.5rem] sm:w-[350px]
        md:rotate-[-48deg] md:top-[10.5rem] md:left-[8.5rem] md:w-[460px]
        lg:rotate-[-10deg]  lg:top-[-2.5rem]  lg:left-[6.5rem]" />
        <div class="shadow-custom-green bg-green-700 w-[232px] h-[156px] lg:w-[240px] lg:h-[170px] xl:w-[330px] xl:h-[220px] rounded-[20px]">
          <h3
            class="p-[28px_47px_16px_47px] xl:p-[91px_70px_12px_70px] text-white text-[36px] xl:text-[48px] font-[700] leading-[1.1] text-center">
            2.95 + В
          </h3>
          <p
            class="text-white text-body-mobile font-[400] leading-[1.5] text-center">
            Медіа доступно для завантаження
          </p>
        </div>

        <div class="shadow-custom-green bg-white w-[274px] h-[158px] lg:w-[300px] lg:h-[190px] xl:w-[360px] xl:h-[300px] rounded-[20px]">
          <h3
            class="p-[40px_53px_16px_53px] xl:p-[171px_68px_12px_68px] text-green-700 text-[36px] xl:text-[48px] font-[700] leading-[1.1] text-center">
            1130 + ТВ
          </h3>
          <p
            class="text-green-700 text-body-mobile font-[400] leading-[1.5] text-center">
            Займають усі медіафайли
          </p>
        </div>

        <div
          class="shadow-custom-green flex flex-col items-center bg-[#CAF1D8] w-[317px] xl:w-[440px] h-[293px] lg:h-[316px] xl:h-[398px] rounded-[20px]">
          <Inspired class="w-[106px] h-[118px] xl:w-[177px] xl:h-[198px] m-[30px_0_17px_0] xl:m-[30px_0_17px_0]" />
          <p
            class="m-[0_15px_9px_15px] lg:m-[0_60px_20px_60px] w-[319px] text-surface-900 text-body-mobile font-[400] leading-[1.5] text-center">
            Надихайтеся, вивчайте, та адаптуйте кращі підходи в рекламі
          </p>

          <button
          class="p-[17px_20px] flex justify-center items-center text-center w-[274px] lg:w-[300px] h-[56px] mr-[8px] px-[20px] py-3 bg-orange-500 bg-gradient-to-b from-yellow-400 to-orange-500 hover:to-amber-500 rounded-[100px] gap-2.5
        disabled:bg-surface-300 disabled:from-surface-300 disabled:to-surface-300">
           <p class="text-white text-[18px] font-medium font-['Ubuntu'] leading-[1.2] text-center">
            Почати
            </p>
          </button>
        </div>
      </div>
    </div>
  </section>
  <!-- section-5 -->

  <!-- section-6 -->
  <section class="mt-[60px] md:mt-[90px] lg:mt-[200px]">
    <div class="container">
      <!-- <div class="flex justify-between items-center mb-[60px]"> -->
        <div class="flex flex-col items-center">
        <h2 
        class="mb-[62px] xl:mb-0 xl:self-start text-black text-[36px] lg:text-[48px] font-[700] leading-[1.1] lg:leading-[1.2] text-center lg:text-left">
          Останні пошуки
        </h2>
      <!-- </div> -->
      <div class="flex items-center flex-col xl:flex-col-reverse xl:gap-[62px]">
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <SearchCard v-for="index in 8" :key="index" />
      </div>

        <button
          class="mt-[60px] xl:mt-[0px] flex gap-[10px] items-center self-center xl:self-end h-[21px] text-[#F52222] text-[18px] font-[400] leading-[1.5] text-center">
          Очистити історію
          <Cancel />
        </button>
      </div>
    </div>
          </div>
  </section>
  <!-- section-6 -->

    <!-- section-7 -->
    <section class="mt-[60px] md:mt-[90px] lg:mt-[200px] mb-[60px] md:mb-[90px] lg:mb-[200px]">
    <div class="container">
      <!-- <div class="flex justify-between items-center mb-[60px]"> -->
        <div class="flex flex-col justify-center items-center">
        <h2 
        class="mb-[62px] xl:mb-0 xl:self-start text-black text-[36px] lg:text-[48px] font-[700] leading-[1.1] lg:leading-[1.2] text-center lg:text-left">
          Відгуки наших користувачів
        </h2>
        <div class="xl:flex xl:flex-col-reverse xl:gap-[62px]">
      <div
        class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

        <ResponseCard v-for="index in 3" :key="index" />
      </div>
      <ul class="mt-[60px] xl:mt-[0px] flex items-center justify-center xl:self-end gap-[30px]">
          <li>
            <button
          class="flex justify-center items-center w-[42px] h-[42px] p-[10.5px_0px] rounded-[10px] border-green-800 border-[1px]">
        <ArrowRight />
        </button>
          </li>

          <li>
            <button
          class="flex justify-center items-center  w-[42px] h-[42px] p-[10.5px_0px] rounded-[10px] border-green-800 border-[1px] rotate-[-180deg]">
        <ArrowRight />
        </button>
          </li>
        </ul>
        </div>
      </div>
    </div>
  </section>
  <!-- section-7 -->
</template>

<script>
import 'primeicons/primeicons.css'
// Імпорт компонента із іконкою
import MagnifyingGlass from "@/assets/icons/MagnifyingGlass.vue";
import FolderOpen from "@/assets/icons/FolderOpen.vue";
import PencilSimpleLine from "@/assets/icons/PencilSimpleLine.vue";

import Creatives from "@/assets/icons/Creatives.vue";
import Program from "@/assets/icons/Program.vue";
import ArrowUpRight from "@/assets/icons/ArrowUpRight.vue";

import Inspired from "@/assets/icons/Inspired.vue";
import ArrowBig from "@/assets/icons/ArrowBig.vue";
import Cancel from "@/assets/icons/Cancel.vue";
import ArrowRight from "@/assets/icons/ArrowRight.vue";
import Alligator from "@/assets/icons/Alligator.vue";

// Імпорт компонент
import Button from "~/components/Button.vue";
import SearchCard from "~/components/SearchCard.vue";
import ResponseCard from "~/components/ResponseCard.vue";


export default {
  components: {
    MagnifyingGlass, 
    FolderOpen,
    PencilSimpleLine,
    Creatives,
    Program,
    ArrowUpRight,
    Inspired,
    ArrowBig,
    Cancel,
    ArrowRight,
    Alligator
  },
};
</script>

<style lang="scss">
/* Ваші стилі тут */
.section {
  margin-top: 24px;
  margin-bottom: 100px;
}

.container {
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  min-width: 320px;
  max-width: 347px;

  // 'tablet'
  // @media screen and (min-width: 640px) {
  //   padding-left: 15px;
  //   padding-right: 15px;
  //   max-width: 798px;
  // }
  @media screen and (max-width: 768px) {
    padding-left: 15px;
    padding-right: 15px;
    max-width: 798px;
  }
  // 'laptop'
  // @media screen and (max-width: 1280px) {
  //   padding-left: 15px;
  //   padding-right: 15px;
  //   max-width: 798px;
  // }
  // 'desktop'
  @media screen and (max-width: 1440px) {
    padding-left: 15px;
    padding-right: 15px;
    max-width: 1320px;
  }
}

.icon {
  width: 42px;
  height: 42px;
  fill: #188a42; 
  padding: 3.9px;
}
.shadow-custom-green {
  box-shadow: 
    0px 2px 4px 0px #307C3B1A,
    0px 8px 8px 0px #307C3B17,
    0px 18px 11px 0px #307C3B0D,
    0px 31px 13px 0px #307C3B03,
    0px 49px 14px 0px #307C3B00;
}

.shadow-custom-orange {
  box-shadow: 
    0px 8px 8px 0px #FD7E1417,
    0px 18px 11px 0px #FD7E140D,
    0px 31px 13px 0px #FD7E1403,
    0px 49px 14px 0px #FD7E1400,
    0px 4px 4px 0px #00000040;
}

</style>
