import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Card, Button } from "react-native-paper";

function CredentialsScreen({ navigation }) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.container}>
        <Text
          style={{
            color: "black",
            fontSize: 28,
            textAlign: "center",
            marginTop: 35,
          }}
        >
          My Credentials <Ionicons name="md-book" size={32} color="blue" />
        </Text>
        <Card>
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
      </View>
      <View style={styles.container}>
        {" "}
        <Text
          style={{
            color: "black",
            fontSize: 18,
            marginTop: 35,
          }}
          onPress={() => navigation.navigate("Cred")}
        >
          Credentials 1<Ionicons name="md-book" size={32} color="blue" />
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
            color: "#888",
            fontSize: 18,
            marginTop: 20,
            textAlign: "center",
          }}
        >
          To share a photo from your phone with a friend, just press the button
          below!
        </Text>
      </View>
      <View style={styles.container}>
        <Text
          style={{
            color: "black",
            fontSize: 18,
            marginTop: 35,
          }}
          onPress={() => navigation.navigate("Cred")}
        >
          Credentials 1<Ionicons name="md-book" size={32} color="blue" />
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
            color: "#888",
            fontSize: 18,
            marginTop: 20,
            textAlign: "center",
          }}
        >
          To share a photo from your phone with a friend, just press the button
          below!
        </Text>
      </View>
      <View style={styles.container}>
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
            color: "#888",
            fontSize: 18,
            marginTop: 20,
            textAlign: "center",
          }}
        >
          To share a photo from your phone with a friend, just press the button
          below!
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Issue")}
        >
          <Text style={styles.buttonText}>
            New Issue?{" "}
            <Ionicons name="md-help" size={20} marginLeft={25} color="#fff" />
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

function IssueScreen({ navigation }) {
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
        Issue A credential <Ionicons name="md-book" size={32} color="blue" />
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Credentials")}
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
      </TouchableOpacity>
    </View>
  );
}

function CredScreen({ navigation }) {
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

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.push("Cred")}
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
      </TouchableOpacity>
    </View>
  );
}
function App({ navigation }) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.container}>
        <Text
          style={{
            color: "black",
            fontSize: 28,
            textAlign: "center",
            marginTop: 35,
          }}
        >
          My Credentials <Ionicons name="md-book" size={32} color="blue" />
        </Text>
      </View>
      <View style={styles.container}>
        <Text
          style={{
            color: "black",
            fontSize: 18,
            marginTop: 35,
          }}
          onPress={() => navigation.navigate("Cred")}
        >
          Credentials 1<Ionicons name="md-book" size={32} color="blue" />
        </Text>
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
          To share a photo from your phone with a friend, just press the button
          below!
        </Text>
      </View>

      <View style={styles.container}>
        <Text
          style={{
            color: "black",
            fontSize: 18,
            marginTop: 35,
          }}
          onPress={() => navigation.navigate("Cred")}
        >
          Credentials 1<Ionicons name="md-book" size={32} color="blue" />
        </Text>
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
          To share a photo from your phone with a friend, just press the button
          below!
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Issue")}
        >
          <Text style={styles.buttonText}>
            New Issue?{" "}
            <Ionicons name="md-help" size={20} marginLeft={25} color="#fff" />
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
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
export default App;
