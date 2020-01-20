<template>
	<view class="page">
		<view class="news-tabtop-height">
			<sun-tab :value.sync="swiperIndex" :tabList="tabtopList" rangeKey="title"></sun-tab>
		</view>

		<view class="swiper-area" id="demo01">
			<swiper :current="swiperIndex" style="height: 100%;" @change="animationfinish">
				<swiper-item v-for="(text,index) in tabtopList" :key="index">

					<scroll-view scroll-y :style="{ height: scrollViewHeight + 'px' }">
						<view class="application-block-item" v-for="item in applicationList">
							<view class="flex-row">
								<view style="font-size: 18px;width: 100%;">
									南宁市良兴区南晓镇商会
								</view>
								<image src="../../../static/svn/go-tow.svg" mode="widthFix" style="flex-shrink: 0;width: 20px;margin-right: 5%"></image>
							</view>
							<view style="background-color:#e6e6e6;width: 95%;height:1upx;margin-top: 12px;"></view>
							<view style="display: flex;flex-direction: row;margin-top: 10px;justify-content: space-between;">
								<view style="display: flex;flex-direction: column;font-size: 14px;">
									<view style="flex-direction: row;display: flex;">
										<view style="color: #999999;">申请编号：</view>
										<view>201906251683</view>
									</view>
									<view style="flex-direction: row;display: flex;margin-top: 5px;">
										<view style="color: #999999;">申请类型：</view>
										<view>个人会员</view>
									</view>
									<view style="flex-direction: row;display: flex;margin-top: 5px;">
										<view style="color: #999999;">申请时间：</view>
										<view>2019-07-02 15:23</view>
									</view>
								</view>

								<view class="application-status" :style="{background:item.myarr}">待审核</view>
							</view>


						</view>
						<view style="width: 100%;height: 10px;"></view>
					</scroll-view>

				</swiper-item>
			</swiper>
		</view>
		
		<view class="out-block">
			<view class="new-join-cfm">新建入会申请</view>
		</view>
	</view>
</template>

<script>
	import sunTab from '@/components/sun-tab/sun-tab.vue';
	var _self;
	export default {
		data() {
			return {
				swiperIndex: 0,
				scrollViewHeight: 0,
				tabtopList: [{
						title: '全部',
						id: 0
					},
					{
						title: '待审核',
						id: 1
					},
					{
						title: '待通过',
						id: 2
					},
					{
						title: '审核不通过',
						id: 3
					},
				],
				applicationList: [{
						title: '南宁市良兴区南晓镇商会',
						status: 0,
						myarr:''
					},
					{
						title: '南宁市良兴区南晓镇商会',
						status: 1,
						myarr:''
					},
					{
						title: '南宁市良兴区南晓镇商会',
						status: 2,
						myarr:''
					},
					{
						title: '南宁市良兴区南晓镇商会',
						status: 2,
						myarr:''
					}
				],
				colorList:[{
					background:'#007AFF'
				},
				{
					background:'#999999'
				},
				{
					background:'#FF0000'
				}
				]
			}
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
		onLoad() {
			_self = this;
			console.log('5444');
			for(var i=0;i<this.applicationList.length;i++){
				if(this.applicationList[i].status==0){
					this.applicationList[i].myarr=this.colorList[0].background;
				}else if(this.applicationList[i].status==1){
					this.applicationList[i].myarr=this.colorList[1].background;
				}else{
					this.applicationList[i].myarr=this.colorList[2].background;
				}
			}
		},
		onReady: function() {
			// 获取控件的高度
			uni.createSelectorQuery().select("#demo01").fields({
				size: true,
				id: true
			}, function(res) {
				console.log(res)
				_self.scrollViewHeight = res.height-110;
				console.log(_self.scrollViewHeight)
			}).exec();
		}
	}


</script>

<style>
	.news-tabtop-height {
		position: fixed;
		z-index: 999;
		width: 100%;
	}

	.swiper-area {
		width: 94%;
		height: 100%;
		padding: 0px 3%;
		background-color: #eeeeed;
		position: fixed;
		margin-top: 50px;
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
		width: 80px;
		margin-top: 5px;
	}
	.out-block{
		height: 55px;
		width: 100%;
		position: fixed;
		bottom: 0;
		display:flex;
		flex-direction:row;
		justify-content: center;
		background-color: #eeeeez;
	}
	.new-join-cfm{
		background-color: #007AFF;
		height: 46px;
		line-height: 46px;
		color:#FFFFFF;
		width:250px;
		border-radius:25px;
		text-align: center;
	}
</style>
