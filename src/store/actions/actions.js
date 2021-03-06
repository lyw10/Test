import model from 'model'
// const axios = require('axios');

export default {
    fetchHeader ({commit}) {
        return model.getHeader()
        .then(data => {commit('saveHeader',data.data)})
        .catch(err => console.error(err))
    },
    fetchMain ({commit}) {
        return model.getMain()
        .then(data => {commit('saveMain',data.data)})
        .catch(err => console.error(err))
    },
    login({commit},{username,password}){
        return model.login(username,password)
        .then(data => console.log(data))
        .catch(err => console.error(err))
    },
    newHeader({commit},data){
        console.log('actions',data);
        return model.newHeader(data)
        .then(data => console.log(data))
        .catch(err => console.error(err))
    },
    updateCountAsycn(store, data) {
    setTimeout(() => {
      store.commit("updateCount", { num: data.num }); //因为updateCount中使用参数对象
    }, data.time);
    },
}