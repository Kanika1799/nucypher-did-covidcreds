import * as React from "react";

import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { Button, List, Headline, Subheading } from "react-native-paper";

export default class UserScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            textAlign: "center",
            marginTop: 15,
          }}
        >
          {" "}
          <Ionicons
            name="md-person"
            size={40}
            color="#6200ee"
            marginLeft={80}
            alignItems="centre"
          />
        </Text>
        <Headline style={{ textAlign: "center" }}> User</Headline>
        <Text
          style={{
            color: "black",
            fontSize: 18,
            marginLeft: 15,
            marginTop: 35,
          }}
        >
          <Ionicons name="md-mail" size={20} color="#6200ee" /> Email ID:
        </Text>
        <Text
          style={{
            color: "black",
            fontSize: 18,
            marginLeft: 15,
            marginTop: 35,
          }}
        >
          <Ionicons name="md-person" size={20} color="#6200ee" /> DID:
        </Text>
        <View>
          <Button
            mode="contained"
            icon="account-edit"
            style={{
              width: 140,
              height: 40,
              textAlign: "center",
              marginBottom: 20,
              borderRadius: 20,
              marginStart: 110,
              marginTop: 40,
            }}
            onPress={() => console.log("Pressed")}
          >
            {" "}
            Edit
          </Button>
        </View>
        {/* <Button
                title="Go to Details... again"
                onPress={() => navigation.push("Details")}
              /> */}
      </View>
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
