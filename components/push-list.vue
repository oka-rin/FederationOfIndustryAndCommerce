<template>
	<!--flex-wrap: nowrap;换行  -->

	<view class="page">
		<view style="padding: 0 3%;width: 94%;background-color: #FFFFFF;">
		<view  class="push-item" v-for="(pushItem,item) in pushList" >
			<view class="push-row">
				<view class="push-tx">
					<text class="push-title">{{pushItem.title}}</text>
					<view class="push-time">
						<text>2017年12月20号</text>
						<view>
						<image src="../static/icos/eye.png" mode="widthFix" style="height: 12px;width: 12px;"></image>
						<text>15.0K</text>
						</view>
					</view>
				</view>
				<image src="../static/logo.png" mode="widthFix" class="push-img"></image>
			</view>
			
			<view style="background-color: #FFFFFF;width: 100%;padding: 20upx 0upx 0upx 0upx;">
				<view class="push-fenge"></view>
			</view>
			
		</view>
		</view>
	</view>


</template>

<script>
	export default{
		name:"pushList",
		props:{
			
		},
		data(){
			return{
				news:{},
				pushList:[
					{
						id:1,
						title:'收到货福克斯的付款后士大夫深刻的花费',
					},
					{
						id:2,
						title:'收到货福克斯的花费客户的身份开户行IE额'
					},
					{
						id:3,
						title:'胜多负少的方式的客户合计递四方速递对方'
					}
				]
						
			}
		
		},
		onLoad:function(){
			this.getNews();
		},
		methods:{
			// 网络请求
			getNews:function(){
				uni.request({
					url:"",
					success:function(res){
						console.log(res)
					}
				})
			}
		},
		created:function(e){
			
		},
			
		
	}
	
	
</script>

<style>
.push-item{
	flex-wrap: wrap;
	padding:  20upx 0upx 0upx 0upx;
	background-color: #FFFFFF;
}
.push-row{
	display: flex;
	/* 不换行 */
	flex-direction: row;
	flex-wrap: nowrap;  
	
	
}
.push-img{
	width: 200upx;flex-shrink: 0;
}
.push-row-02{
	
	width: 100%;
	margin-right: 30upx;
}

.push-tx{
	display: flex;
	width: 100%;
	margin-right: 20upx;
	flex-direction: column;

}

.push-title{
	font-size: 16px;
	color: #000000;
	height: 100%;
	
}
.push-time{
	display: flex;
	justify-content: space-between;
	color: #999999;
	font-size: 10px;
	flex-shrink: 0;

	
}

.push-img-02{
	width: 14px;
	
	
}
.push-fenge{
	height: 1upx;
	width: 100%;
	background-color: #e6e6e6;
}


</style>
