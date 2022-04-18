<template>
  <HelloWorld msg="这是在main.js中注册的全局组件"></HelloWorld>
  <h1>CS</h1>
  <h3>{{ a }}</h3>
  <button @click="SET_A(1)">累加</button>
  <button @click="Add_A(1)">累加</button>
  <hr />
  <h3>{{ b }}</h3>
  <button @click="SET_B(1)">累加</button>
  <button @click="Add_B(1)">累加</button>
  <div class="inputDiv">
    <div><input /></div>
    <div>
      <canvasCode
        :contentHeight="1 * 37.5"
        :contentWidth="3 * 37.5"
        :identifyCode="ran + ''"
      ></canvasCode
      ><a @click="setRan">换一换</a>
    </div>
  </div>
  <!-- 使用异步组件开始 -->
  <Suspense v-if="isshow">
    <template #default>
      <AsyncComponent :key="i"></AsyncComponent>
    </template>
    <template #fallback>
      <asyncLoading :key="i"></asyncLoading>
    </template>
  </Suspense>
  <!-- 使用异步组件结束 -->

  <button @click="clickShow">重新加载</button>

  <h1>嵌套路由</h1>
  <router-link class="rlink" active-class="active" to="/cs/News">news</router-link>
  <router-link class="rlink" active-class="active" to="/cs/Message">message</router-link>
  <router-view></router-view>

  <h1>编程式导航</h1>
  <router-link class="rlink" active-class="active" to="/cs/News" replace>news</router-link>
  <router-link class="rlink" active-class="active" to="/cs/Message" replace>message</router-link>
  <router-view></router-view>

  <bto class="bto"></bto>
</template>

<script>
import bto from "../components/bto.vue";
import canvasCode from "../components/canvasCode.vue";
import { useStore, mapMutations, mapActions } from "vuex";
import { computed, ref } from "@vue/reactivity";
import { clearObj } from "../api/utils/index";
import { defineAsyncComponent } from "vue";
import asyncLoading from "../components/asyncComponent/asyncLoading.vue";

export default {
  setup(content, expose) {
    console.log(expose, content);
    const store = useStore();
    const a = computed(() => {
      return store.state.a;
    });
    const b = computed(() => {
      return store.state.userModule.b;
    });
    //随机四位数
    const ran = ref("");
    //随机六位数
    function ranStr(len = 6) {
      var orgStr =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let returnStr = "";
      for (var i = 0; i < len; i++) {
        returnStr += orgStr.charAt(Math.floor(Math.random() * orgStr.length));
      }
      return returnStr;
    }
    const setRan = () => {
      ran.value = ranStr();
    };
    setRan();
    //表单对象演示
    const person = {
      a: 1,
      b: "2",
      c: ["1", "2"],
      d: true,
      e: { a: "a" },
      f: function () {},
    };
    const isshow = ref(true);
    //清楚表单对象数据
    console.log(clearObj(person));
    const i = ref(1);
    const setId = ref(0);
    const clickShow = () => {
      isshow.value = false;
      setId.value = setTimeout(() => {
        isshow.value = true;
        clearTimeout(setId.value);
      }, 100);
    };
    return {
      ...mapMutations(["SET_A"]),
      a,
      ...mapActions(["Add_A"]),
      b,
      ...mapMutations("userModule", ["SET_B"]),
      ...mapActions("userModule", ["Add_B"]),
      ran,
      setRan,
      isshow,
      i,
      clickShow,
    };
  },
  components: {
    bto,
    canvasCode,
    //异步组件
    AsyncComponent: defineAsyncComponent(() =>
      import("../components/asyncComponent/async1.vue")
    ),
    asyncLoading,
  },

  data() {
    return {};
  },
};
</script>
<style lang='scss' scoped>
.bto {
  position: fixed;
  bottom: 0;
}
.inputDiv {
  text-align: left;
  height: 1rem;
  border: 1px solid #000;
  display: flex;
  input {
    line-height: 1rem;
    outline: 0;
    border: none;
    padding: 0 0.2rem;
  }
}
.rlink{
    padding: 0.1rem 0.3rem;
    color: #000;
    text-decoration: none;
    border: 1px solid #f3f3f3;
    display: inline-block;
    margin: 0.1rem 0;
  }
  .active{
    background: rgb(121, 172, 231);
    border: none;
    color: #fff;
  }
</style>