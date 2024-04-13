
const data = {
    name:'mehdi'
}

export default (state=data, action) => {
  switch (action.type) {
    case "NAME":
      return {...state,name:'salma'};
    default:
      return state;
  }
};
