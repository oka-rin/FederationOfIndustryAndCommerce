<template>
	<!-- 日程控制 -->
	<view class="page">
		<view class="flex-row" style="background-color: #FFFFFF;justify-content: space-between;position: fixed;  
	width: 100%;">
			<sun-tab style="width: 100%;" :value.sync="swiperIndex" :tabList="tabtopList" rangeKey="title"></sun-tab>
			<view class="flex-row" style="flex-shrink: 0;padding-right: 20upx;justify-content: flex-end;width: 50%">
				<image src="../../static/svn/ld.svg" mode="widthFix" style="width: 60upx;"></image>
			</view>
		</view>


		<view v-if="swiperIndex==0" class="swiper-area" id="demo01">
			<!-- 浮动控件 -->
			<uni-fab  :content="content" :pattern="pattern" :horizontal="horizontal" :vertical="vertical" @trigger="triggerSchedule" :direction="direction"></uni-fab>

			<scroll-view scroll-y :style="{ height: scrollViewHeight + 'px' }">
				<uni-calendar :insert="true" :lunar="true" @change="changeCalendarTow"></uni-calendar>
				<view class="schedule-block">
					<view style="width: 100%;margin-bottom: 30upx;" v-for="(schedule,index) in scheduleList" :key="index">
						<uni-swipe-action>
							<uni-swipe-action-item :options="options" @click="onClick" @change="change">
								<view class="flex-row">
									<image :src="schedule.ischose==true?'../../static/svn/chose.svg':'../../static/svn/chose-w.svg'" mode="widthFix"
									 style="width: 25px;flex-shrink: 0;margin-left: 20upx;"></image>
									<view style="width: 100%;margin-left: 20upx;margin-right: 20upx;">
										<view class="flex-row">
											<image src="../../static/svn/hq.svg" mode="widthFix" style="width: 46upx;"></image>
											<view style="font-size: 16px;">{{schedule.title}}</view>
										</view>

										<view class="flex-row" style="font-size: 14px;margin-top: 16upx;">
											<view class="schedule-btn">04月29日 08:30~10:00</view>
											<view class="schedule-btn" style="margin-left: 10px;flex-direction: row;display: flex;">
												<image src="../../static/svn/gz03.svg" mode="widthFix" style="width: 34upx;"></image>
												<view style="margin-left: 10upx;">工作</view>
											</view>
										</view>

										<view class="flex-row" style="font-size: 12px;margin-top: 25upx;">
											<view>参与者:</view>
											<view class="flex-row" style="margin-left:15upx">
												<image src="../../static/svn/chosenew1.svg" mode="widthFix" style="width: 34upx;"></image>
												<view>梁超群</view>
											</view>
											<view class="flex-row" style="margin-left:15upx">
												<image src="../../static/svn/chosenew1.svg" mode="widthFix" style="width: 34upx;"></image>
												<view>张明轩</view>
											</view>
											<view class="flex-row" style="margin-left:15upx">
												<image src="../../static/svn/chosenew1.svg" mode="widthFix" style="width: 34upx;"></image>
												<view>张铭</view>
											</view>
										</view>

									</view>
								</view>
							</uni-swipe-action-item>
						</uni-swipe-action>

					</view>
				</view>
			</scroll-view>

		</view>

		<view v-if="swiperIndex==1" class="swiper-area" id="demo02">
			<scroll-view scroll-y :style="{ height: scrollViewHeight + 'px' }">
				<uni-calendar :insert="true" :lunar="true" @change="changeCalendarTow"></uni-calendar>
				<view style="padding: 3%;width: 94%;">
					<view class="schedule-pos-item">
						<view class="flex-row">
							<image src="../../static/tou.png" mode="widthFix" style="width: 80upx;flex-shrink: 0;"></image>
							<view style="width: 100%;margin-left: 15upx;">
								<view style="font-size: 16px;">张明轩</view>
								<view style="font-size: 14px;margin-top: 10upx;">工商联法律部-联系员</view>
							</view>
						</view>
						<view style="width:100%;height:1upx;background-color:#eeeeed;margin-top:10px;margin-bottom:10px"></view>

						<view style="font-size:16px;margin-top: 15upx;">外出陕西工商联考察</view>
						<view class="flex-row" style="margin-top: 15upx;">
							<view class="schedule-btn">04月29日 08:30~4月30日 18:00</view>
							<view class="schedule-btn" style="margin-left: 15upx;display: flex;flex-direction: row;">
								<image src="../../static/svn/gz03.svg" mode="widthFix" style="width: 40upx;"></image>
								<view style="margin-left:10upx">出差</view>
							</view>
							</viwe>
						</view>

						<view class="flex-row" style="font-size: 12px;margin-top: 25upx;">
							<view>参与者:</view>
							<view class="flex-row" style="margin-left:15upx">
								<image src="../../static/svn/chosenew1.svg" mode="widthFix" style="width: 34upx;"></image>
								<view>梁超群</view>
							</view>
							<view class="flex-row" style="margin-left:15upx">
								<image src="../../static/svn/chosenew1.svg" mode="widthFix" style="width: 34upx;"></image>
								<view>张明轩</view>
							</view>
							<view class="flex-row" style="margin-left:15upx">
								<image src="../../static/svn/chosenew1.svg" mode="widthFix" style="width: 34upx;"></image>
								<view>张铭</view>
							</view>
						</view>

					</view>

					<view class="schedule-pos-item" style="margin-top: 25upx;">
						<view class="flex-row">
							<image src="../../static/tou.png" mode="widthFix" style="width: 80upx;flex-shrink: 0;"></image>
							<view style="width: 100%;margin-left: 15upx;">
								<view style="font-size: 16px;">王露</view>
								<view style="font-size: 14px;margin-top: 10upx;">工商联法律部-联系员</view>
							</view>
						</view>
						<view style="width:100%;height:1upx;background-color:#eeeeed;margin-top:10px;margin-bottom:10px"></view>

						<view style="font-size:16px;margin-top: 15upx;">回家探亲</view>
						<view class="flex-row" style="margin-top: 15upx;">
							<view class="schedule-btn">04月29日 08:30~4月30日 18:00</view>
							<view class="schedule-btn" style="margin-left: 15upx;flex-direction: row;display: flex;">
								<image src="../../static/svn/fj.svg" mode="widthFix" style="width: 40upx;"></image>
								<view style="margin-left:10upx">休假</view>
							</view>
							</viwe>
						</view>

					</view>

				</view>
			</scroll-view>
		</view>

	</view>

</template>

<script>
	var _self;
	import uniFab from '@/components/uni-fab/uni-fab.vue';
	import uniSwipeAction from '@/components/uni-swipe-action/uni-swipe-action.vue'
	import uniSwipeActionItem from '@/components/uni-swipe-action-item/uni-swipe-action-item.vue'
	import uniCalendar from '@/components/uni-calendar/uni-calendar.vue'
	import sunTab from '@/components/sun-tab/sun-tab.vue';
	import liuyunoTabs from "@/components/liuyuno-tabs/liuyuno-tabs.vue";
	export default {
		data() {
			return {
				// 圆形浮动控件样式
				pattern: {
					buttonColor: '#007AFF',
					color:'#000000'
				},
				horizontal: 'right',
				vertical: 'bottom',
				direction:'vertical',
				content: [{
						iconPath:'../../static/svn/addrc.svg',
						text: '新增日程'
					},
					{
						iconPath:'../../static/svn/sy.svg',
						text: '上移'
					},
					{
						iconPath:'../../static/svn/xy.svg',
						text: '下移'
					}
				],
				// tab
				tabtopList: [{
						id: "1",
						title: "系统公告"
					},
					{
						id: "2",
						"title": "通知公告"
					}

				],
				defaultIndex: 0,
				swiperIndex: 0,
				scrollViewHeight: 0,
				scheduleList: [{
						title: '网上工商联二期建设方案',
						ischose: false
					},
					{
						title: '部门员工培训',
						ischose: false
					},
					{
						title: '网上工商联二期建设方案',
						ischose: false
					},
					{
						title: '网上工商联二期建设方案',
						ischose: false
					}
				],
				options: [{
					text: '删除',
					style: {
						backgroundColor: '#007aff'
					}
				}]
			}
		},
		onLoad() {
			_self = this;
		},
		components: {
			liuyunoTabs,
			sunTab,
			uniCalendar,
			uniSwipeAction,
			uniSwipeActionItem,
			uniFab
		},
		methods: {
			//调用组件的方法获取返回的值
			tabClick: function(index) {
				console.log(index);
				this.defaultIndex = index;
				this.swiperIndex = index;
			},
			onClick(e) {
				console.log('当前点击的是第' + e.index + '个按钮，点击内容是' + e.content.text)
			},
			change(open) {
				console.log('当前开启状态：' + open)
				
			},
			changeCalendar(e) {
				const fulldate=e.fulldate;
				console.log(e.fulldate);
				
			},
			changeCalendarTow(e) {
				const fulldate=e.fulldate;
				console.log(e.fulldate);
			},
			triggerSchedule(e) {
				if(e.index==0){
					console.log('新增日历')
				}else if(e.index==1){
					this.vertical="top";
				}else{
					this.vertical="bottom";
				}
			},
		},

		onReady: function() {
			if (this.swiperIndex == 0) {
				uni.createSelectorQuery().select("#demo01").fields({
					size: true,
					id: true
				}, function(res) {
					console.log(res)
					_self.scrollViewHeight = res.height;
					console.log(_self.scrollViewHeight)
				}).exec();
			} else {
				uni.createSelectorQuery().select("demo02").fields({
					size: true,
					id: true
				}, function(res) {
					console.log(res);
					_self.scrollViewHeight = res.height;
					console.log(_self.scrollViewHeight)
				}).exec();
			}
		},
	}
</script>

<style>
	@import url("schedule.css");
</style>
