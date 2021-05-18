import Vue from "vue";
import VueMaterial from "vue-material";
import Datetime from "vue-datetime";

import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
import "vue-datetime/dist/vue-datetime.css";


export default {
    install(Vue) {
        Vue.use(VueMaterial);
        Vue.use(Datetime);
    }
}

Vue.use(VueMaterial);