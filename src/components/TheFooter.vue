<script setup>
  import { Instagram, Facebook, Linkedin } from 'lucide-vue-next';

  const footerLinks = [
    {
      href: '#home',
      title: 'Home',
    },
    {
      href: '#about',
      title: 'About Us',
    },
    {
      href: '#products',
      title: 'Products',
    },
    {
      href: '#delivery',
      title: 'Delivery',
    },
    {
      href: '#blogs',
      title: 'Blogs',
    },
    {
      href: '#contact',
      title: 'Contact',
    },
  ];
</script>

<template>
  <footer
    id="contact"
    class="relative overflow-hidden text-white bg-primary"
  >
    <div class="flex flex-col items-center justify-center gap-8 mt-20 mb-14">
      <h3 class="text-2xl font-bold">Feel free to contact us</h3>
      <div class="z-30 flex items-center gap-14">
        <a
          href="#"
          class="text-white rounded-full btn btn-circle btn-outline hover:bg-white hover:border-primary hover:text-primary"
        >
          <Instagram />
        </a>
        <a
          href="#"
          class="text-white rounded-full btn btn-circle btn-outline hover:bg-white hover:border-primary hover:text-primary"
        >
          <Linkedin />
        </a>
        <a
          href="#"
          class="text-white rounded-full btn btn-circle btn-outline hover:bg-white hover:border-primary hover:text-primary"
        >
          <Facebook />
        </a>
      </div>

      <div class="z-30 flex flex-wrap items-center justify-center gap-3 px-10 md:gap-12 md:px-0">
        <div
          v-for="(item, index) in footerLinks"
          :key="index"
          class="group"
        >
          <a :href="item.href">{{ item.title }}</a>
          <div class="w-0 h-[2px] bg-white group-hover:w-full duration-200"></div>
        </div>
      </div>
    </div>

    <div class="absolute right-20 -bottom-36">
      <img
        class="w-60 opacity-20"
        :src="'./src/assets/footer/footer2.png'"
        alt="footer1"
      />
    </div>

    <div class="absolute hidden md:block left-20 -bottom-36">
      <img
        class="opacity-20 w-60"
        :src="'./src/assets/footer/footer1.png'"
        alt="footer1"
      />
    </div>
  </footer>
  <div class="py-3 text-sm text-center bg-black text-slate-400">
    Designed from figma by Nait Creative & Ilman Murfihi.
  </div>
</template>
