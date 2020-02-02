<template>
    <el-card style="width: 400px;margin: auto" :style="{marginTop:(windowHeight-360)/3 + 'px'}">
        <el-form :model="login_data" method="post" :action="formAction">
            <input type="hidden" name="_token" :value="csrfToken"></input>
            <el-form-item label="EMAIL ADDRESS">
                <el-input v-model="login_data.email" type="email" :value="login_data.email" name="email">
                </el-input>
            </el-form-item>
            <el-form-item label="PASSWORD">
                <el-input v-model="login_data.password" type="password" name="password">
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" style="width: 100%" nativeType="submit">
                    Login
                </el-button>
            </el-form-item>
            <a href="/register" style="font-size: small">Don't have account? Register here</a>
        </el-form>
    </el-card>


</template>

<script>
    export default {
        name: "AppLogin",
        props: {
        },
        data: function () {
            return {
                login_data: {
                    email: '',
                    password: ''
                },
                errors: [],
                csrfToken: '',
                formAction: '',
                place_holder_height: 50,
                windowHeight: 0,
                registerUrl:''
            }
        },
        methods: {},
        mounted: function () {

            //
            this.windowHeight = window.innerHeight;
            window.addEventListener('resize', () => {
                // console.log(window.innerHeight);
                console.log(this.windowHeight);
                this.windowHeight = window.innerHeight

            });

            this.login_data.email = window.App.email;
            this.errors = window.App.errors;
            this.csrfToken = window.App.csrfToken;
            this.formAction = window.App.formAction;
            this.registerUrl=window.App.registerUrl;

            //todo may be a bug while native speed emit notice
            if (this.errors.length > 0) {
                let count = 0;
                let timer = setInterval(() => {
                    this.$notify.error(
                        {
                            title: 'Error',
                            message: window.App.errors[count],
                            offset:60,
                            duration:10000
                        }
                    );
                    count++;
                    if (count >= this.errors.length) {
                        clearInterval(timer)
                    }
                }, 1);
            }
        }
    }
</script>

<style scoped>

</style>
