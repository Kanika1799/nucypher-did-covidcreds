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

    this.state = {
      userDID: 'did:cred:1a1cae3e-bfa4-11ea-8341-f4d10855b531',
      didDetails: {
        did_detail: {
          name: ''
        }
      }
    }
  }

   componentDidMount() {
     fetch(
       "http://127.0.0.1:5000/retrieve_did/did:cred:cf43b35c-bfd6-11ea-bc26-f4d10855b531"
     )
       .then((resp) => resp.json())
       .then((json) => {
         this.setState({ didDetails: json });
         console.log(json);
       });
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
        <Headline style={{ textAlign: "center" }}> {this.state.didDetails.did_detail.name}</Headline>
        <Text
          style={{
            color: "black",
            fontSize: 18,
            marginLeft: 15,
            marginTop: 35,
          }}
        >
          <Ionicons name="md-mail" size={20} color="#6200ee" /> DID: {this.state.userDID}
        </Text>
        <Text
          style={{
            color: "black",
            fontSize: 18,
            marginLeft: 15,
            marginTop: 35,
          }}
        >
          <Ionicons name="md-person" size={20} color="#6200ee" /> PubKeyVerified: True
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
