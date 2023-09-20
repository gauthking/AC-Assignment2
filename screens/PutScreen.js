import { Button, Text, TextInput, View } from "react-native";

export function PutScreen({ name, setName, salary, setSalary, age, setAge, updateUser }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 40, fontWeight: '900', color: 'black' }}>PUT method!</Text>
            <TextInput
                placeholder="Name"
                style={{ borderWidth: 4, borderRadius: 12, width: 300, margin: 10, borderStyle: 'solid', borderColor: 'white', fontSize: 20, padding: 10 }}
                value={name}
                onChangeText={setName}
            />
            <TextInput
                placeholder="Salary"
                style={{ borderWidth: 4, borderRadius: 12, width: 300, margin: 10, borderStyle: 'solid', borderColor: 'white', fontSize: 20, padding: 10 }}
                value={salary}
                onChangeText={setSalary}
            />
            <TextInput
                placeholder="Age"
                style={{ borderWidth: 4, borderRadius: 12, width: 300, margin: 10, borderStyle: 'solid', borderColor: 'white', fontSize: 20, padding: 10 }}
                value={age}
                onChangeText={setAge}
            />
            <Button
                title="Put"
                onPress={updateUser}
                color="#6EB4D5"
            />
        </View>
    );
}