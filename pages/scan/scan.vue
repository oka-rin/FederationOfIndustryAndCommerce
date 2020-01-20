<template>
	<view class="page">
		<view class="search-height">
			<view class="scan-it">
				<image src="../../static/icos/return.svg" class="scan-ico"></image>
			</view>
			
			<view class="search-block">
				<view class="search-ico-wapper">
					<image src="../../static/icos/search.png" class="search-ico"></image>
				</view>
				
				<input
					placeholder="搜索你感兴趣的内容" 
					maxlength="10" 
					class="search-text" 
					confirm-type="search"
					@confirm="searchMe"
				/>
			</view>
			
			<view class="scan-it">
				<view class="scan-it-text">搜索</view>
			</view>
			
		
		</view>
		
	</view>
</template>

<script>
</script>

<style>
	.scan-it{
		padding-top:10upx ;
		display: flex;
		width: 10%;
		align-items: center;
		
	}
	.scan-it-text{
		display: flex;
		width: 100%;
		height: 60upx;
		border-radius: 10px;
		color: #FFFFFF;
		background-color: #000000;
		font-size: 14px;
		justify-content: center;
		text-align: center;
		line-height: 60upx;
	}
	
	.scan-ico{
		width: 50upx;
		height: 50upx;
	}
	
	/* 扫一扫结束 */
	
		
	/* 搜索栏样式
	 在主轴进行居中排布  justify-content
	 center居中对其 flex-start左对齐 flex-end右对齐  space-between两端对其 space-
	 padding:上 右 下 左
	 position: fixed;显示在最上面
	 */
	.search-height{
		display: flex;
		flex-direction: row;
		height: 90upx;
		width:98%; 
		background-color: #007AFF;
		justify-content: space-between;
		align-items: center;
		padding: var(--status-bar-height) 2% 0 2%;
		}
		
	
	.search-ico {
		width: 40upx;
		height: 40upx;
	}
	.search-text {
		font-size: 14px;
		background-color: #FFFFFF;
		height: 100%;
		width: 100%;
	}
	
	.search-block{
		display: flex;
		flex-direction: row;
		width: 72%;
		height: 75upx;
		background-color: #F8F8F8;
		margin-bottom: 0upx;
		
	}
	
	.search-ico-wapper {
		background-color: #FFFFFF;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding:0upx 10upx;
	}
	
	.lunbo-column{
		width: 750upx;
		height: 100%;
		display: flex;
		position:absolute; 
		z-index:200; 
		left:0px; 
		top: 0px;
		flex-direction: column;
	}
	.lunbo-tx{
		font-size: 14px;
		height: 44px;
		color: #FFFFFF;
		flex-shrink: 0;
		/* 黑色透明 */
		background-color: rgba(0,0,0,0.6);
		padding: 2px 2% 2px 2%;
		
	}
	
	
	
	/* 搜索栏结束 */
	
	.carousel{
		width: 100%;
		height: 150px;
	
	}
	
	.xin{
		display: flex;
		background-color: #F0AD4E;
		width: 100%;
		height: 40upx;
	
	}
</style>
