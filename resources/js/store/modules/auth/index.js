import router from '@/router'
import http from "@/plugins/axios";

const auth = async (state, dispatch, getters, app, payload) => {
  await http('auth')
    .then(({ data }) => {
      if (data.id != state.user.id) {
        window.Echo.private(`App.Models.User.${data.id}`).notification(
          (notification) => {
            dispatch('auth', payload);
            app.$swal({
              title: "Pemberitahuan",
              text: notification.message,
              icon: "info",
              showCancelButton: false,
              showConfirmButton: false,
              toast: true,
              position: "bottom-end",
              timer: 5000,
              timerProgressBar: true,
            });
          }
        );
      }
      state.user = data
      state.notifications = data.notifications
    })
    .catch(({ response }) => {
      dispatch('logout')
    })
}
export default {
  namespaced: true,
  state: {
    user: {},
    isAuth: localStorage.getItem('isAuth') || false,
    token: localStorage.getItem('token') || '',
    cancelTokens: [],
    error: '',

    loading: false,
    notifications: {
      all: [],
      unRead: [],
    }
  },
  getters: {
    cancelTokens(state) {
      return state.cancelTokens
    }
  },
  mutations: {
    SET_ERROR(state, value) {
      state.error = value
    },
    SET_LOADING(state, value = null) {
      state.loading = value
    },
    CLEAR_ERROR(state, value) {
      state.error = ''
    },
    LOGIN(state, data) {
      state.isAuth = true
      localStorage.setItem('isAuth', true)
      state.token = data.token
      localStorage.setItem('token', data.token)
    },
    LOGOUT(state) {
      // window.Echo.unsubscribe(`App.Models.User.${state.user.id}`)
      // Echo.private(`App.Models.User.${state.user.id}`)
      //   .stopListening('Illuminate\\Notifications\\Events\\BroadcastNotificationCreated')

      state.isAuth = false
      state.token = null
      state.user = {}
      localStorage.removeItem('isAuth')
      state.token = null
      localStorage.removeItem('token')
    },
    ADD_CANCEL_TOKEN(state, token) {
      state.cancelTokens.push(token)
    },
    CLEAR_CANCEL_TOKENS(state) {
      state.cancelTokens = []
    },
  },
  actions: {
    login({ commit }, data) {

      commit('CLEAR_ERROR')
      commit('SET_LOADING', true)

      this._vm.$http.post('auth', data)
        .then(async (response) => {
          await commit('LOGIN', response.data)

          commit('SET_LOADING')
          // router.push('/')
          window.location = '/panel'
        })
        .catch(({ response }) => {
          commit('SET_LOADING')
          commit('SET_ERROR', response.data.error)
        })
    },
    async logout({ commit }, data) {
      await commit('LOGOUT')
      router.push('/login')
    },
    async auth({ state, dispatch, getters }, payload) {
      if (payload.from && payload.from.name)
        auth(state, dispatch, getters, this._vm, payload)
      else
        await auth(state, dispatch, getters, this._vm, payload)
    },

    loadNotifications({ state }) {
      this._vm.$http
        .get('/notifications')
        .then(({
          data
        }) => state.notifications = data)
        .catch(({ response }) => { })
    },
    markAsRead({ dispatch }, payload) {
      this._vm.$http
        .get(`markAsRead/${payload.id || ''}`)
        .then(() => dispatch('loadNotifications'))
        .catch(({ response }) => { })
    },
    CANCEL_PENDING_REQUESTS(context) {
      context.state.cancelTokens.forEach((request, i) => {
        if (request.cancel) request.cancel()
      })

      context.commit('CLEAR_CANCEL_TOKENS')
    }
  },
}
