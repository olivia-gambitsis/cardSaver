import { View, Text, Pressable } from "react-native"
import { Link, router } from 'expo-router'

export default function Albums() {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Home Page</Text>
            <Pressable onPress={() => router.push('/tab_2')}>
                <Text>Go to tab 2</Text>
            </Pressable>
        </View>
    )
}