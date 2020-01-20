<template>
	<view class="page">
		<view style="padding: 0px 3%;background-color: #FFFFFF;width: 94%;margin-top: 12px;">
			<!-- 头像 -->
			<view class="cfm-enterprise-row">
				<view class="cfm-enterprise-tx" style="width: 100%;">
					<view>头像</view>
					<image src="../../../static/svn/required.svg" mode="widthFix" style="width: 7px;flex-shrink: 0;"></image>
				</view>
				<view class="cfm-enterprise-block-row">
					<!-- 上传头像判断avatarImg -->
					<image :src="avatarImg" style="width: 40px;height:40px;border-radius:50%;" @click="getAvatarImg()"></image>
					<image src="../../../static/svn/go-tow.svg" mode="widthFix" style="width: 20px;margin-left: 5px;"></image>
				</view>
			</view>
			<view class="cfm-enterprise-fg" />

			<!-- 真实姓名 -->
			<view class="cfm-enterprise-row">
				<view class="cfm-enterprise-tx" style="flex-shrink: 0;width: 90px;">
					<view> 真实姓名</view>
					<image src="../../../static/svn/required.svg" mode="widthFix" style="width: 7px;flex-shrink: 0;"></image>
				</view>

				<view style="width: 100%;display: flex;flex-direction: row;align-items: center;">
					<input placeholder="请输入" placeholder-class="cfm-enterprise-input-placeholder" class="cfm-enterprise-input" />
					<image src="../../../static/svn/go-tow.svg" mode="widthFix" style="width: 20px;margin-left: 5px;flex-shrink: 0;"></image>
				</view>
			</view>
			<view class="cfm-enterprise-fg" />

			<!-- 性别 -->
			<view class="cfm-enterprise-row">
				<view class="cfm-enterprise-tx" style="flex-shrink: 0;width: 50px;">
					<view>性别</view>
					<image src="../../../static/svn/required.svg" mode="widthFix" style="width: 7px;flex-shrink: 0;"></image>
				</view>
				<view style="width: 100%;display: flex;flex-direction: row;align-items: center;" @click="getSex()">
					<input placeholder="请选择" disabled="true" v-model="enterprise.sex" placeholder-class="cfm-enterprise-input-placeholder"
					 class="cfm-enterprise-input" />
					<image src="../../../static/svn/go-tow.svg" mode="widthFix" style="width: 20px;margin-left: 5px;flex-shrink: 0;"></image>
				</view>
			</view>
			<view class="cfm-enterprise-fg" />

			<!-- 企业工商登记名称 -->
			<view class="cfm-enterprise-row">
				<view class="cfm-enterprise-tx" style="flex-shrink: 0;width: 200px;">
					<view>企业工商登记名称</view>
					<image src="../../../static/svn/required.svg" mode="widthFix" style="width: 7px;flex-shrink: 0;"></image>
				</view>
				<view style="width: 100%;display: flex;flex-direction: row;align-items: center;" @click="getSex()">
					<input placeholder="请选择" disabled="true" v-model="enterprise.sex" placeholder-class="cfm-enterprise-input-placeholder"
					 class="cfm-enterprise-input" />
					<image src="../../../static/svn/go-tow.svg" mode="widthFix" style="width: 20px;margin-left: 5px;flex-shrink: 0;"></image>
				</view>
			</view>
			<view class="cfm-enterprise-fg" />

			<!-- 企业简称 -->
			<view class="cfm-enterprise-row">
				<view class="cfm-enterprise-tx" style="flex-shrink: 0;width: 100px;">
					<view>企业简称</view>
				</view>
				<view style="width: 100%;display: flex;flex-direction: row;align-items: center;" @click="getSex()">
					<input placeholder="请选择" disabled="true" v-model="enterprise.sex" placeholder-class="cfm-enterprise-input-placeholder"
					 class="cfm-enterprise-input" />
					<image src="../../../static/svn/go-tow.svg" mode="widthFix" style="width: 20px;margin-left: 5px;flex-shrink: 0;"></image>
				</view>
			</view>
			<view class="cfm-enterprise-fg" />

			<!-- 企业所在国家或区域 -->
			<view class="cfm-enterprise-row">
				<view class="cfm-enterprise-tx" style="flex-shrink: 0;width: 200px;">
					<view>企业所在国家或区域</view>
					<image src="../../../static/svn/required.svg" mode="widthFix" style="width: 7px;flex-shrink: 0;"></image>
				</view>
				<view style="width: 100%;display: flex;flex-direction: row;align-items: center;">
					<input placeholder="请选择" disabled="true" placeholder-class="cfm-enterprise-input-placeholder" class="cfm-enterprise-input" />
					<image src="../../../static/svn/go-tow.svg" mode="widthFix" style="width: 20px;margin-left: 5px;flex-shrink: 0;"></image>
				</view>
			</view>
			<view class="cfm-enterprise-fg" />


			<!-- 企业所在行政区域 -->
			<view class="cfm-enterprise-row">
				<view class="cfm-enterprise-tx" style="flex-shrink: 0;width: 150px;">
					<view>企业所在行政区域</view>
					<image src="../../../static/svn/required.svg" mode="widthFix" style="width: 7px;flex-shrink: 0;"></image>
				</view>
				<view style="width: 100%;display: flex;flex-direction: row;align-items: center;" @tap="openAddres">
					<input placeholder="请选择" disabled="true" v-model="enterprise.pickerText" placeholder-class="cfm-enterprise-input-placeholder"
					 class="cfm-enterprise-input" />
					<image src="../../../static/svn/go-tow.svg" mode="widthFix" style="width: 20px;margin-left: 5px;flex-shrink: 0;"></image>
					<simple-address ref="simpleAddress" :pickerValueDefault="cityPickerValueDefault" @onConfirm="onConfirm" themeColor='#007AFF'></simple-address>
				</view>
			</view>
			<view class="cfm-enterprise-fg" />

			<!-- 法定代表人姓名 -->
			<view class="cfm-enterprise-row">
				<view class="cfm-enterprise-tx" style="flex-shrink: 0;width: 150px;">
					<view>法定代表人姓名</view>
					<image src="../../../static/svn/required.svg" mode="widthFix" style="width: 7px;flex-shrink: 0;"></image>
				</view>
				<view style="width: 100%;display: flex;flex-direction: row;align-items: center;">
					<input placeholder="请输入" placeholder-class="cfm-enterprise-input-placeholder" class="cfm-enterprise-input" />
					<image src="../../../static/svn/go-tow.svg" mode="widthFix" style="width: 20px;margin-left: 5px;flex-shrink: 0;"></image>
				</view>
			</view>
			<view class="cfm-enterprise-fg" />

			<!-- 法人身份证号码 -->
			<view class="cfm-enterprise-row">
				<view class="cfm-enterprise-tx" style="flex-shrink: 0;width: 150px;">
					<view>法人身份证号码</view>
					<image src="../../../static/svn/required.svg" mode="widthFix" style="width: 7px;flex-shrink: 0;"></image>
				</view>
				<view style="width: 100%;display: flex;flex-direction: row;align-items: center;">
					<input placeholder="请输入" placeholder-class="cfm-enterprise-input-placeholder" class="cfm-enterprise-input" />
					<image src="../../../static/svn/go-tow.svg" mode="widthFix" style="width: 20px;margin-left: 5px;flex-shrink: 0;"></image>
				</view>
			</view>
			<view class="cfm-enterprise-fg" />

			<!-- 企业法人职务 -->
			<view class="cfm-enterprise-row">
				<view class="cfm-enterprise-tx" style="flex-shrink: 0;width: 150px;">
					<view>企业法人职务</view>
				</view>
				<view style="width: 100%;display: flex;flex-direction: row;align-items: center;" @click="getSex()">
					<input placeholder="请输入" disabled="true" v-model="enterprise.sex" placeholder-class="cfm-enterprise-input-placeholder"
					 class="cfm-enterprise-input" />
					<image src="../../../static/svn/go-tow.svg" mode="widthFix" style="width: 20px;margin-left: 5px;flex-shrink: 0;"></image>
				</view>
			</view>
			<view class="cfm-enterprise-fg" />

			<!-- 法人手机号码 -->
			<view class="cfm-enterprise-row">
				<view class="cfm-enterprise-tx" style="flex-shrink: 0;width: 150px;">
					<view>法人手机号码</view>
				</view>
				<view style="width: 100%;display: flex;flex-direction: row;align-items: center;" @click="getSex()">
					<input placeholder="请输入" disabled="true" v-model="enterprise.sex" placeholder-class="cfm-enterprise-input-placeholder"
					 class="cfm-enterprise-input" />
					<image src="../../../static/svn/go-tow.svg" mode="widthFix" style="width: 20px;margin-left: 5px;flex-shrink: 0;"></image>
				</view>
			</view>
			<view class="cfm-enterprise-fg" />

			<!-- 企业代码类型 -->
			<view class="cfm-enterprise-row">
				<view class="cfm-enterprise-tx" style="flex-shrink: 0;width: 150px;">
					<view>企业代码类型</view>
				</view>
				<view style="width: 100%;display: flex;flex-direction: row;align-items: center;" @click="getSex()">
					<input placeholder="请选择" disabled="true" v-model="enterprise.sex" placeholder-class="cfm-enterprise-input-placeholder"
					 class="cfm-enterprise-input" />
					<image src="../../../static/svn/go-tow.svg" mode="widthFix" style="width: 20px;margin-left: 5px;flex-shrink: 0;"></image>
				</view>
			</view>
			<view class="cfm-enterprise-fg" />

			<!-- 企业代码 -->
			<view class="cfm-enterprise-row">
				<view class="cfm-enterprise-tx" style="flex-shrink: 0;width: 150px;">
					<view>企业代码</view>
				</view>
				<view style="width: 100%;display: flex;flex-direction: row;align-items: center;" @click="getSex()">
					<input placeholder="请输入" disabled="true" v-model="enterprise.sex" placeholder-class="cfm-enterprise-input-placeholder"
					 class="cfm-enterprise-input" />
					<image src="../../../static/svn/go-tow.svg" mode="widthFix" style="width: 20px;margin-left: 5px;flex-shrink: 0;"></image>
				</view>
			</view>
			<view class="cfm-enterprise-fg" />

			<!-- 行业分类* -->
			<view class="cfm-enterprise-row">
				<view class="cfm-enterprise-tx" style="flex-shrink: 0;width: 150px;">
					<view>行业分类</view>
					<image src="../../../static/svn/required.svg" mode="widthFix" style="width: 7px;flex-shrink: 0;"></image>
				</view>
				<view style="width: 100%;display: flex;flex-direction: row;align-items: center;">
					<input placeholder="请输入" placeholder-class="cfm-enterprise-input-placeholder" class="cfm-enterprise-input" />
					<image src="../../../static/svn/go-tow.svg" mode="widthFix" style="width: 20px;margin-left: 5px;flex-shrink: 0;"></image>
				</view>
			</view>
			<view class="cfm-enterprise-fg" />

			<!-- 工商登记注册类型 -->
			<view class="cfm-enterprise-row">
				<view class="cfm-enterprise-tx" style="flex-shrink: 0;width: 190px;">
					<view>工商登记注册类型</view>
					<image src="../../../static/svn/required.svg" mode="widthFix" style="width: 7px;flex-shrink: 0;"></image>
				</view>
				<view style="width: 100%;display: flex;flex-direction: row;align-items: center;">
					<input placeholder="请选择" placeholder-class="cfm-enterprise-input-placeholder" class="cfm-enterprise-input" />
					<image src="../../../static/svn/go-tow.svg" mode="widthFix" style="width: 20px;margin-left: 5px;flex-shrink: 0;"></image>
				</view>
			</view>
			<view class="cfm-enterprise-fg" />
			<!-- 统一社会信息代码 -->
			<view class="cfm-enterprise-row">
				<view class="cfm-enterprise-tx" style="flex-shrink: 0;width: 150px;">
					<view>统一社会信息代码</view>
					<image src="../../../static/svn/required.svg" mode="widthFix" style="width: 7px;flex-shrink: 0;"></image>
				</view>
				<view style="width: 100%;display: flex;flex-direction: row;align-items: center;">
					<input placeholder="请选择" disabled="true" placeholder-class="cfm-enterprise-input-placeholder" class="cfm-enterprise-input" />
					<image src="../../../static/svn/go-tow.svg" mode="widthFix" style="width: 20px;margin-left: 5px;flex-shrink: 0;"></image>
				</view>
			</view>
			<view class="cfm-enterprise-fg" />


			<!-- 社会保险登记号 -->
			<view class="cfm-enterprise-row">
				<view class="cfm-enterprise-tx" style="flex-shrink: 0;width: 150px;">
					<view>社会保险登记号</view>
				</view>
				<view style="width: 100%;display: flex;flex-direction: row;align-items: center;">
					<input placeholder="请输入" placeholder-class="cfm-enterprise-input-placeholder" class="cfm-enterprise-input" />
					<image src="../../../static/svn/go-tow.svg" mode="widthFix" style="width: 20px;margin-left: 5px;flex-shrink: 0;"></image>
				</view>
			</view>
			<view class="cfm-enterprise-fg" />

			<!-- 企业规模 -->
			<view class="cfm-enterprise-row">
				<view class="cfm-enterprise-tx" style="flex-shrink: 0;width: 150px;">
					<view>企业规模</view>
				</view>
				<view style="width: 100%;display: flex;flex-direction: row;align-items: center;">
					<input placeholder="请选择" disabled="true" placeholder-class="cfm-enterprise-input-placeholder" class="cfm-enterprise-input" />
					<image src="../../../static/svn/go-tow.svg" mode="widthFix" style="width: 20px;margin-left: 5px;flex-shrink: 0;"></image>
				</view>
			</view>
			<view class="cfm-enterprise-fg" />

			<!-- 注册资金(万人民币) -->
			<view class="cfm-enterprise-row">
				<view class="cfm-enterprise-tx" style="flex-shrink: 0;width: 150px;">
					<view>注册资金(万人民币)</view>
				</view>
				<view style="width: 100%;display: flex;flex-direction: row;align-items: center;">
					<input placeholder="请输入" disabled="true" placeholder-class="cfm-enterprise-input-placeholder" class="cfm-enterprise-input" />
					<image src="../../../static/svn/go-tow.svg" mode="widthFix" style="width: 20px;margin-left: 5px;flex-shrink: 0;"></image>
				</view>
			</view>
			<view class="cfm-enterprise-fg" />

			<!-- 邮箱 -->
			<view class="cfm-enterprise-row">
				<view class="cfm-enterprise-tx" style="flex-shrink: 0;width: 150px;">
					<view>邮箱</view>
					<image src="../../../static/svn/required.svg" mode="widthFix" style="width: 7px;flex-shrink: 0;"></image>
				</view>
				<view style="width: 100%;display: flex;flex-direction: row;align-items: center;">
					<input placeholder="请输入" placeholder-class="cfm-enterprise-input-placeholder" class="cfm-enterprise-input" />
					<image src="../../../static/svn/go-tow.svg" mode="widthFix" style="width: 20px;margin-left: 5px;flex-shrink: 0;"></image>
				</view>
			</view>
			<view class="cfm-enterprise-fg" />

			<!-- 职工人数 -->
			<view class="cfm-enterprise-row">
				<view class="cfm-enterprise-tx" style="flex-shrink: 0;width: 150px;">职工总人数</view>

				<view style="width: 100%;display: flex;flex-direction: row;align-items: center;">
					<input placeholder="请输入" placeholder-class="cfm-enterprise-input-placeholder" class="cfm-enterprise-input" />
					<image src="../../../static/svn/go-tow.svg" mode="widthFix" style="width: 20px;margin-left: 5px;flex-shrink: 0;"></image>
				</view>
			</view>
			<view class="cfm-enterprise-fg" />

			<!-- 当前总资金(万人民币)  -->
			<view class="cfm-enterprise-row">
				<view class="cfm-enterprise-tx" style="flex-shrink: 0;width: 150px;">
					<view>当前总资金(万人民币) </view>
				</view>
				<view style="width: 100%;display: flex;flex-direction: row;align-items: center;">
					<input placeholder="请输入" disabled="true" placeholder-class="cfm-enterprise-input-placeholder" class="cfm-enterprise-input" />
					<image src="../../../static/svn/go-tow.svg" mode="widthFix" style="width: 20px;margin-left: 5px;flex-shrink: 0;"></image>
				</view>
			</view>
			<view class="cfm-enterprise-fg" />

			<!-- 注册地址 -->
			<view class="cfm-enterprise-row">
				<view class="cfm-enterprise-tx" style="flex-shrink: 0;width: 150px;">
					<view>注册地址</view>
				</view>
				<view style="width: 100%;display: flex;flex-direction: row;align-items: center;">
					<input placeholder="请输入" disabled="true" placeholder-class="cfm-enterprise-input-placeholder" class="cfm-enterprise-input" />
					<image src="../../../static/svn/go-tow.svg" mode="widthFix" style="width: 20px;margin-left: 5px;flex-shrink: 0;"></image>
				</view>
			</view>
			<view class="cfm-enterprise-fg" />

			<!-- 纳税信息级别 -->
			<view class="cfm-enterprise-row">
				<view class="cfm-enterprise-tx" style="flex-shrink: 0;width: 150px;">
					<view>纳税信息级别</view>
				</view>
				<view style="display: flex;flex-direction: row;justify-content: flex-end;width: 90%;">
					<switch  :checked='isture' @change="switchchange" />
				</view>
			</view>
			<view class="cfm-enterprise-fg" />

			<!-- 税号 -->
			<view class="cfm-enterprise-row">
				<view class="cfm-enterprise-tx" style="flex-shrink: 0;width: 150px;">
					<view>税号</view>
				</view>
				<view style="width: 100%;display: flex;flex-direction: row;align-items: center;">
					<input placeholder="请输入" disabled="true" placeholder-class="cfm-enterprise-input-placeholder" class="cfm-enterprise-input" />
					<image src="../../../static/svn/go-tow.svg" mode="widthFix" style="width: 20px;margin-left: 5px;flex-shrink: 0;"></image>
				</view>
			</view>
			<view class="cfm-enterprise-fg" />

			<!-- 经营状态 -->
			<view class="cfm-enterprise-row">
				<view class="cfm-enterprise-tx" style="flex-shrink: 0;width: 150px;">
					<view>经营状态</view>
				</view>
				<view style="width: 100%;display: flex;flex-direction: row;align-items: center;">
					<input placeholder="请选择" disabled="true" placeholder-class="cfm-enterprise-input-placeholder" class="cfm-enterprise-input" />
					<image src="../../../static/svn/go-tow.svg" mode="widthFix" style="width: 20px;margin-left: 5px;flex-shrink: 0;"></image>
				</view>
			</view>
			<view class="cfm-enterprise-fg" />
			<!-- 是否是高新技术企业 -->
			<view class="cfm-enterprise-row">
				<view class="cfm-enterprise-tx" style="flex-shrink: 0;width: 150px;">
					<view>是否是高新技术企业</view>
				</view>
				<view style="width: 90%;display: flex;flex-direction: row;justify-content: flex-end;">
					<switch  :checked='isture_02' @change="switchchange_tow" />
				</view>
			</view>
			<view class="cfm-enterprise-fg" />

			<!-- 高新企业认证部门 -->
			<view class="cfm-enterprise-row">
				<view class="cfm-enterprise-tx" style="flex-shrink: 0;width: 150px;">
					<view>高新企业认证部门</view>
				</view>
				<view style="width: 100%;display: flex;flex-direction: row;align-items: center;">
					<input placeholder="请输入" disabled="true" placeholder-class="cfm-enterprise-input-placeholder" class="cfm-enterprise-input" />
					<image src="../../../static/svn/go-tow.svg" mode="widthFix" style="width: 20px;margin-left: 5px;flex-shrink: 0;"></image>
				</view>
			</view>
			<view class="cfm-enterprise-fg" />

		</view>

		<!-- 分隔 -->
		<view style="width: 100%;height:12px;background-color: #eeeeed;"></view>

		<view style="background-color: #FFFFFF;width: 94%;padding: 3% 0px;">
			<view class="cfm-enterprise-tx" style="padding: 0px 3%;">
				<view>企业营业执照</view>
				<image src="../../../static/svn/required.svg" mode="widthFix" style="width: 7px;flex-shrink: 0;"></image>
			</view>

			<view class="tui-upload-box">
				<view class="tui-image-item" v-for="(item,index) in imageList" :key="index">
					<image :src="item.url" class="tui-item-img" @tap="previewImage(index)" mode="aspectFill"></image>
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
		</view>

		<view class="cfm-enterprise-tx" style="width: 97%;height:40px;background-color: #eeeeed;line-height: 40px;padding-left: 3%;">主营业务</view>
		<view style="width: 94%;padding: 3%;height: 90px;">
			<textarea type="text" placeholder="请输入主营业务" auto-height style="font-size: 15px;color: #999999;" />
			</view>
			
			<view class="cfm-enterprise-tx" style="width: 97%;height:40px;background-color: #eeeeed;line-height: 40px;padding-left: 3%;">备注</view>
			
			<view style="width: 94%;padding: 3%;height: 90px;">
				<textarea type="text" placeholder="请输入备注信息" auto-height style="font-size: 15px;color: #999999;" />
				</view>
	</view>

</template>

<script>
	var _this;
	import simpleAddress from "@/components/simple-address/simple-address.nvue";
	import switchc from '@/components/zz-switchc/zz-switchc.vue';
	export default {
		data() {
			return {
				//图片地址
				shu: 6,//上传图片的数量
				avatarImg:'../../../static/me/avatar.svg',
				imageList: [],
				tempFilePaths: '',
				//上传状态：1-上传成功 2-上传中 3-上传失败
				statusArr: [],
				enterprise:{
					sex:'',//性别
					pickerText: '',//区域
				},
				cityPickerValueDefault: [0, 0, 1],
				isture:true,
				isture_02:false
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
		},
		components: {
		   simpleAddress,
		   switchc
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
			
			switchchange(e) {
			    console.log(e);
			},
			switchchange_tow(e){
				 console.log(e);
			},
			chooseImage: function() {
				uni.chooseImage({
					count: _this.shu - _this.imageList.length,
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album','camera'],
					success: function(e) {
						if(_this.tempFilePaths==null||_this.tempFilePaths==''){
							_this.tempFilePaths=e.tempFilePaths
						}else{
							_this.tempFilePaths =_this.tempFilePaths.concat(e.tempFilePaths) ;
						}
						
						const data = e.tempFiles;
						const data_list = data.map((news) => {
							return {
								url: news.path,
								size: news.size
							};
			
						});
						_this.imageList = _this.imageList.concat(data_list);
			
					}
				})
			},
			
			delImage: function(index) {
				this.imageList.splice(index, 1);
				this.tempFilePaths.splice(index,1)
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
			}
		}
	}
</script>

<style>
@import url("../../join-chamberofcommerce/join.css");
</style>
