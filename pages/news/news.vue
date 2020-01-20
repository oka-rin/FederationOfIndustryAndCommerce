<template>
	<view class="page">
		<!-- <view class="news-tabtop-height" >
			<view class="news-tabtop-column" v-for="(tabtop,index) in tabtopList" @click="tabTopClick(index)">
				<view :class="tabIndex==index?'news-tabtop-txActive':'news-tabtop-tx'">{{tabtop.title}}</view>
				<view :class="tabIndex==index?'news-tabtop-fgActive':'news-tabtop-fg'"></view>
			</view>
		</view> -->
		<view class="news-tabtop-height">
			<sun-tab :value.sync="swiperIndex" :tabList="tabtopList" rangeKey="title"></sun-tab>
		</view>

		<!---->
		<view class="swiper-area" id="demo01">
			<swiper :current="swiperIndex" style="height: 100%;" @change="animationfinish">
				<swiper-item>
					<mescroll-uni :down="downOption" @down="downCallback" :up="upOption" @up="upCallback">
						<scroll-view scroll-y :style="{ height: scrollViewHeight + 'px' }">
							<!-- :style="{ height: scrollViewHeight + 'px' }" -->

							<navigator :url="'news-details?id='+newsItem.id" class="news-item-block" v-for="(newsItem,index) in newsList"
							 :key="index">
								<image src="../../static/icos/point.png" class="news-item-isread" :style="newsItem.isread==0?'display:none;':''"
								 mode="widthFix"></image>
								<view class="news-item-column">
									<view style="font-size: 16px;color: #000000;height: 100%;">
										{{newsItem.title}}
									</view>
									<view class="news-item-time">{{newsItem.starttime}}</view>
								</view>
							</navigator>

							<view style="height:5px;"></view>
						</scroll-view>
					</mescroll-uni>
				</swiper-item>
				<swiper-item>sdfsdf</swiper-item>
			</swiper>

		</view>
		<!--  -->
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	import {
		friendlyDate
	} from '@/common/util.js';
	import sunTab from '@/components/sun-tab/sun-tab.vue';
	import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue";
	import sibList from '@/components/sib-list/sib-list.vue';
	import common from '../../common/url.js'
	var _self, pageNum = 1,
		newsLength, serverUrlEas, sessionId;
	export default {
		computed: mapState(['hasLogin', 'uerInfo']),
		data() {
			return {
				isread: 0, //是否阅读
				tabIndex: 0,
				scrollViewHeight: 0, //newsList的整体高度
				swiperIndex: 0, //滑动标签
				test: [],
				tabtopList: [{
						id: "1",
						title: "系统公告"
					},
					{
						id: "2",
						"title": "通知公告"
					}

				],
				newsList: [],
				downOption: {
					use: true, // 是否启用下拉刷新; 默认true
					auto: true, // 是否在初始化完毕之后自动执行下拉刷新的回调; 默认true
				},
				upOption: {
					use: true, // 是否启用上拉加载; 默认true
					auto: true, // 是否在初始化完毕之后自动执行上拉加载的回调; 默认true
					page: {
						num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
						size: 10 // 每页数据的数量,默认10
					},
					noMoreSize: 5, // 配置列表的总数量要大于等于5条才显示'-- END --'的提示
					empty: {
						tip: '暂无相关数据'
					},
					textNoMore: '没有更多消息了'
				},
			}
		},
		onLoad: function() {
			_self = this;
			sessionId = this.uerInfo.sessionId;
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
			serverUrlEas = common.serverUrlEas;
			this.getNewsList();

		},

		methods: {
			getNewsList: function() {
				uni.request({
					header: {
						'sessionId': sessionId //自定义请求头信息
					},
					url: serverUrlEas + 'bulletin/queryBulletinTitlesByPage?length=10&pageNum=' + pageNum,

					success: function(res) {
						console.log(res)
						const data = res.data.data[0];
						console.log(data.pageCount);
						//判断是否如度过哦
						if (data.pageCount > 0) {
							for (var i = 0; i < data.pageCount; i++) {
								if (data.results[i].isread != 0) {
									_self.isread++;
								}
							}
							newsLength = data.pageCount;
							if (_self.isread == 0) {
								return
							} else {
								_self.tabtopList[0].title = '通知公告(' + _self.isread + ')';
							}
							console.log(_self.isread + 'dfdf');
						}

					},
					fail: function() {

					}
				})
			},
			tabTopClick: function(e) {
				_self.tabIndex = _self.swiperIndex = e;
				//console.log(e)
			},
			animationfinish: function({
				detail: {
					current
				}
			}) {
				console.log(current);
				_self.tabIndex = _self.swiperIndex = current;
			},
			downCallback: function(mescroll) {
				pageNum = 1;
				uni.request({
					header: {
						'sessionId': sessionId //自定义请求头信息
					},
					url: serverUrlEas + 'bulletin/queryBulletinTitlesByPage?length=10&pageNum=' + pageNum,
					success: function(res) {
						// 成功隐藏下拉加载状态

						const data = res.data.data[0].results;

						const data_list = data.map((news) => {
							return {
								id: news.id,
								isread: news.isread,
								title: news.title,
								starttime: friendlyDate(new Date(news.starttime).getTime()),
							};
						});
						_self.newsList = data_list;
						mescroll.endSuccess();

					},
					fail: () => {
						// 失败隐藏下拉加载状态
						mescroll.endErr()
					},

				});
				mescroll.resetUpScroll(); //重置为第一页
			},
			upCallback: function(mescroll) {
				// 此时mescroll会携带page的参数:
				
				const pageNum = mescroll.num; // 页码, 默认从1开始
				const pageSize = mescroll.size; // 页长, 默认每页10条
				uni.request({
					header: {
						'sessionId': sessionId //自定义请求头信息
					},
					url: serverUrlEas + 'bulletin/queryBulletinTitlesByPage?pageNum=' + pageNum + '&length=' + pageSize,
					success: function(res) {
						console.log()
						// 接口返回的当前页数据列表 (数组)
						const data = res.data.data[0].results;
						const totalCount = res.data.data[0].totalCount; //获取总数
						const data_list = data.map((news) => {
							return {
								id: news.id,
								isread: news.isread,
								title: news.title,
								starttime: friendlyDate(new Date(news.starttime).getTime()),
							};
						});

						//设置列表数据
						if (mescroll.num == 1) _self.newsList = []; //如果是第一页需手动置空列表
						_self.newsList = _self.newsList.concat(data_list); //追加新数据
						// 成功隐藏下拉加载状态
						//方法一(推荐): 判断是否有下一页
						//mescroll.endByPage(curPageData.length, hasNext); 
						//mescroll.endSuccess(data_list.length,newsLength);
						console.log(totalCount)
						mescroll.endBySize(data_list.length, totalCount);


					},
					fail: function() {
						// 失败隐藏下拉加载状态
						mescroll.endErr()
						console.log(4454477)
					}
				})

			}

		},

		onReady: function() {
			uni.createSelectorQuery().select("#demo01").fields({
				size: true,
				id: true
			}, function(res) {
				console.log(res)
				_self.scrollViewHeight = res.height-100;
				console.log(_self.scrollViewHeight)
			}).exec();


		},
		components: {
			sunTab,
			MescrollUni,
			sibList
		}
	}
</script>

<style>
	@import url("news.css");
</style>
