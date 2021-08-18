export default {
  saveHeader(state, data) {
    //   console.log('mutations')
    //   console.log(data.data)
    state.projectData.header = data.data;
  },
  saveMain(state, data) {
    // console.log('mutations')
    // console.log(data.data)
    state.projectData.main = data.data;
  },
};
