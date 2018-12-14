<template>
	<div class="box">
		<div class="col">
			<a-card title="订单数走势" style="height:210px;" id="box1">
				<!-- <a href="#" slot="extra">more</a> -->
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
				<div class="card-title" slot="title">
					<div class="ant-card-head-title" style="padding:0;">设备统计</div>
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
			<a-card title="订单数走势" id="box3">
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
				</div>
			</a-card>
			<a-card title="订单数走势" id="box4">
				<!-- <a href="#" slot="extra">more</a> -->
				<div class="card-ctx">

				</div>
			</a-card>
		</div>
	</div>
</template>
<script>
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
		key: "age"
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
			opts: {},
			opts1: {},
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
	min-height:350px;
}
#box3{
	height:380px;
}
#box4{
	height: calc(~"100vh - 100px - 380px - 30px");
	min-height:200px;
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
	&-title-box {
		font-weight: normal;
		font-size: 12px;
	}
}
</style>
