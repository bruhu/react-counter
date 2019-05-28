//THIS WILL BE OUR REDUCER

const initialState = {
  count: 0,
  click: 0,
  status: "INIT"
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE":
      return {
        count: state.count + 1,
        click: state.click +1,
        status: "INCREASED"
      };

    case "DECREASE":
      return {
        count: state.count - 1,
        click: state.click +1,
        status: "DECREASED"
      };

      case "RESET":
          return {
              count: 0,
              click: 0,
              status: "RESETED"
          }

    default:
      return state;
  }
};
