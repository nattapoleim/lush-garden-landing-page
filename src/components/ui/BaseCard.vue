<script setup>
  const { icon, color, alt } = defineProps(['icon', 'color', 'alt']);
</script>

<template>
  <div
    class="flex flex-col gap-8 p-10 mx-auto duration-300 shadow-xl md:max-lg:flex-row sm:w-80 md:max-lg:w-2/3 lg:w-full card hover:-translate-y-5 hover:shadow-2xl"
    :class="`${color === 'green' ? 'bg-primary text-white' : ''}`"
  >
    <div class="flex justify-center md:max-lg:w-1/2 lg:justify-start">
      <img
        class="md:max-lg:w-24"
        :src="icon"
        :alt="alt"
      />
    </div>
    <div class="md:max-lg:w-1/2">
      <h2 class="justify-center mb-4 card-title lg:justify-start">
        <slot name="title"></slot>
      </h2>
      <p class="font-light text-center lg:text-start">
        <slot name="content"></slot>
      </p>
    </div>
  </div>
</template>
