<script setup>
defineProps(['src', 'title', 'description']);
</script>

<template>
  <div class="k-center overflow-hidden">
    <div class="position-absolute color-white font-600 text-center">
      <div class="text-8 p-b">
        {{ title }}
      </div>
      <div class="text-6" v-html="description" />
    </div>
    <img v-bind="$attrs" class="w-full max-h-400px" :src="src">
  </div>
</template>
