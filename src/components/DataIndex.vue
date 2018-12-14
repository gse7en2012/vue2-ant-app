<template>
	<div>
		<a-card title="订单数走势">
			<!-- <a href="#" slot="extra">more</a> -->
			<div class="card-ctx">
				<div class="left">
					<div class="box">
						<div class="item">
							<p class="title">今日新增</p>
							<p class="num">8,323</p>
							<p class="trend">
								<span class="arrow up gg-red">22.33%</span>
							</p>
						</div>
						<div class="item">
							<p class="title">今日新增</p>
							<p class="num">4534344</p>
							<p class="trend">
								<span class="arrow up gg-green">22.33%</span>
							</p>
						</div>
					</div>
					<div class="box">
						<div class="item">
							<p class="title">今日新增</p>
							<p class="num">8999</p>
							<p class="trend">
								<span class="arrow up gg-red">22.33%</span>
							</p>
						</div>
						<div class="item">
							<p class="title">今日新增</p>
							<p class="num">8999</p>
							<p class="trend">
								<span class="arrow up gg-green">22.33%</span>
							</p>
						</div>
					</div>
				</div>
				<div class="right">
					<div class="gg-tabs">
						<span class="current">近7天</span>
						<span>近30天</span>
					</div>
					<v-chart :options="opts" class="gg-chart" theme="pink"/>
				</div>
			</div>
		</a-card>

		<a-card title="订单数走势">
			<!-- <a href="#" slot="extra">more</a> -->
			<div class="card-ctx">
				<div class="left">
					<div class="box">
						<div class="item">
							<p class="title">今日新增</p>
							<p class="num">8,323</p>
							<p class="trend">
								<span class="arrow up gg-red">22.33%</span>
							</p>
						</div>
						<div class="item">
							<p class="title">今日新增</p>
							<p class="num">4534344</p>
							<p class="trend">
								<span class="arrow down gg-red">22.33%</span>
							</p>
						</div>
					</div>
					<div class="box">
						<div class="item">
							<p class="title">今日新增</p>
							<p class="num">8999</p>
							<p class="trend">
								<span class="arrow up gg-red">22.33%</span>
							</p>
						</div>
						<div class="item">
							<p class="title">今日新增</p>
							<p class="num">8999</p>
							<p class="trend">
								<span class="arrow up gg-green">22.33%</span>
							</p>
						</div>
					</div>
				</div>
				<div class="right">
					<div class="gg-tabs">
						<span class="current">近7天</span>
						<span>近30天</span>
					</div>
					<v-chart :options="opts1" class="gg-chart" theme="pink"/>
				</div>
			</div>
		</a-card>

		<a-card>
			<!-- <a href="#" slot="extra">more</a> -->
			<div class="card-title" slot="title">
				<div class="ant-card-head-title" style="padding:0;">设备统计</div>
				<div class="card-title-box">
					<a-form layout="inline" class="card-form">
						<a-form-item
							label="所属物业"
							style="width:25%;"
							:wrapperCol="{ span: 14 }"
							:labelCol="{ span: 6}"
						>
							<a-select size="small">
								<a-select-option value="male">male</a-select-option>
								<a-select-option value="female">female</a-select-option>
							</a-select>
						</a-form-item>
						<a-form-item
							label="所属小区"
							style="width:25%;"
							:wrapperCol="{ span: 14 }"
							:labelCol="{ span: 6 }"
						>
							<a-select size="small">
								<a-select-option value="male">male</a-select-option>
								<a-select-option value="female">female</a-select-option>
							</a-select>
						</a-form-item>
						<a-form-item
							label="关键词"
							style="width:30%;"
							:wrapperCol="{ span: 16 }"
							:labelCol="{ span: 6 }"
						>
							<a-input type="text" placeholder="Password" size="small">
								<a-icon slot="prefix" type="search" style="color:rgba(0,0,0,.25)"/>
							</a-input>
						</a-form-item>
						<a-form-item style="width:20%;">
							<a-button size="small">重置</a-button>
							<a-button type="primary" size="small">查询</a-button>
						</a-form-item>
					</a-form>
				</div>
			</div>
			<div class="card-ctx">
				<div style="width:100%;">
					<div class="btn-box">
						<a-button>导出数据</a-button>
					</div>

					<a-table :columns="columns" :dataSource="data">
						<a slot="name" slot-scope="text" href="javascript:;">{{text}}</a>
						<span slot="customTitle">
							<a-icon type="smile-o"/>Name
						</span>
						<span slot="tags" slot-scope="tags">
							<a-tag v-for="tag in tags" :color="tag.color" :key="tag.id">{{tag.txt}}</a-tag>
						</span>
						<span slot="action" slot-scope="text, record">
							<a href="javascript:;">Invite 一 {{record.name}}</a>
							<a-divider type="vertical"/>
							<a href="javascript:;">Delete</a>
							<a-divider type="vertical"/>
							<a href="javascript:;" class="ant-dropdown-link">More actions
								<a-icon type="down"/>
							</a>
						</span>
					</a-table>
				</div>
			</div>
		</a-card>
	</div>
</template>

<script>
import "echarts/lib/component/legend";
import "echarts/lib/component/title";
import "echarts/lib/component/tooltip";
import "echarts/lib/chart/bar";
import "echarts/lib/chart/line";
import "echarts/lib/chart/pie";

const colorHash = ["#9e9eff", "#f6aa10", "#1dbf6e"];

function initChartOpts(title, legendData, xAxisData, series) {
	const opts = {
		title: {
			text: title,
			left: 30,
			top: 0,
			textStyle: {
				color: "#999",
				fontSize: 13,
				fontWeight: "normal",
				align: "left"
			}
		},
		tooltip: {
			trigger: "axis",
			backgroundColor: "rgba(77,75,104,.95)",
			padding: 10,
			textStyle: {
				fontSize: 12,
				fontFamily: "ggFont"
			}
		},
		grid: {
			top: 50,
			bottom: 50,
			left: "10%",
			right: 60
		},
		legend: {
			data: legendData,
			left: "50%",
			bottom: 0
		},
		splitLine: {
			lineStyle: {
				color: "#eee",
				opacity: 0.4
			}
		},
		xAxis: {
			type: "category",
			data: xAxisData,
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				color: "#999"
			}
		},
		yAxis: {
			type: "value",
			splitNumber: 4,
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				color: "#999"
			}
		},
		series: series
	};
	return opts;
}

const columns = [
	{
		dataIndex: "name",
		key: "name",
		slots: { title: "customTitle" },
		scopedSlots: { customRender: "name" }
	},
	{
		title: "Age",
		dataIndex: "age",
		key: "age"
	},
	{
		title: "Address",
		dataIndex: "address",
		key: "address"
	},
	{
		title: "Tags",
		key: "tags",
		dataIndex: "tags",
		scopedSlots: { customRender: "tags" }
	},
	{
		title: "Action",
		key: "action",
		scopedSlots: { customRender: "action" }
	}
];

const data = [
	{
		key: "1",
		name: "John Brown",
		age: 32,
		address: "New York No. 1 Lake Park",
		tags: [
			{
				txt: "快充",
				color: "purple",
				id: 1
			}
		]
	},
	{
		key: "2",
		name: "Jim Green",
		age: 42,
		address: "London No. 1 Lake Park",
		tags: [
			{
				txt: "快充",
				color: "purple",
				id: 1
			}
		]
	},
	{
		key: "3",
		name: "Joe Black",
		age: 32,
		address: "Sidney No. 1 Lake Park",
		tags: [
			{
				txt: "慢充",
				color: "yellow",
				id: 4
			}
		]
	}
];

export default {
	data() {
		return {
			screenHeight: document.documentElement.clientHeight + "px",
			opts: {},
			opts1: {},
			data,
			columns
		};
	},
	async mounted() {
		this.$Progress.start();

		this.opts = this.formatChart(
			"订单数",
			["订单走势"],
			["10/10", "10/11", "10/12", "10/13", "10/14"],
			[
				{
					data: [444, 767, 378, 898, 1300, 830],
					type: "line",
					name: "订单走势",
					lineStyle: {
						color: colorHash[0]
					},
					itemStyle: {
						color: colorHash[0]
					}
				}
			]
		);
		this.opts1 = this.formatChart(
			"订单数",
			["订单走势"],
			["10/10", "10/11", "10/12", "10/13", "10/14"],
			[
				{
					data: [320, 932, 701, 634, 1190, 830],
					type: "line",
					name: "订单走势",
					lineStyle: {
						color: colorHash[1]
					},
					itemStyle: {
						color: colorHash[1]
					}
				}
			]
		);
	},
	methods: {
		onCollapse(collapsed, type) {
			console.log(collapsed, type);
		},
		onBreakpoint(broken) {
			console.log(broken);
		},
		formatChart: initChartOpts
	}
};
</script>

<style lang="less" scoped>
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
			top: -10px;
			display: flex;
			left: 50%;
			z-index: 9;
			transform: translateX(-50%);
			span {
				flex: 1;
				min-width: 60px;
				line-height: 24px;
				font-size: 13px;
				color: #666;
				text-align: center;
				border: 1px solid #ddd;
				border-top-left-radius: 4px;
				border-bottom-left-radius: 4px;
				position: relative;
				z-index: 1;
				&.current {
					z-index: 2;
					background: #5353b3;
					border-color: #5353b3;
					background: #f7f7ff;
					color: #5353b3;
					// border-color:1px
				}
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
					// font-size: 13px;
					font-size: 0.75rem;
				}
				.num {
					font-size: 1.75rem;
					font-weight: bold;
					margin: 3px 0 3px;
				}
				.trend {
					font-size: 14px;
					margin-top: -5px;
					text-indent: 12px;
					.arrow {
						position: relative;
						&:after {
							position: absolute;
							content: "";
							width: 10px;
							height: 10px;
							background: url("../assets/icons/up.png");
							background-size: 100%;
							left: -12px;
							top: 2px;
						}
						&.down {
							&:after {
								background: url("../assets/icons/down.png");
								position: absolute;
								content: "";
								width: 10px;
								height: 10px;
								background-size: 100%;
								left: -12px;
								top: 3px;
							}
						}
					}
				}
			}
		}
	}
	&-title-box {
		font-weight: normal;
		font-size: 12px;
	}
}

.btn-box {
	margin-bottom: 24px;
	padding-left: 20px;
}
</style>
