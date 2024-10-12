<script setup>
import { useIsSmall } from '@/compositions';
import AL1 from '@/assets/imgs/案例1.png';
import AL2 from '@/assets/imgs/案例2.png';
import AL3 from '@/assets/imgs/案例3.png';
import AL4 from '@/assets/imgs/案例4.png';
import AL5 from '@/assets/imgs/案例5.png';

const isSmall = useIsSmall(1200)

const data = [
  '中国民航大学',
  '天津农学院',
  '天津工业职业学院',
  '天津城市建设管理职业技术学院',
  '天津水利部海河水利委员会',
  '天津现代职业技术学院',
  '天津市公安局警务航空总队',
  '中国人民武装警察部队指挥学院',
  '中国人民武装警察部队后勤学院',
  '中国人民解放军陆军军事交通学院',
  '天津市消防救援总队',
  '天津市公安局特警总队',
  '天津市人民检察院',
  '天津市测绘院有限公司',
  '天津市滨海新区消防救援支队',
  '泉州中国兵器装备集团特种机器人研发中心',
  '中国市政工程华北设计研究总院有限公司',
  '中国人民武装警察部队海警总队天津支队',
  '航天神舟飞行器有限公司',
  '北京市水科学技术研究院',
  '天津海泰市政绿化有限公司',
  '天津市河东区人民检察院',
  '天津市北辰区人民检察院',
  '中铁十八局集团有限公司',
]
</script>

<template>
  <t-swiper :type="!isSmall ? 'card' : ''" :height="!isSmall ? 500 : undefined">
    <t-swiper-item v-for="item in [AL1, AL2, AL3, AL4, AL5]" :key="item">
      <k-image :src="item" />
    </t-swiper-item>
  </t-swiper>

  <k-wrapper>
    <div class="text-8 font-400 text-center max-md:p-y">
      合作伙伴
    </div>
    <div class="flex flex-wrap overflow-auto hover-shadow gap-1 m-y-8 justify-center">
      <t-card v-for="item in data" :key="item" bordered shadow size="small" class="flex-shrink-0">
        {{ item }}
      </t-card>
    </div>
  </k-wrapper>
</template>
