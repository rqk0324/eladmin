<template>
	<div class="find_center">
		<Form ref="formCustom" :model="formCustom" :rules="ruleCustom">
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
			<FormItem>
				<router-link :to=find>
					<Button type="primary" @click="handleSubmit('formCustom')">重置密码</Button>
				</router-link>
			</FormItem>
		</Form>
		
	</div>
</template>

<script>
	export default {
		name: 'find',
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
            return {
				find:'',
                formCustom: {
                    passwd: '',
                    passwdCheck: ''
                },
                ruleCustom: {
                    passwd: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    passwdCheck: [
                        { validator: validatePassCheck, trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
					if (valid) {
						this.$Message.success('密码重置成功，正在为您跳转...');
						this.find = '/'
					} else {
						this.$Message.error('密码输入错误，请正确填写！');
					}
                })
            }
        }
	}
</script>

<style scoped>
	button{
		width: 100%;
		letter-spacing: 8px;
	}
	.find_center{
		padding-top: 10%;
		padding-bottom: 107.7%;
	}
</style>
