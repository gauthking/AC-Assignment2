import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GetScreen } from './screens/GetScreen';
import { PostScreen } from './screens/PostScreen';
import { PutScreen } from './screens/PutScreen';
import { DeleteScreen } from './screens/DeleteScreen';
import { useState } from 'react';
import { View } from 'react-native';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function About() {
  return (
    <View>
      <Text>About</Text>
    </View>)
}

function Home() {
  const [id, setID] = useState(2);
  const [getName, setGetName] = useState("");
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const [age, setAge] = useState("");

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
      body: JSON.stringify({
        employee_name: name,
        employee_salary: parseInt(salary),
        employee_age: parseInt(age),
        profile_image: ""
      }),
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
      body: JSON.stringify({
        name: name,
        job: job, // Please define job variable
      }),
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
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="GET">
          {() => <GetScreen id={id} setID={setID} getName={getName} getUser={getUser} />}
        </Tab.Screen>
        <Tab.Screen name="POST">
          {() => <PostScreen name={name} setName={setName} salary={salary} setSalary={setSalary} age={age} setAge={setAge} postUser={postUser} />}
        </Tab.Screen>
        <Tab.Screen name="PUT">
          {() => <PutScreen name={name} setName={setName} salary={salary} setSalary={setSalary} age={age} setAge={setAge} updateUser={updateUser} />}
        </Tab.Screen>
        <Tab.Screen name="DELETE">
          {() => <DeleteScreen id={id} setID={setID} deleteUser={deleteUser} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Feed">
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ drawerLabel: 'Home' }}
      />
      <Drawer.Screen
        name="Notifications"
        component={About}
        options={{ drawerLabel: 'About' }}
      />
    </Drawer.Navigator>
  );
}


export default function App() {
  return (
    <Home />
  );
}
