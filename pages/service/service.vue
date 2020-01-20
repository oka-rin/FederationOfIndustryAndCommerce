<template>
	<view class="page">
		<view style="height: 40px;width: 100%; background-color: #007AFF;"></view>
		<view class="service-block">
			<!-- 两新党建 -->
			<view class="service-block-item" v-for="(list,index) in serviceList" :key='index'>
				<view style="position: relative;">
					<view class="service-column">
						<view class='img-block'>
							<image :src="list.path" style="width: 45px;height: 45px;" mode="widthFix"></image>
						</view>
						<view class="service-tx">{{list.title}}</view>
						</veiw>
					</view>
					<view class="service-outer-button" v-show="list.number!=0">
						<view class="service-prompt">{{list.number}}</view>
					</view>
				</view>
			</view>
			</view>
		</view>
</template>
<script>
	export default {
		data() {
			return {
				serviceList:[
					{
						title:'两新党建',
						path:'../../static/png/service01.jpg',
						number:2
					},
					{
						title:'法律服务',
						path:'../../static/png/service02.jpg',
						number:1
					},
					{
						title:'人才服务',
						path:'../../static/png/service03.jpg',
						number:0
					},
					{
						title:'金融服务',
						path:'../../static/png/service04.jpg',
						number:0
					},
					{
						title:'商会讲坛',
						path:'../../static/png/service05.jpg',
						number:0
					},
					{
						title:'项目推介',
						path:'../../static/png/service06.jpg',
						number:0
					},
					{
						title:'科技创新',
						path:'../../static/png/service07.jpg',
						number:0
					},
					{
						title:'建言执政',
						path:'../../static/png/service08.jpg',
						number:0
					}
				]
			}
		},
		methods: {

		}
	}
</script>

<style>
	.service-block {
		width: 94%;
		padding: 5% 3% 0 3%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.service-block-item {
		background-color: #FFFFFF;
		border-radius: 10px;
		width: 48%;
		margin-bottom: 14px;
		box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.19);
	}

	.service-column {
		width: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
	}

	.img-block {
		width: 80px;
		height: 80px;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 5px;
	}

	.service-tx {
		margin-bottom: 12px;
		font-size: 16px;
	}

	.service-outer-button {
		position: absolute;
		z-index: 200;
		right: 0px;
		top: 0px;
	}

	.service-prompt {
		border-radius: 0px 10px 0px 10px;
		background-color: #FF0000;
		width: 30px;
		height: 25px;
		text-align: center;
		line-height: 25px;
		color: #FFFFFF;
		font-size: 14px;
	}
</style>
