<template>
	<!-- 入会须知 -->
	<view class="page">
		<view class="push-details-buju">
			<text class="details-title">入会须知</text>

			<view v-for="(text,index) in textList" :key="index">
				<view style="margin-bottom: 15px;">
					<text class="push-details-tx"> {{text.textItem}}</text>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				textList: [{
						textItem: '中国工商业联合会(简称工商联)是中国共产党领导的面向工商界、以非公有制企业和非公有制经济人士为主体的人民团体和商会组织，是党和政府联系非公有制经济人士的桥梁纽带，是政府管理和服务非公有制经济的助手。工商联工作是党的统一战线工作和经济工作的重要内容。工商联事业是中国特色社会主义事业的重要组成部分。工商联具有统战性、经济性、民间性有机统一的基本特征，以非公有制经济健康发展和非公有制经济人士健康成长为工作主题。充分发挥在非公有制经济人士思想政治工作中的引导作用，在非公有制经济人士参与国家政治生活和社会事务中的重要作用，在政府管理和服务非公有制经济中的助手作用，在行业协会商会改革发展中的促进作用，在构建和谐劳动关系、加强和创新社会管理中的协同作用，是工商联'
					},
					{
						textItem: '工商联著名领导人：陈叔通、胡子昂、荣毅仁、经叔平、黄孟复、王钦敏等。现任全国工商联主席：高云龙。'
					},
					{
						textItem: '1949年8月，根据《中共中央关于组织工商业联合会的指示》，中共烟台市委、市政府对烟台市商会筹备委员会进行改组，成立了“烟台市工商业联合会筹备委员会”，并于1950年6月召开了烟台市工商业联合会第一届会员代表大会，大会选举产生了烟台市工商业联合会第一届执委会，李德臣当选为主任委员，曹振乾、王雨田、李大宸、孙作周当选为副主任委员。这次大会宣告了烟台市工商业联合会的成立。烟台市工商业联合会至今已经召开了十三次代表大会。截至2017年底，烟台市工商联共有基层商会276个、会员16629个。机关内设科室有办公室、组宣科、经联科、党建办四个科室，现有在职人员15名'
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>

@import url("my-cfm-news");
.details-title{
	font-size: 14px;
	color: #999999;
	width: 100%;
	height: 30px;
	line-height: 30px;
	display: flex;
	justify-content: center;
	
}
</style>
