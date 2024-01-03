<script setup>
  import IndoorPlant from '@/assets/about/indoor_Plant.webp';
  import IndoorSmall from '@/assets/about/indoor_Plant-small.webp';
  import OutdoorPlant from '@/assets/about/outdoor_Plant.png';
  import OutdoorSmall from '@/assets/about/outdoor_Plant-small.png';
  import Bamboo from '@/assets/about/Bamboo.webp';
  import BambooSmall from '@/assets/about/Bamboo-small.webp';

  const aboutContent = {
    header: 'We Help choose the most suitable plants for you',
    desc: "Our selection includes a wide variety of flowers, from classic roses to exotic orchids, as well as a variety of lush indoor and outdoor plants and also offer unique floral arrangements that are perfect for any occasion, whether you're looking to brighten up your home or send a thoughtful gift.",
    cards: [
      {
        color: 'white',
        icon: IndoorPlant,
        smIcon: IndoorSmall,
        title: 'Indoor Plants',
        content:
          'Bring the beauty of nature to your outdoor spaces with our wide selection of outdoor plants',
      },
      {
        color: 'green',
        icon: OutdoorPlant,
        smIcon: OutdoorSmall,
        title: 'Outdoor Plants',
        content:
          'Bring a touch of greenery to your living spaces with our collection of indoor plants, perfect for purifying the air and adding a natural touch to your home.',
      },
      {
        color: 'white',
        icon: Bamboo,
        smIcon: BambooSmall,
        title: 'Plants Pots',
        content:
          'Add a touch of style to your indoor or outdoor spaces with our collection of pots plants, available in a variety of sizes and designs to fit any decor',
      },
    ],
  };
</script>

<template>
  <section
    id="about"
    class="max-w-6xl px-5 py-20 mx-auto scroll-mt-16"
  >
    <div
      class="flex flex-col items-center justify-between gap-10 text-center lg:text-start lg:flex-row lg:gap-0"
    >
      <div class="w-2/3 text-3xl font-bold capitalize lg:w-4/12 text-primary">
        {{ aboutContent.header }}
      </div>
      <div class="w-2/3 lg:w-7/12">{{ aboutContent.desc }}</div>
    </div>

    <div class="grid gap-16 lg:grid-cols-3 mt-14">
      <base-card
        v-for="card in aboutContent.cards"
        :key="card.title"
        :icon="card.icon"
        :smIcon="card.smIcon"
        :color="card.color"
        :alt="card.title"
      >
        <template #title>{{ card.title }}</template>
        <template #content>{{ card.content }}</template>
      </base-card>
    </div>
  </section>
</template>
