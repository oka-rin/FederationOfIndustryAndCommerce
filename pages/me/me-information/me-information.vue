<template>
	<view class="page">
		<view class="me-block">
			<view style="flex-direction: row;display: flex;">
				<view style="flex-shrink: 0;width: 100px;">
					<image src="../../../static/tou.png" mode="widthFix" style="width: 100px;"></image>
				</view>

				<view style="width: 100%;margin-left: 12px;margin-top: 5px;">
					<view class="flex-row">
						<view style="font-size: 20px;">张明轩</view>
						<image src="../../../static/svn/male.svg" mode="widthFix" style="flex-shrink:0;width: 20px;"></image>
					</view>
					<view style="font-size: 16px;margin-top: 6px;flex-wrap: wrap;">盛世电子科技有限公司ㆍ董事长</view>
					<view class="flex-row" style="margin-top: 8px;">
						<image src="../../../static/svn/phone.svg" mode="widthFix" style="flex-shrink: 0;width: 15px;"></image>
						<view style="font-size: 16px;">188****9926</view>
					</view>
				</view>
			</view>

			<view style="height: 1upx;width:100%;background-color: #E6E6E6;margin-top: 10px;margin-bottom: 15px;"></view>

			<view style="font-size: 15px;">
				<!-- 人员分类 -->
				<view class="flex-row" style="flex-wrap: wrap;margin-bottom: 10px;">
					<view>人员分类</view>
					<image src="../../../static/svn/required.svg" mode="widthFix" style="width: 7px;flex-shrink: 0;"></image>
					<view>：</view>
					<view style="color:#999999">个体工商户</view>
				</view>

				<!-- 出生日期 -->
				<view class="flex-row" style="flex-wrap: wrap;margin-bottom: 10px;">
					<view>出生日期：</view>
					<view style="color:#999999">1983-12-16</view>
				</view>
				<!-- 民族 -->
				<view class="flex-row" style="flex-wrap: wrap;margin-bottom: 10px;">
					<view>民族：</view>
					<view style="color:#999999;">汉族</view>
				</view>
				<!-- 证件类型 -->
				<view class="flex-row" style="margin-bottom: 10px;">
					<view style="flex-shrink: 0;">证件类型</view>
					<image src="../../../static/svn/required.svg" mode="widthFix" style="width: 7px;flex-shrink: 0;"></image>
					<view>：</view>
					<view style="color:#999999;flex-wrap: wrap;">身份证</view>
				</view>
				<!-- 证件号码 -->
				<view class="flex-row" style="flex-wrap: wrap;margin-bottom: 10px;">
					<view>证件号码</view>
					<image src="../../../static/svn/required.svg" mode="widthFix" style="width: 7px;flex-shrink: 0;"></image>
					<view>：</view>
					<view style="color:#007AFF;">4508811974****5843</view>
				</view>

				<!-- 籍贯 -->
				<view class="flex-row" style="flex-wrap: wrap;margin-bottom: 10px;">
					<view>籍贯</view>
					<image src="../../../static/svn/required.svg" mode="widthFix" style="width: 7px;flex-shrink: 0;"></image>
					<view>：</view>
					<view style="color:#999999;">广西</view>
				</view>
				<!-- 出生地 -->
				<view class="flex-row" style="flex-wrap: wrap;margin-bottom: 10px;">
					<view>出生地：</view>
					<view style="color:#999999">广西南宁市</view>
				</view>
				<!-- 学历 -->
				<view class="flex-row" style="flex-wrap: wrap;margin-bottom: 10px;">
					<view>法人手机号码：</view>
					<view style="color:#999999">电子科技</view>
				</view>
				<!-- 政治面貌 -->
				<view class="flex-row" style="flex-wrap: wrap;margin-bottom: 10px;">
					<view>政治面貌：</view>
					<view style="color:#999999">ND689****-099</view>
				</view>
				<!-- 商户名称 -->
				<view class="flex-row" style="margin-bottom: 10px;">
					<view style="flex-wrap: nowrap;flex-shrink: 0;">商户名称</view>
					<image src="../../../static/svn/required.svg" mode="widthFix" style="width: 7px;flex-shrink: 0;"></image>
					<view>：</view>
					<view style="color:#999999;flex-wrap: wrap;">电子科技</view>
				</view>
				<!-- 商户注册号 -->
				<view class="flex-row" style="margin-bottom: 10px;">
					<view style="flex-wrap: nowrap;flex-shrink: 0;">商户注册号</view>
					<image src="../../../static/svn/required.svg" mode="widthFix" style="width: 7px;flex-shrink: 0;"></image>
					<view>：</view>
					<view style="color:#999999;flex-wrap: wrap;">有限责任公司(自然人投资活控股)</view>
				</view>
				<!-- 资金总额(单位:万元)*： -->
				<view class="flex-row" style="margin-bottom: 10px;">
					<view style="flex-wrap: nowrap;flex-shrink: 0;">工商登记注册类型</view>
					<image src="../../../static/svn/required.svg" mode="widthFix" style="width: 7px;flex-shrink: 0;"></image>
					<view>：</view>
					<view style="color:#999999;flex-wrap: wrap;">914501005****553N</view>
				</view>

				<!--  职工人数-->
				<view class="flex-row" style="margin-bottom: 10px;">
					<view style="flex-wrap: nowrap;flex-shrink: 0;">职工人数</view>
					<image src="../../../static/svn/required.svg" mode="widthFix" style="width: 7px;flex-shrink: 0;"></image>
					<view>：</view>
					<view style="color:#999999;flex-wrap: wrap;">5544</view>
				</view>
				<!-- 微信号 -->
				<view class="flex-row" style="margin-bottom: 10px;">
					<view style="flex-wrap: nowrap;flex-shrink: 0;">微信号：</view>
					<view style="color:#999999;flex-wrap: wrap;">1412724520</view>
				</view>

				<!-- 邮箱： -->
				<view class="flex-row" style="margin-bottom: 10px;">
					<view style="flex-wrap: nowrap;flex-shrink: 0;">邮箱</view>
					<image src="../../../static/svn/required.svg" mode="widthFix" style="width: 7px;flex-shrink: 0;"></image>
					<view>：</view>
					<view style="color:#999999;flex-wrap: wrap;">1412724520@qq.com</view>
				</view>

				<!-- 个人身份证 -->
				<view class="flex-row" style="margin-bottom: 10px;">
					<view style="flex-wrap: nowrap;flex-shrink: 0;">个人身份证</view>
					<image src="../../../static/svn/required.svg" mode="widthFix" style="width: 7px;flex-shrink: 0;"></image>
					<view>：</view>
				</view>
				<view style="flex-direction: row; flex-wrap: wrap;display: flex;margin-bottom: 10px;">
					<view class="tui-image-item" v-for="imgItem in imgList">
						<image :src="imgItem.path" mode="widthFix" class="tui-item-img" ></image>
					</view>
				</view>

				<!-- 备注 -->
				<view class="flex-row" style="margin-bottom: 10px;">
					<view style="flex-wrap: nowrap;flex-shrink: 0;">备注：</view>
					<view style="color:#999999;flex-wrap: wrap;">XXXXXXXXXXXXXXXXXXXXXXXXXXX</view>
				</view>
				
			</view>
		</view>
	</view>
</template>


<script>
	export default {
		data() {
			return {
				imgList:[
					{
						path:''
					},
					{
						path:''
					}
				]
			}
		},
		onNavigationBarButtonTap: (val) => {
			if(val.index==1){
				uni.navigateTo({
					url:'update-information'
				})
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.me-block {
		margin-top: 15px;
		background-color: #FFFFFF;
		width: 94%;
		padding: 3%;
	}
	.tui-item-img {
		width: 100px;
		height: 100px;
		border-width: 1upx;
		border-style: solid;
		border-color: #eeeeee;
		border-radius: 3px;
		background-color: #E6E6E6;

	}
	.tui-image-item {
		padding: 0 10px 0 0;
		position: relative;
		
	}
</style>
