import { useState, useEffect } from "react";
import { pubsub } from "./pubsub";
import Store from "./store";
import { CHANGED_STATE, UPDATE_GLOBAL_STATE } from "../configFolder/configPubSub";

const UPDATE_STORE = Store().updateStore;

export default function useStoreState(stateValue) {
   const [value, setValue] = useState(null); 
   // using useState to keep data received from global state

   const handleGlobalState = (newGlobalState) => {
      setValue(newGlobalState);
   };
   useEffect(() => {
      pubsub.subscribe(CHANGED_STATE, handleGlobalState);
      // subscribing counter component to store via pubsub and useStoreState
      pubsub.subscribe(UPDATE_GLOBAL_STATE, UPDATE_STORE);
      // subscribing store to pub sub for performing actions
      pubsub.publish(UPDATE_GLOBAL_STATE, stateValue);
      // 
   }, []);
   const handleLocalState = (newLocalState) => {
      pubsub.publish(UPDATE_GLOBAL_STATE, newLocalState);
      // updating the global state 
   };

   return [value, handleLocalState];
}
