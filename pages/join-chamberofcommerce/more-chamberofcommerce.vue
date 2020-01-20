<template>
	<view class="page">
		<view class="flex-row" style="padding: 3%;width: 94%;height: 30px;background-color: #FFFFFF;font-size: 14px;justify-content: space-between;">
			<view style="text-align: center;width: 30%;">广西全区</view>
			<view style="width: 1upx;height: 30px;background-color: #E6E6E6;"></view>
			<view style="text-align: center;width: 30%;">全部区县</view>
			<view style="width: 1upx;height: 30px;background-color: #E6E6E6;"></view>
			<view style="text-align: center;width: 30%;">地图</view>
		</view>


		<view style="margin-top: 12px;margin-left: 12px;margin-right: 12px;" v-for="(cfmItem,index) in chamberofcommerceList" :key="index">
			<!-- <view style="position:relative;" class="carousel">
				<image src="../../static/test/gs05.jpg" class="carousel" style="border-radius: 10px;"></image>
				<view class="lunbo-column" style="border-radius: 10px;">
					<text style="height: 100%"></text>
					　　　　<view class="cfm-row">
						<view style="height: 100%;width: 60px;flex-shrink: 0;display: flex;align-items: center;  ">
							<image src="../../static/test/gs03.jpg" mode="widthFix" class="cfm-img">
							</image>
						</view>
						<view style="display: flex;flex-direction: column;width: 100%;">
							<view class="cfm-title">{{cfmItem.title}}</view>
							<view class="cfm-description">成员106人/建会2018年/南宁</view>
						</view>
						<view style="height: 100%; width: 60px;flex-shrink: 0;display: flex;align-items: flex-end;">
							<navigator url="chamberofcommerce-details">
								<view class="cfm-button">详情</view>
							</navigator>
						</view>

					</view>
					　</view>
			</view>
 -->
			<view class="flex-row" style="height: 70px;font-size: 14px;">
				<view >{{cfmItem.name}}</view>
			</view>
		</view>
	
		<uni-load-more v-if="totalCount>=4" :status="more"></uni-load-more> 
	</view>
</template>

<script>
	import {
		mapState,
	} from 'vuex';
	import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue";
	import common from '../../common/url.js';
	var _self, serverUrlEas, serverUrl, pageNum = 1;
	export default {
		
		//获取vuex的sessionId
		computed: mapState([ 'hasLogin','uerInfo']),
		data() {
			return {
				cfmList: [{
						ico: '../../static/test/gs01.jpg',
						title: '良庆区工商联'
					},
					{
						ico: '../../static/test/gs02.jpg',
						title: '南宁市良兴区南晓镇商会'
					},
					{
						ico: '../../static/test/gs03.jpg',
						title: '南宁良庆区那马镇商会'
					}
				],
				chamberofcommerceList:[],
				searchValue: '' ,//搜索
				more:'more',
				totalCount:0
			}
		},
		onLoad: function() {
			serverUrlEas = common.serverUrlEas;
			serverUrl = common.serverUrl;
			_self=this;
			// this.getChamberofcommerce();
			this.getCham();
		},
		// // 下拉刷新
		// onPullDownRefresh: function() {
		// 	this.getChamberofcommerce();
		// },
		// // 上拉加载
		// onReachBottom: function() {
		// 	if (timer != null) {
		// 		clearTimeout(timer);
		// 	} //多次上拉清除延迟，保证只延迟一次
		// 	timer = setTimeout(function() {
		// 		_self.getMoreChamberofcommerce();
		// 	}, 500); //延迟1秒加载
		// },
		
		methods: {
			// //个人获取组织查询
			// getChamberofcommerce: function() {
			// 	_self.more='more';
			// 	uni.showNavigationBarLoading();
			// 	pageNum = 1;
			// 	uni.request({
			// 		header: {
			// 			sessionId: 'd296a0691c044dabb75e1ce6e7875071'
			// 		},
			// 		url: serverUrl + 'spVipPersonApply/query1?length=10&pageNum=' + pageNum + '&searchValue=' + this.searchValue,
			// 		success: function(res) {
			// 			console.log(res);
			// 			_self.totalCount=res.data.data[0].totalCount;
			// 			const data=res.data.data[0].results;
			// 			_self.chamberofcommerceList=data;
			// 			uni.stopPullDownRefresh();
			// 			uni.hideNavigationBarLoading();
			// 			pageNum++;
			// 		}
			// 	});
			// },
			// getMoreChamberofcommerce:function(){
			// 	if(_self.more=='noMore'){return false}
			// 	_self.more='loading';
			// 	uni.showNavigationBarLoading();
			// 	uni.request({
			// 		header: {
			// 			'sessionId': 'd296a0691c044dabb75e1ce6e7875071' //自定义请求头信息
			// 		},
			// 		url: serverUrl+'spVipPersonApply/query1?length=10&pageNum='+pageNum+'&searchValue='+this.searchValue,
			// 		success:function(res){
			// 			console.log(res);
			// 			console.log(res.data.data[0].results)
			// 			// 判断如果下拉加载为空则停止该方法
			// 			if(res.data.data[0].results[0]==null){
			// 				_self.more='noMoer';
			// 				uni.stopPullDownRefresh();
			// 				uni.hideNavigationBarLoading();
			// 				return false;
			// 			}
			// 			const data=res.data.data[0].results;
			// 			// 累加不覆盖进行下拉加
			// 			_self.chamberofcommerceList=_self.chamberofcommerceList.concat(data);
			// 			uni.stopPullDownRefresh();
			// 			uni.hideNavigationBarLoading();
			// 			page++;
			// 		}
			// 	})
			// }
			
			// 查询工商联组织机构树
			getCham:function(){
				uni.request({
					url: serverUrl+'eotree/getEnterpriseOrganization',
					method: 'GET',
					header:{
						sessionId:this.uerInfo.sessionId
					},
					success: res => {
						const data=res.data.data[0];
						// console.log(data[0]);
						const data_list=[];
						for(var i=0;i<data.length;i++){
							if(data[i].organizationType=='工商联'){
								data_list.push(data[i]);
							}
						}
						console.log(data_list);
						this.chamberofcommerceList=data_list;
					},
					fail: () => {
						
					},
					complete: () => {
						
					}
				});
			}
			
			
		},
		

	}
</script>

<style>
	@import url("cfm.css");
</style>
