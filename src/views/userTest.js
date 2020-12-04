



import { reactive, computed, watch, ref, getCurrentInstance } from "vue";

export default function userTest() {
    const state = reactive({
        count: 1
    });
    const num = ref(1);
    //1、通过ref创建的属性，即使普通对象也的通过.value来改变。实现双向绑定
    const increment = () => {
        state.count++;
        num.value++
        //2、通过ref创建的属性，即使普通对象也的通过.value来改变。实现双向绑定
    };
    const doubleCount = computed(() =>
        state.count * 2
    )

    const doubleCount_watch = watch(() => state.count, (n, o) =>
        console.log('doubleCount_watch', n, o)
    )

    const { ctx } = getCurrentInstance();
    //3、getCurrentInstance 只能到setup里面执行才能拿到vue实例(ctx)
    console.log(ctx, ctx.$router, ctx.$store.state.figure);
    const toAbout = () => {
        //4、通过ctx路由跳转
        ctx.$router.push("/about");
    };


    //5、vuex
    const figure = computed(() => ctx.$store.state.figure)
    const toUpdata = () => {
        ctx.$store.commit('SET_FIGURE', 17)
    }
    const toUpdata2 = () => {
        ctx.$store.dispatch('setFifure', 18)
    }
    //5.1 module
    console.log(ctx.$store.state.a.n, ctx.$store.getters, 'store');
    const an = computed(() => ctx.$store.getters.aa)
    const toUpdata_an = () => {
        ctx.$store.commit('SET_A_N', 1234)
    }
    const bn = computed(() => ctx.$store.getters.bb)
    const toUpdata_bn = () => {
        ctx.$store.commit('SET_B_N', 5678)
    }

    return {
        state,
        num,
        increment,
        doubleCount,
        doubleCount_watch,
        toAbout,
        figure,
        toUpdata,
        toUpdata2,
        an,
        toUpdata_an,
        bn,
        toUpdata_bn
    }
}