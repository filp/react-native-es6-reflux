import Reflux from "reflux";
import Actions from "../actions";

const messages = [
  "Hello, React!",
  "Today is a good day.",
  "How do I computer",
  "Stop poking me!",
  "Hi there!"
];

let AppMessageStore = Reflux.createStore({
  listenables: [Actions],

  init() {
    // Set the default message
    this.message = messages[0];
  },

  onUpdateMessage() {
    while(true) {
      let newMessage = messages[Math.floor(Math.random() * messages.length)];

      if (newMessage !== this.message) {
        this.message = newMessage;
        break;
      }
    }

    this.trigger(this.message);
  }
});

export default AppMessageStore;
