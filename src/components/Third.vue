<template>
	<div class="third">
		<div class="statement">
			<span class="large-statement">无知少年</span><br>
			<span class="small-statement">
				来自关山口男子职业技术学院
			</span>
		</div>
		<el-carousel :interval="4000" type="card" height="20.9325rem">
			<el-carousel-item v-for="(item,index) in items" :key="index">
				<img :src="item" alt="" class="third-image">
			</el-carousel-item>
		</el-carousel>
	</div>
</template>

<script>
	import image1 from '../assets/image/swiper/image1.jpg'
	import image2 from '../assets/image/swiper/image2.jpg'
	import image3 from '../assets/image/swiper/image3.jpg'

	export default {
		name: 'Third',
		data() {
			return {
				items: [image1, image2, image3]
			}
		}
	}
</script>

<style scoped="scoped">
	@import url("../assets/css/Third.css");
</style>
