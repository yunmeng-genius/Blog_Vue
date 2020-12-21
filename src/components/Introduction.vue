<template>
	<div class="about">
		<div class="blog-icon">
			<img src="@/assets/image/more.png" alt="">
		</div>
		<div class="flex-box1">
			<div class="little-image1"></div>
			<div class="my-description">
				<span class="large-words">你好，<br>我是{{userName}}</span>
				<span class="small-words">欢迎来到我的世界</span>
			</div>
			<div class="little-image2"></div>
		</div>
	</div>
</template>

<style scoped>
	@import '../assets/css/Introduction.css';
</style>

<script>
	export default{
		name:'Introduction',
		data(){
			return {
				userName:'天才'
			}
		}
	}
</script>

<style>
</style>
