<template>
	<view class="page">
		<view class="news-tabtop-height">
			<sun-tab :value.sync="swiperIndex" :tabList="tabtopList" rangeKey="title"></sun-tab>
		</view>

		<view class="swiper-area" id="demo01">
			<swiper :current="swiperIndex" style="height: 100%;" @change="animationfinish">
				<swiper-item>
					<scroll-view scroll-y :style="{ height: scrollViewHeight + 'px' }">

						<view class="search-block">
							<view class="search-ico-wapper">
								<image src="../../static/icos/search.png" class="search-ico"></image>
							</view>

							<input placeholder="搜索云盘文件" disabled="true" maxlength="10" class="search-text"  @click="searchMe" />
						</view>

						<view class="disk-block">
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
									<view style="flex-shrink: 0;" >
										<image :src="diskItem.ischose==true?'../../static/svn/chose.svg':'../../static/svn/chose-w.svg'" mode="widthFix"
										 style="width:25px;" @click="getIsChoseFile(index)"></image>
									</view>
									
								</view>
								<view class="disk-fg"></view>
							</view>
						
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item>
					2
				</swiper-item>

				<swiper-item>
					3
				</swiper-item>
			</swiper>
		</view>
		
		<view class="disk-bottom-chose" v-if="showButtom==true">
			<view class="flex-row" style="justify-content: space-between;height: 40px; width: 94%;font-size: 15px;padding: 0px 3%;">
				<view style="width: 50%;">已选择{{choseNum}}个文件</view>
				<view class="flex-row" style="width: 50%;height: 25px;justify-content: flex-end;">
					<view>取消</view>
					<view style="margin-left: 15px;margin-right: 3px;" @click="getAllChose()">全选</view>
					<image :src="allChose==true?'../../static/svn/chose.svg':'../../static/svn/chose-w.svg'" @click="getAllChose()"  mode="widthFix" style="width: 25px;"></image>
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
				<navigator url="share-disk" style="align-items: center;display: flex;flex-direction: column;" >
					<image src="../../static/disk/share.svg" mode="widthFix" style="width: 20px;"></image>
					<view>分享</view>
				</navigator>
				<view style="align-items: center;display: flex;flex-direction: column;">
					<image src="../../static/disk/delete.svg" mode="widthFix" style="width: 20px;"></image>
					<view>删除</view>
				</view>
			</view>
		
		</view>
		<view class="disk-bottom" v-if="showButtom==false">
			<view class="flex-row" style="width: 50%;justify-content: center;">
				<image src="../../static/svn/adddisk.svg" mode="widthFix" style="width: 25px;margin-right:10px;"></image>
				<view style="font-size: 15px;">新建文件夹</view>
			</view>
			<view class="flex-row" style="width: 50%;justify-content: center;">
				<image src="../../static/svn/upload.svg" mode="widthFix" style="width: 25px;margin-right:10px;"></image>
				<view style="font-size: 15px;">上传文件</view>
			</view>
		</view> 
	</view>
</template>


<script>
	var _self;
	import sunTab from '@/components/sun-tab/sun-tab.vue';
	export default {
		data() {
			return {
				showButtom:false,//显示底部
				allChose:false,//全选
				choseNum:0,
				tabtopList: [{
						id: "1",
						title: "个人文件柜"
					},
					{
						id: "2",
						"title": "公共文件柜"
					}, {
						id: "3",
						"title": "部门文件柜"
					}
				],
				swiperIndex: 0, //滑动标签
				scrollViewHeight: 0, //中间滑动区域的高度
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
					},
					{
						title: '年终总结.xlsx',
						status: 'xlsx',
						path: '../../static/disk/rar.svg',
						ischose: false
					},
					{
						title: '年终总结.txt',
						status: 'txt',
						path: '../../static/disk/rar.svg',
						ischose: false
					},
					{
						title: '年终总结',
						status: 'file',
						path: '../../static/disk/rar.svg',
						ischose: false
					},
					{
						title: '年终总结.doc',
						status: 'doc',
						path: '../../static/disk/rar.svg',
						ischose: false
					}
				]
			
			}
		},
		components: {
			sunTab
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
		onReady: function() {
			uni.createSelectorQuery().select("#demo01").fields({
				size: true,
				id: true
			}, function(res) {
				console.log(res)
				_self.scrollViewHeight = res.height;
				console.log(_self.scrollViewHeight)
			}).exec();
		},
		methods: {
			searchMe:function(){
				uni.navigateTo({
					url:'search-disk'
				})
			},
			animationfinish: function({
				detail: {
					current
				}
			}) {
				console.log(current);
				_self.tabIndex = _self.swiperIndex = current;
			},
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
					if(this.diskList[i].ischose==true){
						this.allChose=true;
					}else{
						this.allChose=false;
						break
					}
				}
	
				if(this.choseNum<=0){
					this.showButtom=false;
				}else{
					this.showButtom=true;
				}
				
			},
			
			getAllChose:function(){
				if(this.allChose==true){
					this.allChose=false;
					for(var i=0;i<this.diskList.length;i++){
						this.diskList[i].ischose=false;
					}
					this.showButtom=false;
					this.choseNum=0;
				}else{
					var choseNum=0;
					this.allChose=true;
					for(var i=0;i<this.diskList.length;i++){
						this.diskList[i].ischose=true;
						choseNum++;
					}
					this.choseNum=choseNum;
					this.showButtom=true;
					
				}
			}
		
		}
	}
</script>

<style>
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
		width: 92%;
		height: 40px;
		margin-bottom: 0upx;
		border-radius: 12px;
		margin-top: 10px;
		margin-bottom: 10px;
		margin-left: 4%;
		margin-right: 4%;
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
		width: 100%;
		height: 80px;
		display: flex;
		flex-direction: row;
		align-items: center;
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
