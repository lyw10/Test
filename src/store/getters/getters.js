export default {
//   projectTitle(state) {
//     return state.projectData.header[$route.params.id - 1].title;
//     // return Array.from(state.projectData.header).filter(item => item.id === state.currentId)[0]
//   },
  currentMain(state) {
    return Array.from(state.projectData.main).filter(
      (item) => item.hid === state.currentId
    );
  },
};
