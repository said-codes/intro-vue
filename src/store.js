import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        message : 'Hello world with vuex',
    },
    mutations: {
        setMessage(state, newMessage){
            state.message = newMessage;
        }
    }

});