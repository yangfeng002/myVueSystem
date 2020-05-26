/**
 *
 * 功能描述: vuex
 * @author    fy
 * @version  [版本号, 2019/9/24 17:30]
 * 更新信息 [版本，更新功能，作者，更新日期]
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
     state:{
       count:0
     },
     mutations:{
       increment (state) {
         state.count++
       }
     }
})

export default store
