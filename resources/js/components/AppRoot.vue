<template>
    <div>
        <app-menu-bar>

        </app-menu-bar>
        <slot>

        </slot>
    </div>
</template>

<script>
    const AppMenuBar = () => import("./AppMenuBar");
    export default {
        name: "AppRoot",
        components: {AppMenuBar},
        methods: {}

    }
</script>

<style type="scss" scoped>
    .el-card{
        margin-bottom: 10px;
    }


</style>
