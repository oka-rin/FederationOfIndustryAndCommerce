<template>
	<!--flex-wrap: nowrap;换行  -->

	<view class="page">
		
		<view class="search-block">
			<view class="search-ico-wapper">
				<image src="../../static/icos/search.png" class="search-ico"></image>
			</view>
			<input placeholder="请搜索政策标题" maxlength="20" class="search-text" confirm-type="search" @confirm="searchMe" />
		</view>
		
		<view style="padding: 0 3%;width: 94%;background-color: #FFFFFF;">
			<navigator class="push-item" :url="'../push-details/pushdetails?regulateid='+pushItem.regulateid" v-for="(pushItem,item) in pushList" :key="item">
				<view  class="push-row">
					<view class="push-tx">
						<text class="push-title">{{pushItem.regulatetitle}}</text>
						<view class="push-time">
							<text>{{pushItem.inputdate}}</text>
						</view>
					</view>
					<image v-if="pushItem.regulateurl!=''" :src="pushItem.regulateurl" class="push-img"></image>
				</view>
				<view style="background-color: #FFFFFF;width: 100%;padding: 20upx 0upx 0upx 0upx;">
					<view class="push-fenge"></view>
				</view>

			</navigator>
			<uni-load-more v-if="totalCount>=4" :status="more"></uni-load-more> 

		</view>
	</view>
</template>

<script>
	import{
		mapState
	}from 'vuex'
	//日期分割
	import {
		friendlyDate
	} from '@/common/util.js';
	import common from '../../common/url.js';
	import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue";
	var _self, page = 1,serverUrl,timer=null,sessionId;
	export default {
		computed:mapState(['hasLogin','uerInfo']),
		data() {
			return {
				newsList: [],
				lodingText: "加载更多…",
				totalCount:0,
				more:'more',
				search:'',
				pushList: [
				// 		{id: 1,
				// 		title: '收到货福克斯的付款后士大夫深刻的花费',
				// 		push_img: '../../static/test/gs05.jpg'
				// 	},
				// 	{
				// 		id: 2,
				// 		title: '收到货福克斯的花费客户的身份开户行IE额',
				// 		push_img: '../../static/test/gs05.jpg'
				// 	},
				// 	{
				// 		id: 3,
				// 		title: '胜多负少的方式的客户合计递四方速递对方',
				// 		push_img: '../../static/test/gs05.jpg'
				// 	},
				// 	{
				// 		id: 4,
				// 		title: '水电费水电费是否水电费第三方水电费水电费是否水电费水电费是否',
				// 		push_img: '../../static/test/gs05.jpg'
				// 	},
				// 	{
				// 		id: 5,
				// 		title: '胜水电费水电费多负少的方式的客户合计递四方速递对方',
				// 		push_img: '../../static/test/gs05.jpg'
				// 	},

				// 	{
				// 		id: 6,
				// 		title: '胜水电费水电费多负少的方式的客户合计递四方速递对方',
				// 		push_img: ''
				// 	}

				]

			}

		},
		onLoad: function() {
			_self = this;
			// try {
			//     const data = uni.getStorageSync('login_key');
			//     if (data==null||data=='') {
			//         console.log('获取本地数据失败');
			//     }else{
			// 		console.log('获取本地数据成功'+data.sessionId);
			// 		sessionId=data.sessionId;
			// 	}
			// } catch (e) {
			    
			// }
			sessionId=this.uerInfo.sessionId;
			serverUrl=common.serverUrl
			this.getNews()
		},
		components:{
			uniLoadMore
		},
		// 下拉刷新
		onPullDownRefresh: function() {
			this.getNews();
		},
		// 上拉加载
		onReachBottom: function() {
			if (timer != null) {
				clearTimeout(timer);
			} //多次上拉清除延迟，保证只延迟一次
			timer = setTimeout(function() {
				_self.getMoreNews();
			}, 500); //延迟1秒加载
		},
		methods: {
			// 网络请求
			getNews: function() {
				page = 1;
				_self.more='more';
				uni.showNavigationBarLoading();
				uni.request({
					header: {
						'sessionId': sessionId //自定义请求头信息
					},
					url: serverUrl + 'spMgRegulate/query?length=10&pageNum=' + page,
					success: function(res) {
						const totalCount = res.data.data[0].totalCount;
						//计算总数
						_self.totalCount = totalCount;
						const data=res.data.data[0].results;
						console.log(data);
						const data_list = data.map((news) => {
							return{
								inputman :news.inputman,
								inputdate:friendlyDate(new Date(news.inputdate).getTime()),
								regulateid:news.regulateid,
								regulateurl:news.regulateurl,
								regulatetitle:news.regulatetitle,
							};
						});				
						 _self.pushList=data_list;
						uni.stopPullDownRefresh();
						uni.hideNavigationBarLoading();
						page++;
					}
				})
			},

			getMoreNews:function(){

				if(_self.more=='noMore'){return false}
				_self.more='loading';
				uni.showNavigationBarLoading();
				uni.request({
					header: {
						'sessionId': sessionId //自定义请求头信息
					},
					url:serverUrl+'spMgRegulate/query?length=10&pageNum='+page,
					success:function(res){
						console.log(res.data.data[0].results)
						// 判断如果下拉加载为空则停止该方法
						if(res.data.data[0].results[0]==null){
							_self.more='noMoer';
							uni.stopPullDownRefresh();
							uni.hideNavigationBarLoading();
							return false;
						}
						const data=res.data.data[0].results;
						const data_list = data.map((news) => {
							return{
								inputman :news.inputman,
								inputdate:friendlyDate(new Date(news.inputdate).getTime()),
								regulateid:news.regulateid,
								regulateurl:news.regulateurl,
								regulatetitle:news.regulatetitle,
							};
							
						});
						// 累加不覆盖进行下拉加
						_self.pushList=_self.pushList.concat(data_list);
						uni.stopPullDownRefresh();
						uni.hideNavigationBarLoading();
						page++;
					}
				})
			},
			searchMe:function(e){
				this.search=e.detail.value;
				this.getNews();
			}
		}
	}
</script>

<style>
	@import url("push-list.css");
</style>
