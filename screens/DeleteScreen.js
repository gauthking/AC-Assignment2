import { Button, Text, TextInput, View } from "react-native";

export function DeleteScreen({ id, setID, deleteUser }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 40, fontWeight: '900', color: 'black' }}>DELETE method!</Text>
            <TextInput
                placeholder="ID"
                style={{ borderWidth: 4, borderRadius: 12, width: 300, margin: 10, borderStyle: 'solid', borderColor: 'white', fontSize: 20, padding: 10 }}
                value={id.toString()}
                onChangeText={text => setID(parseInt(text))}
            />
            <Button
                title="Delete"
                onPress={deleteUser}
                color="#6EB4D5"
            />
        </View>
    );
}