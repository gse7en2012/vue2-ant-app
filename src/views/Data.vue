<template>
	<a-layout-content :style="{ margin: '0' }">
		<a-tabs defaultActiveKey="1" class="great-tabs">
			<a-tab-pane tab="订单统计" key="1">
				<a-card title="订单数走势">
					<!-- <a href="#" slot="extra">more</a> -->
					<div class="card-ctx">
						<div class="left">
							<div class="box">
								<div class="item">
									<p class="title">今日新增</p>
									<p class="num">8,323</p>
									<p class="trend">
										<span class="arrow up">22.33%</span>
									</p>
								</div>
								<div class="item">
									<p class="title">今日新增</p>
									<p class="num">4534344</p>
									<p class="trend">
										<span class="arrow up">22.33%</span>
									</p>
								</div>
							</div>
							<div class="box">
								<div class="item">
									<p class="title">今日新增</p>
									<p class="num">8999</p>
									<p class="trend">
										<span class="arrow up">22.33%</span>
									</p>
								</div>
								<div class="item">
									<p class="title">今日新增</p>
									<p class="num">8999</p>
									<p class="trend">
										<span class="arrow up">22.33%</span>
									</p>
								</div>
							</div>
						</div>
						<div class="right">
							<div class="gg-tabs">
								<span>近7天</span>
								<span>近30天</span>
							</div>
							<v-chart :options="opts" class="gg-chart"/>
						</div>
					</div>
				</a-card>

				<a-card title="Card Title">
					<a href="#" slot="extra">more</a>
					<p>card content</p>
					<p>card content</p>
					<p>card content</p>
				</a-card>

				<a-card title="Card Title">
					<a href="#" slot="extra">more</a>
					<p>card content</p>
					<p>card content</p>
					<p>card content</p>
				</a-card>
			</a-tab-pane>
			<a-tab-pane tab="充电站统计" key="2" forceRender>Content of Tab Pane 2</a-tab-pane>
		</a-tabs>
	</a-layout-content>
</template>
<script>
import "echarts/lib/component/legend";
import "echarts/lib/component/title";
// import "echarts/lib/component/tooltip";
import "echarts/lib/chart/bar";
import "echarts/lib/chart/line";
import "echarts/lib/chart/pie";

export default {
	data() {
		return {
			screenHeight: document.documentElement.clientHeight + "px",
			opts: {
				title:{
					text:'订单数',
					left:30,
					top:0,
					textStyle:{
						color:'#999',
						fontSize:13,
						fontWeight:'normal',
						align:'left'
					}
				},
				grid: {
					top: 45,
					bottom: 50,
					left:'10%',
					right:60
				},
				legend: {
					data: ["订单走势"],
					left: '50%',
					bottom: 0,

				},
				splitLine:{
					lineStyle:{
						color:'#eee',
						opacity:.4
					},
				},
				xAxis: {
					type: "category",
					data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
					axisLine:{
						show:false
					},
					axisTick:{
						show:false
					},
					axisLabel:{
						color:'#999'
					}
				},
				yAxis: {
					type: "value",
					axisLine:{
						show:false
					},
					axisTick:{
						show:false
					},
					axisLabel:{
						color:'#999'
					}
				},
				tooltip:{
					trigger: 'axis',
					// backgroundColor:'rgba(77,75,104,1)'
				},
				series: [
					{
						data: [820, 932, 901, 934, 1290, 1330, 1320],
						type: "line",
						name: "订单走势"
					}
				]
			}
		};
	},
	async mounted() {
		// this.screenHeight=
		// alert(localStorage);
		// alert(localStorage.getItem('dcyAccessToken'));
	},
	methods: {
		onCollapse(collapsed, type) {
			console.log(collapsed, type);
		},
		onBreakpoint(broken) {
			console.log(broken);
		}
	}
};
</script>

<style lang="less" scoped>
#components-layout-demo-responsive .logo {
	height: 32px;
	background: rgba(255, 255, 255, 0.2);
	margin: 16px;
}
.wrap {
	min-width: 800px;
	.top {
		padding: 15px 15px 0 15px;
		margin-bottom: -15px;
	}
	.ctx {
		display: flex;
		width: 100%;
		padding: 15px;
		padding-bottom: 0;
		.box {
			flex: 1;
		}
		.left {
			margin-right: 7.5px;
		}
		.right {
			margin-left: 7.5px;
		}
	}
	.block {
		background: #fff;
		box-shadow: 2px 2px 2px #eee;
		margin-bottom: 15px;
	}
}

.card {
	&-ctx {
		display: flex;
		margin: 0 -32px;
		.left {
			flex: 30;
		}
		.right {
			flex: 70;
			position: relative;
		}
		.gg-chart {
			width: 100%;
			height: 270px;
		}
		.gg-tabs {
			position: absolute;
			top: 0;
			display: flex;
			left: 50%;
			transform: translateX(-50%);
			span {
				flex: 1;
				min-width: 60px;
				line-height: 28px;
				font-size: 13px;
				color: #666;
				text-align: center;
				border: 1px solid #ddd;
				border-top-left-radius: 4px;
				border-bottom-left-radius: 4px;
				&:last-of-type {
					margin-left: -1px;
					border-top-left-radius: 0;
					border-bottom-left-radius: 0;
					border-top-right-radius: 4px;
					border-bottom-right-radius: 4px;
				}
			}
		}
		.box {
			display: flex;
			text-align: center;
			margin: 20px auto 65px;
			&:last-of-type {
				margin-bottom: 20px;
			}
			.item {
				flex: 1;
				font-family: "ggFont";
				position: relative;
				&:first-of-type {
					border-right: 1px solid #e4e4e4;
				}
				p {
					margin: 0;
				}
				.title {
					font-size: 13px;
				}
				.num {
					font-size: 26px;
					font-weight: bold;
					margin: 6px 0 3px;
				}
				.trend {
					font-size: 14px;
					margin-top: -5px;
				}
			}
		}
	}
}
</style>
