<script setup>
  const benefitContent = [
    {
      img: '/src/assets/benefit/quality-product.png',
      title: 'Quality Product',
      desc: 'Our flowers are of the highest quality, carefully selected and sourced from reputable suppliers.',
    },
    {
      img: '/src/assets/benefit/always-fresh.png',
      title: 'Always Fresh',
      desc: 'Our flowers are handpicked and delivered promptly for maximum freshness and enjoyment.',
    },
    {
      img: '/src/assets/benefit/work-smart.png',
      title: 'Work Smart',
      desc: 'We use innovative techniques and technology to streamline our processes and provide efficient services.',
    },
    {
      img: '/src/assets/benefit/excelent-service.png',
      title: 'Excellent Service',
      desc: "We pride ourselves on providing excellent service, going above and beyond to meet our customers' needs.",
    },
  ]
</script>


<template>
  <section class="flex flex-col mx-auto my-20 lg:flex-row xl:max-w-6xl">
    <div class="flex-1">
      <img src="@/assets/benefit/benefit-img.png" alt="benefit-img">
    </div>

    <div class="grid flex-1 text-center sm:grid-cols-2 lg:text-start">
      <div v-for="(item, index) in benefitContent" :key="index"
        :class="['px-10 py-10 lg:py-5', index === 1 && 'bg-base-200', index === 2 && 'sm:bg-base-200', index === 3 && 'bg-base-200 sm:bg-base-100']">
        <div class="h-1/2">
          <img class="w-20 mx-auto lg:mx-0 lg:pt-5" :src="item.img" :alt="item.title">
        </div>
        <div class="mt-5 space-y-2 lg:mt-0">
          <div class="justify-center card-title lg:justify-start text-primary">{{ item.title }}</div>
          <p class="text-sm font-light">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>