<template>
    <div>
        <app-menu-bar>

        </app-menu-bar>
        <el-row style="margin-top: 20px" :gutter="20">
            <el-col :lg="4" style="height: 1px;" ref="place_older">
            </el-col>
            <el-col :lg="3" id="user_avatar" ref="user_panel">
                <div style="border: #e7e7e7 1px solid; border-radius: 3px;padding-top: 10px;padding-bottom: 10px">
                    <el-image shape="square"
                              ref="avatar_img"
                              fit="fill"
                              :src="userInfo.avatar_url"
                              @error="testNote"
                              @click="testNote">
                        <img src="/pic/avatar.svg" slot="placeholder" alt="placeholder">
                        <img src="/pic/avatar.svg" slot="error" alt="error" @click="$refs.image_upload_control.click()">
                    </el-image>
                    <form ref="image_upload_form" action="/upload" method="post" enctype="multipart/form-data" hidden>
                        <input type="hidden" name="_token" :value="csrf"></input>
                        <input type="file" ref="image_upload_control" name="avatar" @change="uploadImage"></input>
                    </form>
                    <el-divider></el-divider>

                    <div style="padding-left: 15px;padding-right: 15px;">
                        <h3>Summary</h3>
                        <div v-show="!summary_show">
                            <p v-if="userInfo.summary">{{userInfo.summary}}
                                <button class="el-icon-edit" @click="edit"></button>
                            </p>
                            <p v-else>This is a lazy guy.
                                <button class="el-icon-edit" @click="edit"></button>
                            </p>
                        </div>
                        <el-input form="formuser" name="summary" type="textarea" v-show="summary_show"
                                  v-model="userInfo.summary">
                        </el-input>
                        <div v-show="edited_flag">
                            <el-divider></el-divider>
                            <el-button type="danger" @click="save">Save</el-button>
                        </div>
                    </div>

                </div>


            </el-col>
            <el-col :lg="10" ref="main_col" style="display: flex;justify-content: center">
                <el-card style="width: 100%">
                    <div slot="header" style="display: flex;justify-content: space-between">
                        <strong style="margin-left: 10px">{{userInfo.name}}</strong> <span style="margin-right: 10px">{{userInfo.email}}</span>
                    </div>
                    <el-form label-position="left" :model="userInfo" id="formuser" method="post" label-width="100px"
                             ref="formuser">
                        <input type="hidden" name="_token" :value="csrf"></input>
                        <el-form-item label="First name">
                            <el-input name="first_name" v-model="userInfo.first_name" :disabled="!edited_flag"><i
                                class="el-icon-edit" slot="append" @click="edit"></i></el-input>
                        </el-form-item>
                        <el-form-item label="Last name">
                            <el-input name="last_name" v-model="userInfo.last_name" :disabled="!edited_flag"><i
                                class="el-icon-edit" slot="append" @click="edit"></i></el-input>
                        </el-form-item>
                        <el-form-item label="Email">
                            <el-input name="email" v-model="userInfo.email" :disabled="!edited_flag"><i
                                class="el-icon-edit" slot="append" @click="edit"></i></el-input>
                        </el-form-item>
                        <input hidden name="avatar_url" v-model="userInfo.avatar_url"></input>
                    </el-form>
                </el-card>

            </el-col>
        </el-row>
    </div>

</template>

<script>
    import AppMenuBar from "./AppMenuBar";

    export default {
        name: "AppUserHomePage",
        components: {AppMenuBar},
        props: {
            csrf: {type: String},
            user: {type: Object},
            userDetail: {type: Object}
        },
        data: function () {
            return {
                userInfo: {
                    name: '',
                    email: '',
                    first_name: '',
                    last_name: '',
                    avatar_url: '',
                    summary: ''
                },
                summary_show: false,
                edited_flag: false

            }
        },
        methods: {
            testNote: function (message) {
                this.$notify.info({message: message.toString()});
                console.log(message)
            },
            uploadImage: function (e) {

                let fd = new FormData();
                fd.append('img', e.target.files[0]);
                this.$post('/upload', fd).then((v) => {
                    this.userInfo.avatar_url = v.data
                })
            },
            edit: function () {
                this.summary_show = true;
                this.edited_flag = true;
            },
            save: function () {
                let formData = new FormData();
                for(let i = 1;i<=this.userInfo.length;i++){

                }
                console.log(this.$data.userInfo.forEach())
                // this.userInfo.keys.map((k) => {
                //     formData.append(k, this.userInfo[k])
                // });
                // this.$post('/home', formData)
                //     .then((resp) => {
                //         console.log(resp)
                //     })
            }
        },
        mounted: function () {
            this.userInfo.name = this.user.name;
            this.userInfo.email = this.user.email;
            if (this.userDetail) {
                this.userInfo.first_name = this.userDetail.first_name;
                this.userInfo.last_name = this.userDetail.last_name;
                this.userInfo.summary = this.userDetail.summary;
            }
        }
    }
</script>

<style scoped>
    img {
        width: 100%;
        height: auto;
    }

</style>
