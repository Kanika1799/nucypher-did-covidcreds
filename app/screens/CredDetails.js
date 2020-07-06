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


export default class CredScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      creds: [],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            color: "black",
            fontSize: 28,
            textAlign: "center",
            marginTop: 35,
          }}
        >
          credential 1 <Ionicons name="md-book" size={32} color="blue" />
        </Text>
        <Image
          source={{ uri: "https://i.imgur.com/TkIrScD.png" }}
          style={{
            width: 305,
            height: 159,
            marginTop: 40,
            marginLeft: 30,
          }}
        />
        <Text
          style={{
            color: "black",
            fontSize: 18,

            marginTop: 35,
          }}
        >
          Name: Credential 1 <Ionicons name="md-book" size={32} color="blue" />
        </Text>
        <Text
          style={{
            color: "black",
            fontSize: 18,

            marginTop: 35,
          }}
        >
          Issued by: <Ionicons name="md-book" size={32} color="blue" />
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
        <Text
          style={{
            color: "black",
            fontSize: 18,

            marginTop: 35,
          }}
        >
          Shared With:
          <Ionicons name="md-book" size={32} color="blue" />
        </Text>
        <Text
          style={{
            color: "black",
            fontSize: 18,

            marginTop: 35,
          }}
        >
          Issued On:
          <Ionicons name="md-book" size={32} color="blue" />
        </Text>

        {/* <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.push("Credentials")}
        >
          <Text style={styles.buttonText}>
            Done{" "}
            <Ionicons
              name="md-checkmark"
              size={20}
              marginLeft={25}
              color="#fff"
            />
          </Text>
        </TouchableOpacity> */}
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
  