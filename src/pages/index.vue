<script setup>
import WechatIMG2 from '@/assets/imgs/WechatIMG2.jpg';
import WechatIMG3 from '@/assets/imgs/WechatIMG3.jpg';
import WechatIMG4 from '@/assets/imgs/WechatIMG4.jpg';
import WechatIMG5 from '@/assets/imgs/WechatIMG5.jpg';

const images = [WechatIMG2, WechatIMG3, WechatIMG4, WechatIMG5]
</script>

<template>
  <div>
    <k-images :images="images" />
    <k-wrapper>
      <k-article
        more="/about" :src="WechatIMG2"
        title="科技 创新  合作 共赢"
        description="天津中航腾云航空科技有限公司是一家天津空港自贸区的专业无人机团队，对于专业飞行、民航法规、航空安全、低空空域申请以及无人机相关行业应用有多年工作经验。"
      />

      <div>
        <div class="text-8 font-500 text-center p-y-8">
          解决方案
        </div>
      </div>

      <div>
        <div class="text-8 font-500 text-center p-y-8">
          产品中心
        </div>
      </div>

      <div>
        <div class="text-8 font-500 text-center p-y-8">
          合作伙伴
        </div>
      </div>
    </k-wrapper>
  </div>
</template>
