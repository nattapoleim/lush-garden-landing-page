<script setup>
  import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

  import { Menu } from 'lucide-vue-next';

  const isMenuOpen = ref(false)
  const scrollY = ref(0);

  const handleMenuItemClick = () => {
    isMenuOpen.value = false
  }


  const navbarList = [
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
      href: '#contact',
      title: 'Contact',
    },
  ]

  const shouldShowBackground = computed(() => scrollY.value > 0);

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    scrollY.value = window.scrollY;
  };


</script>


<template>
  <nav class="z-50 duration-300" :class="{ 'fixed  top-0 left-0 right-0 bg-primary': shouldShowBackground }">
    <nav class="max-w-6xl pt-10 mx-auto duration-300 navbar" :class="{ 'pt-2': shouldShowBackground }">
      <div class="navbar-start">
        <img src="@/assets/logo.svg" alt="logo" class="w-20">
      </div>

      <div class="hidden gap-14 navbar-end md:flex">
        <div v-for="item in navbarList" :key="item.href" class="flex-shrink-0 group">
          <a :href="item.href" class="">{{ item.title }}</a>
          <div class="w-0 h-[2px] bg-white group-hover:w-full duration-200"></div>
        </div>

        <div>
          <a href="#callus">
            <base-button class="w-40" color="white">Call Us</base-button>
          </a>
        </div>
      </div>

      <div class="flex navbar-end md:hidden">
        <div class="z-20">
          <input id="my-drawer" type="checkbox" class="drawer-toggle" v-model="isMenuOpen" />
          <div class="drawer-content">
            <!-- Page content here -->
            <label for="my-drawer" class="btn btn-ghost drawer-button">
              <Menu class="w-8 h-8 cursor-pointer drawer-button" />
            </label>
          </div>
          <div class="drawer-side">
            <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
            <div class="flex items-center min-h-full gap-6 p-4 pt-20 text-lg menu w-80 bg-base-200 text-primary">
              <!-- Sidebar content here -->

              <div v-for="item in navbarList" :key="item.href" class="flex-shrink-0 group" @click="handleMenuItemClick">
                <a :href="item.href" class="">{{ item.title }}</a>
                <div class="w-0 h-[2px] bg-primary group-hover:w-full duration-200"></div>
              </div>

              <div>
                <a href="#callus">
                  <base-button class="w-52" color="green">Call Us</base-button>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </nav>
  </nav>
</template>