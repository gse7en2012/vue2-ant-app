<template>
	<a-layout id="components-layout-demo-responsive">
		<a-layout-sider :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }">
			<div class="logo"></div>
			<a-menu theme="dark" mode="inline" :defaultSelectedKeys="['4']">
				<a-menu-item key="1">
					<a-icon type="user" />
					<span class="nav-text">nav 1</span>
				</a-menu-item>
				<a-menu-item key="2">
					<a-icon type="video-camera" />
					<span class="nav-text">nav 2</span>
				</a-menu-item>
				<a-menu-item key="3">
					<a-icon type="upload" />
					<span class="nav-text">nav 3</span>
				</a-menu-item>
				<a-menu-item key="4">
					<a-icon type="bar-chart" />
					<span class="nav-text">nav 4</span>
				</a-menu-item>
				<a-menu-item key="5">
					<a-icon type="cloud-o" />
					<span class="nav-text">nav 5</span>
				</a-menu-item>
			</a-menu>
		</a-layout-sider>
		<a-layout :style="{ marginLeft: '200px',minHeight:'100vh' }" class="wrap">
			<a-layout-content :style="{ margin: '0' }">
				<div class="top">
					<div class="block" style="height:10vh"></div>
				</div>
				<div class="ctx">
					<div class="left box">
						<div class="block" style="height:36vh">
							b1
						</div>
						<div class="block" style="height:46vh">
							b2
						</div>
					</div>
					<div class="right box">
						<div class="block" style="height:51vh">
							b3
						</div>
						<div class="block" style="height:31vh">
							b3
						</div>
					</div>
				</div>
			</a-layout-content>
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
	min-width:800px;
    .top {
		padding: 15px 15px 0 15px;
		margin-bottom: -15px;
		;
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
</style>
