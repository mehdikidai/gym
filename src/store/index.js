
const data = {
    name:'mehdi',
    videUrl:'https://www.youtube.com/watch?v=fCVm5U2ob8U'
}

const Store  = (state=data, action) => {
  switch (action.type) {
    case "NAME":
      return {...state,name:'salma'};
    default:
      return state;
  }
};

export default Store
