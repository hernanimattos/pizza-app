import Vue from 'vue';
import Vuex from 'vuex';
import Provider from '../provider/Provider';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    pizza: {
      namespaced: true,
      orderStatus: {},
      state: {
        sizes: [],
        fillings: [],
        doughs: [],
        pizzaOfTheDay: [],
        pizza: {
          size: '',
          filling: '',
          dough: '',
        },
      },
      mutations: {
        setPizzaSize(state, payload) {
          state.pizza.size = payload;
        },
        setPizzaFilling(state, payload) {
          state.pizza.filling = payload;
        },
        setPizzaDough(state, payload) {
          state.pizza.dough = payload;
        },
        controlSteps(state, payload) {
          state.step = payload;
        },
        setPizzasSizes(state, payload) {
          state.sizes = payload;
        },
        setPizzasFillings(state, payload) {
          state.fillings = payload;
        },
        setPizzasDoughs(state, payload) {
          state.doughs = payload;
        },
        setPizzasPromotion(state, payload) {
          state.pizzaOfTheDay = payload;
        },
        setOrderSuccess(state, payload) {
          state.orderStatus = payload
        }
      },
      actions: {
        getPizzaSize({
          commit
        }, payload) {
          commit('setPizzaSize', payload);
        },
        getPizzaFilling({
          commit
        }, payload) {
          commit('setPizzaFilling', payload);
        },
        getPizzaDough({
          commit
        }, payload) {
          commit('setPizzaDough', payload);
        },
        controlSteps({
          commit
        }, payload) {
          commit('controlSteps', payload);
        },
        async getPizzasSizes({
          commit
        }, payload) { // eslint-disable-line
          try {
            const {
              data
            } = await Provider.get('/sizes');
            commit('setPizzasSizes', data);
            Promise.resolve();
          } catch (e) {
            console.log('erro=>', e);
            Promise.reject();
          }
        },
        async getPizzasFillings({
          commit
        }, payload) { // eslint-disable-line
          try {
            const {
              data
            } = await Provider.get('/fillings');
            commit('setPizzasFillings', data);
            Promise.resolve();
          } catch (e) {
            console.log('erro=>', e);
            Promise.reject();
          }
        },

        async getPizzasDoughs({
          commit
        }, payload) { // eslint-disable-line
          try {
            const {
              data
            } = await Provider.get('/doughs');
            commit('setPizzasDoughs', data);
            Promise.resolve();
          } catch (e) {
            console.log('erro=>', e);
            Promise.reject();
          }
        },

        async getPizzasInPromotion({
          commit
        }, palyload) { // eslint-disable-line
          try {
            const {
              data
            } = await Provider.get('/product/promotion')
            commit('setPizzasPromotion', data);
            Promise.resolve();
          } catch (e) {
            console.log('erro=>', e);
            Promise.reject();
          }
        },
        async paymentPromtionPizza({
          commit // eslint-disable-line
        }, id) { // eslint-disable-line
          try {
            const {
              data
            } = await Provider.post('/product/order-promotion', {
              id: id
            });
            commit('setOrderSuccess', data);
            Promise.resolve();
          } catch (e) {
            console.log('erro=>', e);
            Promise.reject();
          }

        },
        async paymentPizza({
          commit // eslint-disable-line
        }, id) { // eslint-disable-line
          try {
            const {
              data
            } = await Provider.post('/product/order', {
              id: id
            });
            commit('setOrderSuccess', data);
            Promise.resolve();
          } catch (e) {
            console.log('erro=>', e);
            Promise.reject();
          }
        }
      },
    },
  },
});
