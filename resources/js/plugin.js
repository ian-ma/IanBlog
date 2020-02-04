import Axios from "axios";
let Tools = {};

Tools.install = function (Vue, options) {
    Vue.prototype.$post = (url, data) => {
        return Axios.post(url, data)
    }
};
export default Tools
