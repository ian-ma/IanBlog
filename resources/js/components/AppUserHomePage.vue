<template>
    <div>
        <app-menu-bar>

        </app-menu-bar>
        <el-row style="margin-top: 10px">
            <el-col :lg="3" style="height: 1px;">

            </el-col>
            <el-col :lg="3" style="background-color: papayawhip">
                <el-image  shape="square"  fit="fill" style="width: 100%;height: auto">
                    <img src="/pic/avator.png" slot="placeholder">
                    <img src="/pic/avator.png" slot="error"></img>
                </el-image>
            </el-col>
            <el-col :lg="12" style="background-color: aliceblue">
                <span>email</span>
            </el-col>
        </el-row>
    </div>

</template>

<script>
    import AppMenuBar from "./AppMenuBar";

    export default {
        name: "AppUserHomePage",
        components: {AppMenuBar}
    }
</script>

<style scoped>


</style>
