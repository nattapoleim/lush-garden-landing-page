<script setup>

  const { icon, color, alt } = defineProps(['icon', 'color', 'alt'])

</script>

<template>
  <div
    class="flex flex-col gap-8 p-10 mx-auto duration-300 shadow-xl w-80 lg:w-full card hover:-translate-y-5 hover:shadow-2xl"
    :class="`${color === 'green' ? 'bg-primary text-white' : ''}`">
    <div class="flex justify-center lg:justify-start">
      <img :src="icon" :alt="alt">
    </div>
    <h2 class="justify-center card-title lg:justify-start">
      <slot name="title"></slot>
    </h2>
    <p class="font-light text-center lg:text-start">
      <slot name="content"></slot>
    </p>
  </div>
</template>