<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/test">Test</router-link>

      <test-component></test-component>
    </div>
    <router-view/> -->

    <!-- <zdy-loading
      :outWidth="200"
      :outHeight="100"
      :innerColor="'green'"
      :outColor="'red'"
      :duration="5"
    ></zdy-loading> -->


    <div class="test">
      <zdy-flay-box>
        <p>111</p>
        <p>222</p>
        <p>333</p>
        <p>444</p>
      </zdy-flay-box>
    </div>

     <div style="width=100%;height=200">
      <zdy-flay-box >
        <p>111</p>
        <p>222</p>
        <p>333</p>
        <p>444</p>
      </zdy-flay-box>
    </div>



  </div>
</template>
<script>
import zdyLoading from "@/components/zdyLoading.vue";
import zdyFlayBox from "@/components/zdyFlayBox.vue";

export default {
  setup() {
    return {};
  },
  components: {
    zdyLoading,
    zdyFlayBox
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.test {
  width: 400px;
  height: 200px;
}
</style>
