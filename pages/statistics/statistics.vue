<template>
	<view class="page" style="background-color: #FFFFFF;">
		
		<view class="ring-row" style="height:100upx;padding: 10upx 0;background-color: #EEEEED;justify-content: space-between;">
			<view class="ring-row">
				<image src="../../static/tou.png" mode="widthFix" style="border-radius: 50%;width: 80upx;margin-left: 20upx;"></image>
				<view>张明轩</view>
			</view>
			<view style="display: flex;flex-direction: row;align-items: center;">
				
				<!--下拉选择框 dropdownlist-->
				<view class="tui-drop-input-box">
					<tui-dropdown-list :show="oneShow" :top="94" :height="400">
						<template v-slot:selectionbox>
							<view class="time-button" @click="getOneList(-1)">{{oneName}}
								<view class="tui-animation" :class="[oneShow?'tui-animation-show':'']">
									<tui-icon name="turningdown" :size="20"></tui-icon>
								</view>
							</view>
						</template>
						<template v-slot:dropdownbox>
							<view class="tui-selected-list">
								<scroll-view scroll-y class="tui-dropdown-scroll">
									<block v-for="(item,index) in oneList" :key="index">
										<tui-list-cell @click="getOneList(index)" :last="oneList.length-1==index">
											<text class="tui-ml-20">{{item.name}}</text>
										</tui-list-cell>
									</block>
								</scroll-view>
							</view>
						</template>
					</tui-dropdown-list>
				</view>
				<!--下拉选择框-->
				
				<!--下拉选择框 dropdownlist-->
				<view class="tui-drop-input-box">
					<tui-dropdown-list :show="towShow" :top="94" :height="400">
						<template v-slot:selectionbox>
							<view class="time-button" @click="dropDownList(-1)">{{towName}}
								<view class="tui-animation" :class="[towShow?'tui-animation-show':'']">
									<tui-icon name="turningdown" :size="20"></tui-icon>
								</view>
							</view>
						</template>
						<template v-slot:dropdownbox>
							<view class="tui-selected-list">
								<scroll-view scroll-y class="tui-dropdown-scroll">
									<block v-for="(item,index) in towList" :key="index">
										<tui-list-cell @click="dropDownList(index)" :last="towList.length-1==index">
											<text class="tui-ml-20">{{item.name}}</text>
										</tui-list-cell>
									</block>
								</scroll-view>
							</view>
						</template>
					</tui-dropdown-list>
				</view>
				<!--下拉选择框-->
				
			</view>
		</view>
		
		<view class="qiun-columns">
			<view class="qiun-charts">
				<canvas canvas-id="canvasRing" id="canvasRing" class="charts" @touchstart="touchRing"></canvas>
			</view>
		</view>
		
		
		<view class="ring-block" >
			<view class="ring-item" v-for="(item,index) in chartData.series" :key="index">
				<view class="ring-row" >
					<view class="ring-color" :style="{background:item.color}"></view>
					<view style="margin-left: 10px;line-height: 20px;">{{item.name}}</view>
				</view>
				<view class="ring-row" style="margin-top: 10px;font-size: 12px;margin-left: 5px;">
					<view class="ring-point"></view>
					<view style="margin-left: 10px;line-height: 8px;">{{item.data}}次</view>
				</view>
				
				<view class="ring-row" style="margin-top: 10px;font-size: 12px;margin-left: 5px;">
					<view class="ring-point"></view>
					<view style="margin-left: 10px;line-height: 8px;">用时24小时</view>
				</view>
			</view>
			
		</view>
			
	</view>
</template>

<script>
	import common from '../../common/url.js'
	import uCharts from '../../js_sdk/u-charts/u-charts/u-charts.js';
	import tuiIcon from '@/components/icon/icon'
	import tuiButton from "@/components/button/button"
	import tuiTopDropdown from "@/components/top-dropdown/top-dropdown"
	import tuiListCell from "@/components/list-cell/list-cell"
	import tuiDropdownList from "@/components/dropdown-list/dropdown-list"
	import tuiBottomPopup from "@/components/bottom-popup/bottom-popup"
	var _self, canvaRing = null,serverUrlEas,serverUrl;
	export default {
		data() {
			return {
				// 一级下拉框
				oneName:'年统计',
				oneShow:false,
				oneList:[
					{
						id:1,
						name:'年统计'
					},
					{
						id:2,
						name:'月统计'
					}
				],
				// 二级下拉框
				towName:'2019年12月',
				towShow: false,
				towList: [{
					name: "2019年12月",
				}, {
					name: "2019年11月",
				}, {
					name: "2019年10月",
				}, {
					name: "2019年09月",
				}, {
					name: "2019年08月",
				}, {
					name: "2019年07月",
				}],
				// 饼图
				colors: ['#1890ff', '#2fc25b', '#facc14', '#f04864', '#8543e0', '#a3d2eb','#fd8e20','#bd8cbb'],
				cWidth: '',
				cHeight: '',
				pixelRatio: 1,
				serverData: '',
				chartData: {
					series: [{
							name: "一班",
							data: 50,
							color:'#1890ff'
						}, {
							name: "二班",
							data: 30,
							color:'#2fc25b'
						}, {
							name: "三班",
							data: 20,
							color:'#facc14'
						}, {
							name: "四班",
							data: 18,
							color:'#f04864'
						}, {
							name: "五班",
							data: 8,
							color:'#8543e0'
						},
						{
							name: "六班",
							data: 32,
							color:'#a3d2eb'
						},
						{
							name: "七班",
							data: 8,
							color:'#fd8e20'
						},
						{
							name: "八班",
							data: 10,
							color:'#bd8cbb'
						}
					]
				}
			}
		},
		components:{
			tuiIcon,
			tuiButton,
			tuiTopDropdown,
			tuiListCell,
			tuiDropdownList,
			tuiBottomPopup
		},
		onLoad() {
			_self = this;
			serverUrlEas=common.serverUrlEas;
			serverUrl=common.serverUrl;
			this.cWidth = uni.upx2px(750);
			this.cHeight = uni.upx2px(500);
			this.showRing("canvasRing", this.chartData);//加载图标
			this.getStatistics();
		},
		methods: {
			// 显示饼状图控件
			showRing(canvasId, chartData) {
				canvaRing = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'ring',
					fontSize: 11,
					legend: {
						show: false,
					},
					title: {
						name: '总工作时长',
						color: '#999999',
						fontSize: 15 * _self.pixelRatio,
					},
					subtitle: {
						name: '318.5h',
						color: '#000000',
						fontSize: 20 * _self.pixelRatio,
					},
					extra: {
						pie: {
							offsetAngle: -45,
							ringWidth: 40 * _self.pixelRatio,
							labelWidth: 15
						}
					},
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					series: chartData.series,
					animation: true,
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					disablePieStroke: true,
					dataLabel: true,
				});
			},
			//点击返回的内容
			touchRing(e) {
				canvaRing.showToolTip(e, {
					format: function(item) {
						return item.name + ':' + item.data
					}
				});
			},
			// 父下拉
			getOneList(index){
				if(index!==-1){
					this.oneName=this.oneList[index].name;
				}
				this.oneShow=!this.oneShow;
			},
			//子下拉
			dropDownList(index) {
				if (index !== -1) {
					this.towName=this.towList[index].name
				};
				this.towShow = !this.towShow
			},
			getStatistics:function(){
				uni.request({
					url:serverUrlEas+'spOaSchedule/queryStatistics?start=2018-12-01 00:00:00&end=2019-12-11 23:59:59',
					header:{
						sessionId:'7f33dfccc98f4623abf63b8f7497820b'
					},
					success:function(res){
						// console.log(res);
						var newArr = [];
						const data=res.data.data[0];
						const data_list=data.list;
						console.log(data_list);
						// 循环遍历新数组
						for(var i=0;i<data_list.length;i++){
							var vote={};
							vote.data=data_list[i].number;//数量
							vote.name=data_list[i].typename;//名称
							vote.color=_self.colors[i];//颜色
							newArr.push(vote);//最终返回数据
						}
						console.log(newArr)
					}
				});
			}
		}
	}
</script>

<style>
	.qiun-columns {
		display: flex;
		flex-direction: column !important;
	}

	.qiun-common-mt {
		margin-top: 10upx;
	}

	.qiun-bg-white {
		background: #FFFFFF;
	}

	.qiun-title-bar {
		width: 96%;
		padding: 10upx 2%;
		flex-wrap: nowrap;
	}

	.qiun-title-dot-light {
		border-left: 10upx solid #0ea391;
		padding-left: 10upx;
		font-size: 32upx;
		color: #000000
	}

	.qiun-charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}

	.charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}

	/* item */
	.ring-block {
		background-color: #FFFFFF;
		border-top: solid 1upx #eeeeed;
		border-left: #EEEEED solid 1upx;
		width: 710upx;
		margin: 20upx;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.ring-item {
		height: 160upx;
		width: 340.5upx;
		border-right: solid 1upx #eeeeed;
		border-bottom: #EEEEED solid 1upx;
		padding: 15upx 0 0 13upx;
	}
	.ring-color{
		border-radius: 50%;width: 40upx;
		height: 40upx;
	}
	.ring-row{
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.ring-point{
		background-color: #808080;
		border-radius: 50%;
		width: 8px;
		height: 8px;
		margin-left: 3px;
	}
	/* 下拉框样式 */
	.tui-drop-input-box {
		/* padding: 50upx; */
		box-sizing: border-box;
		
	}
	
	.tui-dropdown-scroll {
		height: 400upx;
	}
	.tui-animation {
		display: inline-block;
		transform: rotate(0deg);
		transition: all 0.2s;
	}
	
	.tui-animation-show {
		transform: rotate(180deg);
	}
	
	.tui-selected-list {
		background: #fff;
		border-radius: 20upx;
		overflow: hidden;
		transform: translateZ(0);
	}
	
	.tui-dropdown-scroll {
		height: 400upx;
	}
	.time-button{
		height: 80upx;
		padding: 0 20upx;
		line-height: 80upx;
		text-align: center;
		font-size: 14px;
		background-color: #FFFFFF;
		border-radius: 10upx;
		margin-right: 20upx;
	}
	.tui-ml-20{
		font-size: 14px;
	}
</style>
