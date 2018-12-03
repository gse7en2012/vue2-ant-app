<template>

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
        box-shadow: 2px 2px 4px #ccc;
        margin-bottom: 15px;
    }
}
</style>
