<template>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button v-on:click="addToCart">Add to cart</button>
    <p>Cart({{ cart }})</p>
    <bto class="bto"></bto>
</template>

<script>
import bto from '../components/bto.vue'

export default {
  name: 'Home',
  components: {
    bto
  },
  data(){
    return {
      cart:0
    }
  },
  //在实例初始化之后、进行数据侦听和事件/侦听器的配置之前同步调用。
  beforeCreate(){
    console.log("beforeCreate")
    
  },
  /**
   * 在实例创建完成后被立即同步调用。在这一步中，实例已完成对选项的处理，
   * 意味着以下内容已被配置完毕：数据侦听、计算属性、方法、事件/侦听器的回调函数。
   * 然而，挂载阶段还没开始，且 $el property 目前尚不可用。
   */
  created(){
    console.log("created")
  },
  /**
  * 该钩子在服务器端渲染期间不被调用。
  * 在挂载开始之前被调用：相关的 render 函数首次被调用。
  */
  beforeMount(){
    console.log("beforeMount")
  },
  /**
  * 在实例挂载完成后被调用，这时候传递给 app.mount 的元素已经被新创建的 vm.$el 替换了。
  * 如果根实例被挂载到了一个文档内的元素上，当 mounted 被调用时， vm.$el 也会在文档内。
  * 注意 mounted 不会保证所有的子组件也都被挂载完成。
  * 如果你希望等待整个视图都渲染完毕，
  * 可以在 mounted 内部使用 vm.$nextTick：
  * 该钩子在服务器端渲染期间不被调用。
  */
  mounted(){
    console.log("mounted")
  },
  /**
  * 在数据发生改变后，DOM 被更新之前被调用。这里适合在现有 DOM 将要被更新之前访问它，
  * 比如移除手动添加的事件监听器。
  * 该钩子在服务器端渲染期间不被调用，因为只有初次渲染会在服务器端进行。
  */
  beforeUpdate(){
    console.log("beforeUpdate:");
    
  },
  /**
  * 在数据更改导致的虚拟 DOM 重新渲染和更新完毕之后被调用。
  * 当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。
  * 然而在大多数情况下，你应该避免在此期间更改状态。如果要相应状态改变，
  * 通常最好使用计算属性或侦听器取而代之。
  * 注意，updated 不会保证所有的子组件也都被重新渲染完毕。
  * 如果你希望等待整个视图都渲染完毕，可以在 updated 内部使用 vm.$nextTick：
  */
  updated(){
    console.log("updated")
  },
  /**
  * 被 keep-alive 缓存的组件激活时调用。
  * 该钩子在服务器端渲染期间不被调用。
  */
  activated(){
    console.log("activated")
  },
  /**
  * 被 keep-alive 缓存的组件失活时调用。
  * 该钩子在服务器端渲染期间不被调用
  */
  deactivated(){
    console.log("deactivated")
  },
  /**
  * 在卸载组件实例之前调用。在这个阶段，实例仍然是完全正常的。
  * 该钩子在服务器端渲染期间不被调用。
  */
  beforeUnmount(){
    console.log("beforeUnmount")
  },
  /**
  * 卸载组件实例后调用。调用此钩子时，组件实例的所有指令都被解除绑定，
  * 所有事件侦听器都被移除，所有子组件实例被卸载。
  * 该钩子在服务器端渲染期间不被调用。
  */
  unmounted(){
    console.log("unmounted")
  },
  /**
   * 跟踪虚拟 DOM 重新渲染时调用。钩子接收 debugger event 作为参数。
   * 此事件告诉你哪个操作跟踪了组件以及该操作的目标对象和键。
   */
  renderTracked({ key, target, type }) {
    console.log({ key, target, type })
    /* 当组件第一次渲染时，这将被记录下来:
    {
      key: "cart",
      target: {
        cart: 0
      },
      type: "get"
    }
    */
  },
  /**
   * 当虚拟 DOM 重新渲染被触发时调用。和 renderTracked 类似，接收 debugger event 作为参数。
   * 此事件告诉你是什么操作触发了重新渲染，以及该操作的目标对象和键。
   */
  renderTriggered({ key, target, type }) {
    console.log({ key, target, type })
  },
  methods:{
    addToCart(){
      this.cart+=1;
    },
  }

}
</script>
<style lang='scss' scoped>
  .bto{
    position: fixed;
    bottom: 0;
  }
</style>
