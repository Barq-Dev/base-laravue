import router from '@/router'
export default {
  namespaced: true,
  state: {
    moduleName: '',
    moduleUrl: '',
    loading: false,
    item: {},
    items: [],
    params: [],
    options: {
      current_page: 1,
      page: 1,
      per_page: 10,
      last_page: 0,
      q: null,
      sortby: null,
      sortbydesc: null,
    },
    errors: {},
    notify: {},
    standby: false,
    total: 0,
  },
  mutations: {
    SET_MODULE_NAME(state, value) {
      state.moduleName = value
      state.moduleUrl = this._vm._.kebabCase(value)
    },
    SET_OPTIONS(state, value) {
      // state.options = value
      state.options.q = value.q
      // state.options.page = value.page
      state.options.current_page = value.current_page
      state.options.last_page = value.last_page
      // state.options.per_page = value.itemsPerPage
      // state.options.sortby = value.sortBy && value.sortBy[0]
      // state.options.sortbydesc = value.sortDesc && value.sortDesc[0] ? 'desc' : 'asc'
    },
    SET_ERRORS(state, value) {
      // state.errors = Object.assign(state.errors, value)
      state.errors = {
        ...value
      }
    },
    DEL_ERRORS(state, value) {
      delete state.errors[value]
    },
    CLEAR_ERRORS(state, value) {
      state.errors = {}
      state.notify = {}
    },

    SET_ITEM(state, value) {
      state.item = value
    },
    SET_ITEMS(state, value) {
      state.items = value
    },
    SET_TOTAL(state, value) {
      state.total = value
    },
    SET_STANDBY(state, value) {
      state.standby = !state.standby
      console.log(state.standby);
    },
  },
  actions: {
    getData({ state, commit }, { customUrl, params, id } = {}) {
      return new Promise(async (resolve) => {
        state.loading = true

        let url = `${customUrl || state.moduleUrl}` + (id ? `/${id}` : ``)
        const { data } = await this._vm.$http(url, {
          params: { ...state.options, ...params }
        })
        resolve(data)
        if (id) {
          commit('SET_ITEM', data)
        }
        else {
          commit('SET_ITEMS', data.data)
          commit('SET_TOTAL', data.total)
          commit('SET_OPTIONS', data)
        }

        state.loading = false
      })
    },

    async saveData({ state, commit, dispatch }, { customUrl, data, params = {} }) {
      state.loading = true


      let result = await this._vm.$http.post(customUrl || state.moduleUrl, data)
        .then((res) => {
          commit('CLEAR_ERRORS')
          state.notify = { 'success': 'Data Berhasil disimpan' }
          this._vm.$swal('Success', 'Data has been saved', 'success')
          
          return res
        })
        .catch(({ response }) => {
          commit('SET_ERRORS', response.data)
          this._vm.$swal('Failed', 'Failed to save data', 'error')
        })

      if (!params.noState)
        dispatch('getData')

      state.loading = false
      return result
    },

    async deleteData({ state, dispatch }, { customUrl, data, params = {} }) {
      state.loading = true

      await this._vm.$http.delete(`${customUrl || state.moduleUrl}/${data.id}`, { ...data, params })
        .then(() => {
          this._vm.$swal('Success', 'Data has been deleted', 'success')
        })
        .catch((error) => {
          this._vm.$swal('Failed', 'Failed to delete data', 'error')
        })
      if (!params.noState)
        dispatch('getData')
      state.loading = false
    }
  },
}
