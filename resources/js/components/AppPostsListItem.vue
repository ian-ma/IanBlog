<!--post item-->

<template>
    <iframe  ref="post_board_border">
        <h3>{{title}}</h3><small>{{postTime}}</small> <span> by </span> <strong>{{author}}</strong>
        <div v-html="body"></div>
        <app-comment
            v-for="comment in comments"
            :key="comment.id"
            :title="comment.title"
            :body="comment.body"
            :postTime="comment.postTime"
            :author="comment.author">
        </app-comment>
        <el-divider></el-divider>
    </iframe>

</template>

<script>
    import AppComment from "./AppComment";

    export default {
        name: "AppPostsListItem",
        components: {AppComment},
        props: {
            //post prop
            postTime: {type: Date},
            title: {type: String},
            body: {type: String},
            author: {type: String},
            description: {type: String},
            //comments prop
            comments: [{
                title: {type: String},
                body: {type: String},
                postTime: {type: Date},
                author: {type: String}
            }]
        }
    }
</script>

<style scoped>

</style>
