<script setup>
  import { ref } from 'vue';

  import ProductCard from '@/components/ui/ProductCard.vue';

  //imgs
  import Product1Img from '@/assets/products/product1.webp';
  import Product2Img from '@/assets/products/product2.webp';
  import Product3Img from '@/assets/products/product3.webp';
  import Product4Img from '@/assets/products/product4.webp';
  import Product1SmallImg from '@/assets/products/product1-small.webp';
  import Product2SmallImg from '@/assets/products/product2-small.webp';
  import Product3SmallImg from '@/assets/products/product3-small.webp';
  import Product4SmallImg from '@/assets/products/product4-small.webp';

  const products = ref([
    {
      id: 1,
      img: Product1Img,
      smImg: Product1SmallImg,
      name: 'Some Plant',
      price: '10',
      currentPrice: '8',
      favorite: false,
    },
    {
      id: 2,
      img: Product2Img,
      smImg: Product2SmallImg,
      name: 'Some Plant',
      price: '10',
      currentPrice: '8',
      favorite: false,
    },
    {
      id: 3,
      img: Product3Img,
      smImg: Product3SmallImg,
      name: 'Some Plant',
      price: '10',
      currentPrice: '8',
      favorite: false,
    },
    {
      id: 4,
      img: Product4Img,
      smImg: Product4SmallImg,
      name: 'Some Plant',
      price: '10',
      currentPrice: '8',
      favorite: false,
    },
    {
      id: 5,
      img: Product1Img,
      smImg: Product1SmallImg,
      name: 'Some Plant',
      price: '10',
      currentPrice: '8',
      favorite: false,
    },
    {
      id: 6,
      img: Product2Img,
      smImg: Product2SmallImg,
      name: 'Some Plant',
      price: '10',
      currentPrice: '8',
      favorite: false,
    },
    {
      id: 7,
      img: Product3Img,
      smImg: Product3SmallImg,
      name: 'Some Plant',
      price: '10',
      currentPrice: '8',
      favorite: false,
    },
    {
      id: 8,
      img: Product4Img,
      smImg: Product4SmallImg,
      name: 'Some Plant',
      price: '10',
      currentPrice: '8',
      favorite: false,
    },
  ]);

  const toggleFavorite = productId => {
    const index = products.value.findIndex(p => p.id === productId);
    if (index !== -1) {
      products.value[index].favorite = !products.value[index].favorite;
    }
  };
</script>

<template>
  <section
    id="products"
    class="max-w-6xl mx-auto my-10 scroll-mt-20"
  >
    <h2 class="mb-10 text-3xl font-bold text-center text-primary">What We Offer To You</h2>
    <div class="flex flex-wrap justify-center gap-5 xl:justify-between">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @toggle-favorite="toggleFavorite"
      />
    </div>
  </section>
</template>
