<template>
	<div class="wrap">
		<div class="login-box">
			<img src="@/assets/logo.png" class="login-logo">
			<a-form class='login-form'>
				<a-form-item>
					<a-input placeholder='手机号码' size="large">
						<a-icon type="user" slot="addonBefore" class="icon-prefix" />
						<span slot="prefix" class="phone-prefix">+86</span>
					</a-input>
				</a-form-item>
				<div class="parent-box" :class="{password:loginMethod=='password',code:loginMethod=='code'}">
					<div class="child password-login">

						<a-form-item>
							<a-input type='password' placeholder='密码' size="large">
								<a-icon type="lock" slot="addonBefore" />
							</a-input>
						</a-form-item>
						<a-form-item style="margin-top:-5px;">
							<a-checkbox class="login-form-remember">记住密码</a-checkbox>
							<p class='login-form-forgot'>
								<a class="blue" @click="changeLoginMethod('code')">验证码登录</a><br>
								<a>忘记密码</a>
							</p>

							<!-- Or <a href=''>register now!</a> -->
						</a-form-item>

					</div>

					<div class="child code-login">
						<a-form-item>
							<a-input type='password' placeholder='验证码' size="large" enterButton class="login-send-code">
								<a-icon type="lock" slot="addonBefore" />
								<span slot="addonAfter" size="small" @click="sendCode()" style="margin: -10px;padding: 10px;">获取验证码</span>
							</a-input>
						</a-form-item>
						<a-form-item style="margin-top:-5px;">
							<p class='login-form-forgot'>
								<a class="blue" @click="changeLoginMethod('password')">密码登录</a><br>
							</p>
						</a-form-item>
					</div>
				</div>

				<a-form-item style="margin-top:-10px;">
					<a-button type='primary' htmlType='submit' class='login-form-button' size="large" @click="login()">
						登录
					</a-button>
				</a-form-item>
			</a-form>
		</div>
	</div>
</template>

<script>
export default {
    data() {
        return {
            loginMethod: "password"
        };
    },
    methods: {
        onSearch(value) {
            console.log(value);
        },
        changeLoginMethod(type) {
            this.loginMethod = type;
        },
        sendCode() {
            this.$message.error("登录失败了呀！",60);
		},
		login(){
			this.$router.push({
				path:'admin/index'
			})
		}
    }
};
</script>

<style lang="less" scoped>
.wrap {
	background: #3a3758 url('../assets/bg.png') no-repeat 50% 50%;
    position: relative;
    width: 100vw;
    height: 100vh;
    .login {
        &-box {
            width: 480px;
            border-radius: 5px;
            background: #fff;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            .phone-prefix {
                color: #aaa;
            }
        }
        &-form {
            width: 300px;
            margin: 0 auto 40px;
            overflow: hidden;
            &-forgot {
                float: right;
                line-height: 22px;
                padding-top: 10px;
                text-align: right;
                .blue {
                    color: #5353b3;
                }
            }
            &-button {
                width: 100%;
            }
            &-remember {
                float: left;
                color: #777;
            }
            .parent-box {
                width: 660px;
                overflow: hidden;
                transition: all 0.2s ease-in-out;
                &.password {
                    transform: translate3d(0, 0, 0);
                }
                &.code {
                    transform: translate3d(-50%, 0, 0);
                }
                .child {
                    width: 300px;
                    float: left;
                    margin-right: 30px;
                }
            }
        }
        &-logo {
            margin: 30px auto;
			width: 145px;
			display: block;
        }
    }
}
</style>

