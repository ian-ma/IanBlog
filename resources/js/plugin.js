import Axios from "axios";
let Tools = {};

Axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
Tools.install = function (Vue, options) {
    Vue.prototype.$post = (url, data) => {
        return Axios.post(url, data)
    };
    Vue.prototype.$get=function(url){
        return Axios.get(url);
    }
};
export default Tools
