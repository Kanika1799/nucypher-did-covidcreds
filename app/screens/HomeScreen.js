import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ToastAndroid
} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { Button, List, Headline, Subheading, Banner } from "react-native-paper";

import { MonoText } from "../components/StyledText";
import { createIconSet } from "@expo/vector-icons";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      requests: [],
      access_shared: [],
      visible: false
    };

    this.grantAccess = this.grantAccess.bind(this);
  }
  state = {
    expanded: true,
  };

  _handlePress = () =>
    this.setState({
      expanded: !this.state.expanded,
    });
  componentDidMount() {
    fetch(
      "http://127.0.0.1:5000/get_requests/did:cred:cf43b35c-bfd6-11ea-bc26-f4d10855b531"
    )
      .then((resp) => resp.json())
      .then((json) => {
        this.setState({ requests: json });
        console.log(json);
      });
      
      fetch(
        "http://127.0.0.1:5000/get_access_granted/did:cred:cf43b35c-bfd6-11ea-bc26-f4d10855b531"
      )
        .then((resp) => resp.json())
        .then((json) => {
          this.setState({ access_shared: json });
          console.log(json);
        });
  }

  grantAccess(request) {
    console.log('Clicked')
    const bodyr = {
      grant_to_did: request.request_from,
      cred_to_grant: request.cred_id
    }
    fetch(
      "http://127.0.0.1:5000/grant_did_access",
      {
        method: 'post',
        body: JSON.stringify(bodyr)
      }
    )
      .then((resp) => resp.json())
      .then((json) => {
        console.log(json);
        // ToastAndroid.showWithGravity(
        //   "All Your Base Are Belong To Us",
        //   ToastAndroid.SHORT,
        //   ToastAndroid.CENTER
        // );
        this.setState({visible: true})
      })
      .catch((error)=> {
        console.log(error)
        // ToastAndroid.showWithGravity(
        //   error,
        //   ToastAndroid.SHORT,
        //   ToastAndroid.CENTER
        // );
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <Banner
      visible={this.state.visible}
      actions={[
        {
          label: 'OK',
          onPress: () => this.setState({visible: false}),
        },
      ]}
      icon={({size}) => (
        <Ionicons
              name="md-share"
              size={size}
              color="#6200ee"
              paddingLeft={30}
            />
      )}>
      Certificate Permission Granted Successfully
    </Banner>
        <View style={styles.container}>
          <Headline style={{ textAlign: "center", marginTop: 20 }}>
            {" "}
            Share My Credentials
            <Ionicons
              name="md-share"
              size={22}
              color="#6200ee"
              paddingLeft={30}
            />
          </Headline>

          <List.Accordion
            style={{ marginTop: 40 }}
            title="Credential Access Request"
            left={(props) => <List.Icon {...props} icon="history" />}
          >
            {this.state.requests.map((request) => (
              <View style={{
                paddingLeft: 5
              }}>
                <List.Item
                  style={{ marginTop: 10, textAlign: "center" }}
                  title={`Requested From -  ${request.request_from_name}`}
                  description={`Certificate Requested - ${request.cred_name}`}
                  left={(props) => (
                    <List.Icon color="#6200ee" {...props} icon="account" />
                  )}
                />
                <Button
                  icon="thumb-up"
                  mode="contained"
                  style={{
                    width: 140,
                    height: 40,
                    textAlign: "center",
                    marginBottom: 20,
                    borderRadius: 20,
                    marginStart: 110,
                  }}
                  onPress={() => this.grantAccess(request)}
                >
                  {" "}
                  Grant{" "}
                </Button>
              </View>
            ))}
          </List.Accordion>
          <List.Accordion
            title="Credentials Share History"
            left={(props) => <List.Icon {...props} icon="history" />}
            expanded={this.state.expanded}
            onPress={this._handlePress}
          >
            {this.state.access_shared.map((request) => (
              <View style={{
                paddingLeft: 5
              }}>
                <List.Item
                  style={{ marginTop: 10, textAlign: "center" }}
                  title={`Requested From -  ${request.request_from_name}`}
                  description={`Certificate Requested - ${request.cred_name}`}
                  left={(props) => (
                    <List.Icon color="#6200ee" {...props} icon="account" />
                  )}
                />
                <Button
                  icon="thumb-down"
                  mode="contained"
                  style={{
                    width: 140,
                    height: 40,
                    textAlign: "center",
                    marginBottom: 20,
                    borderRadius: 20,
                    marginStart: 110,
                  }}
                  onPress={() => this.grantAccess(request)}
                >
                  {" "}
                  Revoke{" "}
                </Button>
              </View>
            ))}
          </List.Accordion>
        </View>

        <Button
          icon="share"
          mode="contained"
          style={{
            width: 140,
            height: 40,
            textAlign: "center",
            marginBottom: 20,
            borderRadius: 20,
            marginStart: 110,
          }}
          onPress={() => console.log("Pressed")}
        >
          {" "}
          Share{" "}
        </Button>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    "https://docs.expo.io/versions/latest/workflow/development-mode/"
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    "https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change"
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center",
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)",
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center",
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center",
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
    width: 130,
    marginLeft: 120,
    borderRadius: 25,
    marginBottom: 25,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
  },
});
