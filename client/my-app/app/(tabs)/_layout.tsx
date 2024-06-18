import React from 'react';
import {Tabs} from 'expo-router';
import {IconCards, IconSquareRoundedPlus, IconUser} from "@tabler/icons-react-native";


export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                // tabBarActiveTintColor: Colors.orange.default,
                tabBarStyle: {
                    height: 70,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: "bold",
                    marginBottom: 10,

                },
                tabBarActiveTintColor: 'green'

            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'view albums',
                    tabBarIcon: ({color}) => <IconCards color={color}/>,
                }}
            />
            <Tabs.Screen
                name="add"
                options={{
                    title: 'add something',
                    tabBarIcon: ({color}) => <IconSquareRoundedPlus color={color}/>,
                }}
            />
            <Tabs.Screen
                name="account"
                options={{
                    title: 'view account',
                    tabBarIcon: ({color}) => <IconUser color={color}/>,
                }}
            />
        </Tabs>
    );
}
