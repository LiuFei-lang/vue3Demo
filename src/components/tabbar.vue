<!--  -->
<template>
    <div class="itemWarp flex_mid" @click="changePage">
      <span v-show="!bol">
        <slot name="normalImg"></slot>
      </span>
      <span v-show="bol">
        <slot name="activeImg"></slot>
      </span>
      <span :class="bol?'colorClass':''" v-text="txt"></span>
    </div>
</template>

<script>
export default {
  name: "Item",
  props: {
    txt: {
      type: String,
    },
    page: {
      type: String,
    },
    sel: {
      type: String,
    },
  },
  emits:["changed"],
  computed: {
    bol: function () {
      if (this.sel === this.page) {
        return true;
      }
      return false;
    },
  },
  methods: {
    changePage: function () {
      console.log(this.sel,this.page)
      //点击跳转对应的页面
      this.$router.replace("/" + this.page);
      this.$emit("changed", this.page);
    },
  },
};
</script>
<style lang='scss' scoped>
.itemWarp {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.itemWarp span {
  font-size: 0.3rem;
}
.colorClass{
  color: red;
}
</style>