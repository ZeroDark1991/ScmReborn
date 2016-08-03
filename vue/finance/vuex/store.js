import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    productlist_wash: []
}

const mutations = {
    //洗车
    ['SET_PRODUCTLIST_WASH'] (state, arr) {
        state.productlist_wash = arr
    },
    ['ADD_PRODUCT_WASH'] (state, arr) {
        state.productlist_wash.concat(arr)
    },  
}

export default new Vuex.Store({
    state,
    mutations,
    strict: true
})
