<script setup>
import GYWMBJ from '@/assets/imgs/关于我们背景.png';
import GYWM from '@/assets/imgs/关于我们.png';
import QYZZ from '@/assets/imgs/企业资质.png';
import FXJD from '@/assets/imgs/飞行基地.png';

const data = ['中航腾云为中国民用航空局批准培训机构', '中航腾云为ALPA中国飞行员协会授权培训机构', '中航腾云为CATA中国航空运输协会授权培训机构']

const data2 = ['地理位置：天津市海河教育园区', '空域范围：2km*1km飞行空域', '核心功能：无人机专业应用解决方案提供，无人机驾驶员执照及各定向培训']
</script>

<template>
  <div>
    <k-image :src="GYWMBJ" title="关于我们" description="<p class='color-blue'>科技 创新  合作 共赢</p>" />
    <div class="max-w-1200px m-auto">
      <div class="w-full m-y-2vw">
        <t-row :gutter="16" align="middle" justify="space-around">
          <t-col :span="12" :lg="6">
            <div class="max-md:p-4 text-4 line-height-loose">
              <p>天津中航腾云航空科技有限公司是一家天津空港自贸区的专业无人机团队，对于专业飞行、民航法规、航空安全、低空空域申请以及无人机相关行业应用有多年工作经验。</p>
              <p>
                中航腾云致力于打造一流的无人机培训和应用服务平台，并作为天津市武警、环保、公安、应急、消防、司法系统、天津现代职业技术学院等单位指定无人机驾驶员培训机构，已经举办了60期民用无人驾驶航空器操控员执照培训班及各类行业应用专业定向类培训，培养超千名优秀的无人机操控员。
              </p>
              <p>中航腾云致力于无人机教育的设备的研发和相关课程的制定，分别从初、中、高级和不同行业应用方面，定制了不同的教学配套器材，同时代理了全国多家知名无人机品牌产品，为提供在设备多样性的选择。</p>
            </div>
          </t-col>
          <t-col :span="12" :lg="6">
            <k-image :src="GYWM" class="max-md:p-4" />
          </t-col>
        </t-row>
      </div>
    </div>

    <k-wrapper class="p-y">
      <div class="text-8 font-400 text-center p-y-8">
        企业资质
      </div>
      <t-row :gutter="16" align="middle" justify="space-around">
        <t-col :span="12" :lg="5">
          <div class="max-md:p-4">
            <div v-for="item in data" :key="item" class="text-4 line-height-8 max-md:text-center">
              {{ item }}
            </div>
          </div>
        </t-col>
        <t-col :span="12" :lg="7">
          <k-image :src="QYZZ" class="max-md:p-4" />
        </t-col>
      </t-row>
    </k-wrapper>

    <k-wrapper class="p-y">
      <div class="text-8 font-400 text-center p-y-8">
        海河教育园飞行基地
      </div>
      <t-row :gutter="36" align="middle" justify="space-around">
        <t-col :span="12" :lg="6">
          <k-image :src="FXJD" class="max-md:p-4 rounded" />
        </t-col>
        <t-col :span="12" :lg="5">
          <div class="max-md:p-4">
            <div v-for="item in data2" :key="item" class="text-4 line-height-8 max-md:text-center">
              {{ item }}
            </div>
          </div>
        </t-col>
      </t-row>
    </k-wrapper>
  </div>
</template>
