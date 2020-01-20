<template>
	<view>
		<view class="push-details-buju">
			<text class="push-details-title">{{contents.title}}</text>
			<text class="push-details-time" >来源:中国劳动人事争议调解仲裁  时间:{{inputdate}}</text>	
			<view >
				<view style="margin-bottom: 10px;">
				<rich-text class="push-details-tx" :nodes="contents.contents"></rich-text>
				<!-- <text class="push-details-tx" >  {{text.textItem}}</text> -->
				<image :src="contents.imgurl" mode="widthFix" style="width: 100%;border-radius: 5px;"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	//日期分割
	import {
		friendlyDate
	} from '@/common/util.js';
	import common from '../../common/url.js'
	var sessionId,_self,gslId,serverUrl;
	export default {
		data() {
			return {
				contents:{},
				inputdate:''
			}
		},
		onLoad(e) {
			_self=this;
			try {
			    const data = uni.getStorageSync('login_key');
			    if (data==null||data=='') {
			        console.log('获取本地数据失败');
			    }else{
					console.log('获取本地数据成功'+data.sessionId);
					sessionId=data.sessionId;
				}
			} catch (e) {
			    
			}
			serverUrl=common.serverUrl;
			_self.gslId=e.id;
			console.log(_self.gslId);
			this.getContent(_self.gslId);
			
		},
		methods: {
			getContent:function(id){
				console.log(id);
				uni.request({
					header:{
						'sessionId': 'a50feaec42c54a21bb6639074ad6e687' //自定义请求头信息
					},
					url:serverUrl+'spMgAssociationMessage/getInfo?id='+id,
					success:function(res){
						_self.contents=res.data.data[0];
						console.log(_self.contents);
						_self.inputdate=friendlyDate(new Date(_self.contents.inputdate).getTime());
					}
				});
			}
		}
	}
</script>

<style>
.push-details-buju{
	padding: 15px;
	background-color: #FFFFFF;
}

.push-details-title{
	display: flex;
	color: #000000;
	font-size: 18px;
	font-weight: 800;
	justify-content: center;
}
.push-details-time{
	display: flex;
	justify-content: center;
	color: #999999;
	font-size: 12px;
	padding: 16px 0 12px 0;
}
.push-details-tx{
	font-size: 14px;
	color: #000000;
}
</style>
