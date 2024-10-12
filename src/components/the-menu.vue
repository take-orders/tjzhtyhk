<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import logo from '@/assets/logo.png';
import { to } from '@/router';

const route = useRoute();

const items = ref([
  {
    label: '产品中心',
    items: [
      {
        label: '民用产品',
        items: [
          {
            label: '训练教学无人机TY-410M',
            route: '/products/ty410m',
          },
          {
            label: '高级多旋翼装调飞行教学无人机',
            route: '/products/gjdxy',
          },
          {
            label: '工业级无人机',
            route: '/products/gyj',
          },
          {
            label: '民航局无人机驾驶员考培单元',
            route: '/products/mhj',
          },
        ],
      },
      {
        label: '军用产品',
        items: [
          {
            label: '95控制器',
            route: '/products/95',
          },
          {
            label: '38MM警用打击类无人机设备',
          },
          {
            label: '集群系列',
          },
          {
            label: '靶机系列',
          },
        ],
      },
      {
        label: '系统平台',
        items: [
          {
            label: '定制化无人机应用管理平台',
          },
        ],
      },
    ],
  },
  {
    label: '解决方案',
    items: [
      {
        label: '灾害现场建模',
      },
      {
        label: '土方量计算',
      },
      {
        label: '复杂城区',
      },
    ],
  },
  {
    label: '服务介绍',
    items: [
      {
        label: '无人机培训',
      },
      {
        label: '校企合作',
      },
    ],
  },
  {
    label: '合作案例',
    route: '/cases',
  },
  {
    label: '关于我们',
    route: '/about',
  },
  {
    type: 'button',
    label: '联系我们',
    route: '/about',
  },
]);
</script>

<template>
  <div class="w-full bg-white position-sticky top-0 z-9">
    <div class="max-w-1200px flex m-auto">
      <div class="p-2">
        <div class="bg-blue" @click="to('/')">
          <img :src="logo" height="50px">
        </div>
      </div>
      <Menubar class="b-0! w-full flex-row-reverse text-4 font-600" :model="items">
        <template #item="{ item, props, hasSubmenu, root }">
          <a class="flex items-center" v-bind="props.action">
            <span :class="item.icon" />
            <router-link v-slot="{ href, navigate }" :to="item.route || ''" custom>
              <a :href="href" v-bind="props.action" @click="navigate">
                <t-button v-if="item.type === 'button'">{{ item.label }}</t-button>
                <span v-else :class="{ 'color-blue': route.path.startsWith(item.route) }">{{ item.label }}</span>
              </a>
            </router-link>
            <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
            <span v-if="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{ item.shortcut }}</span>
            <i v-if="hasSubmenu" class="pi pi-angle-down" :class="[{ 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]" />
          </a>
        </template>
      </Menubar>
    </div>
  </div>
</template>
