<template>
	<view class="page">
		<view class="news-tabtop-height">
			<sun-tab :value.sync="swiperIndex" :tabList="tabtopList" rangeKey="title"></sun-tab>
		</view>

		<view class="swiper-area" id="demo01">
			<swiper :current="swiperIndex" style="height: 100%;" @change="animationfinish">
				<swiper-item >
					
					<scroll-view scroll-y :style="{ height: scrollViewHeight + 'px' }">
						<view  class="application-block-item" v-for="(item,index) in applicationList" :key="index">
							<view class="flex-row">
								<view class="is-show-name" :style="{background:item.back_color,color:item.sta_color}">{{item.status}}</view>
								<view class="a-link" style="font-size: 18px;width: 100%;">
									{{item.appealtitle}}
								</view>
								<image src="../../../static/svn/go-tow.svg" mode="widthFix" style="flex-shrink: 0;width: 20px;margin-right: 5%"></image>
							</view>
							<view style="background-color:#e6e6e6;width: 95%;height:1upx;margin-top: 12px;"></view>
							<view style="display: flex;flex-direction: row;margin-top: 10px;justify-content: space-between;width: 100%;">
								<view style="display: flex;flex-direction: column;font-size: 14px;">
									<view style="flex-direction: row;display: flex;">
										<view style="color: #999999;">诉求编号：</view>
										<view>{{item.appealno}}</view>
									</view>
									<view style="flex-direction: row;display: flex;margin-top: 5px;">
										<view style="color: #999999;">诉求类型：</view>
										<view>{{item.appealtype}}</view>
									</view>
									<view style="flex-direction: row;display: flex;margin-top: 5px;">
										<view style="color: #999999;">申请时间：</view>
										<view>{{item.auditdate}}</view>
									</view>
								</view>

								<view class="application-status" :style="{background:item.color}">{{item.dealstatus}}</view>
							</view>

						</view>
						<uni-load-more v-if="totalCount>=4" :status="more"></uni-load-more> 
						<view style="width: 100%;height: 110px;"></view>
						
					</scroll-view>
					
				</swiper-item>
				
				<swiper-item >
					<scroll-view scroll-y :style="{ height: scrollViewHeight + 'px' }">
						<view v-if="item.dealstatus=='待处理'" class="application-block-item" v-for="(item,index) in applicationList" :key="index">
							<view class="flex-row">
								<view class="is-show-name" :style="{background:item.back_color,color:item.sta_color}">{{item.status}}</view>
								<view class="a-link" style="font-size: 18px;width: 100%;">
									{{item.appealtitle}}
								</view>
								<image src="../../../static/svn/go-tow.svg" mode="widthFix" style="flex-shrink: 0;width: 20px;margin-right: 5%"></image>
							</view>
							<view style="background-color:#e6e6e6;width: 95%;height:1upx;margin-top: 12px;"></view>
							<view style="display: flex;flex-direction: row;margin-top: 10px;justify-content: space-between;width: 100%;">
								<view style="display: flex;flex-direction: column;font-size: 14px;">
									<view style="flex-direction: row;display: flex;">
										<view style="color: #999999;">诉求编号：</view>
										<view>{{item.appealno}}</view>
									</view>
									<view style="flex-direction: row;display: flex;margin-top: 5px;">
										<view style="color: #999999;">诉求类型：</view>
										<view>{{item.appealtype}}</view>
									</view>
									<view style="flex-direction: row;display: flex;margin-top: 5px;">
										<view style="color: #999999;">申请时间：</view>
										<view>{{item.auditdate}}</view>
									</view>
								</view>
				
								<view class="application-status" :style="{background:item.color}">{{item.dealstatus}}</view>
							</view>
				
						</view>
				
					
						<view style="width: 100%;height: 10px;"></view>
					</scroll-view>
				</swiper-item>
				
				<swiper-item >
					<scroll-view scroll-y :style="{ height: scrollViewHeight + 'px' }">
						<view v-if="item.dealstatus=='处理中'" class="application-block-item" v-for="(item,index) in applicationList" :key="index">
							<view class="flex-row">
								<view class="is-show-name" :style="{background:item.back_color,color:item.sta_color}">{{item.status}}</view>
								<view class="a-link" style="font-size: 18px;width: 100%;">
									{{item.appealtitle}}
								</view>
								<image src="../../../static/svn/go-tow.svg" mode="widthFix" style="flex-shrink: 0;width: 20px;margin-right: 5%"></image>
							</view>
							<view style="background-color:#e6e6e6;width: 95%;height:1upx;margin-top: 12px;"></view>
							<view style="display: flex;flex-direction: row;margin-top: 10px;justify-content: space-between;width: 100%;">
								<view style="display: flex;flex-direction: column;font-size: 14px;">
									<view style="flex-direction: row;display: flex;">
										<view style="color: #999999;">诉求编号：</view>
										<view>{{item.appealno}}</view>
									</view>
									<view style="flex-direction: row;display: flex;margin-top: 5px;">
										<view style="color: #999999;">诉求类型：</view>
										<view>{{item.appealtype}}</view>
									</view>
									<view style="flex-direction: row;display: flex;margin-top: 5px;">
										<view style="color: #999999;">申请时间：</view>
										<view>{{item.auditdate}}</view>
									</view>
								</view>
				
								<view class="application-status" :style="{background:item.color}">{{item.dealstatus}}</view>
							</view>
				
						</view>
				
					
						<view style="width: 100%;height: 10px;"></view>
					</scroll-view>
				</swiper-item>
				
				
				<swiper-item >
					<scroll-view scroll-y :style="{ height: scrollViewHeight + 'px' }">
						<view v-if="item.dealstatus=='已处理'" class="application-block-item" v-for="(item,index) in applicationList" :key="index">
							<view class="flex-row">
								<view class="is-show-name" :style="{background:item.back_color,color:item.sta_color}">{{item.status}}</view>
								<view class="a-link" style="font-size: 18px;width: 100%;">
									{{item.appealtitle}}
								</view>
								<image src="../../../static/svn/go-tow.svg" mode="widthFix" style="flex-shrink: 0;width: 20px;margin-right: 5%"></image>
							</view>
							<view style="background-color:#e6e6e6;width: 95%;height:1upx;margin-top: 12px;"></view>
							<view style="display: flex;flex-direction: row;margin-top: 10px;justify-content: space-between;width: 100%;">
								<view style="display: flex;flex-direction: column;font-size: 14px;">
									<view style="flex-direction: row;display: flex;">
										<view style="color: #999999;">诉求编号：</view>
										<view>{{item.appealno}}</view>
									</view>
									<view style="flex-direction: row;display: flex;margin-top: 5px;">
										<view style="color: #999999;">诉求类型：</view>
										<view>{{item.appealtype}}</view>
									</view>
									<view style="flex-direction: row;display: flex;margin-top: 5px;">
										<view style="color: #999999;">申请时间：</view>
										<view>{{item.auditdate}}</view>
									</view>
								</view>
				
								<view class="application-status" :style="{background:item.color}">{{item.dealstatus}}</view>
							</view>
				
						</view>
			
				
						<view style="width: 100%;height: 10px;"></view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
		<view class="out-block">
			<navigator url="add-appeal" class="new-join-cfm">提交诉讼</navigator>
		</view>
	</view>
</template>

<script>
	import {
		friendlyDate
	} from '@/common/util.js';
	import {
		mapState
	} from 'vuex';
	import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue";
	import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue";
	import common from '../../../common/url.js';
	import sunTab from '@/components/sun-tab/sun-tab.vue';
	var _self, serverUrl, pageNum = 1,timer=null,length=10,
		sessionId;
	export default {
		computed: mapState(['hasLogin', 'uerInfo']),
		data() {
			return {
				swiperIndex: 0,
				scrollViewHeight: 0,
				tabtopList: [{
						title: '全部',
						id: 0
					},
					{
						title: '待处理',
						id: 1
					},
					{
						title: '处理中',
						id: 2
					},
					{
						title: '已处理',
						id: 3
					},
				],
				applicationList: [],
				allappeal: [],
				dclallappeal:[],
				more:'more',
				totalCount:0,
			}
		},
		components: {
			sunTab,
			uniLoadMore,
			MescrollUni
		},
		
		//上拉加载
		onReachBottom:function(){
			// 延迟加载
			console.log(2)
			if(timer!=null){clearTimeout(timer);}//多次上拉清除延迟，保证只延迟一次
			timer=setTimeout(function(){_self.upCallback();},500);//延迟0.5秒加载
		},
		
		methods: {
			animationfinish: function({
				detail: {
					current
				}
			}) {
				this.swiperIndex = current;

			},
			downCallback: function() {
				pageNum=1;
				uni.request({
					url: serverUrl + 'spMgAppeal/query?length='+length+'&pageNum=1',
					header: {
						sessionId: sessionId,
					},
					success: function(res) {
						// console.log(res);
						const totalCount=res.data.data[0].totalCount;
						_self.totalCount=totalCount;
						const data = res.data.data[0].results;
						const data_list = data.map((news) => {
							return {
								appealid: news.appealid, //诉求id
								enterpriseid: news.enterpriseid, //企业Id
								appealno: news.appealno, //诉求编号
								appealtitle: news.appealtitle, //诉求标题
								appealtype: news.appealtype, //诉求类型
								status: news.status, //是否公开 0-公开 1-不公开
								contents: news.contents, //诉求内容
								inputmanid: news.inputmanid, //申请人id
								inputman: news.inputman, //申请人
								inputdate: news.inputdate, //申请日期
								telephone: news.telephone, //联系电话
								address: news.address, //联系地址
								email: news.email, //邮箱
								auditorid: news.auditorid, //承接人id
								auditor: news.auditor, //承接人
								auditdate: friendlyDate(new Date(news.auditdate).getTime()), //承接日期
								dealstatus: news.dealstatus, //处理状态 0-待处理 1-处理中 2-已处理
								dealdate: news.dealdate, //处理日期
								dealresult: news.dealresult, //处理方案及结果
								points: news.points, //诉求处理评分
								memo: news.memo, //备注
								color: '#007AFF', //颜色
								back_color: '',
								sta_color: ''
							}
						});

						for (var i = 0; i < data_list.length; i++) {
							if (data_list[i].dealstatus == 0) {
								data_list[i].dealstatus = '待处理';
								data_list[i].color = '#FF0000';
							} else if (data_list[i].dealstatus == 1) {
								data_list[i].dealstatus = '处理中';
								data_list[i].color = '#007AFF';
							} else if (data_list[i].dealstatus == 2) {
								data_list[i].dealstatus = '已处理';
								data_list[i].color = '#999999';
							}

							if (data_list[i].appealtype == 0) {
								data_list[i].appealtype = '咨询';
							} else if (data_list[i].appealtype == 1) {
								data_list[i].appealtype = '投诉';
							} else if (data_list[i].appealtype == 2) {
								data_list[i].appealtype = '建议';
							} else {
								data_list[i].appealtype = '其他';
							}

							if (data_list[i].status == 0) {
								data_list[i].status = '公开';
								data_list[i].back_color = '#b8e6f6';
								data_list[i].sta_color = '#007AFF'
							} else {
								data_list[i].status = '不公开';
								data_list[i].back_color = '#eeeeed';
								data_list[i].sta_color = '#999999'
							}
						};
						_self.applicationList = data_list;
						
						pageNum++;
					},
					fail: (err) => {
						
					},
				
				});
				// mescroll.resetUpScroll(); //重置为第一页
			
			},
			upCallback:function(){
				console.log(1)
				if(_self.more=='noMore'){
					return
				};
				_self.more='loading';
				uni.showNavigationBarLoading();
				uni.request({
			
					url: serverUrl + 'spMgAppeal/query?length='+length+'&pageNum='+pageNum,
					header: {
						sessionId: sessionId,
					},
					success: function(res) {
						console.log(2)
						const totalCount=res.data.data[0].totalCount;
						
						const data = res.data.data[0].results;
						console.log(data);
						if(totalCount==0){return};
						if(data[0]==null){
							_self.more='noMore';
							uni.stopPullDownRefresh();
							uni.hideNavigationBarLoading();
							return false;
						};
						const data_list = data.map((news) => {
							return {
								appealid: news.appealid, //诉求id
								enterpriseid: news.enterpriseid, //企业Id
								appealno: news.appealno, //诉求编号
								appealtitle: news.appealtitle, //诉求标题
								appealtype: news.appealtype, //诉求类型
								status: news.status, //是否公开 0-公开 1-不公开
								contents: news.contents, //诉求内容
								inputmanid: news.inputmanid, //申请人id
								inputman: news.inputman, //申请人
								inputdate: news.inputdate, //申请日期
								telephone: news.telephone, //联系电话
								address: news.address, //联系地址
								email: news.email, //邮箱
								auditorid: news.auditorid, //承接人id
								auditor: news.auditor, //承接人
								auditdate: friendlyDate(new Date(news.auditdate).getTime()), //承接日期
								dealstatus: news.dealstatus, //处理状态 0-待处理 1-处理中 2-已处理
								dealdate: news.dealdate, //处理日期
								dealresult: news.dealresult, //处理方案及结果
								points: news.points, //诉求处理评分
								memo: news.memo, //备注
								color: '#007AFF', //颜色
								back_color: '',
								sta_color: ''
							}
						});
						console.log(data_list);
				
						for (var i = 0; i < data_list.length; i++) {
							if (data_list[i].dealstatus == 0) {
								data_list[i].dealstatus = '待处理';
								data_list[i].color = '#FF0000';
							} else if (data_list[i].dealstatus == 1) {
								data_list[i].dealstatus = '处理中';
								data_list[i].color = '#007AFF';
							} else if (data_list[i].dealstatus == 2) {
								data_list[i].dealstatus = '已处理';
								data_list[i].color = '#999999';
							};
				
							if (data_list[i].appealtype == 0) {
								data_list[i].appealtype = '咨询';
							} else if (data_list[i].appealtype == 1) {
								data_list[i].appealtype = '投诉';
							} else if (data_list[i].appealtype == 2) {
								data_list[i].appealtype = '建议';
							} else {
								data_list[i].appealtype = '其他';
							};
				
							if (data_list[i].status == 0) {
								data_list[i].status = '公开';
								data_list[i].back_color = '#b8e6f6';
								data_list[i].sta_color = '#007AFF'
							} else {
								data_list[i].status = '不公开';
								data_list[i].back_color = '#eeeeed';
								data_list[i].sta_color = '#999999'
							}
						};
						
						_self.applicationList=_self.applicationList.concat(data_list);
						if(data_list.length<length){
							_self.more='noMore';
						}
						uni.stopPullDownRefresh();
						uni.hideNavigationBarLoading();
						pageNum++;
						
					},
					fail: () => {
						
					}
				});
							
			},
			shuju: function() {

			}
		},
		onLoad() {
			_self = this;
			sessionId = this.uerInfo.sessionId;
			serverUrl = common.serverUrl;
			// this.getAppeal();
			this.downCallback()


		},
		onReady: function() {
			// 获取控件的高度
			uni.createSelectorQuery().select("#demo01").fields({
				size: true,
				id: true
			}, function(res) {
				console.log(res)
				_self.scrollViewHeight = res.height;
				console.log(_self.scrollViewHeight)
			}).exec();
		}
	}
</script>

<style>
	.news-tabtop-height {
		position: fixed;
		width: 100%;
		z-index: 999;
	}

	.swiper-area {
		width: 94%;
		height: 100%;
		padding: 50px 3% 0 3%;
		background-color: #EEEEED;
		/* position:sticky; */
		/* margin-top: 50px; */

	}

	.application-block-item {
		border-radius: 3px;
		width: 97%;
		box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.19);
		background-color: #FFFFFF;
		padding: 4% 0 5% 5%;
		margin-top: 15px;
	}

	.application-status {
		border-radius: 25px 0 0 25px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		font-size: 14px;
		color: #FFFFFF;
		width: auto;
		padding: 0 12px;
		margin-top: 5px;
	}

	.out-block {
		height: 55px;
		width: 100%;
		position: fixed;
		bottom: 0;
		display: flex;
		flex-direction: row;
		justify-content: center;
		background-color: #eeeeed;
	}

	.new-join-cfm {
		background-color: #007AFF;
		height: 42px;
		line-height: 42px;
		color: #FFFFFF;
		width: 230px;
		border-radius: 25px;
		text-align: center;
		margin-top: 5px;
	}

	.is-show-name {
		border-radius: 7px;
		padding: 2upx 10upx;
		height: 20px;
		font-size: 14px;
		text-align: center;
		line-height: 20px;
		flex-shrink: 0;
		margin-right: 8px;
	}
</style>
