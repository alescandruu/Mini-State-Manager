import { useState, useEffect } from "react";
import { pubsub } from "./pubsub";
import Store from "./store";
import {
   CHANGED_STATE,
   UPDATE_GLOBAL_STATE,
} from "../configFolder/configPubSub";

const UPDATE_STORE = Store().updateStore;
const GET_STATE = Store().getStateValue;
let subscription = false;

export default function useStoreState(stateValue) {
   const [value, setValue] = useState(null); // using useState to keep data received from global state

   const handleGlobalState = (newGlobalState) => {
      setValue(newGlobalState);
   };
   useEffect(() => {
      if (!subscription) { // if statement used to avoid multiple incrementation
         pubsub.subscribe(UPDATE_GLOBAL_STATE, UPDATE_STORE); // subscribing store to pub sub for performing actions
         subscription = !subscription;
      }
      pubsub.subscribe(CHANGED_STATE, handleGlobalState); // subscribing counter component to store via pubsub and useStoreState
      setValue(GET_STATE);
   }, []);
   const handleLocalState = (operation) => {
      pubsub.publish(UPDATE_GLOBAL_STATE, operation); // updating the global state
   }
   return [value, handleLocalState];
}
