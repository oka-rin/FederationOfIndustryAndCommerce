<template>
	<view class="page">
		<view class="qa-details-buju">
			<text class="qa-details-title">{{qaDetails.question}}</text>
			<view class="flex-row">
			<text class="qa-details-time" >回答者：{{qaDetails.inputman}}</text>
			<text class="qa-details-time" style="margin-left: 10px;">{{inputdate}}</text>
			</view>
			
			<rich-text :nodes="qaDetails.contents"></rich-text>
		</view> 
	</view>
</template>

<script>
	//日期分割
	import {
		friendlyDate
	} from '@/common/util.js';
	var _this,serverUrl;
	import common from '../../common/url.js';
	export default {
		data() {
			return {
				fingerpostid:'',
				inputdate:'',
				qaDetails:{}
			}
		},
		onLoad:function(e){
			_this=this;
			serverUrl=common.serverUrl;
			_this.fingerpostid=e.fingerpostid;
			console.log(_this.fingerpostid);
			this.getContent(_this.fingerpostid);
		},
		methods: {
			getContent:function(e){
				uni.request({
					header:{
						'sessionId': 'd296a0691c044dabb75e1ce6e7875071' //自定义请求头信息
					},
					url:serverUrl+'spMgFingerpost/find?id='+e,
					success:function(res){
						
						const data=res.data.data[0];
						_this.inputdate=friendlyDate(new Date(data.inputdate).getTime());
						console.log(data);
						_this.qaDetails=data;
					}
				})
			}
		}
	}
</script>

<style>
.qa-details-buju{
	padding: 15px;
	background-color: #FFFFFF;
}

.qa-details-title{
	display: flex;
	color: #000000;
	font-size: 18px;
	font-weight: 800;
	
}
.qa-details-time{
	display: flex;
	
	color: #999999;
	font-size: 12px;
	padding: 16px 0 12px 0;
}
.qa-details-tx{
	font-size: 14px;
	color: #000000;
	
}
</style>
