<script setup>
  import JessicaImg from '@/assets/testimonial/jessica-watson.webp';
  import KateImg from '@/assets/testimonial/kate-szu.webp';
  import GraceImg from '@/assets/testimonial/grace.webp';
  import JessicaSmallImg from '@/assets/testimonial/jessica-watson-small.webp';
  import KateSmallImg from '@/assets/testimonial/kate-szu-small.webp';
  import GraceSmallImg from '@/assets/testimonial/grace-small.webp';

  const testimonailContent = [
    {
      profile: JessicaImg,
      profileSmall: JessicaSmallImg,
      name: 'Jessica Watson',
      review:
        '“ Highly recommend this website for quality flowers and plants. Great prices, timely delivery and excellent customer service. ”',
    },
    {
      profile: KateImg,
      profileSmall: KateSmallImg,
      name: 'Kate Szu',
      review: '"Great service, beautiful flowers, timely delivery. Highly recommend."',
    },
    {
      profile: GraceImg,
      profileSmall: GraceSmallImg,
      name: 'Grace',
      review:
        '"I am very happy with my purchase from this website, the plants were healthy and arrived on time.”',
    },
  ];
</script>

<template>
  <section class="max-w-5xl mx-auto my-20">
    <h2 class="mb-10 text-3xl font-bold text-center capitalize text-primary">
      What do they say about us
    </h2>
    <div
      class="flex flex-col items-center justify-between px-10 lg:px-0 lg:items-stretch lg:flex-row gap-14"
    >
      <div
        v-for="(person, index) in testimonailContent"
        :key="index"
        class="flex-1 max-w-sm px-10 pt-5 pb-20 duration-300 shadow-xl rounded-xl bg-base-200/40 hover:-translate-y-5 hover:shadow-2xl"
      >
        <div class="flex items-center justify-between gap-4 mb-7">
          <img
            class="w-16"
            v-lazy="{ src: person.profile, loading: person.profileSmall }"
            :alt="person.name"
          />
          <h3 class="flex-1 text-xl font-bold text-primary">{{ person.name }}</h3>
        </div>
        <div class="font-light">{{ person.review }}</div>
      </div>
    </div>
  </section>
</template>
