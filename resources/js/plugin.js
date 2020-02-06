import Axios from "axios";
let Tools = {};

Tools.install = function (Vue, options) {
    Vue.prototype.$post = (url, data) => {
        return Axios.post(url, data)
    };
    Vue.prototype.$get=function(url){
        return Axios.get(url);
    }
};
export default Tools
