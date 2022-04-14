<template>
  <div>这是异步组件加载成功{{num}}</div>
</template>
    

<script>
import { ref } from '@vue/reactivity';
export default {
    async setup(){
        const sum = ref(1)
        const p = new Promise(resolv=>{
                setTimeout(()=>{
                    resolv(sum)
                },1000)
            }
        )
        console.log("--------111")
        const x = await p;
        console.log(x)
        return {
            num:1
        }
    }
};
</script>
