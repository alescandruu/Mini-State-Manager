import { pubsub } from "./pubsub";
import { CHANGED_STATE } from "../configFolder/configPubSub";

export default function Store() {
   let state = {
      counter: 0,
   };

   const updateStore = (operation) => {
      if(operation === 'increment') {
         state = {...state};
         state.counter++;
      } else {
         state = {...state};
         state.counter--;
      }
      pubsub.publish(CHANGED_STATE, state.counter); // publishing a new global state change 
   };

   const getStateValue = () => {
      return state.counter;
   }

   return { state, updateStore, getStateValue };
}
