<template>
    <div>
        <app-menu-bar>

        </app-menu-bar>
        <app-login-form>

        </app-login-form>
    </div>


</template>

<script>
    import AppLoginForm from "./AppLoginForm";
    import AppMenuBar from "./AppMenuBar";

    export default {
        name: "AppLoginPage",
        components: {
            AppMenuBar,
            AppLoginForm,
            // AppRoot: () => import('./AppRoot'),
            // AppLoginForm: () => import('./AppLoginForm')
        }
    }
</script>

<style scoped>

</style>
