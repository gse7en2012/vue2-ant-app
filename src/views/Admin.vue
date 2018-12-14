<template>
	<a-layout id="components-layout-demo-responsive">
		<a-layout-sider :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }">
			<div class="logo">
				<img src="@/assets/logo.png" class="avatar">

				<a-popover placement="rightTop">
					<template slot="content">
						<a>个人信息</a>
						<a>退出登录</a>
					</template>
					<p class="name">Gseven ></p>
				</a-popover>
			</div>
			<a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
				<a-menu-item key="1" @click="goToPage('index')">
					<!-- <a-icon type="user"/> -->
					<img src="@/assets/icons/index_u.png" class="u">
					<img src="@/assets/icons/index.png" class="c">
					<span class="nav-text">首页</span>
				</a-menu-item>
				<a-menu-item key="2" @click="goToPage('data')">
					<!-- <a-icon type="video-camera"/> -->
					<img src="@/assets/icons/data_u.png" class="u">
					<img src="@/assets/icons/data.png" class="c">
					<span class="nav-text">数据统计</span>
				</a-menu-item>
				<a-menu-item key="3" @click="goToPage('profile')">
					<img src="@/assets/icons/station_u.png" class="u" style="transform:scale(0.9);top:-2.5px;">
					<img src="@/assets/icons/station.png" class="c" style="transform:scale(0.9)">
					<span class="nav-text">充电站管理</span>
				</a-menu-item>
				<a-menu-item key="4">
					<img src="@/assets/icons/order_u.png" class="u">
					<img src="@/assets/icons/order.png" class="c" style="top:-2px;">
					<span class="nav-text">订单管理</span>
				</a-menu-item>
				<a-menu-item key="5">
					<img src="@/assets/icons/agent_u.png" class="u">
					<img src="@/assets/icons/agent.png" class="c">
					<span class="nav-text">分销商管理</span>
				</a-menu-item>
				<a-menu-item key="6">
					<img src="@/assets/icons/cash_u.png" class="u">
					<img src="@/assets/icons/cash.png" class="c">
					<span class="nav-text">提现管理</span>
				</a-menu-item>
				<a-menu-item key="7">
					<img src="@/assets/icons/error_u.png" class="u">
					<img src="@/assets/icons/error.png" class="c">
					<span class="nav-text">异常上报</span>
				</a-menu-item>
			</a-menu>
			<img src="@/assets/logo-bottom.png" class="logo-bottom">
		</a-layout-sider>
		<a-layout :style="{ marginLeft: '200px',minHeight:'100vh' }" class="wrap">
			<router-view/>
		</a-layout>
	</a-layout>
</template>
<script>
export default {
	data() {
		return {
			screenHeight: document.documentElement.clientHeight + "px"
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
		},
		goToPage(page) {
			console.log(page);
			this.$router.push({
				name: page
			});
		}
	}
};
</script>

<style lang="less" scoped>
.ant-menu-item {
	text-align: left;
	margin: 0!important;
	height:60px!important;
	line-height: 60px!important;
	img {
		width: 14px;
		margin-right: 15px;
		position: relative;
		top: -3px;
	}
	.c {
		display: none;
	}
	.u {
		display: inline;
	}
	&-selected,
	&:hover {
		.c {
			display: inline;
		}
		.u {
			display: none;
		}
	}
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
		box-shadow: 2px 2px 2px 0 rgba(176,185,191,0.50);
		margin-bottom: 15px;
	}
}
.logo {
	.avatar {
		width: 56px;
		display: block;
		margin: 25px auto 10px;
		border-radius: 5px;
	}
	.name {
		text-align: center;
		color: #fff;
		margin: 0;
		padding: 6px;
		padding-bottom: 10px;
		cursor: pointer;
		// font-weight: bold;
		// font-size: 14px;
		// font-family: 'ggFont';
	}
}
.logo-bottom {
	position: absolute;
	bottom: 0;
	width: 100%;
	left: 0;
}
</style>
