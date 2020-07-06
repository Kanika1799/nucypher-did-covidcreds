import * as React from "react";
import {
  StyleSheet,
  Button,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

// function HomeScreen({ navigation }) {
//   return (
//     <ScrollView
//       style={styles.container}
//       contentContainerStyle={styles.contentContainer}
//     >
//       <View style={styles.container}>
//         <Text
//           style={{
//             color: "black",

//             textAlign: "center",
//             marginTop: 15,
//           }}
//         >
//           {" "}
//           <Ionicons
//             name="md-person"
//             size={40}
//             color="blue"
//             marginLeft={80}
//             alignItems="centre"
//           />
//         </Text>
//         <Text
//           style={{
//             color: "black",
//             fontSize: 28,
//             textAlign: "center",
//             marginTop: 5,
//           }}
//         >
//           User1
//         </Text>
//         <Text
//           style={{
//             color: "black",
//             fontSize: 18,
//             textAlign: "center",
//           }}
//         >
//           User1@mail.com
//         </Text>
//         <Text
//           style={{
//             color: "black",
//             fontSize: 18,
//             marginLeft: 30,
//             marginTop: 25,
//             textAlign: "center",
//           }}
//           onPress={() => navigation.navigate("User")}
//         >
//           <Ionicons name="md-person" size={28} color="blue" />
//           User1
//           <Ionicons name="md-arrow-dropright" size={28} color="blue" />
//         </Text>
//         <Text
//           style={{
//             color: "black",
//             fontSize: 18,
//             textAlign: "center",
//           }}
//         >
//           User1@mail.com
//         </Text>
//         <Text
//           style={{
//             color: "black",
//             fontSize: 18,
//             marginLeft: 30,
//             marginTop: 25,
//             textAlign: "center",
//           }}
//           onPress={() => navigation.navigate("User")}
//         >
//           <Ionicons name="md-person" size={28} color="blue" />
//           User2
//           <Ionicons name="md-arrow-dropright" size={28} color="blue" />
//         </Text>
//         <Text
//           style={{
//             color: "black",
//             fontSize: 18,
//             textAlign: "center",
//           }}
//         >
//           User2@mail.com
//         </Text>
//       </View>
//       <View>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => navigation.navigate("Details")}
//         >
//           <Text style={styles.buttonText}>
//             Share{" "}
//             <Ionicons name="md-share" size={20} marginLeft={25} color="#fff" />
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// }

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
        <Ionicons name="md-book" size={32} color="blue" /> Email ID:
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

// const Stack = createStackNavigator();

function App({ navigation }) {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Home">
    // <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    //   <Text>Home Screen</Text>
    //   <Button
    //     title="Go to Details"
    //     onPress={() => navigation.navigate("Details")}
    //   />
    //   </View>

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
            <Ionicons name="md-add" size={20} color="#fff" />
            New User
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
