
<script>
import bto from "../components/bto.vue";
import { getUser } from "../api/axios/index"
export default {
  components: {
    bto,
  },
  data(){
    return{

    }
  },
  mounted(){
    this.getUser()
  },
  methods:{
    async getUser(){
      console.log(123)
        const userInfo = await getUser()
        console.log(userInfo)
    }
  },
  render(){
    return(
      <div>
        <h1>This is an about page</h1>
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