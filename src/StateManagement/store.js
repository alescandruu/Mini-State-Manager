import { pubsub } from "./pubsub";
import { CHANGED_STATE } from "../configFolder/configPubSub";

export default function Store() {
   const state = {
      counter: undefined,
   };

   const updateStore = (newStateValue) => {
      state.counter = newStateValue;
      pubsub.publish(CHANGED_STATE, state.counter);
      // publishing a new global state change 
   };

   return { state, updateStore };
}
