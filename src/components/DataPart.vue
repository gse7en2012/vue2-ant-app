<template>
	<div class="box">
		<div class="col">
			<a-card style="height:210px;" id="box1">
				<div class="card-title" slot="title">订单数走势
					<a-button size="small" class="title-button" @click="showModal()">导出数据</a-button>
				</div>
				<div class="card-ctx">
					<div class="left">
						<div class="box">
							<div class="item">
								<p class="title">今日新增</p>
								<p class="num">
									8,323
									<span>个</span>
								</p>
							</div>
							<div class="item">
								<p class="title">今日新增</p>
								<p class="num">
									45343
									<span>个</span>
								</p>
							</div>
							<div class="item">
								<p class="title">今日新增</p>
								<p class="num">
									45343
									<span>个</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</a-card>

			<a-card id="box2">
				<!-- <a href="#" slot="extra">more</a> -->
				<div class="card-title" slot="title">设备统计
					<a-button size="small" class="title-button" @click="showModal()">导出数据</a-button>
					<div class="gg-tabs">
						<span>按小区</span>
						<span>按设备</span>
						<span class="current">按城市</span>
						<span>按时间</span>
					</div>
				</div>
				<div class="card-ctx">
					<div style="width:100%;">
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
		<div class="col">
			<a-card id="box3">
				<div class="card-title" slot="title">订单数走势
					<div class="gg-tabs wide">
						<span>类型分布</span>
						<span class="current">不同类型使用率</span>
					</div>
				</div>
				<!-- <a href="#" slot="extra">more</a> -->
				<div class="card-ctx">
					<v-chart :options="opts1" class="gg-chart" theme="pink"/>
				</div>
			</a-card>
			<a-card id="box4">
				<div class="card-title" slot="title">订单数走势
					<a-select size="small" class="title-select">
						<a-select-option value="male">male</a-select-option>
						<a-select-option value="female">female</a-select-option>
					</a-select>
				</div>

				<!-- <a href="#" slot="extra">more</a> -->
				<div class="card-ctx">
					<v-chart :options="opts" class="gg-chart" theme="pink"/>
				</div>
			</a-card>
		</div>
	</div>
</template>
<script>
import "echarts/lib/component/legend";
import "echarts/lib/component/title";
// import "echarts/lib/component/tooltip";
import "echarts/lib/chart/bar";
import "echarts/lib/chart/line";
import "echarts/lib/chart/pie";

const columns = [
	{
		dataIndex: "name",
		key: "name",
		slots: { title: "姓名" },
		scopedSlots: { customRender: "name" }
	},
	{
		title: "年龄",
		dataIndex: "age",
		key: "age",
		sorter: true
	},
	{
		title: "地址",
		dataIndex: "address",
		key: "address"
	},
	{
		title: "标签",
		key: "tags",
		dataIndex: "tags",
		scopedSlots: { customRender: "tags" }
	},
	{
		title: "操作",
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
			opts: {
				tooltip: {
					trigger: "axis",
					axisPointer: {
						type: "shadow"
					}
				},
				// legend: {
				// 	data: ["2011年", "2012年"]
				// },
				grid: {
					left: "5%",
					right: "8%",
					top: "2%",
					bottom: "3%",
					containLabel: true
				},
				xAxis: {
					type: "value",
					boundaryGap: [0, 0.01],
					axisLine: {
						show: false
					},
					axisTick: {
						lineStyle: {
							color: "#fff"
						}
					},
					axisLabel: {
						color: "#999"
					}
				},
				yAxis: {
					type: "category",
					axisTick: {
						lineStyle: {
							color: "#fff"
						}
					},
					axisLabel: {
						color: "#999"
					},
					axisLine: {
						show: false
					},
					data: [
						"巴西",
						"印尼",
						"美国",
						"印度",
						"中国",
						"世界人口(万)"
					]
				},
				series: [
					{
						name: "2011年",
						type: "bar",
						barWidth:24,
						itemStyle:{
							color:'#F6AA10'
						},
						data: [18203, 23489, 29034, 104970, 131744, 630230]
					}
				]
			},
			opts1: {
				tooltip: {
					trigger: "item",
					formatter: "{a} <br/>{b}: {c} ({d}%)"
				},
				legend: {
					orient: "vertical",
					x: "left",
					left: "80%",
					top: "center",
					itemWidth: 12,
					itemHeight: 12,
					borderRadius: [0, 0, 0, 0],
					textStyle: {
						color: "#666"
					},
					data: [
						"直接访问",
						"邮件营销",
						"联盟广告",
						"视频广告",
						"搜索引擎"
					]
				},
				series: [
					{
						name: "访问来源",
						type: "pie",
						radius: ["35%", "70%"],
						center: ["40%", "50%"],
						avoidLabelOverlap: false,
						roseType: "radius",
						label: {
							formatter: "{b}: {d}%"
						},
						data: [
							{ value: 335, name: "直接访问" },
							{ value: 310, name: "邮件营销" },
							{ value: 234, name: "联盟广告" },
							{ value: 135, name: "视频广告" },
							{ value: 567, name: "搜索引擎" }
						]
					}
				]
			},
			data,
			columns
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
#box1 {
	height: 210px;
}
#box2 {
	height: calc(~"100vh - 100px - 210px - 30px");
	min-height: 350px;
}
#box3 {
	height: 380px;
	.gg-chart {
		width: 100%;
		height: 275px;
	}
}
#box4 {
	height: calc(~"100vh - 100px - 380px - 30px");
	min-height: 200px;
	.gg-chart {
		width: 100%;
		height: calc(~"100vh - 100px - 380px - 30px - 100px");
	}
}

.box {
	display: flex;
	margin: 5px 10px;
	.col {
		flex: 0 0 50%;
		.ant-card {
			margin: 10px 5px;
		}
	}
}

.title-select {
	position: absolute;
	right: 0;
	min-width: 100px;
	font-weight: normal;
}

.gg-tabs {
	position: absolute;
	top: 50%;
	display: flex;
	right: 0;
	z-index: 9;
	transform: translateY(-50%);
	&.wide {
		span {
			min-width: 100px;
		}
	}
	span {
		flex: 1;
		font-size: 0.75rem;
		min-width: 60px;
		line-height: 24px;
		color: #9b9b9b;
		text-align: center;
		border: 1px solid #ddd;
		background: #fff;
		cursor: pointer;
		position: relative;
		z-index: 1;
		font-weight: normal;
		margin-left: -1px;
		&.current {
			z-index: 2;
			background: #5353b3;
			border-color: #5353b3;
			background: #f7f7ff;
			color: #5353b3;
			// border-color:1px
		}
		&:first-of-type {
			border-top-left-radius: 2px;
			border-bottom-left-radius: 2px;
		}
		&:last-of-type {
			border-top-right-radius: 2px;
			border-bottom-right-radius: 2px;
		}
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
				border-right: 1px solid #e4e4e4;
				position: relative;
				&:last-of-type {
					border-right: 0;
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
					span {
						font-size: 12px;
						margin-left: 4px;
						font-weight: normal;
					}
				}
				.trend {
					font-size: 14px;
					margin-top: -5px;
				}
			}
		}
	}
	&-title {
		height: 1.5rem;
		position: relative;
		.title-button {
			width: 4rem;
			padding: 0;
			font-size: 0.75rem;
			margin-left: 0.6rem;
			position: relative;
			top: -2px;
		}
	}
	&-title-box {
		font-weight: normal;
		font-size: 12px;
	}
}
</style>
