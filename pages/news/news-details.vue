<template>
	<view class="page">
		<view class="news-details-buju">
			<text class="news-details-title">{{contents.title}}</text>
			<text class="news-details-time">发起人:{{contents.useraccount}} 时间: {{starttime}}</text>
			<!-- <view v-for="text in textList">
				<view style="margin-bottom: 10px;">
					<text class="news-details-tx" style="text-indent:20px"> {{text.textItem}}</text>
				</view>
			</view> -->
			<view style="margin-bottom: 10px;">
				<text class="news-details-tx" style="text-indent:20px"> {{contents.content}}</text>
			</view>

			<view style="margin-top:10px ; font-size: 14px;height: 40px;line-height: 40px;">附件：</view>
			<view class="news-fg"></view>
			<view v-for="pubAttachment in pubAttachmentList" @tap="onClickDownload(pubAttachment.path)">
				<view class="news-download">
					<view class="news-download-tx">{{pubAttachment.name}}</view>
					<view style="display: flex;flex-direction: column;justify-content: center;">
						<image src="../../static/svn/go-tow.svg" mode="widthFix" style="width: 20px;height: 20px;"></image>
					</view>
				</view>
				<view class="news-fg"></view>
			</view>

		</view>
	</view>
</template>

<script>
	import {
		mapState
	}from 'vuex'
	//日期分割
	import {
		friendlyDate
	} from '@/common/util.js';
	import common from '../../common/url.js';
	var _self, sessionId,serverUrlEas;
	export default {
		computed:mapState(['hasLogin','uerInfo']),
		data() {
			return {
				id: 0,
				contents: {},
				starttime: '',
				pubAttachmentList: [],
				textList: [{
						textItem: '官方创新很好，又为我们创造了一个尺寸单位，upx，但是考虑到项目迁移和开发通用，我决定还是使用px配合flexible实现适配，确保项目可以轻松移植到uni框架，需要改动@dcloudio/vue-cli-plugin-uni/packages/postcss文件，在postcss.config.js文件中引入的，保证我们小写px自动转换rem，大写的不转换，默认采用750px的设计稿，所以其他尺寸设计稿的需要注意转换'
					},
					{
						textItem: '官方创新很好，又为我们创造了一个尺寸单位，upx，但是考虑到项目迁移和开发通用，我决定还是使用px配合flexible实现适配，确保项目可以轻松移植到uni框架，需要改动@dcloudio/vue-cli-plugin-uni/packages/postcss文件，在postcss.config.js文件中引入的，保证我们小写px自动转换rem，大写的不转换，默认采用750px的设计稿，所以其他尺寸设计稿的需要注意转换'
					},
					{
						textItem: '官方创新很好，又为我们创造了一个尺寸单位，upx，但是考虑到项目迁移和开发通用，我决定还是使用px配合flexible实现适配，确保项目可以轻松移植到uni框架，需要改动@dcloudio/vue-cli-plugin-uni/packages/postcss文件，在postcss.config.js文件中引入的，保证我们小写px自动转换rem，大写的不转换，默认采用750px的设计稿，所以其他尺寸设计稿的需要注意转换'
					}
				]
			}
		},
		onLoad: function(e) {
			_self = this;
			_self.id = e.id;
			sessionId = this.uerInfo.sessionId;
			console.log(_self.id)
			this.getContent(_self.id);
			serverUrlEas=common.serverUrlEas;
		},
		methods: {

			onClickDownload: function(path) {
				console.log(path)
				const downloadTask = uni.downloadFile({
					url: path, //仅为示例，并非真实的资源
					success: function(res) {
						if (res.statusCode === 200) {
							console.log('下载成功');
						}
					},
					fail: function() {
						console.log('下载失败');
					}
				});
				downloadTask.onProgressUpdate(function(res) {
					console.log('下载进度' + res.progress);
					console.log('已经下载的数据长度' + res.totalBytesWritten);
					console.log('预期需要下载的数据总长度' + res.totalBytesExpectedToWrite);


				});
			},
			getContent: function(id) {
				uni.request({
					header: {
						'sessionId': sessionId //自定义请求头信息
					},
					url: serverUrlEas+'bulletin/queryBulletinDetail?id=' + id,
					success: function(res) {
						console.log(res);
						const data = res.data.data[0];
						_self.pubAttachmentList = data.pubAttachmentList;
						console.log(data)
						_self.contents = data.systemBulletin;
						_self.starttime = friendlyDate(new Date(data.systemBulletin.createtime).getTime());

					},
					fail: function() {

					}
				})
			}
		}
	}
</script>

<style>
	.news-details-buju {
		padding: 15px;
		background-color: #FFFFFF;
		padding-bottom: 40px;
	}

	.news-details-title {
		display: flex;
		color: #000000;
		font-size: 22px;
		font-weight: 800;
		/* justify-content: center; */
	}

	.news-details-time {
		display: flex;
		/* justify-content: center; */
		color: #999999;
		font-size: 12px;
		padding: 12px 0 8px 0;
	}

	.news-details-tx {
		font-size: 14px;
		color: #000000;

	}

	.news-download {
		display: flex;
		flex-direction: row;
		background-color: #FFFFFF;
		height: 40px;
		width: 100%;
		line-height: 40px;
		justify-content: space-between;
	}

	.news-download-tx {
		color: #0077AA;

		height: 40px;

		font-size: 14px;
	}

	.news-fg {
		width: 100%;
		height: 1upx;
		background-color: #dbdbdb;
	}
</style>
