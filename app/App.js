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

import CredentialsScreen from "./screens/CredentialScreen";
import HomeScreen from "./screens/CredentialScreen";
import CredScreen from "./screens/CredDetails";
import UserScreen from "./screens/UserScreen";
import IssueScreen from "./screens/IssuesScreen";
import DetailsScreen from "./screens/DetailsScreen";

const Stack = createStackNavigator();

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
