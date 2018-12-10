<template>
	<a-layout id="components-layout-demo-responsive">
		<a-layout-sider :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }">
			<div class="logo">
				<img src="@/assets/logo.png" class="avatar">
				<p class="name">Gseven    ></p>
			</div>
			<a-menu theme="dark" mode="inline" :defaultSelectedKeys="['4']">
				<a-menu-item key="1" @click="goToPage('index')">
					<a-icon type="user"/>
					<span class="nav-text">首页</span>
				</a-menu-item>
				<a-menu-item key="2" @click="goToPage('data')">
					<a-icon type="video-camera"/>
					<span class="nav-text">数据统计</span>
				</a-menu-item>
				<a-menu-item key="3" @click="goToPage('profile')">
					<a-icon type="upload"/>
					<span class="nav-text">充电站管理</span>
				</a-menu-item>
				<a-menu-item key="4">
					<a-icon type="bar-chart"/>
					<span class="nav-text">订单管理</span>
				</a-menu-item>
				<a-menu-item key="5">
					<a-icon type="cloud-o"/>
					<span class="nav-text">分销商管理</span>
				</a-menu-item>
				<a-menu-item key="6">
					<a-icon type="cloud-o"/>
					<span class="nav-text">提现管理</span>
				</a-menu-item>
				<a-menu-item key="7">
					<a-icon type="cloud-o"/>
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
.logo{
	.avatar{
		width: 25%;
		display: block;
		margin: 25px auto 10px;
		border-radius: 5px;
	}
	.name{
		text-align: center;
		color:#fff;
		// font-weight: bold;
	}
}
.logo-bottom {
	position: absolute;
	bottom: 0;
	width: 100%;
	left: 0;
}
</style>
