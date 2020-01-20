<template>
	<view class="page">

		<view class="search-block">
			<view class="search-ico-wapper">
				<image src="../../static/icos/search.png" class="search-ico"></image>
			</view>

			<input placeholder="搜索云盘文件" disabled="true" maxlength="10" class="search-text" @click="searchMe" />
		</view>

		<view style="width: 100%;" v-for="(department,depIndex) in departmentList" :key="depIndex">
			<view class="flex-row" style="height: 100upx;margin-left: 3%;" @click="getDepChose(depIndex)">
				<image :src="department.ischose==true?'../../static/svn/chose.svg':'../../static/svn/chose-w.svg'" mode="widthFix"
				 style="width: 25px;"></image>
				<view style="font-size: 16px;margin-left: 5px;">{{department.name}}</view>
			</view>

			<view style="width: 100%;" v-if="personnel.depId==department.id" v-for="(personnel,perIndex) in personnelList" :key="perIndex">
				<view class="share-disk-row" @click="getPerChose(perIndex)">
					<image :src="personnel.ischose==true?'../../static/svn/chose.svg':'../../static/svn/chose-w.svg'" mode="widthFix"
					 style="width: 25px;"></image>

					<image src="../../static/tou.png" mode="widthFix" style="width: 90upx;margin-left: 10px;border-radius: 50%;"></image>
					<view class="share-tex">
						<view style="font-size: 16px;">{{personnel.name}}</view>
						<view style="font-size: 14px;">工商联法律部部长</view>
					</view>
				</view>
				<view style="width: 100%;color:#EEEEED;height: 1upx;"></view>
			</view>

		</view>

		<view class="share-disk-bottom">
			<view class="flex-row" style="width: 30%;" @click="getAllChose()">
				<image :src="allChose==true?'../../static/svn/chose.svg':'../../static/svn/chose-w.svg'" mode="widthFix" style="width: 25px;"></image>
				<view style="margin-left: 10px;font-size: 14px;">全选</view>
			</view>
			<view class="flex-row" style="width: 30%;" @click="getFanChose()">
				<image :src="fanChose==true?'../../static/svn/chose.svg':'../../static/svn/chose-w.svg'" mode="widthFix" style="width: 25px;"></image>
				<view style="margin-left: 10px;font-size: 14px;">反选</view>
			</view>
			<view class="share-disk-bottom-btn">分享({{choseNum}})</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				allChose: false,
				fanChose: false,
				choseNum: 0,
				departmentList: [{
						id: 1,
						name: '法律部',
						ischose: false
					},
					{
						id: 2,
						name: '宣传部',
						ischose: false
					}
				],
				personnelList: [{
						depId: 1,
						name: '张三',
						ischose: false
					},
					{
						depId: 1,
						name: '李四',
						ischose: false
					},
					{
						depId: 1,
						name: '王五',
						ischose: false
					},
					{
						depId: 2,
						name: '惠酱',
						ischose: false
					},

					{
						depId: 2,
						name: '晴隆',
						ischose: false
					},

					{
						depId: 2,
						name: '拿到',
						ischose: false
					},
					{
						depId: 2,
						name: '对方',
						ischose: false
					}
				]

			}
		},
		methods: {
			//获取部门选择
			getDepChose: function(depIndex) {
				if (this.departmentList[depIndex].ischose == true) {
					this.departmentList[depIndex].ischose = false;
					for (var i = 0; i < this.personnelList.length; i++) {
						if (this.departmentList[depIndex].id == this.personnelList[i].depId) {
							this.personnelList[i].ischose = false;
							if (this.choseNum <= 0) {
								return;
							} else {
								this.choseNum--;
							}
						}
					};
				} else {
					
					this.departmentList[depIndex].ischose = true;
					for (var i = 0; i < this.personnelList.length; i++) {
						if (this.departmentList[depIndex].id == this.personnelList[i].depId) {
							this.personnelList[i].ischose = true;
							this.choseNum++;
						}
					};
					
				};
				
				for(var h=0;h<this.departmentList.length;h++){
					if(this.departmentList[h].ischose==false){
						this.allChose=false;
						break;
					}else{
						this.allChose=true;
					}
				}

			},
			//获取个人选择
			getPerChose: function(perIndex) {
				if (this.personnelList[perIndex].ischose == true) {
					this.personnelList[perIndex].ischose = false;
					if (this.choseNum <= 0) {
						return;
					} else {
						this.choseNum--;
					}
				} else {
					this.personnelList[perIndex].ischose = true;
					this.choseNum++;
				};
				
				// 循环遍历
				for (var i = 0; i < this.departmentList.length; i++) {
					for (var j = 0; j < this.personnelList.length; j++) {
						if(this.departmentList[i].id==this.personnelList[j].depId){
							if (this.personnelList[j].ischose== false) {
								this.departmentList[i].ischose=false;
								break;
							}else{
								this.departmentList[i].ischose=true;
							}
						}
					}
				};
				for(var h=0;h<this.departmentList.length;h++){
					if(this.departmentList[h].ischose==false){
						this.allChose=false;
						break;
					}else{
						this.allChose=true;
					}
				}
			},
			//全选
			getAllChose:function(){
				if(this.allChose==true){
					this.allChose=false;
					for(var i=0;i<this.departmentList.length;i++){
						this.departmentList[i].ischose=false;
						for(var j=0;j<this.personnelList.length;j++){
							this.personnelList[j].ischose=false;
						}
					};
					this.choseNum=0;
				}else{
					var choseNum=0;
					this.allChose=true;
					for(var i=0;i<this.departmentList.length;i++){
						this.departmentList[i].ischose=true;
						for(var j=0;j<this.personnelList.length;j++){
							if(this.personnelList[j].depId==this.departmentList[i].id){
								this.personnelList[j].ischose=true;
								choseNum++;
							}
						}
					};
					this.choseNum=choseNum;
				}
			},
			getFanChose:function(){
				
			}
		}
	}
</script>

<style>
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


	/* 人员item轮廓 */
	.share-disk-row {
		flex-direction: row;
		display: flex;
		align-items: center;
		width: 94%;
		padding: 3% 3%;
		background-color: #FFFFFF;
	}

	.share-tex {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		margin-left: 10px;
	}

	.share-disk-bottom {
		width: 100%;
		height: 60px;
		flex-direction: row;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #FFFFFF;
		bottom: 0;
		position: fixed;
	}

	.share-disk-bottom-btn {
		width: 30%;
		height: 44px;
		border-radius: 10px;
		background-color: #007AFF;
		line-height: 44px;
		color: #FFFFFF;
		text-align: center;
		font-size: 16px;
	}
</style>
