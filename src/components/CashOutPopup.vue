<template>
	<div>
		<div class="block">
			<div class="gg-row-ctx">
				<div class="item">
					<label>当前可提现金额</label>
					<p>
						<span class="num">888</span>元
					</p>
				</div>
				<div class="item">
					<label>提现账号</label>
					<a-input placeholder="input placeholder"/>
					<a>修改密码</a>
				</div>
				<div class="item">
					<label>提现金额</label>
					<a-input addonAfter=" 元 " defaultValue="11.00"/>
				</div>
				<div class="item">
					<label>提现账号</label>
					<a-input placeholder="input placeholder"/>
					<a>修改密码</a>
				</div>
			</div>
			<div class="tips">
				<p class="title">体系说明</p>
				<p>当有一系列信息需按时间排列时，可正序和倒序。</p>
				<p>当有一系列信息需按时间排列时，可正序和倒序。</p>
				<p>当有一系列信息需按时间排列时，可正序和倒序。</p>
			</div>
		</div>
	</div>
</template>


<script>
export default {
	name: "CashOutPopup"
	// props: {
	// 	title: String,
	// 	tags: Array
	// }
};
</script>


<style lang="less" scoped>
.block {
	padding: 10px 35px;
}
.tips{
	font-size: 12px;
	margin-top: 100px;
	margin-left: -40px;
	margin-bottom: -20px;
	color:#999;
	p{
		margin: 0;
	}
	.title{
		font-weight: bold;
		margin-bottom: 5px;;
	}
}
.gg-row-ctx {
	flex-direction: column;
	.item {
		margin: 10px 0;
		display: flex;
		position: relative;
		width: 50%;
		.num {
			// font-family: 'ggFont';
			font-size: 22px;
			// font-weight: bold;
		}
		p {
			margin: 0;
			margin-bottom: -5px;
			line-height: 28px;
			padding-left: 6px;
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
</style>
