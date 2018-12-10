<template>
	<a-layout-content :style="{ margin: '0' }">
		<div class="top">
			<div class="gg-card-box">
				<div class="gg-card">
					<div class="title">今日订单数</div>
					<div class="ctx">
						<span class="num">23530</span>元
					</div>
				</div>
				<div class="gg-card">
					<div class="title">今日订单数</div>
					<div class="ctx">
						<span class="num">23530</span>元
					</div>
				</div>
				<div class="gg-card">
					<div class="title">今日订单数</div>
					<div class="ctx">
						<span class="num">23530</span>元
					</div>
				</div>
				<div class="gg-card">
					<div class="title">今日订单数</div>
					<div class="ctx">
						<span class="num">23530</span>元
					</div>
				</div>
			</div>
		</div>
		<div class="center">
			<div class="bar">充电站实时概况
				<div class="gg-tabs">
					<span class="current">全部充电桩</span>
					<span>快充</span>
					<span>慢充</span>
				</div>
			</div>
			<div id="map"></div>
		</div>

		<GMapPopup ref="popup" :title="popTitle" :tags="popTags"/>
	</a-layout-content>
</template>
<script>
import GMapPopup from "@/components/GMapPopup";

export default {
	components: {
		GMapPopup
	},
	data() {
		return {
			mapObj: null,
			popHtml: "",
			popTitle: "",
			popTags: ["离线", "在线", "火警"]
		};
	},
	async mounted() {
		this.initMap();
		this.renderComponent();
	},
	methods: {
		onCollapse(collapsed, type) {
			console.log(collapsed, type);
		},
		onBreakpoint(broken) {
			console.log(broken);
		},
		renderComponent() {
			this.popHtml = this.$refs.popup.$el.innerHTML;
			this.infoWindow = new AMap.InfoWindow({
				isCustom: true, //使用自定义窗体
				content: this.popHtml,
				offset: new AMap.Pixel(0, -200)
			});
			this.mapObj.on("click", () => {
				this.infoWindow.close();
			});
		},
		initMap() {
			this.mapObj = new AMap.Map("map", {
				center: [113.000923, 23.575807],
				zoom: 10,
				mapStyle: "amap://styles/b6183fe0151c1e8e6969d95d8a9abdfe"
			});
			this.mapObj.setFeatures(["road", "point"]);
			//bg区域面point兴趣点road道路及道路标注building建筑物
			// map.setFeatures(['road','point'])
			this.addMarker();
			this.addMarker2();
		},
		addMarker() {
			this.mapObj.clearMap();
			const marker = new AMap.Marker({
				map: this.mapObj,
				position: [113.000923, 23.575807]
			});
			//鼠标点击marker弹出自定义的信息窗体
			AMap.event.addListener(marker, "click", () => {
				this.popTitle = Math.random() * 100 + "";
				this.popHtml = this.$refs.popup.$el.innerHTML;
				console.log(this.$refs.popup);

				this.infoWindow.setContent(this.$refs.popup.$el);
				this.infoWindow.open(this.mapObj, marker.getPosition());
			});
		},
		addMarker2() {
			// this.mapObj.clearMap();
			const marker = new AMap.Marker({
				map: this.mapObj,
				position: [113.300923, 22.575807]
			});
			//鼠标点击marker弹出自定义的信息窗体
			AMap.event.addListener(marker, "click", () => {
				this.popTitle = Math.random() * 100 + "";
				this.popHtml = this.$refs.popup.$el.innerHTML;
				console.log(this.$refs.popup);

				this.infoWindow.setContent(this.$refs.popup.$el);
				this.infoWindow.open(this.mapObj, marker.getPosition());
			});
		}
	}
};
</script>

<style lang="less" scoped>
#map {
	height: calc(~"100vh - 220px");
	margin: 0;
	min-height: 350px;
}

.center {
	border-radius: 4px;
	margin: 15px;
	margin-top: -5px;
	overflow: hidden;
	.bar {
		height: 50px;
		background: #1f1d38;
		font-size: 14px;
		line-height: 50px;
		padding-left: 15px;
		color: #fff;
		margin: 0;
		position: relative;
	}
}
.gg-map-popup {
	opacity: 0;
	position: absolute;
	top: 0;
	z-index: -1;
}

.gg-tabs {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	display: flex;
	right: 15px;
	z-index: 9;
	border-radius: 2px;
	overflow: hidden;
	span {
		flex: 1;
		min-width: 80px;
		background: transparent;
		line-height: 24px;
		font-size: 12px;
		color: #8a86b4;
		margin-left: -1px;
		text-align: center;
		border: 1px solid #8a86b4;
		position: relative;
		z-index: 1;
		&:first-of-type {
			margin-left: 0;
		}
		&.current {
			z-index: 2;
			border-color: #9e9eff;
			background: #323055;
			color: #9e9eff;
			// border-color:1px
		}
	}
}

.gg-card {
	// flex: 1;
	// flex: 0 0 25%;
	// width: calc( 25% - 5px);
	width: 25%;
	margin: 5px;
	height: 130px;
	box-sizing: border-box;
	background: #fff;
	padding: 25px 35px;
	border-radius: 4px;
	box-shadow: 2px 2px 4px #ddd;
	&-box {
		margin: 10px 10px;
		display: flex;
		justify-content: space-between;
	}
	&-box-grid {
		margin: 10px 10px;
		display: grid;
		grid-template-columns: repeat(4, 1fr); /* 相当于 1fr 1fr 1fr */
		// grid-template-rows: repeat(4, 1fr); /* fr单位可以将容器分为几等份 */
		grid-gap: 10px; /* grid-column-gap 和 grid-row-gap的简写 */
		grid-auto-flow: row;
	}
	.title {
		color: #6c7880;
		font-size: 15px;
	}
	.ctx {
		font-size: 16px;
		color: #4a4a4a;
	}
	.num {
		font-family: "ggFont";
		font-size: 38px;
	}
}
</style>
