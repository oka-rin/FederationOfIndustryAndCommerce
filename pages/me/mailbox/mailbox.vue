<template>
	<view class="page">
		<view class="mailbox-block">
			<view class="mailbox-block-item">
				<view class="mailbox-img-block" style="background-color:#f57d03;">
					<image src="../../../static/svn/mailbox.svg" mode="widthFix" style=" width: 30px;"></image>
				</view>
				<view style="margin-top: 10px;">纪检监督信箱</view>
				<view style="color: #007AFF;font-weight: bold;margin-top: 5px;">sjwzssljjjz@163.com</view>
			</view>
			<view class="mailbox-block-item" style="margin-top: 15px;">
				<view class="mailbox-img-block" style="background-color:#007AFF;">
					<image src="../../../static/svn/mailbox.svg" mode="widthFix" style=" width: 30px;"></image>
				</view>
				<view style="margin-top: 10px;">民企维权信箱</view>
				<view style="color: #007AFF;font-weight: bold;margin-top: 5px;">master@cdsb.com</view>
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
	.mailbox-block {
		padding: 4%;
		width: 92%;
	}

	.mailbox-block-item {
		background-color: #FFFFFF;
		width: 100%;
		padding: 5% 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		box-shadow: 0 0.5px 0.5px 0 rgba(0, 0, 0, 0.1), 0 1px 1px 0 rgba(0, 0, 0, 0.1);
		border-radius: 7px;
	}

	.mailbox-img-block {
		width: 60px;
		height: 60px;
		flex-direction: row;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
	}
</style>
