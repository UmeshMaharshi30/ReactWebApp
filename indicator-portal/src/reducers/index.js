import { ADD_GRAPH } from './../constants/action_types';
import { CHANGE_VIZ_PANEL } from './../constants/action_types';

const initialState = {
  VizContainer: {title : "Welcome to Indicators Portal !",
    bodyType : "text",
    bodyText : "This site was developed using React and Redux"
  }
};
  
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case CHANGE_VIZ_PANEL:
        return { ...state, VizContainer: action.payload };
      default:
        return state;
    }
};
export default rootReducer;