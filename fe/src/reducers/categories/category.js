
export default function category(state = [], action){
    switch(action.type){
        case "INIT" : {
            return action.data
        }
      default: return state
    }   
}