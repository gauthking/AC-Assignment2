import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ToastAndroid,
  KeyboardAvoidingView,
} from "react-native";

export default function App() {
  const [id, setID] = useState(2);
  const [getName, setGetName] = useState("");
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const [age, setAge] = useState("");

  const [showMethod, setShowMethod] = useState(null);

  const getUser = () => {
    fetch(`https://dummy.restapiexample.com/api/v1/employee/${id}`)
      .then((response) => response.json())
      .then((json) =>
        setGetName(json.data.employee_name)
      );
  };

  const postUser = () => {
    fetch(`https://dummy.restapiexample.com/api/v1/create`, {
      method: "POST",
      body: {
        employee_name: name,
        employee_salary: parseInt(salary),
        employee_age: parseInt(age),
        profile_image: ""
      },
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        ToastAndroid.show(
          "Created object at id: " + json.id,
          ToastAndroid.SHORT
        );
      });
  };

  const updateUser = () => {
    fetch(`https://dummy.restapiexample.com/api/v1/update/${id}`, {
      method: "PUT",
      body: {
        name: name,
        job: job,
      },
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        ToastAndroid.show("Updated object", ToastAndroid.SHORT);
      });
  };

  const deleteUser = () => {
    fetch(`https://dummy.restapiexample.com/api/v1/delete/${id}`, {
      method: "DELETE",
    }).then((response) => {
      console.log(response);
      ToastAndroid.show("Deleted object", ToastAndroid.SHORT);
    });
  };

  return (
    <View style={styles.container}>
      {showMethod === null && <Text style={styles.header}>API</Text>}
      {showMethod === "GET" && (
        <View style={styles.methodContainer}>
          <Text style={styles.header}>GET Route</Text>
          <TextInput
            placeholder="ID"
            style={styles.input}
            value={id}
            onChangeText={setID}
          />
          <Button
            title="Fetch"
            style={styles.button}
            onPress={getUser}
            color="#6EB4D5"
          />
          <Text>Name: {getName}</Text>
        </View>
      )}
      {showMethod === "POST" && (
        <View style={styles.methodContainer}>
          <Text style={styles.header}>POST method!</Text>
          <TextInput
            placeholder="Name"
            style={styles.input}
            value={name}
            onChangeText={setName}
          />
          <TextInput
            placeholder="Salary"
            style={styles.input}
            value={salary}
            onChangeText={setSalary}
          />
          <TextInput
            placeholder="Age"
            style={styles.input}
            value={age}
            onChangeText={setAge}
          />
          <Button
            title="Post"
            style={styles.button}
            onPress={postUser}
            color="#6EB4D5"
          />
        </View>
      )}

      {showMethod === "PUT" && (
        <View style={styles.methodContainer}>
          <Text style={styles.header}>PUT method!</Text>
          <TextInput
            placeholder="Name"
            style={styles.input}
            value={name}
            onChangeText={setName}
          />
          <TextInput
            placeholder="Salary"
            style={styles.input}
            value={salary}
            onChangeText={setSalary}
          />
          <TextInput
            placeholder="Age"
            style={styles.input}
            value={age}
            onChangeText={setAge}
          />
          <Button
            title="Post"
            style={styles.button}
            onPress={updateUser}
            color="#6EB4D5"
          />
        </View>
      )}
      {showMethod === "DELETE" && (
        <View style={styles.methodContainer}>
          <Text style={styles.header}>DELETE method!</Text>
          <TextInput
            placeholder="Id"
            style={styles.input}
            value={id}
            onChangeText={setID}
          />
          <Button
            title="Post"
            style={styles.button}
            onPress={deleteUser}
            color="#6EB4D5"
          />
        </View>
      )}
      <View style={styles.optionsButton}>
        <Button
          title="GET"
          style={styles.button}
          onPress={() => setShowMethod("GET")}
          color="#6EB4D5"
        />

        <Button
          title="POST"
          style={styles.button}
          onPress={() => setShowMethod("POST")}
          color="#6EB4D5"
        />

        <Button
          title="PUT"
          style={styles.button}
          onPress={() => setShowMethod("PUT")}
          color="#6EB4D5"
        />

        <Button
          title="DELETE"
          style={styles.button}
          onPress={() => setShowMethod("DELETE")}
          color="#6EB4D5"
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 40,
    fontWeight: "900",
    color: "black",
  },
  container: {
    flex: 1,
    backgroundColor: "violet",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    height: 40,
    backgroundColor: "red"

  },
  input: {
    borderWidth: 5,
    borderRadius: 12,
    width: 300,
    margin: 10,
    borderStyle: "solid",
    borderColor: "white",
    fontSize: 20,
    padding: 10,
  },

  optionsButton: {
    flexDirection: "row",
    gap: 10,
    position: "absolute",
    bottom: 60,
  },
  methodContainer: {
    position: "absolute",
    top: 70,
  },
});
