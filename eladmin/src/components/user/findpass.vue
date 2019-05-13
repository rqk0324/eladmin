<template>
	<div class="findpass">
		<div class="findpass_pages">
			<user_top></user_top>
			<findpass_center></findpass_center>
			<user_buttom></user_buttom>
		</div>
	</div>
</template>

<script>
	import user_top from "./user_top";
	import findpass_center from "./findpass_center";
	import user_buttom from "./user_buttom";

	export default {
		name: 'findpass',
		components:{
			user_top,findpass_center,user_buttom
		}
	}
</script>

<style scoped>
	.findpass{
		display: flex;
		justify-content: center;
		background: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557410977913&di=fa473343c68b6786e68edca23fd26888&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F1%2F547c288b605ba.jpg);
		background-size: cover;
	}
	.findpass_pages{
		height: 100%;
		width: 30%;
		padding-top: 10%;
		
	}
</style>
