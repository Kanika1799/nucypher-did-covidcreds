import * as React from "react";
import QRCode from "react-native-qrcode-generator";

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
import { Avatar, Card, IconButton, Paragraph } from "react-native-paper";

export default class CredScreen extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      creds: [],
      text: "",
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Card.Title
          title="Credential Name"
          subtitle={this.props.route.params.cred_details.cred_name}
          right={(props) => (
            <Image
              source={{
                uri:
                  "https://www.pinclipart.com/picdir/middle/165-1653686_female-user-icon-png-download-user-colorful-icon.png",
              }}
              style={{
                width: 100,
                height: 100,
                marginRight: 20,
                marginTop: 20,
              }}
            />
          )}
        />
        <Card.Title title="Credential Issued By" subtitle={this.props.route.params.cred_details.cred_issued_from} />
        <Card.Title title="Description"/>
        <Card.Content><Paragraph>{this.props.route.params.cred_details.cred_description}</Paragraph></Card.Content>
        <Card.Title title="Valid Till" subtitle={this.props.route.params.cred_details.cred_validity} />
        <Card.Title title="Credential Status" subtitle={this.props.route.params.cred_details.cred_status} />
        <Card.Title title="Share Credential" style={{textAlign: "center"}}/>
        <Card
          style={{
            marginTop: 40,
            marginStart: 75,
            backgroundColor: "transparent",
            border: "none",
            width: 70,
          }}
        >
          <QRCode
            value={this.props.route.params.cred_details.cred_status}
            size={200}
            bgColor="black"
            fgColor="white"
            textAlign="center"
            padding={60}
          />
          {/* <Image
              source={{
                uri:
                  "https://images.samsung.com/is/image/samsung/p5/au/faq/os-pie-updates/QR-code.png",
              }}
              style={{
                width: 200,
                height: 200,
                marginTop: 20,
              }}
            /> */}
        </Card>
        {/* <Text
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
        </Text> */}

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
