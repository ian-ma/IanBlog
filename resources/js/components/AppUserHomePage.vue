<template>
    <div>
        <app-menu-bar>

        </app-menu-bar>
        <slot>

        </slot>
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
