<template>
	<div class="list_top">
		<div class="list_top1">
			<p>手机号码：</p>
			<div>
				<Input placeholder="请输入手机号码" />
			</div>
			<p>性别：</p>
			<div>
				<Select v-model="model1" style="width:70px">
					<Option v-for="item in cityList1" :value="item.value" :key="item.value">{{ item.label }}</Option>
				</Select>
			</div>
			<p>昵称：</p>
			<div>
				<Input placeholder="用户昵称" />
			</div>
			<p>状态：</p>
			<div>
				<Select v-model="model2" style="width:70px">
					<Option v-for="item in cityList2" :value="item.value" :key="item.value">{{ item.label }}</Option>
				</Select>
			</div>
		</div>
		<div class="list_top2">
			<p>推荐人：</p>
			<div>
				<Input placeholder="推荐人手机号" />
			</div>
			<Button><Icon class="Icon" type="ios-search" />筛选</Button>
			<Button><Icon class="Icon" type="ios-add-circle-outline" />添加</Button>
			<Button><Icon class="Icon" type="md-cloud-download" />导出</Button>
			<Button><Icon class="Icon" type="md-cloud-upload" />导入</Button>
		</div>
	</div>
</template>

<script>
	export default {
		 data () {
            return {
                cityList1: [
                    {
                        value: '男',
                        label: '男'
                    },
                    {
                        value: '女',
                        label: '女'
                    }
                ],
				cityList2: [
				    {
				        value: '正常',
				        label: '正常'
				    },
				    {
				        value: '停用',
				        label: '停用'
				    }
				],
                model1: '',
                model2: ''
            }
        }
	}
</script>

<style scoped>
	.list_top{
		background: #fff;
		padding: 1%;
	}
	p{
		display: block;
		text-align: right;
		width: 5%;
		float: left;
		line-height: 32px;
	}
	.list_top1 div,.list_top2 div{
		float: left;
	}
	.list_top2{
		margin-top: 4%;
		clear: both;
	}
	.list_top2 button{
		background: #17BED2;
		color: #fff;
		margin-left: 1%;
	}
	.list_top2 button:nth-of-type(1){
		margin-left: 5%;
	}
	.Icon{
		font-size: 14px;
	}
</style>
