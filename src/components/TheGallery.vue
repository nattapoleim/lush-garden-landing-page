<script setup>

  const galleryImg = {
    gal1: '/src/assets/gallery/gal1.png',
    gal2: '/src/assets/gallery/gal2.png',
    gal3: '/src/assets/gallery/gal3.png',
    gal4: '/src/assets/gallery/gal4.png',
    gal5: '/src/assets/gallery/gal5.png',
  }

</script>

<template>
  <section class="mx-auto my-20 2xl:max-w-6xl">
    <h2 class="mb-10 text-3xl font-bold text-center text-primary">Our Gallery View</h2>
    <div class="grid gap-2 sm:grid-cols-3">
      <div class="bg-red-300">
        <img class="object-cover h-full" :src="galleryImg.gal1" alt="gal1">
      </div>
      <div class="grid grid-rows-2 gap-2">
        <img :src="galleryImg.gal2" alt="gal2">
        <img :src="galleryImg.gal3" alt="gal3">
      </div>
      <div class="grid grid-rows-2 gap-2">
        <img :src="galleryImg.gal4" alt="gal5">
        <img :src="galleryImg.gal5" alt="gal4">
      </div>
    </div>
  </section>
</template>