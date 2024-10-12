<script setup>
defineProps({
  images: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <t-swiper :duration="300" :interval="2000">
    <t-swiper-item v-for="image in images" :key="image">
      <div v-bind="$attrs" class="k-center max-h-500px">
        <img class="w-full" :src="image" style="object-fit: contain;">
      </div>
    </t-swiper-item>
  </t-swiper>
</template>
