<template>
    <HelloWorld msg="这是在main.js中注册的全局组件"></HelloWorld>
    <h1>CS</h1>
    <h3>{{a}}</h3>
    <button @click="SET_A(1)">累加</button>
    <button @click="Add_A(1)">累加</button>
    <hr/>
    <h3>{{b}}</h3>
    <button @click="SET_B(1)">累加</button>
    <button @click="Add_B(1)">累加</button>
    <div class="inputDiv">
      <div><input /></div>
      <div><canvasCode :contentHeight="1 * 37.5" :contentWidth="3 * 37.5" :identifyCode="ran+''"></canvasCode><a @click="setRan">换一换</a></div>
    </div>
    <suspense>
      <template #default>
        <AsyncComponent v-if="isshow" :key="1"></AsyncComponent>
        <asyncerror v-else  :key="2"></asyncerror>
      </template>
      <template #fallback>
        <asyncLoading  :key="3"></asyncLoading>
      </template>
    </suspense>
    <button @click="isshow=!isshow">重新加载</button>
    
    <bto class="bto"></bto>
</template>

<script>
import bto from "../components/bto.vue";
import canvasCode from "../components/canvasCode.vue"
import {useStore,mapMutations,mapActions} from "vuex"
import { computed, ref } from '@vue/reactivity';
import { clearObj } from "../api/utils/index"
import { defineAsyncComponent } from 'vue';
import asyncLoading from "../components/asyncComponent/asyncLoading.vue"
import asyncerror from "../components/asyncComponent/asyncerror.vue"

export default {
  setup(content,expose){
    console.log(expose,content)
    const store = useStore();
    const a = computed(()=>{
      return store.state.a
    })
    const b = computed(()=>{
      return store.state.userModule.b
    })
    //随机四位数
    const ran = ref(0)
    const setRan=()=>{
       ran.value=Math.round((Math.random()*9+1)*1000)
    }
    console.log(typeof setRan)

    //表单对象演示
    const person = {
      a:1,b:"2",c:["1","2"],d:true,e:{a:"a"},f:function(){}
    }
    const isshow = ref(true)
    //清楚表单对象数据
    console.log(clearObj(person))

    return {
      ...mapMutations(["SET_A"]),a,...mapActions(["Add_A"]),
      b,...mapMutations("userModule",["SET_B"]),...mapActions("userModule",["Add_B"]),ran,setRan,isshow
    }
  },
  components: {
    bto,canvasCode,
    AsyncComponent: defineAsyncComponent(() =>
      import('../components/asyncComponent/async1.vue')
    ),
    asyncLoading,asyncerror
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
.inputDiv{
  text-align: left;
  height: 1rem;
  border: 1px solid #000;
  display: flex;
  input{
    line-height: 1rem;
    outline: 0;
    border: none;
    padding: 0 0.2rem;
  }
}
</style>