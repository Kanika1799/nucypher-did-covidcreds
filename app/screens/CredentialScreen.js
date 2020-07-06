import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Button, List, Headline, Subheading } from "react-native-paper";

export default class CredentialsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      creds: [],
    };
  }

  componentDidMount() {
    fetch(
      "http://127.0.0.1:5000/get_creds/did:cred:5a13a432-bf10-11ea-aa79-f4d10855b531"
    )
      .then((resp) => resp.json())
      .then((json) => {
        this.setState({ creds: json });
        console.log(json);
      });
  }

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.container}>
          <Headline style={{ textAlign: "center", marginTop: 20 }}>
            {" "}
            My Credentials
            <Ionicons
              name="md-card"
              size={22}
              color="#6200ee"
              paddingLeft={30}
            />
          </Headline>
        </View>

        {this.state.creds.map((cred) => (
          <View style={styles.container}>
            <Text
              style={{
                color: "black",
                fontSize: 18,
                marginTop: 35,
              }}
              onPress={() => this.props.navigation.navigate("Cred")}
            >
              {cred.name} {"\n"}{" "}
              <Ionicons name="md-book" size={32} color="blue" />
            </Text>
            <Text>Cred Issued From :- {cred.cred_issued_from}</Text>
            <Image
              source={{ uri: "https://i.imgur.com/TkIrScD.png" }}
              style={{ width: 305, height: 159, marginTop: 40, marginLeft: 30 }}
            />

            <Text
              style={{
                color: "#888",
                fontSize: 18,
                marginTop: 20,
                textAlign: "center",
              }}
            >
              To share a photo from your phone with a friend, just press the
              button below!
            </Text>
          </View>
        ))}

        <Button
          mode="contained"
          icon="alert-circle-outline"
          style={{
            width: 140,
            height: 40,
            textAlign: "center",
            marginBottom: 20,
            borderRadius: 20,
            marginStart: 110,
            marginTop: 40,
          }}
          onPress={() => this.props.navigation.navigate("Issue")}
        >
          {" "}
          New Issue?
        </Button>
      </ScrollView>
      //   </Stack.Navigator>
      // </NavigationContainer>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: "#fdfdfd",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: "#ededed",
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: "flex-start",
    marginTop: 1,
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
