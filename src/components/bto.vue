<template>
      <div class="warp">
        <Tabbar :txt="item.txt" :page="item.page" @changed="getVal" v-for="item in tabbarDes" :key="item.page" :sel="selected" >
			<template #normalImg>
				<img class="imgsrc" src="../assets/logo.png" />
			</template>
			<template #activeImg>
				<p>222</p>
			</template>
        </Tabbar>
      </div>
</template>

<script>
import Tabbar from './tabbar.vue'
import {mapMutations, mapState} from "vuex"
export default {
    components:{
		Tabbar
	},
    data(){
        return{
			tabbarDes:[
				{
					txt:'首页',
					page:'/',
					// normalImg:require('../assets/images/zz_07.jpg'),
					// activeImg:require('../assets/images/22_03.jpg')					
				},				
				{
					txt:'About',
					page:'About',
					// normalImg:require('../assets/images/download_skin_ic.png'),
					// activeImg:require('../assets/images/112_26.jpg')
				},
				{
					txt:'Cs',
					page:'cs',
					// normalImg:require('../assets/images/zz_09.jpg'),
					// activeImg:require('../assets/images/icon2_03.jpg')
				}
			]
        }
    },
	computed:{
		...mapState(["selected"])
		
	},
    methods:{
		...mapMutations(["SET_SELECTED"]),
		getVal:function(res){
			// this.selected = res;
			this.SET_SELECTED(res)
		}
	}
  
}

</script>
<style lang='scss' scoped>
.warp{
		width: 100%;
		border-top: 1px solid #eee;
		background: #fff;
		display: flex;
		align-items: center;
		justify-content: space-around;
		font-size: 0;
	}
	.imgsrc{
		width: 0.4rem;height: 0.4rem;
	}
	p{
		height: 0.4rem;color:red
	}
</style>