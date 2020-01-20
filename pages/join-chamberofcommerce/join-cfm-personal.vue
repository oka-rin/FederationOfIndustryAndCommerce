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

		<view style="height: 40px;line-height: 30px;padding-left:3%;width:97%;font-size: 18px;">个人会员基本信息</view>
		<form @submit="formSubmit()">
			<view style="background-color: #FFFFFF;width: 94%;padding: 0px 3%;">

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
						<input v-model="enterprise.xm" placeholder="请输入" placeholder-class="cfm-enterprise-input-placeholder" class="cfm-enterprise-input" />
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
						<input v-model="enterprise.xb" placeholder="请选择" disabled="true" placeholder-class="cfm-enterprise-input-placeholder"
						 class="cfm-enterprise-input" />
						<image src="../../static/svn/go-tow.svg" mode="widthFix" style="width: 20px;margin-left: 5px;flex-shrink: 0;"></image>
					</view>
				</view>
				<view class="cfm-enterprise-fg" />

				<!-- 人员分类 -->
				<view class="cfm-enterprise-row">
					<view class="cfm-enterprise-tx" style="flex-shrink: 0;width: 150px;">
						<view>人员分类</view>
						<image src="../../static/svn/required.svg" mode="widthFix" style="width: 7px;flex-shrink: 0;"></image>
					</view>
					<view style="width: 100%;display: flex;flex-direction: row;align-items: center;">
						<picker mode="selector" :index="enterprise.ryfl" @change="meTypeChange" :range="meType" range-key="ddlname">
							<input v-model="ryfl" placeholder="请选择" disabled="true" placeholder-class="cfm-enterprise-input-placeholder"
							 class="cfm-enterprise-input" />
						</picker>
						<image src="../../static/svn/go-tow.svg" mode="widthFix" style="width: 20px;margin-left: 5px;flex-shrink: 0;"></image>

					</view>
				</view>
				<view class="cfm-enterprise-fg" />

				<!-- 出生日期 -->
				<view class="cfm-enterprise-row">
					<view class="cfm-enterprise-tx" style="flex-shrink: 0;width: 190px;">
						<view>出生日期</view>
						<image src="../../static/svn/required.svg" mode="widthFix" style="width: 7px;flex-shrink: 0;"></image>
					</view>
					<view style="width: 100%;display: flex;flex-direction: row;align-items: center;">
						<input v-model="csrq" @click="show()" placeholder="请选择" disabled="true" placeholder-class="cfm-enterprise-input-placeholder"
						 class="cfm-enterprise-input" />
						<image src="../../static/svn/go-tow.svg" mode="widthFix" style="width: 20px;margin-left: 5px;flex-shrink: 0;"></image>
					</view>
				</view>
				<view class="cfm-enterprise-fg" />

				<!-- 民族 -->
				<view class="cfm-enterprise-row">
					<view class="cfm-enterprise-tx" style="flex-shrink: 0;width: 150px;">
						<view>民族</view>
					</view>
					<view style="width: 100%;display: flex;flex-direction: row;align-items: center;">
						<picker mode="selector" :index="enterprise.mz" @change="nationChange" :range="nationList" range-key="ddlname">
							<input v-model="mz" placeholder="请选择" disabled="true" placeholder-class="cfm-enterprise-input-placeholder" class="cfm-enterprise-input" />
						</picker>
						<image src="../../static/svn/go-tow.svg" mode="widthFix" style="width: 20px;margin-left: 5px;flex-shrink: 0;"></image>
					</view>
				</view>
				<view class="cfm-enterprise-fg" />

				<!-- 证件类型 -->
				<view class="cfm-enterprise-row">
					<view class="cfm-enterprise-tx" style="flex-shrink: 0;width: 150px;">
						<view>证件类型</view>
						<image src="../../static/svn/required.svg" mode="widthFix" style="width: 7px;flex-shrink: 0;"></image>
					</view>
					<view style="width: 100%;display: flex;flex-direction: row;align-items: center;">
						<picker mode="selector" :index="enterprise.zjlx" @change="certificateTypeChange" :range="certificateTypeList"
						 range-key="ddlname">
							<input v-model="zjlx" placeholder="请选择" disabled="true" placeholder-class="cfm-enterprise-input-placeholder"
							 class="cfm-enterprise-input" />
						</picker>
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
						<input v-model="enterprise.frxm" placeholder="请输入" placeholder-class="cfm-enterprise-input-placeholder" class="cfm-enterprise-input" />
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
						<input v-model="enterprise.zjhm" placeholder="请输入" placeholder-class="cfm-enterprise-input-placeholder" class="cfm-enterprise-input" />
						<image src="../../static/svn/go-tow.svg" mode="widthFix" style="width: 20px;margin-left: 5px;flex-shrink: 0;"></image>
					</view>
				</view>
				<view class="cfm-enterprise-fg" />

				<!-- 籍贯 -->
				<view class="cfm-enterprise-row">
					<view class="cfm-enterprise-tx" style="flex-shrink: 0;width: 70px;">
						<view>籍贯</view>
						<image src="../../static/svn/required.svg" mode="widthFix" style="width: 7px;flex-shrink: 0;"></image>
					</view>
					<view style="width: 100%;display: flex;flex-direction: row;align-items: center;" @click="openAddres">
						<input v-model="enterprise.jg" placeholder="请选择" disabled="true" placeholder-class="cfm-enterprise-input-placeholder"
						 class="cfm-enterprise-input" />
						<image src="../../static/svn/go-tow.svg" mode="widthFix" style="width: 20px;margin-left: 5px;flex-shrink: 0;"></image>
						<simple-address ref="simpleAddress" :pickerValueDefault="cityPickerValueDefault" @onConfirm="onConfirm"
						 themeColor='#007AFF'></simple-address>
					</view>
				</view>
				<view class="cfm-enterprise-fg" />

				<!-- 出生地 -->
				<view class="cfm-enterprise-row">
					<view class="cfm-enterprise-tx" style="flex-shrink: 0;width: 100px;">
						<view>出生地</view>
					</view>
					<view style="width: 100%;display: flex;flex-direction: row;align-items: center;">
						<input v-model="enterprise.csd" placeholder="请输入" placeholder-class="cfm-enterprise-input-placeholder" class="cfm-enterprise-input" />
						<image src="../../static/svn/go-tow.svg" mode="widthFix" style="width: 20px;margin-left: 5px;flex-shrink: 0;"></image>
					</view>
				</view>
				<view class="cfm-enterprise-fg" />

				<!-- 学历 -->
				<view class="cfm-enterprise-row">
					<view class="cfm-enterprise-tx" style="flex-shrink: 0;width: 100px;">
						<view>学历</view>
					</view>
					<view style="width: 100%;display: flex;flex-direction: row;align-items: center;">
						<input v-model="enterprise.zgxl" placeholder="请选择" disabled="true" placeholder-class="cfm-enterprise-input-placeholder"
						 class="cfm-enterprise-input" />
						<image src="../../static/svn/go-tow.svg" mode="widthFix" style="width: 20px;margin-left: 5px;flex-shrink: 0;"></image>
					</view>
				</view>
				<view class="cfm-enterprise-fg" />
				<!-- 政治面貌 -->
				<view class="cfm-enterprise-row">
					<view class="cfm-enterprise-tx" style="flex-shrink: 0;width: 150px;">
						<view>政治面貌</view>
					</view>
					<view style="width: 100%;display: flex;flex-direction: row;align-items: center;">
						<picker mode="selector" :index="enterprise.mz" @change="bindPickerChange" :range="politicalStatus" range-key="ddlname">
							<input v-model="zzmm" placeholder="请选择" disabled="true" placeholder-class="cfm-enterprise-input-placeholder"
							 class="cfm-enterprise-input" />
						</picker>
						<image src="../../static/svn/go-tow.svg" mode="widthFix" style="width: 20px;margin-left: 5px;flex-shrink: 0;"></image>
					</view>
				</view>
				<view class="cfm-enterprise-fg" />

				<!-- 商户名称 -->
				<view class="cfm-enterprise-row">
					<view class="cfm-enterprise-tx" style="flex-shrink: 0;width: 150px;">
						<view>商户名称</view>
						<image src="../../static/svn/required.svg" mode="widthFix" style="width: 7px;flex-shrink: 0;"></image>
					</view>
					<view style="width: 100%;display: flex;flex-direction: row;align-items: center;">
						<input v-model="enterprise.shmc" placeholder="请输入" placeholder-class="cfm-enterprise-input-placeholder" class="cfm-enterprise-input" />
						<image src="../../static/svn/go-tow.svg" mode="widthFix" style="width: 20px;margin-left: 5px;flex-shrink: 0;"></image>
					</view>
				</view>
				<view class="cfm-enterprise-fg" />

				<!-- 商户注册号 -->
				<view class="cfm-enterprise-row">
					<view class="cfm-enterprise-tx" style="flex-shrink: 0;width: 150px;">
						<view>商户注册号</view>
						<image src="../../static/svn/required.svg" mode="widthFix" style="width: 7px;flex-shrink: 0;"></image>
					</view>
					<view style="width: 100%;display: flex;flex-direction: row;align-items: center;">
						<input v-model="enterprise.shzch" placeholder="请输入" placeholder-class="cfm-enterprise-input-placeholder" class="cfm-enterprise-input" />
						<image src="../../static/svn/go-tow.svg" mode="widthFix" style="width: 20px;margin-left: 5px;flex-shrink: 0;"></image>
					</view>
				</view>
				<view class="cfm-enterprise-fg" />

				<!-- 资产总额(单位:万元) -->
				<view class="cfm-enterprise-row">
					<view class="cfm-enterprise-tx" style="flex-shrink: 0;width: 200px;">
						<view>资产总额(单位:万元)</view>
						<image src="../../static/svn/required.svg" mode="widthFix" style="width: 7px;flex-shrink: 0;"></image>
					</view>
					<view style="width: 100%;display: flex;flex-direction: row;align-items: center;">
						<input v-model="enterprise.szcze" placeholder="请输入" placeholder-class="cfm-enterprise-input-placeholder" class="cfm-enterprise-input" />
						<image src="../../static/svn/go-tow.svg" mode="widthFix" style="width: 20px;margin-left: 5px;flex-shrink: 0;"></image>
					</view>
				</view>
				<view class="cfm-enterprise-fg" />

				<!-- 职工人数 -->
				<view class="cfm-enterprise-row">
					<view class="cfm-enterprise-tx" style="flex-shrink: 0;width: 150px;">
						<view>职工人数</view>
						<image src="../../static/svn/required.svg" mode="widthFix" style="width: 7px;flex-shrink: 0;"></image>
					</view>
					<view style="width: 100%;display: flex;flex-direction: row;align-items: center;">
						<input v-model="enterprise.zgrs" placeholder="请输入" placeholder-class="cfm-enterprise-input-placeholder" class="cfm-enterprise-input" />
						<image src="../../static/svn/go-tow.svg" mode="widthFix" style="width: 20px;margin-left: 5px;flex-shrink: 0;"></image>
					</view>
				</view>
				<view class="cfm-enterprise-fg" />

				<!-- 微信号 -->
				<view class="cfm-enterprise-row">
					<view class="cfm-enterprise-tx" style="flex-shrink: 0;width: 150px;">
						<view>微信号</view>
						<image src="../../static/svn/required.svg" mode="widthFix" style="width: 7px;flex-shrink: 0;"></image>
					</view>
					<view style="width: 100%;display: flex;flex-direction: row;align-items: center;">
						<input v-model="enterprise.wxh" placeholder="请输入" placeholder-class="cfm-enterprise-input-placeholder" class="cfm-enterprise-input" />
						<image src="../../static/svn/go-tow.svg" mode="widthFix" style="width: 20px;margin-left: 5px;flex-shrink: 0;"></image>
					</view>
				</view>
				<view class="cfm-enterprise-fg" />

				<!-- 邮箱 -->
				<view class="cfm-enterprise-row">
					<view class="cfm-enterprise-tx" style="flex-shrink: 0;width: 150px;">
						<view>邮箱</view>
					</view>
					<view style="width: 100%;display: flex;flex-direction: row;align-items: center;">
						<input v-model="enterprise.dzyx" placeholder="请输入" placeholder-class="cfm-enterprise-input-placeholder" class="cfm-enterprise-input" />
						<image src="../../static/svn/go-tow.svg" mode="widthFix" style="width: 20px;margin-left: 5px;flex-shrink: 0;"></image>
					</view>
				</view>
				<view class="cfm-enterprise-fg" />

			</view>

			<view style="width: 100%;height:12px;background-color: #eeeeed;"></view>

			<view style="background-color: #FFFFFF;width: 100%;padding: 3% 0px;">
				<view class="cfm-enterprise-tx" style="padding: 0px 3%;">
					<view>个人身份证(正反面)</view>
					<image src="../../static/svn/required.svg" mode="widthFix" style="width: 7px;flex-shrink: 0;"></image>
				</view>

				<view class="tui-upload-box">
					<view class="tui-image-item" v-for="(item,index) in tab5json" :key="index">
						<image :src="item.url" class="tui-item-img" @tap="previewImage(index)" mode="aspectFill"></image>
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
				<navigator url="join-cfm-member">
					<button type="primary" form-type="submit" class="button-bule">提交审核</button>
				</navigator>
			</view>
			</form>
			
			<!-- 选择日期控件 -->
			<tui-datetime ref="dateTime" :type="type" :startYear="startYear" :endYear="endYear" :cancelColor="cancelColor" :color="color"
			 :setDateTime="setDateTime" @confirm="change"></tui-datetime>
		
	</view>
</template>
<script>
	var _this,serverUrlEas,sessionId;
	import common from '../../common/url.js';
	import simpleAddress from "@/components/simple-address/simple-address.nvue";
	import tuiButton from "../../components/button/button.vue";
	import tuiDatetime from "@/components/dateTime/dateTime"
	export default {
		data() {
			return {
				shu: 2,//上传图片的数量
				avatarImg:'../../static/me/avatar.svg',
				tab5json: [],
				tempFilePaths: '',
				//上传状态：1-上传成功 2-上传中 3-上传失败
				statusArr: [],
				enterprise:{
					headphoto:'',//头像url地址
					xm:'',//姓名
					xb:'',//性别
					ryfl:'',//人员分类
					csrq:'',//出生日期
					mz:'',//民族
					zjlx:'',//证件类型
					frxm:'',//法定代表人姓名
					zjhm:'',//法人身份证
					jg: '',//籍贯
					csd:'',//出生地
					zgxl:'',//学历
					zzmm:'',//政治面貌
					shmc:'',//商户名称
					shzch:'',//商会注册号
					szcze:'',//资产总数
					zgrs:'',//职工总人数
					wxh:'',//微信号
					dzyx:'',//电子邮箱
					
				},
				//显示的字段
				csrq:'',//出生日期
				zzmm:'',//政治面貌
				ryfl:'',//人员类型
				zjlx:'',//证件类型
				mz:'',//民族
				//地区控件
				cityPickerValueDefault: [0, 0, 1],
				//日期样式控件
				type: 2,
				startYear: 1940,
				endYear: 2020,
				cancelColor: "#888",
				color: "#5677fc",
				setDateTime: "",
				result: "",
				//政治面貌集合
				politicalStatus:[],
				//个人类型集合
				meType:[],
				//民族集合
				nationList:[],
				//证件类型
				certificateTypeList:[]
			}
			
		},
		components: {
		   simpleAddress,
		   tuiButton,
		   tuiDatetime
		},
		computed: {
			isShowAdd() {
				let isShow = true;
				if (this.shu && this.tab5json.length >= this.shu) {
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
			    
			};
			serverUrlEas=common.serverUrlEas;
			this.getMeType();//个人类型
			this.getNation();//获取民族
			this.getCertificateType();//证件类型
			this.getPoliticalStatus();//政治面貌
		},
		methods: {
			// 打开地址选择器
			openAddres() {
			    this.$refs.simpleAddress.open();
			},
			onConfirm(e) {
				console.log(e);
			    this.enterprise.jg = e.label;
				console.log(this.enterprise.pickerText);
			},
			//头像
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
							_this.enterprise.sex='男';
						}else{
							_this.enterprise.sex='女';
						}
					},
					fail:function(res){
						console.log(res)
					}
				})
			},
			//选择文件
			chooseImage: function() {
				uni.chooseImage({
					count: _this.shu - _this.tab5json.length,
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album','camera'],
					success: function(e) {
						if(_this.tempFilePaths==null||_this.tempFilePaths==''){
							_this.tempFilePaths=e.tempFilePaths
						}else{
							_this.tempFilePaths =_this.tempFilePaths.concat(e.tempFilePaths) ;
						}
						console.log(e.tempFiles);
						const data = e.tempFiles;
						const data_list = data.map((news) => {
							return {
								url: news.path,
								name: news.size
							};
						});
						_this.tab5json = _this.tab5json.concat(data_list);
					}
				})
			},
			delImage: function(index) {
				this.tab5json.splice(index, 1);
				this.tempFilePaths.splice(index,1)
			},
			//显示日期控件
			show: function() {
				this.$refs.dateTime.show()
			},
			//获取选择的日期
			change: function(e) {
				console.log(e);
				this.csrq = e.result
				const datetime =new Date(e.result).getTime();
				//实际返回值
				console.log(datetime);
				this.enterprise.csrq=datetime;
				
			},
			//个人类型
			getMeType:function(){
				uni.request({
					header:{
						'sessionId': sessionId
					},
					url:serverUrlEas+'dictionary/getDictionaryByKeyword?enterprisecode=GUANGXIGONGSHANGLIAN&keyword=SP_VIP_PERSON_TYPE',
					success:function(res){
						console.log(res);
						const data=res.data.data;
						_this.meType=data;
					}
				})
			},
			//打开人员类别弹窗
			meTypeChange:function(e){
				this.enterprise.ryfl=e.target.value;
				this.ryfl=this.meType[e.target.value].ddlname;
			},
			// 获取民族
			getNation:function(){
				uni.request({
					header:{
						'sessionId': sessionId
					},
					url:serverUrlEas+'dictionary/getDictionaryByKeyword?enterprisecode=GUANGXIGONGSHANGLIAN&keyword=PUB_NATIONALITY',
					success:function(res){
						console.log(res);
						const data=res.data.data;
						_this.nationList=data
					}
				})
			},
			//打开民族弹窗
			nationChange:function(e){
				this.enterprise.mz=e.target.value;
				this.mz=this.nationList[e.target.value].ddlname;
			},
			//证件类型
			getCertificateType:function(){
				uni.request({
					header:{
						'sessionId': sessionId
					},
					url:serverUrlEas+'dictionary/getDictionaryByKeyword?enterprisecode=GUANGXIGONGSHANGLIAN&keyword=PUB_CERTIFICIYTYPE',
					success:function(res){
						console.log(res);
						const data=res.data.data;
						_this.certificateTypeList=data;
					}
				});
			},
			//打开证件类型弹窗
			certificateTypeChange:function(e){
				this.enterprise.zjlx=e.target.value;
				this.zjlx=this.certificateTypeList[e.target.value].ddlname;
			},
			//政治面貌
			getPoliticalStatus:function(){
				uni.request({
					header:{
						'sessionId': sessionId
					},
					url:serverUrlEas+'dictionary/getDictionaryByKeyword?enterprisecode=GUANGXIGONGSHANGLIAN&keyword=PUB_POLITICALSTATUS',
					success:function(res){
						console.log(res);
						const data=res.data.data;
						_this.politicalStatus=data;
						// console.log(_this.politicalStatus);
					}
				})
			},
			//打开政治面貌弹窗
			bindPickerChange: function(e) {
			    console.log('picker发送选择改变，携带值为', e.target.value);
				
			    this.enterprise.zzmm=e.target.value;
				this.zzmm=this.politicalStatus[e.target.value].ddlname
			},
			// 预览图片
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
			//提交
			formSubmit:function(){
				if(this.enterprise.headphoto==null||this.enterprise.headphoto==''){
					uni.showModal({
					    title: '提示',
					    content: '头像不能为空',
					    success: function (res) {
					    }
					});
				}else if(this.enterprise.xm==null||this.enterprise.xm==''){
					uni.showModal({
					    title: '提示',
					    content: '姓名不能为空',
					    success: function (res) {
					    }
					});
				}else if(this.enterprise.xb==null||this.enterprise.xb==''){
					uni.showModal({
					    title: '提示',
					    content: '性别不能为空',
					    success: function (res) {
					    }
					});
				}else if(this.enterprise.ryfl==null||this.enterprise.ryfl==''){
					uni.showModal({
					    title: '提示',
					    content: '人员分类不能为空',
					    success: function (res) {
					    }
					});
				}else if(this.enterprise.csrq==null||this.enterprise.csrq==''){
					uni.showModal({
					    title: '提示',
					    content: '出生日期不能为空',
					    success: function (res) {
					    }
					});
				}else if(this.enterprise.zjlx==null||this.enterprise.zjlx==''){
					uni.showModal({
					    title: '提示',
					    content: '证件类型不能为空',
					    success: function (res) {
					    }
					});
				}else if(this.enterprise.frxm==null||this.enterprise.frxm==''){
					uni.showModal({
					    title: '提示',
					    content: '法定代表人不能为空',
					    success: function (res) {
					    }
					});
				}else if(this.enterprise.zjhm==null||this.enterprise.zjhm==''){
					uni.showModal({
					    title: '提示',
					    content: '法人身份证号码不能为空',
					    success: function (res) {
					    }
					});
				}else if(this.enterprise.jg==null||this.enterprise.jg==''){
					uni.showModal({
					    title: '提示',
					    content: '籍贯不能为空',
					    success: function (res) {
					    }
					});
				}else if(this.enterprise.shmc==null||this.enterprise.shmc==''){
					uni.showModal({
					    title: '提示',
					    content: '商户名称不能为空',
					    success: function (res) {
					    }
					});
				}else if(this.enterprise.shzch==null||this.enterprise.shzch==''){
					uni.showModal({
					    title: '提示',
					    content: '商户注册号不能为空',
					    success: function (res) {
					    }
					});
				}else if(this.enterprise.szcze==null||this.enterprise.szcze==''){
					uni.showModal({
					    title: '提示',
					    content: '资产总额不能为空',
					    success: function (res) {
					    }
					});
				}else if(this.enterprise.zgrs==null||this.enterprise.zgrs==''){
					uni.showModal({
					    title: '提示',
					    content: '职工人数不能为空',
					    success: function (res) {
					    }
					});
				}else if(this.enterprise.wxh==null||this.enterprise.wxh==''){
					uni.showModal({
					    title: '提示',
					    content: '微信号不能为空',
					    success: function (res) {
					    }
					});
				}else{
					uni.uploadFile({
						url:serverUrl+'spVipPersonApply/add1',
						files:_this.tab5json,
						formData:{
							headphoto:_this.headphoto,
							xm:_this.enterprise.xm,
							xb:_this.enterprise.xb,
							ryfl:_this.enterprise.ryfl,
							csrq:_this.enterprise.csrq,
							mz:_this.enterprise.xm,
							zjlx:_this.enterprise.zjlx,
							frxm:_this.enterprise.frxm,
							zjhm:_this.enterprise.zjhm,
							jg:_this.enterprise.jg,
							csd:_this.enterprise.csd,
							xl:_this.enterprise.xl,
							zzmm:_this.enterprise.zzmm,
							shmz:_this.enterprise.shmc,
							shzch:_this.enterprise.shzch,
							szcze:_this.enterprise.szcze,
							zgrs:_this.enterprise.zgrs,
							wxh:_this.enterprise.wxh,
							dzyx:_this.enterprise.dzyx
						},
						success:function(res){
							
						},
						fail:function(){
							
						}
					});
				}
				
			}
		}
	}
</script>

<style>
@import url("cfm.css");
@import url("join.css");
</style>
