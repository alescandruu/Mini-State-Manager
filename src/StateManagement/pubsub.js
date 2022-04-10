export const pubsub = {
   events: {},

   publish: function (event, data) {
      this.events[event].forEach((action) => {
         action(data);
      });
   },

   subscribe: function (event, action) {
      if (!Array.isArray(this.events[event])) {
         this.events[event] = [];
      }
      this.events[event].push(action);
   },
};
