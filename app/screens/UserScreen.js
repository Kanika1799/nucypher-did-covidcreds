import * as React from "react";

import {
  StyleSheet,
  View,
  Button,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";


export default class UserScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            color: "black",

            textAlign: "center",
            marginTop: 15,
          }}
        >
          {" "}
          <Ionicons
            name="md-person"
            size={40}
            color="blue"
            marginLeft={80}
            alignItems="centre"
          />
        </Text>
        <Text
          style={{
            color: "black",
            fontSize: 28,
            textAlign: "center",
            marginTop: 5,
          }}
        >
          User
        </Text>
        <Text
          style={{
            color: "black",
            fontSize: 18,

            marginTop: 35,
          }}
        >
          Email ID: <Ionicons name="md-book" size={32} color="blue" />
        </Text>
        <Text
          style={{
            color: "black",
            fontSize: 18,

            marginTop: 35,
          }}
        >
          DID:
          <Ionicons name="md-book" size={32} color="blue" />
        </Text>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("User")}
          >
            <Text style={styles.buttonText}>
              Edit{" "}
              <Ionicons
                name="md-checkmark"
                size={20}
                marginLeft={25}
                color="#fff"
              />
            </Text>
          </TouchableOpacity>
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
  