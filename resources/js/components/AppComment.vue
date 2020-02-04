<template>
    <div ref="comment_board_border" class="comment_board_border">
        <strong>{{title}}</strong>
        <span>{{body}}</span>
        <p>by <span>{{author}}</span> at {{postTime.toString()}}</p>
    </div>
</template>

<script>
    export default {
        name: "AppComment",
        props:{
            title:{type:String},
            body:{type: String},
            postTime:{type:Date},
            author:{type:String}
        }
    }
</script>

<style scoped>
    .comment_board_border{
        width: 100%;
    }
</style>
