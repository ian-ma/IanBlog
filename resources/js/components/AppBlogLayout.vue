<template>
    <el-row style="padding-top: 15px" :gutter="10">


        <!--place holder-->
        <el-col :lg="5" :md="3" style="min-height: 100px" class="hidden-sm-and-down">

        </el-col>
        <!--main place-->
        <el-col :lg="14" :md="18" :sm="24" style="min-height: 400px">
            <el-card>
                <slot>

                </slot>
            </el-card>

        </el-col>
        <!--aside right-->
        <el-col :lg="4" style="min-height: 200px" class="hidden-md-and-down">
            <el-card>
                <span slot="header">avaitar</span>
            </el-card>
            <el-card>
                <span slot="header">top post</span>
            </el-card>
        </el-col>
    </el-row>

</template>

<script>
    export default {
        name: "AppBlogLayout"
    }
</script>

<style scoped>

</style>
