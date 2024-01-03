<script setup>
  import { Heart } from 'lucide-vue-next';

  const { product } = defineProps(['product']);
  const emit = defineEmits(['toggle-favorite']);

  const toggleFavorite = () => {
    emit('toggle-favorite', product.id);
  };
</script>

<template>
  <div class="w-64 bg-white shadow-xl rounded-xl card group">
    <figure class="relative h-64 overflow-hidden rounded-t-lg">
      <button
        class="absolute z-10 rounded-full hover:bg-base-300 hover:border-primary btn btn-circle text-primary border-primary btn-sm top-2 right-2"
        :class="{ 'bg-primary text-white hover:bg-primary/70': product.favorite }"
        @click="toggleFavorite"
      >
        <Heart class="w-4 h-4" />
      </button>
      <img
        class="w-full h-full duration-200 group-hover:scale-110"
        v-lazy="{ src: product.img, loading: product.smImg }"
        :alt="product.id + 'img'"
      />
    </figure>
    <div class="flex items-center justify-between px-4 py-4">
      <div class="h-full font-bold text-primary">
        <h4 class="mb-1">{{ product.name }}</h4>
        <p class="text-xs">
          <span class="mr-2 font-normal text-gray-500">(${{ product.price }})</span> ${{
            product.currentPrice
          }}
        </p>
      </div>
      <base-button
        class="w-32 text-sm"
        :addClass="
          !product.favorite &&
          'text-primary border-primary hover:text-primary hover:border-primary hover:bg-primary/10'
        "
        :color="product.favorite ? 'green' : 'white'"
        >Buy Now</base-button
      >
    </div>
  </div>
</template>
