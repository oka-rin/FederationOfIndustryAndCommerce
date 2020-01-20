<template>
	<view class="page">
		<view class="post-top">
			<view style="width: 50%;font-size: 15px;">发文单(内部办文)</view>
			<view class="flex-row" style="justify-content: flex-end;width: 50%;">
				<view style="font-size: 15px;">状态</view>
				<view class="post-button">审核中</view>
			</view>
		</view>

		<view class="post-intermediate">
			<view class="flex-row" style="justify-content: space-between;height: 80upx;">
				<view class="flex-row" style="font-size: 14px;">
					<view style="color: #FF0000;">办文编号</view>
					<view style="text-decoration: underline;">201906251683</view>
				</view>

				<view class="flex-row" style="font-size: 14px;">
					<view style="color: #FF0000;">密度、紧急程度</view>
					<view style="text-decoration: underline;">内部,紧急</view>
				</view>
			</view>

			<view class="post-title">广西壮族自治区工商业联合会内部文件（事项）处理签</view>
			<view class="flex-row" style="font-size: 14px;display: flex;margin-top: 20upx;">
				<view style="color: #FF0000;">主办部室：</view>
				<view style="margin-left: 5upx;">会员部</view>

				<view style="color: #FF0000;margin-left: 20upx;">拟稿(经办人)：</view>
				<view style="margin-left: 5upx;">张筱雨</view>
			</view>
			<view class="flex-row" style="justify-content: flex-end;margin-top: 20upx;">
				<view style="color: #FF0000;font-size: 14px;">2019 年 5 月 20 日</view>
			</view>

			<view class="post-block">
				<view class="post-item" style="width: 706upx;height: 180upx;">
					<view style="padding: 20upx;">
						<view style="color: #FF0000;">
							文件(事项)名称:
						</view>
						<view>中共中央办公厅 国务院办公厅印发《关于促进中小企业健康发展的指导意见》</view>
					</view>

				</view>

				<view class="post-item" style="width: 353upx;height: 240upx;">
					<view style="padding: 20upx 00upx 20upx 20upx;">
						<view style="color: #FF0000;">
							办公室意见:
						</view>
						<view style="display: flex;flex-direction: row;margin-top: 10upx;">
							<view>
								<view>同意</view>
								<view style="margin-top: 10upx;">签字：</view>
							</view>
						</view>
						<view style="margin-top: 5upx;">时间:2019-05-16 15:32</view>
					</view>
				</view>

				<view class="post-item" style="width: 352upx;height: 240upx;">
					<view style="padding: 20upx;">
						<view style="color: #FF0000;">
							会办部室意见：
						</view>
						<view class="post-approval">
							<image src="../../static/bianji.svg" mode="widthFix" style="width: 40upx;"></image>
							<view>审批</view>
						</view>
					</view>
				</view>

				<view class="post-item" style="width: 706upx;height: 180upx;">
					<view style="padding: 20upx;">
						<view style="color: #FF0000;">
							办公室意见：
						</view>
						<view></view>
					</view>
				</view>

				<view class="post-item" style="width: 706upx;height: 180upx;">
					<view style="padding: 20upx;">
						<view style="color: #FF0000;">
							秘卡长意见：
						</view>
						<view></view>
					</view>
				</view>
				<view class="post-item" style="width: 706upx;">
					<view style="padding: 20upx;">
						<view style="color: #FF0000;">
							会领导批示：
						</view>
						<textarea></textarea>
					</view>
				</view>


				<view class="post-item" style="width: 706upx;">
					<view style="padding: 20upx;">
						<view style="color: #FF0000;">
							备注：
						</view>
						<!-- <textarea auto-height="true"></textarea> -->
						<view></view>
					</view>
				</view>
			</view>
		</view>

		<view class="post-bottom">
			<view style="padding: 22upx;font-size: 16px;">发文附件</view>
			<view class="flex-row" style="background-color: #FFFFFF;height: 70upx;justify-content: space-between;padding: 22upx;">
				<view class="a-link" style="color: #007AFF;font-size: 32upx;">《关于促进中小企业健康发展的指导意见》.doc</view>
				<image src="../../static/svn/go-tow.svg" mode="widthFix" style="width: 40upx;"></image>
			</view>
		</view>


		<view class="post-bottom-flex-row" style="">
			<view class="flex-row" style="width: 35%;">
				<image src="../../static/lc-blue.svg" mode="widthFix" style="width:50upx"></image>
				<view style="margin-left: 20upx;font-size: 32upx;">流程图</view>
			</view>

			<view style="width: 1upx;height: 80upx;background-color: #EEEEED;margin-top: 10upx;">
			</view>


			<view class="flex-row" style="justify-content: flex-end;width: 35%;">
				<image src="../../static/time02.svg" mode="widthFix" style="width:50upx"></image>
				<view style="margin-left: 20upx;font-size: 32upx;">历史审批</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	@import url("post.css");
</style>
