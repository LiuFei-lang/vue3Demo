
<script>
import bto from "../components/bto.vue";
import { getUser } from "../api/axios/index"
export default {
  components: {
    bto,
  },
  data(){
    return{
      userInfo:{},
      a:1
    }
  },
  mounted(){
    this.getUser()
  },
  methods:{
    async getUser(){
      console.log(123)
        const a = await getUser()
        this.userInfo=a.data
        console.log(this.userInfo)
    }
  },
  render(){
    return(
      <div>
        <h1>This is an about page{this.a +"-"+this.userInfo.id}</h1>
        <bto class="bto"></bto>
      </div>
    )
  }
};
</script>
<style lang='scss' scoped>
.bto {
  position: fixed;
  bottom: 0;
}
</style>