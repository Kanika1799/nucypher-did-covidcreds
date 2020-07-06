import * as React from "react";

import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import {
  Button,
  List,
  Headline,
  Subheading,
  TextInput,
} from "react-native-paper";

export default class IssueScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    text: "",
  };
  render() {
    return (
      <View style={styles.container}>
        <Headline style={{ textAlign: "center", marginTop: 20 }}>
          {" "}
          Issue A Credentials
          <Ionicons name="md-card" size={22} color="#6200ee" paddingLeft={30} />
        </Headline>
        <TextInput
          style={{
            width: 260,
            marginLeft: 50,
            marginTop: 20,
            height: 50,
            backgroundColor: "transparent",
          }}
          label="Name"
          type="outlined"
          value={this.state.text}
          onChangeText={(text) => this.setState({ text })}
        />
        <TextInput
          style={{
            width: 260,
            marginLeft: 50,
            marginTop: 20,
            height: 50,
            backgroundColor: "transparent",
          }}
          label="Description"
          type="outlined"
          value={this.state.text}
          onChangeText={(text) => this.setState({ text })}
        />
        <TextInput
          style={{
            width: 260,
            marginLeft: 50,
            marginTop: 20,
            height: 50,
            backgroundColor: "transparent",
          }}
          label="Status"
          type="outlined"
          value={this.state.text}
          onChangeText={(text) => this.setState({ text })}
        />
        <TextInput
          style={{
            width: 260,
            marginLeft: 50,
            marginTop: 20,
            height: 50,
            backgroundColor: "transparent",
          }}
          label="Issued To"
          type="outlined"
          value={this.state.text}
          onChangeText={(text) => this.setState({ text })}
        />
        <TextInput
          style={{
            width: 260,
            marginLeft: 50,
            marginTop: 20,
            height: 50,
            backgroundColor: "transparent",
          }}
          label="Issued From"
          type="outlined"
          value={this.state.text}
          onChangeText={(text) => this.setState({ text })}
        />
        <Button
          icon="check"
          mode="contained"
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
          Done
        </Button>
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
