<template>
	<view class="page">
		<view class="push-details-buju">
			<text class="push-details-title">{{contents.regulatetitle}}</text>
			<text class="push-details-time" >来源:中国劳动人事争议调解仲裁  时间:{{inputdate}}</text>	
			<view >
				<view style="margin-bottom: 10px;">
					<rich-text :nodes="contents.contents"></rich-text>
				<image v-if="contents.regulateid!=''" :src="contents.regulateurl" mode="widthFix" style="width: 100%;border-radius: 5px;"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	}from 'vuex'
	import {
		friendlyDate
	} from '@/common/util.js';
	import common from '../../common/url.js'
	var _self,regulateid,serverUrl,sessionId;
	export default {
		computed:mapState(['hasLogin','uerInfo']),
		data() {
			return {
				contents:'',
				inputdate:'',
				textList:[{
					textItem:'  官方创新很好，又为我们创造了一个尺寸单位，upx，但是考虑到项目迁移和开发通用，我决定还是使用px配合flexible实现适配，确保项目可以轻松移植到uni框架，需要改动@dcloudio/vue-cli-plugin-uni/packages/postcss文件，在postcss.config.js文件中引入的，保证我们小写px自动转换rem，大写的不转换，默认采用750px的设计稿，所以其他尺寸设计稿的需要注意转换'
				},
				{
					textItem:'官方创新很好，又为我们创造了一个尺寸单位，upx，但是考虑到项目迁移和开发通用，我决定还是使用px配合flexible实现适配，确保项目可以轻松移植到uni框架，需要改动@dcloudio/vue-cli-plugin-uni/packages/postcss文件，在postcss.config.js文件中引入的，保证我们小写px自动转换rem，大写的不转换，默认采用750px的设计稿，所以其他尺寸设计稿的需要注意转换'
				},
				{
					textItem:'官方创新很好，又为我们创造了一个尺寸单位，upx，但是考虑到项目迁移和开发通用，我决定还是使用px配合flexible实现适配，确保项目可以轻松移植到uni框架，需要改动@dcloudio/vue-cli-plugin-uni/packages/postcss文件，在postcss.config.js文件中引入的，保证我们小写px自动转换rem，大写的不转换，默认采用750px的设计稿，所以其他尺寸设计稿的需要注意转换'
				}
				]
			}
		},
		onLoad:function(e){
			_self=this;
			sessionId=this.uerInfo.sessionId;
			// try {
			//     const data = uni.getStorageSync('login_key');
			//     if (data==null||data=='') {
			//         console.log('获取本地数据失败');
			//     }else{
			// 		console.log('获取本地数据成功'+data.sessionId);
			// 		sessionId=data.sessionId;
			// 	}
			// } catch (e) {
			    
			// }
			serverUrl=common.serverUrl;
			_self.regulateid=e.regulateid;
			console.log(_self.regulateid);
			this.getContent(_self.regulateid);
		},
		
		methods: {
			getContent:function(id){
				console.log(id);
				uni.request({
					header:{
						'sessionId': sessionId //自定义请求头信息
					},
					url:serverUrl+'spMgRegulate/getInfo?regulateid='+1177,
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
@import url("pushdetails.css");
</style>
