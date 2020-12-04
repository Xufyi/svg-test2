<template>
  <div class="zdyLoading">
    <!--
    animateTransform 动画转动  animate变色
    stroke-dasharray 圆环间隔
    stroke-linecap 圆角
    preserveAspectRatio 宽高不一致定位策略
-->
    <svg
      :width="outWidth"
      :height="outHeight"
      viewBox="0 0 50 50"
      preserveAspectRatio="xMinYMax meet"
    >
      <circle
        cx="25"
        cy="25"
        r="22"
        fill="none"
        stroke-width="3"
        :stroke="outColor"
        stroke-dasharray="34"
        stroke-linecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="360 25 25;0,25 25"
          :dur="`${+duration}s`"
          repeatCount="indefinite"/>
        <animate
          attributeName="stroke"
          :values="outColorValues"
          :dur="`${+duration*2}s`"
          repeatCount="indefinite"/>
      </circle>

      <circle
        cx="25"
        cy="25"
        r="12"
        fill="none"
        stroke-width="3"
        :stroke="innerColor"
        stroke-dasharray="19"
        stroke-linecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 25 25;360,25 25"
          :dur="`${+duration}s`"
          repeatCount="indefinite"/>
        <animate
          attributeName="stroke"
          :values="innerColorValues"
          :dur="`${+duration*2}s`"
          repeatCount="indefinite"/>
      </circle>
    </svg>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  props: {
    outWidth: {
      type: [Number, String],
      default: 50
    },
    outHeight: {
      type: [Number, String],
      default: 50
    },
    outColor: {
      type: String,
      default: "#3be6cb"
    },
    innerColor: {
      type: String,
      default: "#02bcfe"
    },
    duration: {
      type: [Number, String],
      default: 2
    }
  },
  setup(ctx) {
    const outColorValues = computed(
      () => `${ctx.outColor};${ctx.innerColor};${ctx.outColor}`
    );
    const innerColorValues = computed(
      () => `${ctx.innerColorValues};${ctx.outColor};${ctx.innerColorValues}`
    );
    return {
      outColorValues,
      innerColorValues
    };
  }
};
</script>

<style>
</style>


