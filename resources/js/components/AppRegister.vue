<template>
    <el-card style="width: 400px;margin: auto" :style="{marginTop:(windowHeight-590)/3 + 'px'}">
        <el-form :model="registerData" method="post" :action="formAction">
            <input type="hidden" name="_token" :value="csrfToken"></input>
            <el-form-item label="NAME">
                <el-input v-model="registerData.name" type="text" name="name" autofocus autocomplete="name"
                          aria-required="true">
                </el-input>
            </el-form-item>
            <el-form-item label="EMAIL ADDRESS">
                <el-input v-model="registerData.email" type="email" name="email" aria-required="true">
                </el-input>
            </el-form-item>
            <el-form-item label="PASSWORD">
                <el-input v-model="registerData.password" type="password" name="password" aria-required="true">
                </el-input>
            </el-form-item>
            <el-form-item label="PASSWORD CONFIRM">
                <el-input v-model="registerData.confirm" type="password" name="password_confirmation"></el-input>
                <el-alert type="warning" v-show="passwordConfirmText">{{passwordConfirmText}}</el-alert>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" style="width: 100%" nativeType="submit">
                    Register
                </el-button>
            </el-form-item>
        </el-form>
    </el-card>
<!--    <form method="POST" action="{{ route('register') }}">-->
<!--        @csrf-->

<!--        <div class="form-group row">-->
<!--            <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('Name') }}</label>-->

<!--            <div class="col-md-6">-->
<!--                <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name"-->
<!--                       value="{{ old('name') }}" required autocomplete="name" autofocus>-->

<!--                @error('name')-->
<!--                <span class="invalid-feedback" role="alert">-->
<!--                                        <strong>{{ $message }}</strong>-->
<!--                                    </span>-->
<!--                @enderror-->
<!--            </div>-->
<!--        </div>-->

<!--        <div class="form-group row">-->
<!--            <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('E-Mail Address') }}</label>-->

<!--            <div class="col-md-6">-->
<!--                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email"-->
<!--                       value="{{ old('email') }}" required autocomplete="email">-->

<!--                @error('email')-->
<!--                <span class="invalid-feedback" role="alert">-->
<!--                                        <strong>{{ $message }}</strong>-->
<!--                                    </span>-->
<!--                @enderror-->
<!--            </div>-->
<!--        </div>-->

<!--        <div class="form-group row">-->
<!--            <label for="password" class="col-md-4 col-form-label text-md-right">{{ __('Password') }}</label>-->

<!--            <div class="col-md-6">-->
<!--                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror"-->
<!--                       name="password" required autocomplete="new-password">-->

<!--                @error('password')-->
<!--                <span class="invalid-feedback" role="alert">-->
<!--                                        <strong>{{ $message }}</strong>-->
<!--                                    </span>-->
<!--                @enderror-->
<!--            </div>-->
<!--        </div>-->

<!--        <div class="form-group row">-->
<!--            <label for="password-confirm" class="col-md-4 col-form-label text-md-right">{{ __('Confirm Password')-->
<!--                }}</label>-->

<!--            <div class="col-md-6">-->
<!--                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required-->
<!--                       autocomplete="new-password">-->
<!--            </div>-->
<!--        </div>-->

<!--        <div class="form-group row mb-0">-->
<!--            <div class="col-md-6 offset-md-4">-->
<!--                <button type="submit" class="btn btn-primary">-->
<!--                    {{ __('Register') }}-->
<!--                </button>-->
<!--            </div>-->
<!--        </div>-->
<!--    </form>-->
</template>

<script>
    export default {
        name: "AppRegister",
        data: function () {
            return {
                registerData: {
                    name:'',
                    email: '',
                    password: '',
                    confirm: ''
                },
                formAction:'',
                csrfToken:'',
                windowHeight: 0,
                errors:[]
            }
        },
        computed: {
            passwordConfirmText() {
                if (this.registerData.password !== this.registerData.confirm) {
                    return "Check your password conformity"
                }else{
                    return null
                }
            }
        },
        mounted() {
            //
            this.windowHeight = window.innerHeight;
            window.addEventListener('resize', () => {
                // console.log(window.innerHeight);
                console.log(this.windowHeight);
                this.windowHeight = window.innerHeight

            });

            //
            this.csrfToken=window.App.csrfToken;
            this.formAction=window.App.formAction;
            this.registerData.name=window.App.registerData.name;
            this.registerData.email=window.App.registerData.email;
            this.errors=window.App.errors;

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
