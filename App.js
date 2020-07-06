import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
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
import { Provider as PaperProvider } from "react-native-paper";

import useCachedResources from "./hooks/useCachedResources";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import LinkingConfiguration from "./navigation/LinkingConfiguration";

const Stack = createStackNavigator();
function HomeScreen({ navigation }) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
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
          User1
        </Text>
        <Text
          style={{
            color: "black",
            fontSize: 18,
            textAlign: "center",
          }}
        >
          User1@mail.com
        </Text>
        <Text
          style={{
            color: "black",
            fontSize: 18,
            marginLeft: 30,
            marginTop: 25,
            textAlign: "center",
          }}
          onPress={() => navigation.navigate("User")}
        >
          <Ionicons name="md-person" size={28} color="blue" />
          User1
          <Ionicons name="md-arrow-dropright" size={28} color="blue" />
        </Text>
        <Text
          style={{
            color: "black",
            fontSize: 18,
            textAlign: "center",
          }}
        >
          User1@mail.com
        </Text>
        <Text
          style={{
            color: "black",
            fontSize: 18,
            marginLeft: 30,
            marginTop: 25,
            textAlign: "center",
          }}
          onPress={() => navigation.navigate("User")}
        >
          <Ionicons name="md-person" size={28} color="blue" />
          User2
          <Ionicons name="md-arrow-dropright" size={28} color="blue" />
        </Text>
        <Text
          style={{
            color: "black",
            fontSize: 18,
            textAlign: "center",
          }}
        >
          User2@mail.com
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Details")}
        >
          <Text style={styles.buttonText}>
            Share{" "}
            <Ionicons name="md-share" size={20} marginLeft={25} color="#fff" />
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
function CredScreen({ navigation }) {
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
    </ScrollView>
  );
}
function UserScreen({ navigation }) {
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
function CredentialsScreen({ navigation }) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.container}>
        <Card>
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
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
          Credentials 2<Ionicons name="md-book" size={32} color="blue" />
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
        onPress={() => navigation.navigate("Issue")}
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

function DetailsScreen({ navigation }) {
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
        Create New Id <Ionicons name="md-person" size={32} color="blue" />
      </Text>
      <View>
        <Text>Name</Text>
        <TextInput
          style={{
            height: 30,
            borderColor: "gray",
            borderWidth: 1,
          }}
          defaultValue="Name"
        />
      </View>
      <View>
        <Text>Email</Text>
        <TextInput
          style={{
            height: 30,
            borderColor: "gray",
            borderWidth: 1,
          }}
          defaultValue="Email"
        />
      </View>
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
          Add Image
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Details")}
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
      {/* <Button
        title="Go to Details... again"
        onPress={() => navigation.push("Details")}
      /> */}
    </View>
  );
}
export default function App(props) {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        <PaperProvider>
          <NavigationContainer linking={LinkingConfiguration}>
            <Stack.Navigator>
              <Stack.Screen name="Root" component={BottomTabNavigator} />
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Details" component={DetailsScreen} />
              <Stack.Screen name="Credentials" component={CredentialsScreen} />
              <Stack.Screen name="Issue" component={IssueScreen} />
              <Stack.Screen name="Cred" component={CredScreen} />
              <Stack.Screen name="User" component={UserScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
        <StatusBar style="auto" />
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
