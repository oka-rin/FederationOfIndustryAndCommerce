<template>
	<view class="page">
		<navigator class="push-column" :url="'../push-details/pushdetails?regulateid='+regulationItem.regulateid" v-for="(regulationItem,index) in regulations"
		 :key="index">
			<view style="flex-direction: row;display: flex;">
				<image src="../../static/icos/point.png" class="news-item-isread" :style="regulationItem.isread==1?'display:none;':''" ></image>
				<view class="push-column02">
					<view class="push-text">{{regulationItem.title}} </view>
					<!-- <rich-text :nodes="regulationItem.contents"></rich-text> -->
					<view style="height: 100%;color:#FFFFFF ;font-size: 14px;"></view>
					<view class="push-row-02">
						<view style="font-size: 12px;color:#999999 ;">{{regulationItem.starttime}}</view>
					</view>
					<view style="background-color: #FFFFFF;width: 100%;margin-top: 10px;">
						<view class="push-fenge"></view>
					</view>
				</view>
			</view>

		</navigator>
		<!-- <view class="loading">{{lodingText}}</view> -->
		<uni-load-more v-if="totalCount>=4" :status="more"></uni-load-more>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	//日期分割
	import {
		friendlyDate
	} from '@/common/util.js';
	import common from '../../common/url.js';
	import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue";
	var _self, pageNum = 1,
		timer = null,
		serverUrlEas, sessionId;
	export default {
		computed: mapState(['hasLogin', 'uerInfo']),
		data() {
			return {
				regulations: [],
				lodingText: '加载更多…',
				more: 'more',
				totalCount: 0
			}
		},
		components: {
			uniLoadMore
		},
		onLoad: function() {
			_self = this;
			sessionId = this.uerInfo.sessionId;
			serverUrlEas = common.serverUrlEas;
			this.getNews();
		},
		//下拉刷新
		onPullDownRefresh: function() {
			this.getNews();
		},
		//上拉加载
		onReachBottom: function() {
			// 延迟加载
			if (timer != null) {
				clearTimeout(timer);
			} //多次上拉清除延迟，保证只延迟一次
			timer = setTimeout(function() {
				_self.getMoreNews();
			}, 500); //延迟0.5秒加载
		},

		methods: {
			getNews: function() {
				pageNum = 1;
				_self.more = 'more';
				// 加载提示
				uni.showNavigationBarLoading();
				uni.request({
					// 请求头
					header: {
						'sessionId': sessionId //自定义请求头信息
					},
					url: serverUrlEas + 'bulletin/queryBulletinTitlesByPage?length=10&pageNum=' + pageNum,

					success: function(res) {
						const totalCount = res.data.data[0].totalCount;
						//计算总数
						_self.totalCount = totalCount;
						if (totalCount == 0) {
							return
						};
						const data = res.data.data[0].results;
						console.log(data);
						const data_list = data.map((news) => {
							return {
								id: news.id,
								isread: news.isread,
								title: news.title,
								starttime: friendlyDate(new Date(news.starttime).getTime())

							};
						});

						_self.regulations = data_list;
						uni.stopPullDownRefresh();
						uni.hideNavigationBarLoading();
						pageNum++;
					},
					fail: function() {
						uni.stopPullDownRefresh();
						uni.hideNavigationBarLoading();

					}

				})
			},
			getMoreNews: function() {
				// 如果已经判断没有数据，则不执行该方法
				// if(_self.lodingText=='加载完毕!'){return false}
				if (_self.more == 'noMore') {
					return false
				}
				_self.more = 'loading';
				uni.showNavigationBarLoading();
				uni.request({
					header: {
						'sessionId': sessionId //自定义请求头信息
					},
					url: serverUrlEas + 'bulletin/queryBulletinTitlesByPage?length=10&pageNum=' + pageNum,
					success: function(res) {
						console.log(res.data.data[0].results)
						// 判断如果下拉加载为空则停止该方法
						if (res.data.data[0].results[0] == null) {
							_self.more = 'noMoer';
							uni.stopPullDownRefresh();
							uni.hideNavigationBarLoading();
							return false;
						}
						const data = res.data.data[0].results;
						const data_list = data.map((news) => {
							return {
								id: news.id,
								isread: news.isread,
								title: news.title,
								starttime: friendlyDate(new Date(news.starttime).getTime()),
							};

						});
						// 累加不覆盖进行下拉加
						_self.regulations = _self.regulations.concat(data_list);
						uni.stopPullDownRefresh();
						uni.hideNavigationBarLoading();
						pageNum++;
					}
				})
			}

		}

	}
</script>
<style>
	/* 政策推送 */
	.push-column {
		display: flex;
		flex-direction: column;
		background-color: #FFFFFF;
		width: 94%;


		padding: 4px 3% 0 3%;
	}

	.push-row {
		display: flex;
		flex-direction: row;
		width: 100%;

	}

	.push-column02 {
		height: 95px;
		display: flex;
		flex-direction: column;
		width: 100%;
		padding-top: 6px;

	}



	.push-text {
		font-size: 16px;
		align-self: flex-start;
	}

	.push-fenge {
		/* 分割线 */
		height: 2upx;
		margin-top: 2px;
		background-color: #e6e6e6;
	}

	.push-row-02 {
		width: 100%;
		height: 14px;
	}

	.push-text02 {
		height: 14px;
		display: flex;
		flex-direction: row;
	}

	.push-text03 {
		height: 14px;
		align-self: center;
	}

	.loading {
		line-height: 2em;
		text-align: center;
		color: #888;
		margin-top: 10px;
		padding-bottom: 5px;
	}
	.news-item-isread{
		width: 8px;
		height: 8px;
		margin-right: 15px;
		flex-shrink: 0;
		margin-top: 3%;
	}
</style>
