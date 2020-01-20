<template>
	<view class="page">
		<!-- #ifdef APP-PLUS -->
		<view class="status_bar" id='status_bar'>
			<view class="top_view"></view>
		</view>
		<!-- #endif -->
		<view class="search-height">
			<view class="scan-it">
				<image src="../../static/svn/scan-it.svg" class="scan-ico"></image>
				<text class="scan-it-text">扫一扫</text>
			</view>
			<navigator url="../sms/sms" class="search-block">
				<view class="search-ico-wapper">
					<image src="../../static/icos/search.png" class="search-ico"></image>
				</view>
				<input placeholder="搜索你感兴趣的内容" disabled="true" maxlength="10" class="search-text" confirm-type="search" @confirm="searchMe" />
			</navigator>
			<view class="scan-it">
				<image src="../../static/svn/member.svg" class="scan-ico"></image>
				<text class="scan-it-text">会员玛</text>
			</view>
		</view>

		<view style="width: 100%;">
			<view :style="{ height: height_bar + 'px' }" class="text"></view>
			<!-- 轮播图 -->
			<swiper indicator-dots="true" autoplay="true" class="carousel">
				<swiper-item v-for="(commerceItem,index) in commerceList" :key="index" @click="gslDetails(index)">
					<view  style="position:relative;">
						<image :src="commerceItem.imgurl" class="carousel"></image>
						<view class="lunbo-column">
							<text style="height: 104px"></text>
							<text class="lunbo-tx">{{commerceItem.title}}</text>
						</view>
					</view>
				</swiper-item>
			</swiper>

			<!-- 公告栏 -->
			<view class="announcement">
				<view style="margin-left: 4px;display: flex;flex-direction: column;align-items: center;width: 10%;">
					<view class="text-red">通知</view>
					<view class="text-mo">公告</view>
				</view>
				<swiper autoplay="true" class="announcement-block" style="margin-left: 7px;" vertical="true" next-margin="22.5px">
					<swiper-item v-for="(announcementItem,annIndex) in announcementList" :key="annIndex">
						<view class="announcement-row-block">
							<view class="text-color">{{annIndex+1}}</view>
							<view class="text-announcement">{{announcementItem.title}}</view>
							<view class="text-time">{{announcementItem.starttime}}</view>
						</view>
					</swiper-item>
				</swiper>
				
				<!-- 分割线 -->
				<view class="text-background"></view>
				<!-- 更多 -->
				<navigator url='../news/more-news' class="more-ico">
					<image src="../../static/svn/more.svg" class="more-ico"></image>
				</navigator>
			</view>

			<!-- 分割线 -->
			<view style="background-color: #FFFFFF;width: 100%;">
				<view class="ge-ico"></view>
			</view>

			<!-- 功能模块点 -->
			<view class="function-row">
				<view class="function-column">
					<image src="../../static/svn/chamberofcommerce.svg" mode="widthFix" class="function-ico"></image>
					<view class="function-text">商会名录</view>
				</view>

				<view class="function-column">
					<image src="../../static/svn/chamberofcommerce.svg" class="function-ico"></image>
					<view class="function-text">基本信息</view>
				</view>

				<view class="function-column">
					<image src="../../static/svn/chamberofcommerce.svg" class="function-ico"></image>
					<view class="function-text">问卷调查</view>

				</view>

				<view class="function-column">
					<image src="../../static/svn/chamberofcommerce.svg" class="function-ico"></image>
					<view class="function-text">诉讼申请</view>
				</view>

				<view class="function-column">
					<image src="../../static/svn/chamberofcommerce.svg" class="function-ico"></image>
					<view class="function-text">入会申请</view>
				</view>
			</view>

			<!-- 商会推荐 -->
			<view class="title-column">
				<view class="title-row">
					<view class="title-color01"> 商会推荐</view>
					<navigator url="../join-chamberofcommerce/more-chamberofcommerce" class="title-color02">
						<view class="title-color02"> 更多<image src="../../static/svn/go.svg" style="width: 13px;height: 13px;margin-top: 3px;"></image>
						</view>
					</navigator>
				</view>


				<view class="title-row" style="margin-top: 6px;">
					<view class="title-column-02">
						<image src="../../static/test/gs01.jpg" class="title-ico"></image>
						<view style="font-size: 14px;margin-top: 4px;">良庆行业商会 </view>
						<view class="tx-member"> 209会员</view>
						<view class="title-button"> 加入</view>
					</view>

					<view class="title-column-02">
						<image src="../../static/test/gs02.jpg" class="title-ico"></image>
						<view style="font-size: 14px;margin-top: 4px;">良庆行业商会 </view>
						<view class="tx-member"> 209会员</view>
						<view class="title-button"> 加入</view>
					</view>

					<view class="title-column-02">
						<image src="../../static/test/gs03.jpg" class="title-ico"></image>
						<view style="font-size: 14px;margin-top: 4px;">良庆行业商会 </view>
						<view class="tx-member"> 209会员</view>
						<view class="title-button"> 加入</view>
					</view>
				</view>


			</view>

			<!-- 政策推送 -->
			<view class="push-column">

				<view class="title-row">
					<view class="title-color01"> 政策推送</view>
					<navigator url="../more-push/push-list" class="title-color02">
						<view class="title-color02"> 更多
							<image src="../../static/svn/go.svg" style="width: 13px;height: 13px;margin-top: 3px;">
							</image>
						</view>
					</navigator>
				</view>

				<navigator class="push-item" url='../push-details/pushdetails' v-for="(pushItem,item) in pushList" :key="item">
					<view class="push-row">
						<view class="push-tx">
							<text class="push-title">{{pushItem.regulatetitle}}</text>
							<view class="push-time">
								<text>{{pushItem.inputdate}}</text>
							</view>
						</view>
						<image src="../../static/test/gs05.jpg" mode="widthFix" class="push-img"></image>
					</view>
					<view style="background-color: #FFFFFF;width: 100%;padding: 20upx 0upx 0upx 0upx;">
						<view class="push-fenge"></view>
					</view>
				</navigator>
				<view style="text-align: center;color: #999999;font-size: 12px;padding: 5% 0;">已经到达底部了</view>
			</view>
		</view>

	</view>

</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	
	import {
		friendlyDateAndMonth,
		friendlyDate
	} from '@/common/util.js';
	
	import common from '../../common/url.js';
	var _self, serverUrlEas, serverUrl, sessionId;
	export default {
		computed: mapState([ 'hasLogin','uerInfo']),
		data() {
			return {
				height_bar: 49,
				carouselList: [{
						id: 1,
						imgurl: "../../static/test/lunbo01.jpg",
						title:'胜多负少的收到货福克斯的福克斯的粉红色款到发货快递费'
					},
					{
						id: 2,
						imgurl: "../../static/test/lunbo01.jpg",
						title:'水电费水电费收到货福克斯的福克斯的粉红色款到发货快递费'
					},
					{
						id: 3,
						imgurl: "../../static/test/lunbo01.jpg",
						title:'第三方收到货福克斯的福克东方时尚斯的粉红色款到发货快递费'
					},
				],
				announcementList: [],
				pushList: [],
				commerceList: []
			}
		},
		
		onLoad: function() {
			_self = this;
			sessionId=this.uerInfo.sessionId;
			serverUrl = common.serverUrl;
			serverUrlEas = common.serverUrlEas;
			this.getAnnouncement();
			this.getCommerceList();
			this.getPushList();
			
			console.log(sessionId);
		},
		onShow:function(){
			// try {
			//     const data = uni.getStorage('login_key');
			//     if (data==null||data=='') {
			//         console.log('获取本地数据失败');
			//     }else{
			// 		console.log('获取本地数据成功'+data.sessionId);
			// 		sessionId=data.sessionId;
			// 	}
			// } catch (e) {
			    
			// }
			
		},
		
		// 渲染结束后执行的方法
		onReady: function() {
			console.log('res')
			//#ifdef APP-PLUS
			uni.createSelectorQuery().select('#status_bar').fields({
				size: true,
			}, function(res) {
				console.log(res)
				_self.height_bar = res.height + _self.height_bar;
			}).exec();
			// #endif
		},
		
		methods: {
			// 获取公告
			getAnnouncement: function() {
				uni.request({
					header: {
						'sessionId': sessionId
					},
					url: serverUrlEas + 'bulletin/queryBulletinTitlesByPage?pageNum=1&length=6',

					success: function(res) {
						console.log(res);
						const totalCount=res.data.data[0].totalCount;
						const data = res.data.data[0].results;
						console.log(data);
						if(totalCount==0){
							return
						}else{
							console.log(1);
							const data_list = data.map((news) => {
								return {
									id: news.id,
									title: news.title,
									starttime: friendlyDateAndMonth(new Date(news.starttime).getTime())
								};
							});
							_self.announcementList = data_list;
						}

					}
				})
			},
			// 获取工商联信息
			getCommerceList: function() {
				uni.request({
					header: {
						'sessionId': sessionId
					},
					url: serverUrl + 'spMgAssociationMessage/query?pageNum=1&length=5',
					success: function(res) {
						console.log(res);
						_self.commerceList=res.data.data[0].results;
					}
				})
			},
			searchMe: function() {
				uni.navigateTo({
					url: "../more-push/push-list",
				})
			},
			getPushList:function(){
				uni.request({
					header:{
						'sessionId':sessionId
					},
					url:serverUrl + 'spMgRegulate/query?length=10&pageNum=1',
					success:function(res){
						const totalCount = res.data.data[0].totalCount;
						//计算总数
						_self.totalCount = totalCount;
						const data=res.data.data[0].results;
						console.log(data);
						const data_list = data.map((news) => {
							return{
								inputman :news.inputman,
								inputdate:friendlyDate(new Date(news.inputdate).getTime()),
								regulateid:news.regulateid,
								regulateurl:news.regulateurl,
								regulatetitle:news.regulatetitle,
							};
						});				
						 _self.pushList=data_list;

					}
				})
			},
			gslDetails:function(index){
				var id=_self.commerceList[0].id;
				uni.navigateTo({
					url:'gslDetails?id='+id,
				});
			}
		}
	}
</script>

<style>
	@import url("index.css");

	.text {
		width: 100%;
	}
</style>
