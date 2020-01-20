<template>
	<view class="page">
	
		<!-- #ifdef APP-PLUS -->
		<view class="status_bar" id='status_bar'>
			<view class="top_view"></view>
		</view>
		<!-- #endif -->
	
		<view class="flex-row" style="width: 100%;">
		<view class="search-block">
			<view class="search-ico-wapper">
				<image src="../../static/icos/search.png" class="search-ico"></image>
			</view>
			

			<input placeholder="搜索云盘文件" maxlength="10" class="search-text" confirm-type="search" @confirm="searchMe" />
		</view>
		<view style="font-size: 16px;color: #007AFF;flex-shrink: 0;margin-right: 3%;">取消</view>
		</view>
		
		<view  style="height: 30px;width: 97%;font-size: 16px;padding-left: 3%;">搜索结果3个</view>
		<view v-for="(diskItem,index) in diskList" :key="index">
			<view class="disk-block-item">
				<image :src="diskItem.path" mode="widthFix" style="width: 45px;flex-shrink: 0;"></image>
				<view style="width: 100%;margin-left: 8px;margin-right: 10px;">
					<view style="font-size: 18px;">{{diskItem.title}}</view>
					<view class="flex-row" style="color: #999999;justify-content: space-between;margin-top: 2px;">
						<view style="font-size: 13px;">2019-04-26 10:55</view>
						<view style="font-size: 14px;margin-right: 20px;">24K</veiw>
						</view>
					</view>

				</view>
				<view style="flex-shrink: 0;">
					<image :src="diskItem.ischose==true?'../../static/svn/chose.svg':'../../static/svn/chose-w.svg'" mode="widthFix"
					 style="width:25px;" @click="getIsChoseFile(index)"></image>
				</view>

			</view>
			<view class="disk-fg"></view>
		</view>
		
	<!-- 底部弹窗 -->
	<view class="disk-bottom-chose" v-if="showButtom==true">
		<view class="flex-row" style="justify-content: space-between;height: 40px; width: 94%;font-size: 15px;padding: 0px 3%;">
			<view style="width: 50%;">已选择{{c}}个文件</view>
			<view class="flex-row" style="width: 50%;height: 25px;justify-content: flex-end;">
				<view>取消</view>
				<view style="margin-left: 15px;margin-right: 3px;" @click="getAllChose()">全选</view>
				<image :src="allChose==true?'../../static/svn/chose.svg':'../../static/svn/chose-w.svg'" @click="getAllChose()" mode="widthFix" style="width: 25px;"></image>
			</view>
		</view>
		
		
		<view class="disk-bottom-chose-blue">
			<view style="align-items: center;display: flex;flex-direction: column;">
				<image src="../../static/disk/download.svg" mode="widthFix" style="width: 20px;"></image>
				<view>下载</view>
			</view>
			<view style="align-items: center;display: flex;flex-direction: column;">
				<image src="../../static/disk/copy.svg" mode="widthFix" style="width: 20px;"></image>
				<view>复制</view>
			</view>
			<view style="align-items: center;display: flex;flex-direction: column;">
				<image src="../../static/disk/mobile.svg" mode="widthFix" style="width: 20px;"></image>
				<view>移动</view>
			</view >
			<view style="align-items: center;display: flex;flex-direction: column;">
				<image src="../../static/disk/share.svg" mode="widthFix" style="width: 20px;"></image>
				<view>分享</view>
			</view>
			<view style="align-items: center;display: flex;flex-direction: column;">
				<image src="../../static/disk/delete.svg" mode="widthFix" style="width: 20px;"></image>
				<view>删除</view>
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
				showButtom:false,
				choseNum:0,
				diskList: [{
						title: '年终总结.rar',
						status: 'rar',
						path: '',
						ischose: false
					},
					{
						title: '年终总结.pdf',
						status: 'pdf',
						path: '',
						ischose: false
					},
					{
						title: '年终总结.ppt',
						status: 'ppt',
						path: '../../static/disk/rar.svg',
						ischose: false
					}
				]
			}
		},
		onLoad() {
			_self = this;
			for (var i = 0; i < this.diskList.length; i++) {
				switch (this.diskList[i].status) {
					case "rar":
						this.diskList[i].path = '../../static/disk/rar.svg';
						break;
					case "xlsx":
						this.diskList[i].path = '../../static/disk/xlsType.svg'
						break;
					case "txt":
						this.diskList[i].path = '../../static/disk/txt.svg'
						break;
					case "file":
						this.diskList[i].path = '../../static/disk/file.svg'
						break;
					case "doc":
						this.diskList[i].path = '../../static/disk/word2.svg'
						break;
					case "ppt":
						this.diskList[i].path = '../../static/disk/ppt.svg'
						break;
					case "MP4":
						this.diskList[i].path = '../../static/disk/MP41.svg'
						break;
					case "pdf":
						this.diskList[i].path = '../../static/disk/pdf.svg'
						break;
					default:
						break;
				}
			}

		},
		methods: {
			getIsChoseFile: function(index) {
				if (this.diskList[index].ischose == true) {
					this.diskList[index].ischose = false;
					if(this.choseNum<=0){
						this.choseNum=0;
					}else{
						this.choseNum--;
					}
				} else {
					this.diskList[index].ischose = true;
					this.choseNum++;
				}
				
				for(var i=0;i<this.diskList.length;i++){
					if(this.diskList[i].ischose==false){
						this.allChose=false;
						break;
					}else{
						this.allChose=true;
						
					}
				}
				
				//单选全部选中或取消是判断底部是否显示
				if(this.choseNum<=0){
					this.showButtom=false;
				}else{
					this.showButtom=true;
				}
			},
			getAllChose:function(){
				if(this.allChose==true){
					this.allChose=false;
					//遍历一遍全部变为取消
					for(var i=0;i<this.diskList.length;i++){
						this.diskList[i].ischose=false;
					}
					this.showButtom=false;
					this.choseNum=0;
				}else{
					var choseNum=0;
					this.allChose=true;
					//遍历一遍全部变为选中
					for(var i=0;i<this.diskList.length;i++){
						this.diskList[i].ischose=true;
						choseNum++;
					}
					this.choseNum=choseNum;//最大选中
					this.showButtom=true;//显示底部
					
				}
			}
		}
	}
</script>

<style>
	/* 状态栏 */
	.status_bar {
	    height: var(--status-bar-height);  
	    width: 100%;  
	    background-color: #EEEEED;  
	}
	
	.top_view {  
	    height: var(--status-bar-height);  
	    width: 100%;  
	    position: fixed;  
	    background-color: #EEEEED;  
	    top: 0;  
	    z-index: 999;  
	}
	
	.news-tabtop-height {
		width: 100%;
		position: fixed;
		z-index: 999;
	}

	.swiper-area {
		width: 100%;
		height: 100%;
		background-color: #eeeeed;
		position: sticky;
		margin-top: 50px;
	}

	/* 搜索框 */
	.search-ico {
		width: 40upx;
		height: 40upx;
	}

	.search-text {
		font-size: 14px;
		height: 100%;
		width: 100%;
	}

	.search-block {
		display: flex;
		flex-direction: row;
		width: 94%;
		height: 40px;
		margin-bottom: 0upx;
		border-radius: 12px;
		margin-top: 10px;
		margin-bottom: 10px;
		margin-left: 3%;
		margin-right: 3%;
		background-color: #FFFFFF;
	}

	.search-ico-wapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 0upx 10upx;
	}

	/* 云盘边框 */
	.disk-block {
		width: 94%;
		background-color: #FFFFFF;
		padding: 0 3%;
	}

	.disk-bottom {
		height: 60px;
		width: 100%;
		bottom: 0;
		align-items: center;
		display: flex;
		position: fixed;
		background-color: #FFFFFF;
		border-top: #EEEEEE solid 1px;
	}

	.disk-block-item {
		background-color: #FFFFFF;
		width: 94%;
		height: 80px;
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 0 3%;
	}

	.disk-fg {
		padding: 0 3%;
		width: 94%;
		height: 1upx;
		background-color: #E6E6E6;
	}
	
	
	/* 底部显示 */
	.disk-bottom-chose{
		height: 90px;
		width: 100%;
		bottom: 0;
		
		position: fixed;
		background-color: #FFFFFF;
		border-top: #EEEEEE solid 1px;
		}
	
	.disk-bottom-chose-blue{
		background-color: #007AFF;
		width: 94%;
		height: 50px;
		padding: 0px 3%;
		color: #FFFFFF;
		align-items: center;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		font-size: 12px;
	}
</style>
