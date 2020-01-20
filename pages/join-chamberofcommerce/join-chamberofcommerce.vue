<template>
	<view class="page">
		<view style="padding:3% ;width: 94%;height: 96%;">
			<view class="carousel">
				<view style="color: #FFFFFF;font-size: 16px;">请选择要加入的商会</view>
				<view class="join-cfm-butto">选择商会</view>
			</view>
			<view class="join-cfm-title">请选择会员角色</view>

			<view style="width: 100%;">
				<radio-group @change="radioChange">

					<view :class="index===current?'join-cfm-block-link':'join-cfm-block'" @click="getCurrent(index)" :key="item.value" v-for="(item,index) in list">
						<view style="display: flex;flex-direction: row; width: 100%;">
							<view style="width: 35px;flex-shrink: 0;display: flex;" >
								<label class="radio">
									<radio :value="item.value" :checked="index===current" />
								</label>
							</view>
							
							<view style="width: 100%;">
								<view style="font-size: 16px;">{{item.title}}</view>
								<view style="color: #999999;font-size: 12px;margin-top: 4px;">{{item.details}}</view>
							</view>

						</view>
					</view>
				</radio-group>
			</view>
			<view style="color: #FF0000;font-size: 14px;">{{prompt}}</view>
		</view>
		<view class="cfm-bottom-join">
				<view class="cfm-details-button" @click="netButton">下一步</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						value: "cfm",
						title:'申请填写企业会员信息',
						details:'企业会员的主体是非公有制企业，主要包括私营企业、非公有制经济成分控股的有限责任公司和股份有限公司、在内地投资的港澳企业等'
					},
					{
						value: "me",
						title:'申请填写个人会员信息',
						details:'非公有制企业主要出资人和经营者、个体工商户、与工商联工作有联系的有关人士、在内地投资的港澳工商界人士、与工商联建立工作联系的单位代表'
					}
				],
				current: 0,
				prompt:'注:会员信息填写申请后不可更改会员角色',
			}
		},
		methods: {
			radioChange: function(evt) {
				for (var i = 0; i < this.list.length; i++) {
					if (this.list[i].value === evt.target.value) {
						this.current = i;
						break;
					}
				}
			},
			getCurrent:function(index){
				this.current=index;
				if(index==0){
					this.prompt='注:会员信息填写申请后不可更改会员角色';
				}else{
					this.prompt='注：会员信息填写提交申请后不可更改会员角色已经录入过信息的会员无需再进行此步操作';
				}
			},
			netButton:function(){
				if(this.current==0){
					uni.navigateTo({
						url:'join-cfm-enterprise',
					})
				}else{
					uni.navigateTo({
						url:'join-cfm-personal',
					})
				}
				
			}
		}
	}
</script>

<style>
	.carousel {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 180px;
		border-radius: 10px;
		background-color: #999999;
		flex-direction: column;

	}

	.join-cfm-butto {
		width: 100px;
		height: 40px;
		line-height: 40px;
		text-align: center;
		color: #FFFFFF;
		font-size: 16px;
		background-color: #007AFF;
		border-radius: 5px;
		margin-top: 8px;
	}

	.join-cfm-title {
		font-size: 18px;
		height: 40px;
		line-height: 40px;
	}

	.cfm-bottom-join {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 60px;
		width: 100%;
		background-color: #eeeeed;
		bottom: 0px;
		position: fixed;
	}

	.cfm-details-button {
		width: 200px;
		height: 40px;
		background-color: #007AFF;
		line-height: 40px;
		text-align: center;
		color: #FFFFFF;
		border-radius: 30px;
	}

	.join-cfm-block {
		width: 94%;
		padding: 3%;
		height: 84px;
		background-color: #FFFFFF;
		border-radius: 10px;
		border-style: solid;
		border-width: 3upx;
		border-color: #E6E6E6;
		margin-bottom: 10px;
	}
	.join-cfm-block-link {
		width: 94%;
		padding: 3%;
		height: 84px;
		background-color: #FFFFFF;
		border-radius: 10px;
		border-style: solid;
		border-width: 3upx;
		border-color: #007AFF;
		margin-bottom: 10px;
	}
</style>
