<template>
	<div class="radar">
		<div class="statement">
			<span class="large-statement">喜欢思考，</span><br>
			<span class="small-statement">
				热衷音乐，擅长编程
			</span>
		</div>
		<div id="echarts-radar">
		</div>
	</div>
</template>

<script>
	import * as echarts from 'echarts'

	export default {
		name: 'Radar',
		mounted() {
			this.$nextTick(function() {
				this.drawPie('echarts-radar')
			})
		},
		methods: {
			drawPie() {
				var charts = echarts.init(document.getElementById('echarts-radar'))
				var option = {
					legend: {
						data: ["Allocated Budget", "Actual Spending"]
					},
					radar: {
						indicator: [{
							name: "sales",
							max: 6500
						}, {
							name: "Administration",
							max: 16000
						}, {
							name: "Information Techology",
							max: 30000
						}, {
							name: "Customer Support",
							max: 38000
						}, {
							name: "Development",
							max: 52000
						}, {
							name: "Marketing",
							max: 25000
						}]
					},
					series: [{
						// name: "预算 vs 开销（Budget vs spending）",
						type: "radar",
						data: [{
							value: [4300, 10000, 28000, 35000, 50000, 19000],
							name: "Allocated Budget"
						}, {
							value: [5000, 14000, 28000, 31000, 42000, 21000],
							name: "Actual Spending"
						}]
					}]
				}
				charts.setOption(option);
			},

		}
	}
</script>

<style>
	@import url("../assets/css/Radar.css");
</style>
