//THIS WILL BE OUR REDUCER

const initialState = {
  count: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE":
      return {
        count: state.count + 1
      };

    case "DECREASE":
      return {
        count: state.count - 1
      };

    default:
      return state;
  }
};
