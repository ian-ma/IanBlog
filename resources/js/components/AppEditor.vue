<template>
    <div>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon3">Post Title</span>
            </div>
            <input type="text" class="form-control" id="title" v-model="title">
        </div>
        <div class="alert alert-danger" v-show="error.title">{{error.title}}</div>
        <div id="editor" style="min-height: 300px">

        </div>
        <div class="alert alert-danger" v-show="error.body">{{error.body}}</div>
        <div class="row justify-content-end">
            <button class="btn btn-primary" id="save" style="margin-top: 5px;margin-right: 15px" @click="getEditorData">
                Save
            </button>
        </div>
    </div>

</template>

<script>
    export default {
        name: "AppEditor",
        data: function () {
            return {
                editor: null,
                title: '',
                error: {
                    title: null,
                    body: null
                },
                du: 5000
            }
        },
        watch: {
            error: function () {
                let tint;
                let bint;
                if (this.error.title != null) {
                    tint = setInterval(() => {
                        this.error.title = null;
                        clearInterval(tint)
                    }, this.du);
                }
                if (this.error.body != null) {
                    bint = setInterval(() => {
                        this.error.body = null;
                        clearInterval(bint)
                    }, this.du)
                }
            }
        },
        methods: {
            getEditorData: function () {
                console.log(1, this.editor.getData());
                let formData = new FormData();
                formData.append('title', this.title);
                formData.append('body', this.editor.getData());
                window.axios.post('/post', formData)
                    .then((res) => {
                        if (res.data.success){
                            window.location.href='/post/'+res.data.post.id;
                        }else{
                            this.error = res.data.error
                        }
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }
        },
        mounted() {
            this.$ClassicEditor
                .create(document.querySelector('#editor'), {
                    toolbar: {
                        items: [
                            'heading',
                            '|',
                            'removeFormat',
                            'bold',
                            'italic',
                            'link',
                            'bulletedList',
                            'numberedList',
                            '|',
                            'indent',
                            'outdent',
                            '|',
                            'imageUpload',
                            'blockQuote',
                            'insertTable',
                            'mediaEmbed',
                            'undo',
                            'redo',
                            '|',
                            'highlight',
                            'fontColor',
                            'fontBackgroundColor',
                            'fontSize',
                            'fontFamily',
                            '|',
                            'code',
                            'codeBlock'
                        ]
                    },
                    language: 'en',
                    image: {
                        toolbar: [
                            'imageTextAlternative',
                            'imageStyle:full',
                            'imageStyle:side'
                        ]
                    },
                    table: {
                        contentToolbar: [
                            'tableColumn',
                            'tableRow',
                            'mergeTableCells'
                        ]
                    },
                    simpleUpload: {
                        uploadUrl: '/upload',
                        headers: {
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
                        }
                    },
                    licenseKey: '',
                })
                .then(editor => {
                    this.editor = editor;
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }
</script>

<style scoped>

</style>
