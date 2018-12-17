<template>
	<a-layout-content :style="{ margin: '0' }">
		<div class="top">
			<div class="gg-card-box">
				<div class="gg-card">
					<div class="title">
						<img src="@/assets/icons/index_order.png" class="icon icon1">今日订单数
					</div>
					<div class="ctx">
						<span class="num">23530</span>
					</div>
				</div>
				<div class="gg-card">
					<div class="title">
						<img src="@/assets/icons/index_money.png" class="icon">今日充电金额
					</div>
					<div class="ctx">
						<span class="num">23,530</span>元
					</div>
				</div>
				<div class="gg-card">
					<div class="title">
						<img src="@/assets/icons/index_income.png" class="icon">今日佣金
					</div>
					<div class="ctx">
						<span class="num">530</span>元
					</div>
				</div>
				<div class="gg-card" style="padding-right:0;">
					<div class="title">
						<img src="@/assets/icons/index_cash.png" class="icon">累计可提现佣金
						<a-button size="small" class="special" @click="showModal()">申请提现</a-button>
					</div>
					<div class="ctx">
						<span class="num">235.30</span>元
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

		<a-modal
			title="申请提现"
			centered
			v-model="visible"
			@ok="hideModal"
			okText="确认提现"
			cancelText="取消"
			:width="880"
		>
			<CashOutPopup/>
		</a-modal>
	</a-layout-content>
</template>
<script>
import GMapPopup from "@/components/GMapPopup";
import CashOutPopup from "@/components/CashOutPopup";

export default {
	components: {
		GMapPopup,
		CashOutPopup
	},
	data() {
		return {
			visible: false,
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
		hideModal() {
			this.visible = false;
		},
		showModal() {
			this.visible = true;
		},
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
				offset: new AMap.Pixel(5, -210)
			});
			this.mapObj.on("click", () => {
				this.infoWindow.close();
			});
		},
		initMap() {
			this.mapObj = new AMap.Map("map", {
				center: [113.000923, 23.475807],
				zoom: 8,
				mapStyle: "amap://styles/b6183fe0151c1e8e6969d95d8a9abdfe"
			});
			this.mapObj.setFeatures(["road", "point"]);
			//bg区域面point兴趣点road道路及道路标注building建筑物
			// map.setFeatures(['road','point'])
			this.addMarker();
			this.addMarker2();
			this.addMarker3();
		},
		addMarker() {
			this.mapObj.clearMap();
			const mapIcon = new AMap.Icon({
				size: new AMap.Size(32, 32),
				imageSize: new AMap.Size(32, 32),
				imageOffset: new AMap.Pixel(0, 0),
				image: "http://img.dokerteam.com/map_fast.png" // 添加 Icon 图标 URL
			});
			const marker = new AMap.Marker({
				map: this.mapObj,
				position: [113.000923, 23.475807],
				icon: mapIcon
			});
			// const marker = new AMap.Marker({
			// 	position: new AMap.LngLat(
			// 		item.efairydevice_location_lng,
			// 		item.efairydevice_location_lat
			// 	),
			// 	offset: new AMap.Pixel(-30, -38),
			// 	icon: mapIcon
			// });
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
			const mapIcon = new AMap.Icon({
				size: new AMap.Size(32, 32),
				imageSize: new AMap.Size(32, 32),
				imageOffset: new AMap.Pixel(0, 0),
				image: "http://img.dokerteam.com/map_slow.png" // 添加 Icon 图标 URL
			});
			const marker = new AMap.Marker({
				map: this.mapObj,
				position: [113.200923, 22.475807],
				icon: mapIcon
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
		addMarker3() {
			// this.mapObj.clearMap();
			const mapIcon = new AMap.Icon({
				size: new AMap.Size(32, 32),
				imageSize: new AMap.Size(32, 32),
				imageOffset: new AMap.Pixel(0, 0),
				image: "http://img.dokerteam.com/map_offline.png" // 添加 Icon 图标 URL
			});
			const marker = new AMap.Marker({
				map: this.mapObj,
				position: [113.460923, 22.555807],
				icon: mapIcon
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
	height: calc(~"100vh - 40px - 3.75rem - 10rem");
	margin: 0;
	min-height: 350px;
}

.center {
	border-radius: 4px;
	margin: 15px;
	margin-top: -5px;
	overflow: hidden;
	.bar {
		// height: 50px;
		height: 3.75rem;
		font-weight: bold;
		background: #1f1d38;
		// font-size: 14px;
		font-size: 1rem;
		// line-height: 50px;
		line-height: 3.75rem;
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
	// height: 130px;
	height: 10rem;
	box-sizing: border-box;
	background: #fff;
	padding: 25px 35px;
	border-radius: 4px;
	box-shadow: 2px 2px 2px 0 rgba(176, 185, 191, 0.5);
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
		font-size: 1rem;
		margin-top: 0.5rem;
	}
	.icon {
		width: 25px;
		margin-right: 6px;
		margin-top: -6px;
	}
	// .icon1 {
	// 	width: 26px;
	// 	margin-top: -4px;
	// }
	.special {
		display: inline-block;
		padding: 2px 4px;
		font-size: 12px;
		margin-left: 4px;
	}
	.ctx {
		font-size: 16px;
		color: #4a4a4a;
		line-height: 1;
		margin-top: 1.25rem;
	}
	.num {
		font-family: "ggFont";
		// font-size: 38px;
		font-size: 48px;
		// line-height: 1.75rem;
	}
}
</style>
