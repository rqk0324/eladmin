<template>
	<div class="findpass_center">
		<Form ref="formCustom" :model="formCustom" :rules="ruleCustom">
			<FormItem prop="name">
				<Input type="text" v-model="formCustom.name" number placeholder="请输入用户名">
					<Icon type="ios-person-outline" slot="prepend" style="font-size:16px"></Icon>
				</Input>
			</FormItem>
			<FormItem prop="verify" id="verify">
				<Input type="text" v-model="formCustom.verify" style="width:48%" placeholder="请输入验证码">
					<Icon type="ios-checkmark" slot="prepend" style="font-size:16px"></Icon>
				</Input>
				<button @click="yanzhengma" class="yaz">{{yzma}}</button>
			</FormItem>
			<FormItem>
				<router-link :to=find>
					<Button type="primary" @click="handleSubmit('formCustom')">找回密码</Button>
				</router-link>
			</FormItem>
		</Form>
		
	</div>
</template>

<script>
	export default {
		name: 'findpass',
		data () {
            const validateName = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('用户名不能为空！'));
                }else {
                    callback();
                }
            };
			const validateverify = (rule, value, callback) => {
			    if (!value) {
			        return callback(new Error('验证码不能为空！'));
			    }else {
					if (value != this.yzma) {
						callback(new Error('验证码输入有误！'));
					} else {
						callback();
					}
			    }
			};
            
            return {
				yzma:'点击查看验证码',
				find:'',
                formCustom: {
                    name: '',
					verify:''
                },
                ruleCustom: {
                    name: [
                        { validator: validateName, trigger: 'blur' }
                    ],
					verify: [
					    { validator: validateverify, trigger: 'blur' }
					]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
					if (valid) {
						this.$Message.success('信息填写正确，正在为您跳转...');
						this.find = '/find'
					} else {
						this.$Message.error('用户名或验证码输入错误，请正确填写！');
					}
                })
            },
			yanzhengma (){
				var arr=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9','0'];
				var str='';
				while(str.length<4){
					var iNum=parseInt(Math.random()*100)
					while(iNum>36){
						iNum=parseInt(Math.random()*100)
					}
					str+=arr[iNum];
				}
				this.yzma = str;
			}
        }
	}
</script>

<style scoped>
	button{
		width: 100%;
		letter-spacing: 8px;
	}
	.yaz{
		margin-top: 1px;
		background: #17BED2;
		border-radius: 5px;
		width: 48%;
		letter-spacing: 8px;
		color: #fff;
		cursor: pointer;
		border: none;
		outline: none;
	}
	#verify .ivu-input-wrapper{
		float: left;
		margin-right: 4%;
	}
	.findpass_center_agree{
		display: flex;
		justify-content: space-between;
		margin-bottom: 4%;
	}
	.findpass_center{
		padding-top: 10%;
		padding-bottom: 107.5%;
	}
</style>
