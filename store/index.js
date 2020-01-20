import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		uerInfo: {},
		hasLogin: false
	},
	mutations: {
		login(state, provider) {
			state.hasLogin = true
			state.uerInfo.sessionId = provider.sessionId
			uni.setStorage({
				key: 'login_key',
				data: provider
			})
		},
		logout(state) {
			state.hasLogin = false
			state.uerInfo = {}
			uni.removeStorage({
				key: 'login_key'
			});
		}
	}
})

export default store
