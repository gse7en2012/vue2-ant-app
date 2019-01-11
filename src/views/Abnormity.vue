<template>
	<a-layout-content :style="{ margin: '0' }">
		<a-card>
			<!-- <a href="#" slot="extra">more</a> -->
			<div class="card-title" slot="title">
				<div class="ant-card-head-title" style="padding:0;">设备统计</div>
				<div class="card-title-box">
					<div class="form-row">
						<div class="form-item">
							<label>三个字</label>
							<a-select size="small">
								<a-select-option value="male">male</a-select-option>
								<a-select-option value="female">female</a-select-option>
							</a-select>
						</div>
						<div class="form-item">
							<label>四个字</label>
							<a-select size="small">
								<a-select-option value="male">male</a-select-option>
								<a-select-option value="female">female</a-select-option>
							</a-select>
						</div>
						<div class="form-item">
							<label>四个字</label>
							<a-select size="small">
								<a-select-option value="male">male</a-select-option>
								<a-select-option value="female">female</a-select-option>
							</a-select>
							<span>至</span>
							<a-select size="small">
								<a-select-option value="male">male</a-select-option>
								<a-select-option value="female">female</a-select-option>
							</a-select>
						</div>
					</div>
					<div class="form-row">
						<div class="form-item">
							<label>三个字</label>
							<a-select size="small">
								<a-select-option value="male">male</a-select-option>
								<a-select-option value="female">female</a-select-option>
							</a-select>
						</div>
						<div class="form-item">
							<label>四个字</label>
							<a-select size="small">
								<a-select-option value="male">male</a-select-option>
								<a-select-option value="female">female</a-select-option>
							</a-select>
						</div>
						<div class="form-item">
							<label>二字</label>
							<a-input placeholder="手机号码" size="small"/>
						</div>
						<div class="form-item">
							<a-button type="primary" size="small">确认</a-button>
							<a-button size="small">取消</a-button>
						</div>
					</div>
				</div>
			</div>
			<div class="card-ctx">
				<div style="width:100%;">
					<div class="btn-box">
						<a-button>导出数据</a-button>
					</div>

					<a-table :columns="columns" :dataSource="data">
						<a slot="name" slot-scope="text" href="javascript:;" @click="showModal">{{text}}</a>
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

		<a-modal title="保存个人信息" centered v-model="visible" @ok="hideModal" okText="保存" cancelText="取消" 	:width="'80%'">
			<Profile/>
		</a-modal>
	</a-layout-content>
</template>
<script>
import Profile from "./Profile";

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
	components: { Profile },
	data() {
		return {
			data,
			columns,
			visible: false
		};
	},
	async mounted() {},
	methods: {
		onCollapse(collapsed, type) {
			console.log(collapsed, type);
		},
		onBreakpoint(broken) {
			console.log(broken);
		},
		showModal() {
			this.visible = true;
		},
		hideModal() {
			this.visible = false;
		},
		confirm() {
			this.$confirm({
				title: "Confirm",
				okText: "确认",
				cancelText: "取消"
			});
		}
	}
};
</script>

<style lang="less" scoped>
.ant-table-wrapper {
	// width: 100%;
	margin: 1.5rem -18px;
	width: calc(~"100% + 36px");
}
.card {
	&-ctx {
		margin: 0 -15px;
		.left {
			flex: 40;
			padding: 0 20px;
		}
		.right {
			flex: 60;
			position: relative;
			padding: 0 80px 0 20px;
		}
	}
	&-title-box {
		font-weight: normal;
		font-size: 12px;
		overflow: hidden;
		.form-row {
			overflow: hidden;
			margin: 0.8rem 0;
			padding: 4px 0;
		}
		.form-item {
			float: left;
			label {
				font-size: 13px;
				margin-right: 0.65rem;
				color: #4a4a4a;
				min-width: 4rem;
				display: inline-block;
				text-align: right;
			}
			span {
				padding: 0 0.6rem;
			}
			.ant-input {
				width: 22rem;
			}
			.ant-btn {
				margin-left: 1.5rem;
				display: inline-block;
				&-sm {
					font-size: 13px;
				}
			}
			.ant-select {
				min-width: 10rem;
				// min-height: 1.75rem;
			}
		}
	}
}

.gg-row-ctx,
.gg-row-top {
	.item {
		margin: 15px 0;
		display: flex;
		position: relative;
		.avatar {
			border: 1px solid #ddd;
			width: 60%;
		}
		a {
			font-size: 13px;
			line-height: 32px;
			right: 0;
			top: 0;
			transform: translateX(100%);
			padding: 0 4px;
			z-index: 9;
			color: #5353b3;
			position: absolute;
		}
		label {
			// flex: 1;
			text-align: right;
			padding-right: 8px;
			color: #9b9b9b;
			font-size: 13px;
			height: 32px;
			line-height: 32px;
			min-width: 100px;
		}
		.ant-input {
			flex: 4;
			border-radius: 2px;
			padding: 2px 11px;
		}
		.ant-input-group-wrapper {
			flex: 4;
			border-radius: 2px;
			// padding: 2px 11px;
		}
		.ant-select {
			flex: 4;
		}
	}
}

.gg-row-top {
	margin-bottom: -30px;
}

.bottom-bar {
	position: fixed;
	bottom: 0;
	left: 215px;
	right: 15px;
	height: 80px;
	background: #f7f9fa;
	border-top: 1px solid #eee;
	box-shadow: 2px 2px 2px 0 rgba(176, 185, 191, 0.5);
	padding-right: 30px;
	.ant-btn {
		float: right;
		margin-right: 20px;
		border-radius: 2px;
		margin-top: 24px;
	}
}
</style>
