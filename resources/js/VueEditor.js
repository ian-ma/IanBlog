require('./ckeditor5/build/ckeditor');


let VueEditor;
    VueEditor= {
    install(Vue, options) {
        Vue.prototype.$ClassicEditor = ClassicEditor;
    }
};
export default VueEditor;
