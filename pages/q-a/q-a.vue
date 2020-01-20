<template>
	<!-- 知识问答库 -->
	<view class="page">
		<view class="search-block">
			<view class="search-ico-wapper">
				<image src="../../static/icos/search.png" class="search-ico"></image>
			</view>

			<input placeholder="有问题搜一搜" maxlength="20" class="search-text" confirm-type="search" @confirm="searchMe" />
		</view>

		<view class="qa-block">

			<navigator :url="'q-a-details?fingerpostid='+qaItem.fingerpostid" v-for="(qaItem,index) in qaList" :key='index'>
				<view class="qa-block-item">
					<view>
						<image src="../../static/svn/q_1.svg" mode="widthFix" style="width: 18px;margin-right: 5px;"></image>
						{{qaItem.question}}
					</view>
					<view class="qa-text" style="font-size: 13px;flex-wrap: wrap;margin-top: 5px;">
						<image src="../../static/svn/d.svg" mode="widthFix" style="width: 17px;margin-right: 5px;"></image>
						{{qaItem.keywords}}
					</view>
					<view class="flex-row" style="color: #999999;font-size: 13px;margin-top: 5px;">
						<view>{{qaItem.inputdate}}</view>
						<view style="margin-left: 10px;">回答者：{{qaItem.inputman}}</view>
						<view style="margin-left: 10px;">3个回答</view>
					</view>
				</view>
			</navigator>
			<uni-load-more v-if="totalCount>=4" :status="more"></uni-load-more> 
		</view>
	</view>
</template>

<script>
	//日期分割
	import {
		friendlyDate
	} from '@/common/util.js';
	import common from '../../common/url.js';
	import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue";
	var _this, serverUrl, pageNum = 1,timer=null,sessionId;
	export default {
		data() {
			return {
				lodingText:'加载更多…',
				search: '',
				qaList: [],
				totalCount:0,
				more:'more'
			}
		},
		components:{
			uniLoadMore
		},
		//下拉刷新
		onPullDownRefresh: function() {
			
			this.getQA()
		},
		//上拉加载
		onReachBottom:function(){
			// 延迟加载
			if(timer!=null){clearTimeout(timer);}//多次上拉清除延迟，保证只延迟一次
			timer=setTimeout(function(){_this.getMoreNews();},500);//延迟0.5秒加载
		},
		onLoad: function() {
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
			serverUrl = common.serverUrl;
			this.getQA()
		},
		methods: {
			getQA: function() {
				_this.more='more';
				pageNum = 1;
				uni.showNavigationBarLoading();
				uni.request({
					header: {
						'sessionId': sessionId //自定义请求头信息
					},
					url:serverUrl + 'spMgFingerpost/query?length=10&searchValue=' + this.search+'&pageNum='+pageNum,

					success: function(res) {
						console.log(res)
						const totalCount=res.data.data[0].totalCount;
						_this.totalCount=totalCount;
						if(totalCount==0){return};
						const data = res.data.data[0].results;
						const data_list = data.map((news) => {
							return{
								inputdate: friendlyDate(new Date(news.inputdate).getTime()),
								keywords: news.keywords,
								question: news.question,
								inputman: news.inputman,
								fingerpostid:news.fingerpostid
							}
						});
						_this.qaList = data_list;
						uni.stopPullDownRefresh();
						uni.hideNavigationBarLoading();
						pageNum++;
					}
				});

			},
			getMoreNews:function(){
				if(_this.more=='noMore'||_this.totalCount==0){
					return
				};
				_this.more='loading';
				uni.showNavigationBarLoading();
				uni.request({
					header: {
						'sessionId': sessionId //自定义请求头信息
					},
					url:serverUrl + 'spMgFingerpost/query?length=10&searchValue=' + this.search+'&pageNum='+pageNum,
					success:function(res){
						const totalCount=res.data.data[0].totalCount;
						_this.totalCount=totalCount;
						console.log(totalCount);
						if(totalCount==0){return};
						if(res.data.data[0].results[0]==null){
							_this.more='noMore';
							uni.stopPullDownRefresh();
							uni.hideNavigationBarLoading();
							return false;
						};
						const data=res.data.data[0].results;
						const data_list=data.map((news)=>{
							return{
								inputdate: friendlyDate(new Date(news.inputdate).getTime()),
								keywords: news.keywords,
								question: news.question,
								inputman: news.inputman,
								fingerpostid:news.fingerpostid
							}
						});
						_this.qaList=_this.qaList.concat(data_list);
						uni.stopPullDownRefresh();
						uni.hideNavigationBarLoading();
						pageNum++;
					}
				
				});
			},
			searchMe:function(e){
				this.search=e.detail.value;
				this.getQA();
			}
			
		}
	}
</script>

<style>
	@import url("q-a.css");
	.loading{
		line-height: 2em;
		text-align: center;
		color: #888;
		margin-top: 10px;
		padding-bottom: 5px;
	}
</style>
