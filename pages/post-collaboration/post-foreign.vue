<template>
	<view class="page">
		<view class="post-top">
			<view style="width: 50%;font-size: 15px;">发文单(对外发文、函笺)</view>
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
			<view class="post-title">广西壮族自治区工商业联合会文件</view>
			<view style="justify-content:center;font-size: 14px;display: flex;color: #FF0000;">
				桂联 〔 〕 号
			</view>
			<view class="post-block">
				<view class="post-item" style="width: 706upx;height: 200upx;">
					<view style="padding: 20upx;">
						<view style="color: #FF0000;">
							领导签发:
						</view>
						<view></view>
					</view>
				</view>

				<view class="post-item" style="width:706upx ;height: 160upx;">
					<view style="padding: 20upx;">
						<view style="color: #FF0000;">
							会办单位意见:
						</view>
						<view></view>
					</view>
				</view>

				<view class="post-item" style="width: 353upx;height: 240upx;">
					<view style="padding: 20upx;">
						<view style="color: #FF0000;">
							办公室意见:
						</view>
						<view></view>
					</view>
				</view>
				
				<view class="post-item" style="width: 352upx;height: 240upx;">
					<view style="padding: 20upx;">
						<view style="color: #FF0000;">
							办公室意见：
						</view>
						<view class="post-approval">
							<image src="../../static/bianji.svg" mode="widthFix" style="width: 40upx;"></image>
							<view>审批</view>
						</view>
					</view>
				</view>
				
				<view class="post-item" style="width:706upx ;">
					<view style="padding: 20upx; 20upx 30upx 20upx">
						<view style="color: #FF0000;">
							拟办意见:
						</view>
						<textarea placeholder="   " style="height: 80upx;"></textarea>
					</view>
				</view>

				<view class="post-item" style="width: 353upx;height: 100upx;">
					<view style="display: flex;flex-direction: row;align-items: center;height: 99upx;">
						<view style="flex-shrink: 0;color: #FF0000;margin-left: 20upx;">核稿:</view>
						<view style="width: 100%;margin-left: 10upx;">林峰</view>
					</view>
				</view>

				<view class="post-item" style="width: 352upx;height: 100upx;">
					<view style="display: flex;flex-direction: row;align-items: center;height: 99upx;">
						<view style="flex-shrink: 0;color: #FF0000;margin-left: 20upx;">校对人:</view>
						<view style="width: 100%;margin-left: 10upx;">张小林</view>
					</view>
				</view>

				<view class="post-item" style="width: 353upx;height: 200upx;">
					<view style="padding: 20upx;">
						<view style="color: #FF0000;">
							会办部室意见：
						</view>
						<view>会员部</view>
						<view>林沛涵/2019-07-08</view>
					</view>
				</view>

				<view class="post-item" style="width: 352upx;height: 200upx;">
					<view style="display: flex;flex-direction: row;align-items: center;padding: 20upx;">
						<view style="flex-shrink: 0;color: #FF0000;">发文分数:</view>
						<view style="width: 100%;margin-left: 10upx;">32</view>
					</view>
				</view>

				<view class="post-item" style="width: 353upx;height: 100upx;">
					<view style="display: flex;flex-direction: row;align-items: center;height: 99upx;">
						<view style="flex-shrink: 0;color: #FF0000;margin-left: 20upx;">主送:</view>
						<view style="width: 100%;margin-left: 10upx;">王露；张明轩</view>
					</view>
				</view>

				<view class="post-item" style="width: 352upx;height: 100upx;">
					<view style="display: flex;flex-direction: row;align-items: center;height: 99upx;">
						<view style="flex-shrink: 0;color: #FF0000;margin-left: 20upx;">抄送:</view>
						<view style="width: 100%;margin-left: 10upx;">王露；张明轩</view>
					</view>
				</view>

				<view class="post-item" style="width: 706upx;">
					<view style="padding: 20upx; 20upx 30upx 20upx">
						<view style="color: #FF0000;">
							会办部室意见：
						</view>
						<view>中共中央办公厅 国务院办公厅印发《关于促进中小企业健康发展的指导意见》</view>
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
			<view class="flex-row" style="justify-content: flex-end;width: 35%;">
				<image src="../../static/lc-blue.svg" mode="widthFix" style="width:50upx"></image>
				<view style="margin-left: 20upx;font-size: 32upx;">流程图</view>
			</view>
			
			<view style="width: 1upx;height: 80upx;background-color: #EEEEED;">
			</view>
			
			<view class="flex-row" style="justify-content: flex-start;width: 35%;">
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
