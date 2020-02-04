<template>
    <el-row>
        <el-col :span="24">
            <header style="display: flex;justify-content: space-between;">
                <el-menu mode="horizontal" style="flex-grow: 1;display: flex">
                    <el-menu-item>
                        <img id="icon-image" width="60" height="60" src="/pic/tank-vector-png100x100.png" alt="icon"
                             @click="handleClick"/>
                    </el-menu-item>
                    <el-menu-item>
                        Dashboard
                    </el-menu-item>
                    <el-menu-item v-for="category in categories" @click="gotoUrl(category.src)" :key="category.id">
                        {{category.title}}
                    </el-menu-item>
                    <el-menu-item>
                        About Me
                    </el-menu-item>
                    <el-menu-item style="width: max-content;flex-grow: 1"></el-menu-item>
                    <el-menu-item>
                        <el-input placeholder="search">
                            <i id="search-icon" slot="suffix" class="el-icon-search" @click="handleClick"></i>
                        </el-input>
                    </el-menu-item>
                    <el-menu-item>
                        <el-dropdown trigger="click">
                            <i class="el-icon-s-tools" style="font-size: 30px"/>
                            <el-dropdown-menu slot="dropdown" width="400">
                                <el-dropdown-item>
                                    Profile
                                </el-dropdown-item>
                                <el-dropdown-item>
                                    Setting
                                </el-dropdown-item>
                                <el-dropdown-item divided>
                                    <i @click="logout">Logout</i>
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </el-menu-item>
                </el-menu>
            </header>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "AppMenuBar",
        methods: {
            handleClick: function (e) {
                console.log(e);
                this.$notify({
                    title: e.type + " " + e.target.id,
                    offset: 61
                })
            },
            gotoUrl: function (url) {
                window.location.href = url
            },
            logout: function () {
                console.log('logout');
                this.$post('/logout', '')
            }
        },

        data: function () {
            return {
                // Fake data
                categories: [
                    {title: 'Vue', src: '/vue'},
                    {title: 'Laravel', src: '/laravel'},
                    {title: 'Movie', src: '/movie'},
                    {title: 'Build this site', src: '/this-site'}
                ]
            }
        }
    }
</script>

<style scoped>

</style>
