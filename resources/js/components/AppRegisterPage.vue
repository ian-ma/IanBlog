<template>
    <div>
        <app-menu-bar></app-menu-bar>
        <app-register></app-register>
    </div>
</template>

<script>
    import AppMenuBar from "./AppMenuBar";
    import AppRegister from "./AppRegister"
    export default {
        name: "AppRegisterPage",
        components: {AppMenuBar,AppRegister}
    }
</script>

<style scoped>

</style>
