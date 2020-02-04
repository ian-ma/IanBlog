<template>
    <div class="post_board_border" ref="post_board_border">
        <h3>{{title}}</h3><small>{{postTime}}</small> <span> by </span> <strong>{{author}}</strong>
        {{body}}
    </div>

    <app-comment
        v-for="comment in comments"
        :title="comment.title"
        :body="comment.body"
        :postTime="comment.postTime"
        :author="comment.author">
    </app-comment>
</template>

<script>
    import AppComment from "./AppComment";

    export default {
        name: "AppPostsList",
        components: {AppComment},
        props: {
            postTime: {type: Date},
            title: {type: String},
            body: {type: String},
            author: {type: String},
            description: {type: String},
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
    .post_board_border {
        width: 100%;

    }

</style>
