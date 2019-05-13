<template>
	<div class="reg_center">
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
			<FormItem prop="passwd">
				<Input type="password" v-model="formCustom.passwd" placeholder="请输入密码">
					<Icon type="ios-lock-outline" slot="prepend" style="font-size:16px"></Icon>
				</Input>
			</FormItem>
			<FormItem prop="passwdCheck">
				<Input type="password" v-model="formCustom.passwdCheck" placeholder="请再次输入密码">
					<Icon type="ios-lock-outline" slot="prepend" style="font-size:16px"></Icon>
				</Input>
			</FormItem>
			<div class="reg_center_agree">
				<Checkbox v-model="single">同意用户协议</Checkbox>
				<router-link to="/findpass">忘记密码？点击找回</router-link>
			</div>
			<FormItem>
				<Button type="primary" @click="handleSubmit('formCustom')">注册</Button>
				<Button @click="handleReset('formCustom')" style="margin-left:3%">重置</Button>
			</FormItem>
		</Form>
		
	</div>
</template>

<script>
	export default {
		name: 'reg',
		data () {
            const validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('密码不能为空！'));
                } else {
                    if (this.formCustom.passwdCheck !== '') {
                        // 对第二个密码框单独验证
                        this.$refs.formCustom.validateField('passwdCheck');
                    }
                    callback();
                }
            };
            const validatePassCheck = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('确认密码不能为空！'));
                } else if (value !== this.formCustom.passwd) {
                    callback(new Error('两次密码输入不一致!'));
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
                formCustom: {
                    passwd: '',
                    passwdCheck: '',
                    name: '',
					verify:''
                },
                ruleCustom: {
                    passwd: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    passwdCheck: [
                        { validator: validatePassCheck, trigger: 'blur' }
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
					if (this.single!=true) {
					    this.$Message.error('注册失败，请先同意用户协议！');
					}else {
						if (valid) {
						    this.$Message.success('恭喜您，注册成功!');
						} else {
						    this.$Message.error('注册失败，请正确填写信息！');
						}
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
		width: 48%;
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
	.reg_center_agree{
		display: flex;
		justify-content: space-between;
		margin-bottom: 4%;
	}
	.reg_center{
		padding-top: 10%;
		padding-bottom: 69.6%;
	}
</style>
