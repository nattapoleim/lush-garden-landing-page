<script setup>
  const { color, addClass } = defineProps(['color', 'addClass'])

</script>

<template>
  <button :class="`${color === 'white' ? 'btn-white' : 'btn-green'} ${addClass}`">
    <slot></slot>
  </button>
</template>