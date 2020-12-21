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
	import echarts from 'echarts'
	
	export default {
		name: 'Radar',
		mounted(){
			this.$nextTick(function() {
				this.drawPie('echarts-radar')
			})
		},
		methods: {
			drawPie() {
				var charts = echarts.init(document.getElementById('echarts-radar'))
				var option = {
					title: {
						text: "这个是测试",
						link: 'https://www.baidu.com',
						target: "blank",
						textAlign: 'left',

					},
					tooltip: {}, //提示层
					legend: {
						data: ['name1']
					},
					radar: {
						name: {
							textStyle: {
								color: '#fff', //字体颜色
								backgroundColor: '#999', //背景色
								borderRadius: 3, //圆角
								padding: [3, 5] //padding
							}
						},
						center: ['50%', '50%'],
						radius: '60%',
						startAngle: 270,
						indicator: [{
								name: '指标一',
								max: 600
							},
							{
								name: '指标二',
								max: 600
							},
							{
								name: '指标三',
								max: 600
							}
						],
					},
					series: [{
						name: '测试标题名字',
						type: 'radar',
						data: [{
							value: [400, 200, 20],
							name: "123"
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
