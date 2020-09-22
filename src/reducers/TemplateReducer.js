export const ACTIONS =  Object.freeze({
    START: 'START',
    SUCCESS: 'SUCCESS',
    FAILURE: 'FAILURE',
    RESET_ERROR: 'RESET_ERROR'
  })
  
export const INIT_STATE = {
  fetching: null,
  error: null,
  data: null,
}

export default (state, action) => {
    switch (action.type) {
        case ACTIONS.START:
          return {
            ...state,
            fetching: true,
            error: null,
          };
        case ACTIONS.SUCCESS:
          return {
            ...state,
            fetching: false,
            data: action.data,
          };
        case ACTIONS.FAILURE:
          return {
            ...state,
            fetching: false,
            error: action.error,
          };
        case ACTIONS.RESET_ERROR: 
          return {
            ...state,
            error: null
          }
      default:
        throw new Error();
    }
}