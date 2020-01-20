<template>
	<!-- 章程 -->
	<view class="page">
		<view class="push-details-buju">
			<text class="push-details-title">中国工商业联合会章程</text>
			<text class="push-details-time">（中国工商业联合会第十二次全国代表大会部分修改，2017年11月26日通过）</text>
			<view v-for="(text,index) in textList" :key="index">
				<view style="margin-bottom: 15px;">
					<text class="push-details-tx"> {{text.textItem}}</text>
				
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	var _self;
	export default {
		data() {
			return {
				textList: [{
						textItem: '  官方创新很好，又为我们创造了一个尺寸单位，upx，但是考虑到项目迁移和开发通用，我决定还是使用px配合flexible实现适配，确保项目可以轻松移植到uni框架，需要改动@dcloudio/vue-cli-plugin-uni/packages/postcss文件，在postcss.config.js文件中引入的，保证我们小写px自动转换rem，大写的不转换，默认采用750px的设计稿，所以其他尺寸设计稿的需要注意转换'
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
		onLoad: () => {
			_self=this;
		},
		methods: {
			
		}
	}
</script>

<style>
@import url("my-cfm-news");
</style>
