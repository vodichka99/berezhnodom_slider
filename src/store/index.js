import { createStore } from "vuex";
import api from "@/api/axios";

export default createStore({
  state: {
    projectsContent: null,
    loading: false,
    error: null
  },
  mutations: {
    requestStart(state) {
      state.loading = true
    },
    requestSuccess(state, params) {
      state.loading = false
      state.projectsContent = params
    },
    requestFailure(state, error) {
      state.loading = false
      state.error = error
    },
  },
  actions: {
    getProjectsContent(context) {
      return new Promise(() => {
        context.commit('requestStart')
        api.getProjectsContent()
          .then(res => {
            context.commit('requestSuccess', res.data)
            console.log(res)
          })
          .catch(err => {
            context.commit('requestFailure', err)
            alert(err);
          })
      })
    }
  },
  getters: {
    getContent(state) {
      return state.projectsContent
    },
    getLoading(state) {
      return state.loading
    }
  },
  modules: {},
});
