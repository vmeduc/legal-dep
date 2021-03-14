import Vue from 'vue';
import VueMaterial from "vue-material";

import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'


export default {
    install(Vue) {
        Vue.use(VueMaterial);
    }
}

Vue.use(VueMaterial);