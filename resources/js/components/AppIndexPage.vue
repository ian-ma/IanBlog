<template>
    <div>
        <app-menu-bar>

        </app-menu-bar>
        <el-row>
            <el-col :lg="6">
                <div style="height: 1px"></div>
            </el-col>
            <el-col :lg="12">
                <app-posts-list-item
                    style="max-height: 300px;padding-left: 5px;padding-right: 5px;padding-bottom: 15px"

                    v-loading="!posts"
                    v-show="posts"
                    v-for="post in posts"
                    :title="post.title"
                    :body="post.body">
                </app-posts-list-item>
            </el-col>
            <el-col :lg="4">
                <app-category>
                </app-category>
            </el-col>
        </el-row>

    </div>

</template>

<script>
    import AppMenuBar from "./AppMenuBar";
    import AppPostsListItem from "./AppPostsListItem";
    import AppCategory from "./AppCategory";

    export default {
        name: "AppIndexPage",
        props: {
        },
        data:function(){
            return{
                posts: [{
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
                }]
            }
        },
        components: {AppPostsListItem, AppCategory, AppPostsList: AppPostsListItem, AppMenuBar},
        mounted: function () {
            this.$get('/post').then((response) => {
                console.log(response.data);
                this.posts=response.data
            }).catch((err) => {
                console.log(err)
            })
        }
    }
</script>

<style scoped>

</style>
