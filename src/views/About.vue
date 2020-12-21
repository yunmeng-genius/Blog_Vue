<template>
	<div class="About">
	<Introduction></Introduction>
	<Radar></Radar>
	</div>
</template>


<script>
	import Introduction from '../components/Introduction.vue'
	import Radar from '../components/Radar.vue'
	export default {
		name: 'About',
		components: {
			Introduction,
			Radar
		}
	}
</script>
