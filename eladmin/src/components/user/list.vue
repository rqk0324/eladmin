<template>
	<div class="list">
		<list_top></list_top>
		<list_center></list_center>
	</div>
</template>

<script>
	import list_center from "./list_center";
	import list_top from "./list_top";

	export default {
		name: 'list',
		components:{
			list_top,list_center
		}
	}
</script>

<style scoped>
	.list{
		padding: 1%;
		background: #e9e9e9;
	}
</style>
