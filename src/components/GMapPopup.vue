<template>
	<div class="gg-map-popup">
		<div class="title">
			{{title}}
			<span class="sub">(No.4444)</span>
		</div>
		<div class="address">深圳南山区后海xxxx大事</div>
		<div class="tags">
			<span v-for="tag in tags">{{tag}}</span>
		</div>
		<div class="details">
			<div class="item">
				<div class="line">
					<span>1.0</span>元
				</div>
				<div class="line">30分钟</div>
			</div>
			<div class="item">
				<div class="line">
					<span>1.0</span>元
				</div>
				<div class="line">30分钟</div>
			</div>
			<div class="item">
				<div class="line">
					<span>1.0</span>元
				</div>
				<div class="line">30分钟</div>
			</div>
			<div class="item">
				<div class="line">
					<span>1.0</span>元
				</div>
				<div class="line">30分钟</div>
			</div>
		</div>
	</div>
</template>


<script>
export default {
	name: "GMapPopup",
	props: {
		title: String,
		tags: Array
	}
};
</script>


<style lang="less" scoped>
.gg-map-popup {
	// background: #fff;
	// min-width: 350px;
	// position: absolute;
	// border-radius: 4px;
	// padding: 10px;
	// color: #999;
	&:after {
		content: "";
		height: 0;
		width: 0;
		border: 8px solid transparent;
		border-top-color: #fff;
		bottom: -16px;
		left: 50%;
		transform: translateX(-50%);
		position: absolute;
	}
	.title {
		font-size: 18px;
		font-weight: 500;
		color: #333;
		span {
			font-size: 12px;
			color: #999;
			font-weight: normal;
		}
	}
	.address {
		font-size: 13px;
		margin-bottom: 5px;
	}
	.tags {
		overflow: hidden;
		margin: 3px 0;
		span {
			float: left;
			font-size: 12px;
			line-height: 1.5;
			padding: 0 4px;
			margin-right: 2px;
			border: 1px solid #ccc;
			border-radius: 2px;
			transform: scale(0.9);
			transform-origin: 0 0;
		}
	}
	.details {
		margin: 14px 0;
		display: flex;

		.item {
			flex: 1;
			text-align: center;
			.line {
				font-size: 12px;
				line-height: 1;
				margin-bottom: 4px;
			}
			span {
				font-family: "ggFont";
				font-size: 26px;
				margin-right: 2px;
			}
		}
	}
}
</style>
