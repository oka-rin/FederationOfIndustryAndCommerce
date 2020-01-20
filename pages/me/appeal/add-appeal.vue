<template>
	<view class="page">
		<view class="title-block">
			<view class="flex-row" style="margin-bottom: 5px;">
				<view>标题</view>
				<image src="../../../static/svn/required.svg" mode="widthFix" style="width: 7px;flex-shrink: 0;"></image>
			</view>
			<input v-model="appeal.appealtitle" type="text" style="font-weight: bold;font-size: 14px;" placeholder-class="input-text"
			 placeholder="请输入诉讼标题" />
		</view>

		<view class="appeal-details">
			<!-- 诉讼类型 -->
			<view class="flex-row" style="width: 100%;height: 60px;font-size: 15px;">
				<view class="flex-row" style="flex-shrink: 0;width: 90px;">
					<view> 诉讼类型</view>
					<image src="../../../static/svn/required.svg" mode="widthFix" style="width: 7px;flex-shrink: 0;"></image>
				</view>

				<view style="width: 100%;display: flex;flex-direction: row;align-items: center;">
					<input v-model="appealtype" type="text" disabled="true" class="add-appeal-tx" placeholder-class="input-text"
					 placeholder="请选择" @click="showAppealType" />
					<image src="../../../static/svn/go-tow.svg" mode="widthFix" style="width: 20px;margin-left: 5px;flex-shrink: 0;"></image>
				</view>
			</view>
			<view class="cfm-enterprise-fg" />

			<!-- 是否公开信息 -->
			<view class="flex-row" style="width: 100%;height: 60px;font-size: 15px;">
				<view class="flex-row" style="flex-shrink: 0;width: 150px;">
					<view> 是否公开信息</view>
					<image src="../../../static/svn/required.svg" mode="widthFix" style="width: 7px;flex-shrink: 0;"></image>
				</view>

				<view style="width: 100%;display: flex;flex-direction: row;align-items: center;justify-content: flex-end;">
					<switch checked="true" @change="clickSwitch" />
				</view>
			</view>
			<view class="cfm-enterprise-fg" />
			<!-- 联系电话 -->
			<view class="flex-row" style="width: 100%;height: 60px;font-size: 15px;">
				<view class="flex-row" style="flex-shrink: 0;width: 90px;">
					<view> 联系电话</view>

				</view>

				<view style="width: 100%;display: flex;flex-direction: row;align-items: center;">
					<input type="text" v-model="appeal.telephone" class="add-appeal-tx" placeholder-class="input-text" placeholder="请输入" />
					<image src="../../../static/svn/go-tow.svg" mode="widthFix" style="width: 20px;margin-left: 5px;flex-shrink: 0;"></image>
				</view>
			</view>
			<view class="cfm-enterprise-fg" />

			<!-- 联系邮箱 -->
			<view class="flex-row" style="width: 100%;height: 60px;font-size: 15px;">
				<view class="flex-row" style="flex-shrink: 0;width: 90px;">
					<view> 联系邮箱</view>
				</view>

				<view style="width: 100%;display: flex;flex-direction: row;align-items: center;">
					<input v-model="appeal.email" type="text" class="add-appeal-tx" placeholder-class="input-text" placeholder="请输入" />
					<image src="../../../static/svn/go-tow.svg" mode="widthFix" style="width: 20px;margin-left: 5px;flex-shrink: 0;"></image>
				</view>
			</view>
			<view class="cfm-enterprise-fg" />
		</view>

		<view class="title-block" style="margin-top: 15px;">
			<view class="flex-row" style="margin-bottom: 5px;">
				<view>联系地址</view>
			</view>
			<input v-model="appeal.address" type="text" placeholder-class="input-text" placeholder="请输入联系地址" />
		</view>

		<view class="title-block" style="margin-top: 15px;height: 100px;">
			<view style="margin-bottom: 5px;">诉讼内容</view>
			<textarea type="text" v-model="appeal.contents" placeholder-class="input-text" placeholder="备注/个人简介" auto-height
			 style="font-size: 15px;font-weight: bold;" />
			</view>
		
		<view style="margin-top: 15px;width: 96%;background-color: #FFFFFF;font-size: 15px;padding: 2%;">
			<view style="margin-bottom: 5px;margin-left: 1%;">凭证上传</view>
			
			<view class="tui-upload-box">
				<view class="tui-image-item" v-for="(item,index) in imageList" :key="index">
					<image :src="item.path" class="tui-item-img" @tap="previewImage(index)" mode="aspectFill"></image>
					<view class="tui-outer-block">
						<image src="../../../static/svn/delete.svg" @tap="delImage(index)" mode="widthFix" style="width:15px;height:15px;background-color: #FF0000;border-radius:3px;"></image>
					</view>
				</view>
			
				<view v-if="isShowAdd" class="tui-upload-add" @tap="chooseImage()">
					<view class="tui-upload-icon">
						<image src="../../../static/svn/s_img.svg" mode="widthFix" style="width: 50px;"></image>
						<view style="font-size: 14px;color: #999999;margin-top: 10px;">上传图片</view>
					</view>
				</view>
			
			</view>
			
			<view class="out-block">
				<view class="new-join-cfm" @click="formSubmit()">提交</view>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	
	import common from '../../../common/url.js';
	var _this,serverUrl,serverUrlEas,sessionId;
	export default {
		data() {
			return {
				//图片地址
				shu: 6,//上传图片的数量
				avatarImg:'../../static/me/avatar.svg',
				imageList: [],
				tempFilePaths: [],
				//上传状态：1-上传成功 2-上传中 3-上传失败
				statusArr: [],
				appeal:{
					appealtitle: "",
					appealtype: 0, //诉求类型 0-咨询 1-投诉 2-建议 3-其他
					status: 0, //是否公开 0-公开 1-不公开
					contents: "",
					telephone: "",
					address: "",
					email: ""
				},
				appealtype:'',
				status:true,
				pubAttachmentList:[],
				start:0
			}
		},
		computed: {
			isShowAdd() {
				let isShow = true;
				if (this.shu && this.imageList.length >= this.shu) {
					isShow = false;
				}
				return isShow
			}
		},
		onLoad: function() {
			_this = this;
				uni.getStorage({
				    key: 'login_key',
				    success: function (res) {
						console.log(res.data.sessionId);
				        _this.appeal.telephone=res.data.phone;
						sessionId=res.data.sessionId
				    }
				});
			this.appeal.status=0;//信息公开默认为公开
			serverUrl=common.serverUrl;
			serverUrlEas=common.serverUrlEas;
		},
		methods: {
			showAppealType:function(){
				var list=['咨询', '投诉', '建议','其他']
				uni.showActionSheet({
						itemList: list,
					    success: function (res) {
							_this.appeal.appealtype=res.tapIndex;
							_this.appealtype=list[res.tapIndex];
					        
					    },
					    fail: function (res) {
					        console.log(res.errMsg);
					 }
				})
			},
			formSubmit:function(){
				console.log('sdfsdf'+_this.pubAttachmentList);
				if(this.appeal.appealtitle.toString().trim()==null||this.appeal.appealtitle.toString().trim()==''){
					uni.showToast({
					    title: '标题不能为空',
					    duration: 3000
					});
				}else if(this.appeal.appealtype==null||this.appeal.appealtype==''){
					uni.showToast({
					    title: '请选择诉讼类型',
					    duration: 3000
					});
					
				}else{
					console.log(_this.pubAttachmentList);
					uni.request({
						url:serverUrl+'spMgAppeal/add',
						header:{
							sessionId:sessionId
						},
						data:{
							spMgAppeal: {
							  appealtitle: _this.appeal.appealtitle,
							  appealtype: _this.appeal.appealtype,
							  status:_this.appeal.status,
							  contents: _this.appeal.contents,
							  telephone: _this.appeal.telephone,
							  address: _this.appeal.address,
							  email: _this.appeal.email
							 },
							pubAttachmentList:_this.pubAttachmentList
						},
						method:"POST",
						success:function(res){
							console.log(res);
						}
					})
				}
			},
			clickSwitch(e){
				console.log(e.detail.value);
				if(this.status==false){
					this.appeal.status=1;
				}else{
					this.appeal.status=0;
				}
			},
			chooseImage: function() {
				uni.chooseImage({
					count: _this.shu - _this.imageList.length,
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album','camera'],
					success: function(e) {
						// console.log(e);
						var myDate = new Date();
						_this.tempFilePaths =_this.tempFilePaths.concat(e.tempFilePaths) ;
						const data = e.tempFiles;
						const data_list = data.map((news,index) => {
							return {
								path: news.path,
								name: myDate.getFullYear()+''+myDate.getMonth()+1+''+myDate.getDate()+''+myDate.getHours()+''+myDate.getMinutes()+''+myDate.getSeconds()+index,
								size: news.size,
								recordtype: "spMgAppealFj" //固定的业务类型
							};
						});
						
						 _this.pubAttachmentList=_this.pubAttachmentList.concat(data_list);
						//服务上传 
						let start=_this.pubAttachmentList.length-data_list.length;
						_this.setUpload(data_list,start);
						_this.imageList = _this.imageList.concat(data_list);
						// console.log(_this.imageList);
					}
				})
			},
			
		
			delImage: function(index) {
				this.imageList.splice(index, 1);
				this.tempFilePaths.splice(index,1);
				this.pubAttachmentList.splice(index,1)
			},
			previewImage: function(index) {
				if (!this.tempFilePaths.length) return;
				uni.previewImage({
					urls: this.tempFilePaths,
					current: this.tempFilePaths[index],
					loop: true,
					longPressActions: {
						itemList:['发送给朋友', '保存图片', '收藏'],
						itemColor:"#007AFF",
						success: function(data) {
							console.log(data);
						},
						fail: function(err) {
							console.log(err.errMsg);
						},
					}
				})
			},
			
			// 上传图片
			setUpload:function(data,start){
				console.log(_this.pubAttachmentList);
				for(let j=0;j<data.length;j++){
					uni.uploadFile({
						url:'https://files.scn.weilian.cn/upload',
						filePath: data[j].path,
						name: data[j].name,
						success:function(res) {
							console.log(JSON.parse(res.data));
							var css= JSON.parse(res.data);
							let index =start + j;
							_this.pubAttachmentList[index].name=_this.pubAttachmentList[index].name+'.jpg'
							_this.pubAttachmentList[index].path=css.visitPath;
							console.log(_this.pubAttachmentList[index].path);
						},fail:function(ess){
							console.log(ess)
						}
					})
				};
				console.log(_this.pubAttachmentList)
				
				
			}
		
		}
	}
</script>

<style>
	.title-block {
		background-color: #FFFFFF;
		width: 94%;
		padding: 3%;
		font-size: 15px;
	}

	.input-text {
		color: #C0C0C0;
	}

	.appeal-details {
		margin-top: 15px;
		padding: 0 3%;
		width: 94%;
		background-color: #FFFFFF;
	}

	.cfm-enterprise-fg {
		width: 100%;
		height: 1upx;
		background-color: #E6E6E6;
	}
	
	/* 上传出片 */
	.tui-container {
		width: 100%;
		height: 100%;
	}
	
	.tui-upload-box {
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		/* justify-content: space-between; */
	}
	.tui-upload-add {
		width: 103px;
		height: 103px;
		border-width: 1upx;
		border-style: solid;
		border-color: #C0C0C0;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 3px;
		margin: 3px;
	}
	
	.tui-item-img {
		width: 103px;
		height: 103px;
		border-width: 1upx;
		border-style: solid;
		border-color: #eeeeee;
		border-radius: 3px;
	
	}
	.tui-image-item {
		padding: 3px;
		position: relative;
		
	}
	
	.tui-upload-icon {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 10px;
	}
	
	.tui-outer-block {
		position: absolute;
		z-index: 200;
		left: 0px;
		top: 0px;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
	}

	.out-block {
		height: 55px;
		margin-top: 30px;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		background-color: #FFFFFF;
	}
	
	.new-join-cfm {
		background-color: #007AFF;
		height: 42px;
		line-height: 42px;
		color: #FFFFFF;
		width: 230px;
		border-radius: 25px;
		text-align: center;
	}
	
	/* 文字 */
	.add-appeal-tx{
		text-align: right;width: 100%;font-weight: bold;
	}
</style>
