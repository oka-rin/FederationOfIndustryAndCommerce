<template>
	<view class="page">
		<view style="width:94%;padding: 3%;">
			<view style="position:relative;" class="carousel">
				<!-- 整体背景图 -->
				<image src="../../static/test/gs05.jpg" class="carousel" style="border-radius: 10px;"></image>
				<view class="lunbo-column" style="border-radius: 10px;">
					<text style="height: 100%"></text>
					　　　　<view class="cfm-row">
						<view style="height: 100%;width: 60px;flex-shrink: 0;display: flex;align-items: center;  ">
							<image src="../../static/test/gs01.jpg" mode="widthFix" class="cfm-img">
							</image>
						</view>

						<view style="display: flex;flex-direction: column;width: 100%;">
							<view class="cfm-title">良庆区商会</view>
							<view class="cfm-description">成员106人/建会2018年/南宁</view>
						</view>

						<view style="height: 100%; width: 60px;flex-shrink: 0;display: flex;align-items: flex-end;">
							<navigator url="chamberofcommerce-details">
								<view class="cfm-button-enterprise">更换商会</view>
							</navigator>
						</view>

					</view>
				</view>
			</view>
		</view>

		<view style="height: 40px;line-height: 30px;padding-left:2% ;width: 98%;font-size: 18px;">企业会员基本信息</view>
		<form @submit="formSubmit()">
		<view style="padding: 0px 3%;background-color: #FFFFFF;width: 94%;">
			
			<!-- 头像 -->
			<view class="cfm-enterprise-row">
				<view class="cfm-enterprise-tx" style="width: 100%;">
					<view>头像</view>
					<image src="../../static/svn/required.svg" mode="widthFix" style="width: 7px;flex-shrink: 0;"></image>
				</view>
				<view class="cfm-enterprise-block-row">
					<!-- 上传头像判断avatarImg -->
					<image :src="avatarImg" style="width: 40px;height:40px;border-radius:50%;" @click="getAvatarImg()"></image>
					<image src="../../static/svn/go-tow.svg" mode="widthFix" style="width: 20px;margin-left: 5px;"></image>
				</view>
			</view>
			<view class="cfm-enterprise-fg" />

			<!-- 真实姓名 -->
			<view class="cfm-enterprise-row">
				<view class="cfm-enterprise-tx" style="flex-shrink: 0;width: 90px;">
					<view> 真实姓名</view>
					<image src="../../static/svn/required.svg" mode="widthFix" style="width: 7px;flex-shrink: 0;"></image>
				</view>

				<view style="width: 100%;display: flex;flex-direction: row;align-items: center;">
					<input placeholder="请输入" placeholder-class="cfm-enterprise-input-placeholder" class="cfm-enterprise-input" />
					<image src="../../static/svn/go-tow.svg" mode="widthFix" style="width: 20px;margin-left: 5px;flex-shrink: 0;"></image>
				</view>
			</view>
			<view class="cfm-enterprise-fg" />

			<!-- 性别 -->
			<view class="cfm-enterprise-row">
				<view class="cfm-enterprise-tx" style="flex-shrink: 0;width: 50px;">
					<view>性别</view>
					<image src="../../static/svn/required.svg" mode="widthFix" style="width: 7px;flex-shrink: 0;"></image>
				</view>
				<view style="width: 100%;display: flex;flex-direction: row;align-items: center;" @click="getSex()">
					<input placeholder="请选择" disabled="true" v-model="enterprise.sex" placeholder-class="cfm-enterprise-input-placeholder"
					 class="cfm-enterprise-input" />
					<image src="../../static/svn/go-tow.svg" mode="widthFix" style="width: 20px;margin-left: 5px;flex-shrink: 0;"></image>
				</view>
			</view>
			<view class="cfm-enterprise-fg" />

			<!-- 企业所在行政区域 -->
			<view class="cfm-enterprise-row">
				<view class="cfm-enterprise-tx" style="flex-shrink: 0;width: 150px;">
					<view>企业所在行政区域</view>
					<image src="../../static/svn/required.svg" mode="widthFix" style="width: 7px;flex-shrink: 0;"></image>
				</view>
				<view style="width: 100%;display: flex;flex-direction: row;align-items: center;" @tap="openAddres">
					<input placeholder="请选择" disabled="true" v-model="enterprise.pickerText" placeholder-class="cfm-enterprise-input-placeholder"
					 class="cfm-enterprise-input" />
					<image src="../../static/svn/go-tow.svg" mode="widthFix" style="width: 20px;margin-left: 5px;flex-shrink: 0;"></image>
					<simple-address ref="simpleAddress" :pickerValueDefault="cityPickerValueDefault" @onConfirm="onConfirm" themeColor='#007AFF'></simple-address>
				</view>
			</view>
			<view class="cfm-enterprise-fg" />
			<!-- 工商注册类型 -->
			<view class="cfm-enterprise-row">
				<view class="cfm-enterprise-tx" style="flex-shrink: 0;width: 190px;">
					<view>工商登记注册类型</view>
					<image src="../../static/svn/required.svg" mode="widthFix" style="width: 7px;flex-shrink: 0;"></image>
				</view>
				<view style="width: 100%;display: flex;flex-direction: row;align-items: center;">
					<input placeholder="请选择" placeholder-class="cfm-enterprise-input-placeholder" class="cfm-enterprise-input" />
					<image src="../../static/svn/go-tow.svg" mode="widthFix" style="width: 20px;margin-left: 5px;flex-shrink: 0;"></image>
				</view>
			</view>
			<view class="cfm-enterprise-fg" />
			<!-- 社会保险登记号 -->
			<view class="cfm-enterprise-row">
				<view class="cfm-enterprise-tx" style="flex-shrink: 0;width: 150px;">
					<view>社会保险登记号</view>
					<image src="../../static/svn/required.svg" mode="widthFix" style="width: 7px;flex-shrink: 0;"></image>
				</view>
				<view style="width: 100%;display: flex;flex-direction: row;align-items: center;">
					<input placeholder="请选择" disabled="true" placeholder-class="cfm-enterprise-input-placeholder" class="cfm-enterprise-input" />
					<image src="../../static/svn/go-tow.svg" mode="widthFix" style="width: 20px;margin-left: 5px;flex-shrink: 0;"></image>
				</view>
			</view>
			<view class="cfm-enterprise-fg" />

			<!-- 企业工商登记名称 -->
			<view class="cfm-enterprise-row">
				<view class="cfm-enterprise-tx" style="flex-shrink: 0;width: 150px;">
					<view>企业工商登记名称</view>
					<image src="../../static/svn/required.svg" mode="widthFix" style="width: 7px;flex-shrink: 0;"></image>
				</view>
				<view style="width: 100%;display: flex;flex-direction: row;align-items: center;">
					<input placeholder="请输入" placeholder-class="cfm-enterprise-input-placeholder" class="cfm-enterprise-input" />
					<image src="../../static/svn/go-tow.svg" mode="widthFix" style="width: 20px;margin-left: 5px;flex-shrink: 0;"></image>
				</view>
			</view>
			<view class="cfm-enterprise-fg" />

			<!-- 法定代表人姓名 -->
			<view class="cfm-enterprise-row">
				<view class="cfm-enterprise-tx" style="flex-shrink: 0;width: 150px;">
					<view>法定代表人姓名</view>
					<image src="../../static/svn/required.svg" mode="widthFix" style="width: 7px;flex-shrink: 0;"></image>
				</view>
				<view style="width: 100%;display: flex;flex-direction: row;align-items: center;">
					<input placeholder="请输入" placeholder-class="cfm-enterprise-input-placeholder" class="cfm-enterprise-input" />
					<image src="../../static/svn/go-tow.svg" mode="widthFix" style="width: 20px;margin-left: 5px;flex-shrink: 0;"></image>
				</view>
			</view>
			<view class="cfm-enterprise-fg" />

			<!-- 法人身份证号码 -->
			<view class="cfm-enterprise-row">
				<view class="cfm-enterprise-tx" style="flex-shrink: 0;width: 150px;">
					<view>法人身份证号码</view>
					<image src="../../static/svn/required.svg" mode="widthFix" style="width: 7px;flex-shrink: 0;"></image>
				</view>
				<view style="width: 100%;display: flex;flex-direction: row;align-items: center;">
					<input placeholder="请输入" placeholder-class="cfm-enterprise-input-placeholder" class="cfm-enterprise-input" />
					<image src="../../static/svn/go-tow.svg" mode="widthFix" style="width: 20px;margin-left: 5px;flex-shrink: 0;"></image>
				</view>
			</view>
			<view class="cfm-enterprise-fg" />

			<!-- 企业所在国家或区域 -->
			<view class="cfm-enterprise-row">
				<view class="cfm-enterprise-tx" style="flex-shrink: 0;width: 200px;">
					<view>企业所在国家或区域</view>
					<image src="../../static/svn/required.svg" mode="widthFix" style="width: 7px;flex-shrink: 0;"></image>
				</view>
				<view style="width: 100%;display: flex;flex-direction: row;align-items: center;">
					<input placeholder="请选择" disabled="true" placeholder-class="cfm-enterprise-input-placeholder" class="cfm-enterprise-input" />
					<image src="../../static/svn/go-tow.svg" mode="widthFix" style="width: 20px;margin-left: 5px;flex-shrink: 0;"></image>
				</view>
			</view>
			<view class="cfm-enterprise-fg" />
			<!-- 同一社会信息代码 -->
			<view class="cfm-enterprise-row">
				<view class="cfm-enterprise-tx" style="flex-shrink: 0;width: 150px;">
					<view>同一社会信息代码</view>
					<image src="../../static/svn/required.svg" mode="widthFix" style="width: 7px;flex-shrink: 0;"></image>
				</view>
				<view style="width: 100%;display: flex;flex-direction: row;align-items: center;">
					<input placeholder="请输入" placeholder-class="cfm-enterprise-input-placeholder" class="cfm-enterprise-input" />
					<image src="../../static/svn/go-tow.svg" mode="widthFix" style="width: 20px;margin-left: 5px;flex-shrink: 0;"></image>
				</view>
			</view>
			<view class="cfm-enterprise-fg" />

			<!-- 行政分类 -->
			<view class="cfm-enterprise-row">
				<view class="cfm-enterprise-tx" style="flex-shrink: 0;width: 150px;">
					<view>行政分类</view>
					<image src="../../static/svn/required.svg" mode="widthFix" style="width: 7px;flex-shrink: 0;"></image>
				</view>
				<view style="width: 100%;display: flex;flex-direction: row;align-items: center;">
					<input placeholder="请选择" disabled="true" placeholder-class="cfm-enterprise-input-placeholder" class="cfm-enterprise-input" />
					<image src="../../static/svn/go-tow.svg" mode="widthFix" style="width: 20px;margin-left: 5px;flex-shrink: 0;"></image>
				</view>
			</view>
			<view class="cfm-enterprise-fg" />
			<!-- 邮箱 -->
			<view class="cfm-enterprise-row">
				<view class="cfm-enterprise-tx" style="flex-shrink: 0;width: 150px;">
					<view>邮箱</view>
					<image src="../../static/svn/required.svg" mode="widthFix" style="width: 7px;flex-shrink: 0;"></image>
				</view>
				<view style="width: 100%;display: flex;flex-direction: row;align-items: center;">
					<input placeholder="请输入" placeholder-class="cfm-enterprise-input-placeholder" class="cfm-enterprise-input" />
					<image src="../../static/svn/go-tow.svg" mode="widthFix" style="width: 20px;margin-left: 5px;flex-shrink: 0;"></image>
				</view>
			</view>
			<view class="cfm-enterprise-fg" />

			<!-- 职工人数 -->
			<view class="cfm-enterprise-row">
				<view class="cfm-enterprise-tx" style="flex-shrink: 0;width: 150px;">职工总人数</view>

				<view style="width: 100%;display: flex;flex-direction: row;align-items: center;">
					<input placeholder="请输入" placeholder-class="cfm-enterprise-input-placeholder" class="cfm-enterprise-input" />
					<image src="../../static/svn/go-tow.svg" mode="widthFix" style="width: 20px;margin-left: 5px;flex-shrink: 0;"></image>
				</view>
			</view>
		</view>


		<view style="width: 100%;height:12px;background-color: #eeeeed;"></view>

		<view style="background-color: #FFFFFF;width: 100%;padding: 3% 0px;">
			<view class="cfm-enterprise-tx" style="padding: 0px 3%;">
				<view>企业营业执照</view>
				<image src="../../static/svn/required.svg" mode="widthFix" style="width: 7px;flex-shrink: 0;"></image>
			</view>

			<view class="tui-upload-box">
				<view class="tui-image-item" v-for="(item,index) in imageList" :key="index">
					<image :src="item.path" class="tui-item-img" @tap="previewImage(index)" mode="aspectFill"></image>
					<view class="tui-outer-block">
						<image src="../../static/svn/delete.svg" @tap="delImage(index)" mode="widthFix" style="width:15px;height:15px;background-color: #FF0000;border-radius:3px;"></image>
					</view>
				</view>

				<view v-if="isShowAdd" class="tui-upload-add" @tap="chooseImage()">
					<view class="tui-upload-icon">
						<image src="../../static/svn/s_img.svg" mode="widthFix" style="width: 50px;"></image>
						<view style="font-size: 14px;color: #999999;margin-top: 10px;">上传图片</view>
					</view>
				</view>

			</view>
		
		
		</view>

		<view style="width: 100%;height:12px;background-color: #eeeeed;"></view>

		<view style="width: 94%;padding: 3%;height: 90px;">
			<textarea type="text" placeholder="备注/个人简介" auto-height style="font-size: 15px;color: #999999;" />
		</view>

		
		<view style="width: 97%;background-color: #eeeeed;height: 40px;line-height: 40px;color: #999999;font-size: 16px;padding-left: 3%;">为了更快通过审核，请说明你的身份</view>
		<view class="button-block">
			<view class="button-gray">保存信息</view>
			<view >
				<button type="primary" class="button-bule" form-type="submit">提交审核</button>
			</view>
		</view>
		
		</form>
	</view>
</template>

<script>
	import common from '../../common/url.js';
	import tuiDatetime from "@/components/dateTime/dateTime";//日期选择
	var _this,serverUrl,serverUrlEas,sessionId;
	import simpleAddress from "@/components/simple-address/simple-address.nvue";
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
				enterprise:{
					sex:'',//性别
					pickerText: '',//区域
				},
				//地址区域选择
				cityPickerValueDefault: [0, 0, 1],
				//工商登记注册类型
				gsTypesList:[],
				tab5json:[]
				
				
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
		onLoad() {
			_this = this;
			try {
			    const data = uni.getStorageSync('login_key');
			    if (data==null||data=='') {
			        console.log('获取本地数据失败');
			    }else{
					console.log('获取本地数据成功'+data.sessionId);
					sessionId=data.sessionId;
				}
			} catch (e) {
			    
			}
			serverUrl=common.serverUrl;
			serverUrlEas=common.serverUrlEas;
			this.getGsTypes();
		},
		components: {
		   simpleAddress
		},
		methods: {
			// 打开地址选择器
			openAddres() {
			    this.$refs.simpleAddress.open();
			},
			onConfirm(e) {
				console.log(e);
			    this.enterprise.pickerText = e.label;
				console.log(this.enterprise.pickerText);
			},
			getAvatarImg:function(){
				uni.chooseImage({
					count:1,
					sizeType:['original', 'compressed'],//可以指定是原图还是压缩图，默认二者都有
					sourceType:['album','camera'],
					success:function(e){
						_this.avatarImg=e.tempFiles[0].path;
					}
				})
			},
			//选择性别
			getSex:function(){
				uni.showActionSheet({
					itemList:['男','女'],
					success:function(res){
						console.log(res)
						if(res.tapIndex==0){
							_this.enterprise.sex='男'
						}else{
							_this.enterprise.sex='女'
						}
					},
					fail:function(res){
						console.log(res)
					}
				})
			},
			//选择图片
			chooseImage: function() {
				uni.chooseImage({
					count: _this.shu - _this.imageList.length,
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album','camera'],
					success: function(e) {
						//预览集合
						var myDate = new Date();
						_this.tempFilePaths =_this.tempFilePaths.concat(e.tempFilePaths) ;
						// console.log(JSON.stringify(res.tempFilePaths));
						const data = e.tempFiles;
						
						const data_list = data.map((news,index) => {
							return{
								path: news.path,
								name: myDate.getFullYear()+''+myDate.getMonth()+1+''+myDate.getDate()+''+myDate.getHours()+''+myDate.getMinutes()+''+myDate.getSeconds()+index,
								size: news.size,
								recordtype: "spMgAppealFj" //固定的业务类型
							};
						});

						_this.tab5json=_this.tab5json.concat(data_list);
						let start =_this.tab5json.length - data_list.length;
						// 上传到服务器
						_this.setUpload(data_list,start);
						
						
						_this.imageList = _this.imageList.concat(data_list);
					}
				})
			},
			//删除图片
			delImage: function(index) {
				this.imageList.splice(index, 1);
				this.tempFilePaths.splice(index,1)
			},
			//查看图片详情
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
			//获取工商注册登记类型
			getGsTypes:function(){
				uni.request({
					header: {
						'sessionId': sessionId
					},
					url:serverUrl+'spVipEnterpriseApply/querySpEtEnterpriseTypeList',
					success:function(res){
						const data =res.data.data[0];
						console.log(res);
					}
				})
			},
			//获取企业所在的国家或区域
			getCountryOrRegion:function(){
				uni.request({
					header:{
						'sessionId': sessionId
					},
					url:serverUrl+'spCountryRegion/querySpCountryRegionList1',
					success:function(res){
						const data =res.data.data[0];
						console.log(res);
					}
				})
			},
			//企业编码
			getCoding:function(){
				uni.request({
					header:{
						'sessionId': sessionId
					},
					url:serverUrlEas+'dictionary/getDictionaryByKeyword?enterprisecode=GUANGXIGONGSHANGLIAN&keyword=SP_ET_TECHNIQUE_LEVEL',
					success:function(res){
						const data =res.data.data[0];
					}
				});
			},
			// 图片上传到服务器
			setUpload:function(data,start){
				console.log(_this.tab5json);
				for(let j=0;j<data.length;j++){
					uni.uploadFile({
						url:'https://files.scn.weilian.cn/upload',
						filePath: data[j].path,
						name: data[j].name,
						success:function(res) {
							console.log(res);
							// console.log(JSON.parse(res.data));
							// var css= JSON.parse(res.data);
							// let index =start + j;
							// _this.tab5json[index].name=_this.tab5json[index].name+'.jpg';
							// _this.tab5json[index].path=css.visitPath;
							// console.log(_this.tab5json[index].path);
						},fail:function(ess){
							console.log(ess)
						}
					})
				};
				console.log(_this.pubAttachmentList)
				
				
			},
					
			//表单提交
			formSubmit:function(e){
				console.log(456);
			}
		},
	}
</script>


<style>
	@import url("cfm.css");
	@import url("join.css");
</style>
