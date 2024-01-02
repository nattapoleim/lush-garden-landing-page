<script setup>
  import TheNavbar from './TheNavbar.vue';
  import { PlayCircle } from 'lucide-vue-next';

  const heroContent = {
    head: "Nature's Beauty Delivered to You",
    desc: "Nature's beauty is just a click away with our online flower and plant shop. We offer a wide variety of flowers that will bring a touch of nature to your home!",
    btnBookNow: 'Book Now',
    btnVideo: 'Watch Video',
  };
</script>

<template>
  <section id="home">
    <div
      class="bg-[url('@/assets/hero-bg.png')] text-white bg-cover bg-no-repeat min-h-screen pb-10"
    >
      <TheNavbar />
      <div class="flex flex-col items-center gap-8 pt-40 text-center">
        <h1 class="text-5xl font-bold sm:text-6xl">{{ heroContent.head }}</h1>
        <p class="px-6 text-lg sm:px-0 sm:w-1/2">{{ heroContent.desc }}</p>
        <div class="flex flex-col items-center justify-center gap-5 sm:flex-row">
          <base-button
            color="green"
            class="w-48"
            >{{ heroContent.btnBookNow }}</base-button
          >
          <base-button
            color="white"
            class="w-48"
          >
            <PlayCircle /> {{ heroContent.btnVideo }}
          </base-button>
        </div>
      </div>
    </div>
  </section>
</template>
