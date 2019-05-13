<template>
	<div class="login_center">
		<Form ref="formCustom" :model="formCustom" :rules="ruleCustom">
			<FormItem prop="name">
				<Input type="text" v-model="formCustom.name" number placeholder="请输入用户名">
					<Icon type="ios-person-outline" slot="prepend" style="font-size:16px"></Icon>
				</Input>
			</FormItem>
			<FormItem prop="passwd">
				<Input type="password" v-model="formCustom.passwd" placeholder="请输入密码">
					<Icon type="ios-lock-outline" slot="prepend" style="font-size:16px"></Icon>
				</Input>
			</FormItem>
			<FormItem prop="verify" id="verify">
				<Input type="text" v-model="formCustom.verify" style="width:48%" placeholder="请输入验证码">
					<Icon type="ios-checkmark" slot="prepend" style="font-size:16px"></Icon>
				</Input>
				<button @click="yanzhengma" class="yaz">{{yzma}}</button>
			</FormItem>
			<div class="login_center_agree">
				<Checkbox v-model="single">记住密码</Checkbox>
				<router-link to="/reg">没有账号？点击注册</router-link>
			</div>
			<FormItem>
				<router-link :to=find>
					<Button type="primary" @click="handleSubmit('formCustom')">登录</Button>
				</router-link>
			</FormItem>
		</Form>
		
	</div>
</template>

<script>
	export default {
		name: 'login',
		data () {
            const validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('密码不能为空！'));
                } else {
                    callback();
                }
            };
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
				single: true,
				find:'',
                formCustom: {
                    passwd: '',
                    name: '',
					verify:''
                },
                ruleCustom: {
                    passwd: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
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
						this.$Message.success('恭喜您，登录成功!');
						if(this.single==true){
							let user_name = 
							localStorage.setItem(username,'')
						}else{
							return
						}
						this.find = '/'
					} else {
						this.$Message.error('登录失败，请正确填写您的用户名或密码！');
					}
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
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
	.login_center_agree{
		display: flex;
		justify-content: space-between;
		margin-bottom: 4%;
	}
	.login_center{
		padding-top: 15%;
		padding-bottom: 79.2%;
	}
</style>
