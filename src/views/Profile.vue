<template>
	<a-layout-content :style="{ margin: '0' }">
		<a-card title="个人信息" style="margin-bottom:80px;">
			<!-- <a href="#" slot="extra">more</a> -->
			<div class="card-ctx">
				<div class="block">
					<div class="gg-row-title">基本信息</div>
					<div class="gg-row-top">
						<div class="left">
							<div class="item">
								<label>头像</label>
								<div class="avatar-box">
									<img src="@/assets/logo.png" class="avatar">
								</div>
							</div>
						</div>
						<div class="right"></div>
					</div>
					<div class="gg-row-ctx">
						<div class="left">
							<div class="item">
								<label>姓名姓名</label>
								<a-input placeholder="input placeholder"/>
								<a>修改密码</a>
							</div>
							<div class="item">
								<label>姓名</label>
								<a-input placeholder="input placeholder"/>
							</div>
						</div>
						<div class="right">
							<div class="item">
								<label>姓名</label>
								<a-input placeholder="input placeholder"/>
							</div>
							<div class="item">
								<label>姓名</label>
								<a-input placeholder="input placeholder"/>
							</div>
						</div>
					</div>
				</div>
				<div class="block">
					<div class="gg-row-title">基本信息</div>
					<div class="gg-row-ctx">
						<div class="left">
							<div class="item">
								<label>姓名姓名</label>
								<a-input placeholder="input placeholder"/>
							</div>
							<div class="item">
								<label>姓名</label>
								<a-select defaultValue="1">
									<a-select-option value="1">Option 1</a-select-option>
									<a-select-option value="2">Option 2</a-select-option>
									<a-select-option value="3">Option 3</a-select-option>
								</a-select>
							</div>
						</div>
						<div class="right">
							<div class="item">
								<label>姓名</label>
								<a-input placeholder="input placeholder"/>
							</div>
							<div class="item">
								<label>姓名</label>
								<a-input placeholder="input placeholder"/>
							</div>
						</div>
					</div>
				</div>
				<div class="block">
					<div class="gg-row-title">基本信息</div>
					<div class="gg-row-ctx">
						<div class="left">
							<div class="item">
								<label>姓名姓名</label>
								<a-input placeholder="input placeholder"/>
							</div>
							<div class="item">
								<label>姓名</label>
								<a-select defaultValue="1">
									<a-select-option value="1">Option 1</a-select-option>
									<a-select-option value="2">Option 2</a-select-option>
									<a-select-option value="3">Option 3</a-select-option>
								</a-select>
							</div>
						</div>
						<div class="right">
							<div class="item">
								<label>提成</label>
								<a-input addonAfter=" % " defaultValue="mysite"/>
							</div>
							<div class="item">
								<label>姓名</label>
								<a-input placeholder="input placeholder"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</a-card>

		<div class="bottom-bar">
			<a-button type="primary" @click="showModal">确认</a-button>
			<a-button>取消</a-button>
		</div>

		<a-modal title="保存个人信息" centered v-model="visible" @ok="hideModal" okText="保存" cancelText="取消">
			<p>更复杂的例子，自定义了页脚的按钮，点击提交后进入 loading 状态，完成后关闭。</p>
		</a-modal>
	</a-layout-content>
</template>
<script>
export default {
	data() {
		return {
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
	box-shadow: 2px 2px 2px 0 rgba(176,185,191,0.50);
	padding-right: 30px;
	.ant-btn {
		float: right;
		margin-right: 20px;
		border-radius: 2px;
		margin-top: 24px;
	}
}
</style>
