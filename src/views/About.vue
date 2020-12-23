<template>
	<div class="About">
		<Introduction></Introduction>
		<Radar></Radar>
		<Third></Third>
		<el-backtop>
			<div>UP</div>
		</el-backtop>
	</div>
</template>


<script>
	import Introduction from '../components/Introduction.vue'
	import Radar from '../components/Radar.vue'
	import Third from '../components/Third.vue'
	export default {
		name: 'About',
		components: {
			Introduction,
			Radar,
			Third
		}
	}
</script>

<style>
	@import url("//unpkg.com/element-ui@2.14.1/lib/theme-chalk/index.css");
	@import url("../assets/css/up.css");
</style>
