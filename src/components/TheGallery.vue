<script setup>
  import Gal1Img from '@/assets/gallery/gal1.webp';
  import Gal2Img from '@/assets/gallery/gal2.webp';
  import Gal3Img from '@/assets/gallery/gal3.webp';
  import Gal4Img from '@/assets/gallery/gal4.webp';
  import Gal5Img from '@/assets/gallery/gal5.webp';
  import Gal1SmallImg from '@/assets/gallery/gal1-small.webp';
  import Gal2SmallImg from '@/assets/gallery/gal2-small.webp';
  import Gal3SmallImg from '@/assets/gallery/gal3-small.webp';
  import Gal4SmallImg from '@/assets/gallery/gal4-small.webp';
  import Gal5SmallImg from '@/assets/gallery/gal5-small.webp';

  const imgHover = 'hover:scale-110 duration-300 w-full h-full';
</script>

<template>
  <section class="mx-auto my-20 2xl:max-w-6xl">
    <h2 class="mb-10 text-3xl font-bold text-center text-primary">Our Gallery View</h2>
    <div class="grid gap-2 sm:grid-cols-3">
      <div class="overflow-hidden">
        <img
          class="object-cover h-full"
          :class="imgHover"
          v-lazy="{ src: Gal1Img, loading: Gal1SmallImg }"
          alt="gal1"
        />
      </div>
      <div class="grid grid-rows-2 gap-2">
        <div class="overflow-hidden">
          <img
            :class="imgHover"
            v-lazy="{ src: Gal2Img, loading: Gal2SmallImg }"
            alt="gal2"
          />
        </div>
        <div class="overflow-hidden">
          <img
            :class="imgHover"
            v-lazy="{ src: Gal3Img, loading: Gal3SmallImg }"
            alt="gal3"
          />
        </div>
      </div>
      <div class="grid grid-rows-2 gap-2">
        <div class="overflow-hidden">
          <img
            :class="imgHover"
            v-lazy="{ src: Gal4Img, loading: Gal4SmallImg }"
            alt="gal5"
          />
        </div>
        <div class="overflow-hidden">
          <img
            :class="imgHover"
            v-lazy="{ src: Gal5Img, loading: Gal5SmallImg }"
            alt="gal4"
          />
        </div>
      </div>
    </div>
  </section>
</template>
