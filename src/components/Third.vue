<template>
	<div class="third">
		<div class="statement">
			<span class="large-statement">无知少年</span><br>
			<span class="small-statement">
				来自关山口男子职业技术学院
			</span>
		</div>
		<div class="banner">
			<div class="item">
				<img :src="dataList[currentIndex]">
			</div>
			<div class="page" v-if="this.dataList.length > 1">
				<ul>
					<li @click="gotoPage(prevIndex)">&lt;</li>
					<li @click="gotoPage(index)" :class="{'current':currentIndex == index}" v-for="(item,index) in dataList" :key='index'>
						{{index+1}}</li>
					<li @click="gotoPage(nextIndex)">&gt;</li>
				</ul>
			</div>
		</div>
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
				dataList: [image1, image2, image3],
				currentIndex: 0,
				timer: null
			}
		},
		methods: {
			gotoPage(index) {
				this.currentIndex = index;
			}
		},
		computed: {
			prevIndex() {
				if (this.currentIndex == 0) {
					return this.dataList.length - 1;
				} else {
					return this.currentIndex - 1;
				}
			},
			nextIndex() {
				if (this.currentIndex == this.dataList.length - 1) {
					return 0;
				} else {
					return this.currentIndex + 1;
				}
			},
		}
	}
</script>

<style scoped="scoped">
	@import url("../assets/css/Third.css");
</style>
