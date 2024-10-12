<script setup>
import WechatIMG2 from '@/assets/imgs/WechatIMG2.jpg';
</script>

<template>
  <k-wrapper>
    <t-row :gutter="16" align="middle" justify="space-around">
      <t-col :span="12" :lg="6">
        <div class="p-4 text-4 line-height-loose">
          <div>消防应急-灾害现场建模</div>
          <p>灾害现场，可快速进行实时二维建模；</p>
          <p>也可导入原照片，进行高精度二维/三维建模；</p>
          <p>应用：快速了解灾区现状，供应急指挥使用</p>
        </div>
      </t-col>
      <t-col :span="12" :lg="6">
        <k-image :src="WechatIMG2" />
      </t-col>
    </t-row>
  </k-wrapper>
</template>
