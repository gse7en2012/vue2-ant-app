<template>
	<a-layout-content :style="{ margin: '0' }">
		<a-tabs defaultActiveKey="1" class="great-tabs">
			<a-tab-pane tab="订单统计" key="1">
				<DataIndex/>
			</a-tab-pane>
			<a-tab-pane tab="充电站统计" key="2" forceRender>
				<DataPart/>
			</a-tab-pane>
		</a-tabs>
	</a-layout-content>
</template>
<script>
import DataIndex from "@/components/DataIndex";
import DataPart from "@/components/DataPart";

export default {
	components: {
		DataIndex,
		DataPart
	},
	data() {
		return {
			screenHeight: document.documentElement.clientHeight + "px"
		};
	},
	async mounted() {},
	methods: {}
};
</script>

<style lang="less" scoped>
</style>
