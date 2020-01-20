<template>
	<!-- 交流页面 -->
	<view class="page">
		<view class="com-tabtop-height">
			<sun-tab :value.sync="swiperIndex" :tabList="tabtopList" rangeKey="title"></sun-tab>
		</view>

		<view class="swiper-area" id="demo01">
			<swiper :current="swiperIndex" style="height: 100%;" @change="animationfinish">
				<swiper-item>
					<view class="search-block">
						<view class="search-ico-wapper">
							<image src="../../static/icos/search.png" class="search-ico"></image>
						</view>

						<input placeholder="搜索商会名称" maxlength="10" class="search-text" confirm-type="search" @confirm="searchMe" />
					</view>

					<scroll-view scroll-y :style="{ height: scrollViewHeight + 'px' }">
						<view :class="newsItem.isread>0?'com-border-block-like':'com-border-block'" v-for="(newsItem,index) in comList"
						 :key="index">
							<view style="display: flex;flex-direction: row;">
								<view class="img-block">
									<image :src="newsItem.path" mode="widthFix" style="width: 60px;"></image>
								</view>
								<view class="com-column">
									<view style="font-size: 18px;">{{newsItem.title}}</view>
									<view class="com-img-row" style="margin-top: 3px;">
										<image src="../../static/ren.png" mode="widthFix" style="width: 14px;height: 14px;"></image>
										<view style="font-size: 13px;margin-left: 5px;">刘晓峰</view>
									</view>
									<view class="com-img-row" style="justify-content: space-between;margin-top: 5px;">
										<view class="com-img-row">
											<image src="../../static/time.png" mode="widthFix" style="width: 14px;height: 14px;"></image>
											<view style="margin-left: 5px;font-size: 13px;">2019-02-25</view>
										</view>
										<view class="com-img-row">
											<image src="../../static/tabBar/tabBar04_x.png" mode="widthFix" style="width: 14px;height: 14px;"></image>
											<view style="margin-left: 5px;font-size: 13px;">当前会员人数119</view>
										</view>
									</view>
								</view>
							</view>
							<view style="height: 1upx;width: 100%;background-color:#e6e6e6;margin-top: 10px;"></view>
							<view class="com-news-column">
								<view style="width: 68px;flex-shrink: 0;"></view>
								<view v-if="newsItem.isread==0" style="color: #999999;font-size: 14px;">暂无消息</view>
								<view v-if="newsItem.isread>0" style="display: flex;flex-direction: column;width: 100%;">
									<view style="font-size:13px;color: #999999;">04-03 11.03</veiw>
										<view class="com-img-row" style="margin-top: 5px;justify-content: space-between;">
											<view style="flex-shrink: 0;color: #007AFF;">张明</view>
											<view class="com-details">南威软件科技有限公司ㆍ账务总监</view>
											<image src="../../static/icos/point.png" class="com-item-isread" mode="widthFix"></image>
										</view>
									</view>
								</view>
							</view>
						</view>
						<view style="width: 100%;height: 10px;"></view>
					</scroll-view>
				</swiper-item>

				<!-- 我的商友 -->
				<swiper-item>
					<view class="com-img-row">
						<view class="search-block">
							<view class="search-ico-wapper">
								<image src="../../static/icos/search.png" class="search-ico"></image>
							</view>
							<input placeholder="请搜索频道名称" maxlength="10" class="search-text" confirm-type="search" />
						</view>
						<image src="../../static/svn/addfriend.svg" mode="widthFix" style="width: 35px;margin-left: 10px;"></image>
					</view>

					<scroll-view scroll-y :style="{ height: scrollViewHeight + 'px' }">
						<view class="add-row">
							<view class="bak-img-color">
								<image src="../../static/svn/rc.svg" style="width: 48px;height: 48px;"></image>
							</view>
							<view style="width:100%;margin-left: 10px;">
								<view>待处理请求</view>
								<view style="color: #999999;font-size: 13px;margin-top: 2px;">13个请求添加处理</view>
								<view class="com-img-row" style="margin-top: 8px;margin-bottom: 5px;width: 70%;">
									<view style="margin-right: 8px;" v-for="newImg in imgList">
										<image :src="newImg.path" mode="widthFix" class="add-more-img"></image>
									</view>
								</view>
							</view>
							<view style="color: #999999;font-size: 13px;width: 100px;text-align: right;flex-shrink: 0;">19-04-12</view>
						</view>
						<view style="justify-content: space-between;display: flex;flex-direction: row;margin-top: 15px;flex-wrap: wrap;">
							<view :class="item.news>0?'add-friend-block-like':'add-friend-block'" style="position:relative;" v-for="(item,index) in te01"
							 :key="index">
								<view style="display: flex;flex-direction: column;">
									<view style="display: flex;flex-direction: row;">
										<view style="flex-shrink: 0;width: 45px;">
											<image src="../../static/tou.png" mode="widthFix" style="width: 40px;">
											</image>
										</view>
										<view style="margin-left: 8px;width: 100%;">
											<view style="font-size: 16px;">张明轩</view>
											<view style="font-size: 13px;">董事长</view>
										</view>
										<view style="width: 15px;flex-shrink: 0;">
											<image src="../../static/svn/star.svg" mode="widthFix" style="width: 19px;"></image>
										</view>
									</view>
									<view class="com-img-row" style="margin-top: 7px;">
										<image src="../../static/svn/zuzhi.svg" mode="widthFix" style="width: 16px;"></image>
										<view class="a-link" style="font-size: 13px;margin-left: 5px;">盛世电子科技有限公司</view>
									</view>
									<view class="com-img-row" style="margin-top: 3px;margin-bottom: 3px;">
										<view style="width: 21px;height: 10px;"></view>
										<view v-if="item.news>0" class="a-link" style="font-size: 10px;color: #007AFF;width: 80%;">您好,听说你是做大米的</view>
									</view>
								</view>
								<view v-if="item.news>0" class="add-out-button"> {{item.news}}</view>
							</view>
						</view>
					</scroll-view>

				</swiper-item>
			</swiper>
		</view>
	</view>
</template>
<script>
	var _self;
	import sunTab from '@/components/sun-tab/sun-tab.vue';
	import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue";
	export default {
		data() {
			return {
				imgList: [{
						path: '../../static/test/gs01.jpg',
					},
					{
						path: '../../static/test/gs02.jpg'
					},
					{
						path: '../../static/test/gs03.jpg'
					},
					{
						path: '../../static/test/gs03.jpg'
					}
				],
				scrollViewHeight: 0,
				swiperIndex: 0,
				tabtopList: [{

						title: "我的商会"
					},
					{
						title: "我的商友"
					}
				],
				comList: [{
						title: '青秀区仙葫企业家协会',
						path: '../../static/test/gs01.jpg',
						isread: 1
					},
					{
						title: '良庆行业商会',
						path: '../../static/test/gs03.jpg',
						isread: 1
					},
					{
						title: '江南区企业家协会',
						path: '../../static/test/gs01.jpg',
						isread: 0
					},
					{
						title: '江南区企业家协会',
						path: '../../static/test/gs02.jpg',
						isread: 0
					}
				],
				te01: [{
						news: 1
					}, {
						news: 2
					},
					{
						news: 1
					},
					{
						news: 4
					},
					{
						news: 0
					},
					{
						news: 0
					},
					{
						news: 0
					},
					{
						news: 0
					}
				]
			}
		},
		onLoad: function() {
			_self = this;
		},
		components: {
			sunTab
		},
		methods: {
			animationfinish: function({
				detail: {
					current
				}
			}) {
				this.swiperIndex = current;
			}
		},
		onReady: function() {
			// 获取控件的高度
			uni.createSelectorQuery().select("#demo01").fields({
				size: true,
				id: true
			}, function(res) {
				console.log(res)
				_self.scrollViewHeight = res.height - 110;
				console.log(_self.scrollViewHeight)
			}).exec();
		}
	}
</script>
<style>
	@import url("communication.css");
</style>
