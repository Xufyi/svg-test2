<template>
<!-- pathId生成唯一值，避免多次使用该组件，找到同一个id，样式不对 -->
    <div class="zdyFlayBox" ref="zdyFlayBox" style="background:#333;color:white">
        <div class="box-content">
             <slot></slot>
        </div>
        <svg :width="width" :height="height" class="svg" :viewBox="`0 0 ${width} ${height}`">
            <defs>
                <path
                    :id="pathId"
                    :d="path"
                    fill="none"
                />
                <radialGradient
                    :id="gradientId"
                    cx="50%"
                    cy="50%"
                    fx="100%"
                    fy="50%"
                    r="50%"
                >
                    <stop offset="0%" stop-color="#fff" stop-opacity="1" />
                    <stop offset="100%" stop-color="#fff" stop-opacity="0" />
                </radialGradient>
                <mask :id="maskId">
                    <circle :r="startLength" cx="0" cy="0" :fill="`url(#${gradientId})`">
                        <animateMotion
                            :dur="`${+duration}s`"
                            :path="path"
                            rotate="auto"
                            repeatCount="indefinite"
                        />
                    </circle>
                </mask>
            </defs>
             <use
                :href="`#${pathId}`"
                stoke-width="1"
                :stroke="lineColor"
            ></use>
            <use
                :href="`#${pathId}`"
                stroke-width="3"
                :stroke="starColor"
                :mask="`url(#${maskId})`"
            ></use>
        </svg>
    </div>
</template>

<script>
import { computed, onMounted, ref, getCurrentInstance } from "vue";
import { v4 as uuidv4 } from "uuid";
export default {
  props: {
    startLength: {
      //流星长度
      type: [String, Number],
      default: 5
    },
    starColor: {
      type: [String],
      default: "#4fd2dd"
    },
    lineColor: {
      type: [String],
      default: "#235fa7"
    },
    duration: {
      type: [String, Number],
      default: 3
    }
  },
  setup(ctx) {
    //使用ref那么width的值改变后会触发后续的一系列依赖值的改变
    //注意使用.value改变值
    let width = ref(0);
    let height = ref(0);
    // uuid 生成唯一值
    const uuid = uuidv4();
    const refName = "zdyFlayBox";

    const pathId = `${refName}-path-${uuid}`;
    const gradientId = `${refName}-gradient-${uuid}`;
    const maskId = `${refName}-mask-${uuid}`;

    function init() {
      const { ctx } = getCurrentInstance();
      width.value = ctx.$refs[refName].clientWidth;
      height.value = ctx.$refs[refName].clientHeight;
    }
    const path = computed(
      () =>
        `M5 5 L${width.value - 5} 5 L${width.value - 5} ${height.value -
          5} L5 ${height.value - 5} Z`
    );
    onMounted(() => {
      init();
    });
    return {
      width,
      height,
      path,
      pathId,
      gradientId,
      maskId
    };
  }
};
</script>

<style lang="scss" scoped>
.zdyFlayBox {
  widows: 100%;
  height: 100%;
  position: relative;
  .box-content {
    width: 100%;
    height: 100%;
    padding: 5px;
    box-sizing: border-box;
  }
  .svg {
    position: absolute;
    left: 0;
    top: 0;
  }
}
</style>


