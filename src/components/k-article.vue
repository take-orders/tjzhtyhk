<script setup>
import { ArrowRightUpIcon } from 'tdesign-icons-vue-next';
import { to } from '@/router';

defineProps(['src', 'title', 'description', 'more']);
</script>

<template>
  <t-row :gutter="16" align="middle" justify="space-around">
    <t-col :span="12" :lg="5">
      <k-image :src="src" class="rounded-2xl m-4 rounded-2xl" />
    </t-col>
    <t-col :span="12" :lg="7">
      <div class="m-4">
        <div class="text-6 font-600 p-y">
          {{ title }}
        </div>
        <div class="text-4 p-y line-height-normal">
          {{ description }}
        </div>
        <t-button shape="round" variant="outline" theme="primary" @click="() => to(more)">
          <template #icon>
            <ArrowRightUpIcon />
          </template>
          了解更多
        </t-button>
      </div>
    </t-col>
  </t-row>
</template>
