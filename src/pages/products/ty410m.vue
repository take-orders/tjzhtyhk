<script setup>
import ty410m from '@/assets/imgs/p-ty410m.png';
import ty1080m from '@/assets/imgs/p-ty-1080m.png';
</script>

<template>
  <div>
    <k-wrapper class="p-y">
      <div class="text-8 font-500 text-center p-y-8">
        民用产品——训练教学无人机TY-410M
      </div>
      <t-row :gutter="36" align="middle" justify="space-around">
        <t-col :span="12" :lg="5">
          <k-image :src="ty410m" class="max-md:p-4 rounded max-h-400px object-contain" />
        </t-col>
        <t-col :span="12" :lg="6">
          <div class="max-md:p-4">
            <div class="text-6 font-500 text-center p-y-8">
              产品描述
            </div>
            <div class="text-4 line-height-8">
              此款无人机为TY-410M教学无人机，是针对已经完成初级多旋翼无人机的减学任务的基础上的升级教具。该机空机重量设计在1.5Kg左右，对称电机轴距410mm、飞行时间15分钟，最大续航时间15分钟以上，该飞机采用PIXHAWK2.4.8开源飞控，不仅让学生继续熟练组装无人机的过程，同时让学生学习如何调试飞控的相关参数，从而让飞机能够稳定飞行。此款无人机不仅可以在室内飞行，同时可以在室外飞行。轴距410mm较为适中，即可以保证教学安全，也可以让学生更好的观察飞行姿态。该机抗风性能较好，配合GPS，可抗4级风。从而大大减小了对户外飞行环境的要求。
            </div>
          </div>
        </t-col>
      </t-row>

      <h1 class="text-8 font-500 text-center p-y-8">
        民用产品——高级多旋翼装调飞行教学无人机
      </h1>
      <t-row :gutter="36" align="middle" justify="space-around">
        <t-col :span="12" :lg="5">
          <k-image :src="ty1080m" class="max-md:p-4 rounded max-h-400px object-contain" />
        </t-col>
        <t-col :span="12" :lg="6">
          <div class="max-md:p-4">
            <div class="text-6 font-500 text-center p-y-8">
              产品描述
            </div>
            <div class="text-4 line-height-8">
              此款无人机为TY1080M教学无人机，是针对具有一定飞行能力，基本能够独立操作多旋翼无人机的学生，为未来在从事行业应用、考取无人机驾驶员执照等方面使用的飞机。该机空机重量设计在6Kg左右，对称电机轴距1080mm、飞行时间18分钟，最大续航时间30分钟以上。该飞机符合民航局无人机驾驶员III类多旋翼的考试标准要求。院校和教育机构可以利用此款无人机完成难度较高的多旋翼飞行训练，并配合相应教学大纲和教学手册，通过训练使学生达到考取民航局无人机驾驶员执照的培训的能力要求。此款无人机不仅可以用于日常训练飞行，也可以搭配市面各种下挂业载，完成航拍、测绘、抛投、电力架线等多种无人机行业应用。
            </div>
          </div>
        </t-col>
      </t-row>
    </k-wrapper>
  </div>
</template>
