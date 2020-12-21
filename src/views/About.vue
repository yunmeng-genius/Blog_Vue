<template>
	<div class="About">
		<Introduction></Introduction>
		<Radar></Radar>
		<Third></Third>
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
