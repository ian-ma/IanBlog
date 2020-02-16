require('./ckeditor5/build/ckeditor');
let editor;
ClassicEditor
    .create(document.querySelector('#editor'), {

            toolbar: {
                items: [
                    'heading',
                    '|',
                    'bold',
                    'underline',
                    'italic',
                    'highlight',
                    'fontFamily',
                    'fontColor',
                    'fontBackgroundColor',
                    'fontSize',
                    'link',
                    'bulletedList',
                    'numberedList',
                    '|',
                    'indent',
                    'outdent',
                    '|',
                    'undo',
                    'redo',
                    'removeFormat',
                    '|',
                    'imageUpload',
                    'mediaEmbed',
                    '|',
                    'insertTable',
                    'blockQuote',
                    'horizontalLine',
                    'codeBlock',
                    'code',
                    '|'
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
            licenseKey: '',
            simpleUpload: {
                uploadUrl: '/upload',
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
                }
            },
        }
    )
    .then(editor => {
        window.editor = editor;


    })
    .catch(error => {
        console.error(error);
    });
