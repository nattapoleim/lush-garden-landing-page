<script setup>
  import Gal1Img from '@/assets/gallery/gal1.png';
  import Gal2Img from '@/assets/gallery/gal2.png';
  import Gal3Img from '@/assets/gallery/gal3.png';
  import Gal4Img from '@/assets/gallery/gal4.png';
  import Gal5Img from '@/assets/gallery/gal5.png';

  const galleryImg = {
    gal1: Gal1Img,
    gal2: Gal2Img,
    gal3: Gal3Img,
    gal4: Gal4Img,
    gal5: Gal5Img,
  };

  const imgHover = 'hover:scale-110 duration-300';
</script>

<template>
  <section class="mx-auto my-20 2xl:max-w-6xl">
    <h2 class="mb-10 text-3xl font-bold text-center text-primary">Our Gallery View</h2>
    <div class="grid gap-2 sm:grid-cols-3">
      <div class="overflow-hidden">
        <img
          class="object-cover h-full"
          :class="imgHover"
          :src="galleryImg.gal1"
          alt="gal1"
        />
      </div>
      <div class="grid grid-rows-2 gap-2">
        <div class="overflow-hidden">
          <img
            :class="imgHover"
            :src="galleryImg.gal2"
            alt="gal2"
          />
        </div>
        <div class="overflow-hidden">
          <img
            :class="imgHover"
            :src="galleryImg.gal3"
            alt="gal3"
          />
        </div>
      </div>
      <div class="grid grid-rows-2 gap-2">
        <div class="overflow-hidden">
          <img
            :class="imgHover"
            :src="galleryImg.gal4"
            alt="gal5"
          />
        </div>
        <div class="overflow-hidden">
          <img
            :class="imgHover"
            :src="galleryImg.gal5"
            alt="gal4"
          />
        </div>
      </div>
    </div>
  </section>
</template>
