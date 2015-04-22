import React from "react-native";
import Reflux from "reflux";

import Styles from "../styles";
import Actions from "../actions";
import AppMessageStore from "../stores/app_message_store";

let {
  View,
  Text,
  Image,
  StatusBarIOS,
  TouchableOpacity
} = React;

let App = React.createClass({
  mixins: [Reflux.connect(AppMessageStore, "message")],

  componentDidMount() {
    // Do stuff when the App top-level component is ready,
    // such as change the color of the iOS status bar:

    StatusBarIOS.setStyle(StatusBarIOS.Style.lightContent);

    // Get the initial message from the store
    Actions.updateMessage();
  },

  render() {
    // Render the top-level element that will contain the complete UI
    // of your application. You may also choose to use this element
    // as the single source of data, that is then passed down to
    // child components.

    return (
      <View style={Styles.appContainer}>
        <Text style={[Styles.appMessage, Styles.appSubMessage]}>
          Tap the React logo to change the message!
        </Text>

        <TouchableOpacity
          onPress={Actions.updateMessage}>
          <Image
            style={Styles.appLogo}
            source={{uri: "http://facebook.github.io/react/img/logo_og.png"}}/>
        </TouchableOpacity>

        <Text style={Styles.appMessage}>{this.state.message}</Text>
        <Text style={[Styles.appMessage, Styles.appSubMessage]}>
          Edit me in: src/components/app.jsx
        </Text>
      </View>
    );
  }
});

export default App;
