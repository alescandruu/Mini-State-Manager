import { Subject } from "rxjs";

export const MessageService = {
   events: {},

   publish: function (event, data) {
      this.events[event].next(data);
   },

   subscribe: function (event, action) {
      if (!this.events[event]) {
         this.events[event] = new Subject();
      }
      this.events[event].subscribe(action);
   },
};
