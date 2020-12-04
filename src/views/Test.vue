

<template>
  <div>
    <button @click='increment'>{{state.count}}</button>
    doubleCount:：{{ doubleCount  }}
    num：{{ num }}

    <div>
      <button @click="toAbout">toAbout</button>
    </div>

    <div>
      <span> vuex figure :{{ figure }}</span>
      <button @click="toUpdata">toUpdata</button>
      <button @click="toUpdata2">toUpdata2</button>
    </div>

    <div>
      <span> vuex_a_n :{{ an }}</span>
      <button @click="toUpdata_an">toUpdata_an</button>
    </div>

     <div>
      <span> vuex_b_n :{{ bn }}</span>
      <button @click="toUpdata_bn">toUpdata_bn</button>
    </div>

  </div>
</template>
<script>
import { reactive, watchEffect } from "vue";
// import { getCurrentInstance } from "vue";
import userTest from "./userTest";
// const { state, increment, doubleCount, doubleCount_watch, num } = userTest();

export default {
  setup() {
    // console.log(getCurrentInstance, getCurrentInstance(), 44);
    //1、 console.log(this, "setup"); //undefinde无法拿到vue实例
    return userTest();
  }
};
</script>

