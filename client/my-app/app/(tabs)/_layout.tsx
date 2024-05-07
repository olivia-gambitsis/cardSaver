import React from 'react';
import { Tabs } from 'expo-router';
import {IconCards, IconSquareRoundedPlus, IconUser} from "@tabler/icons-react-native";



export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'view albums',
                    tabBarIcon: ({ color }) => <IconCards color={color} />,
                }}
            />
            <Tabs.Screen
                name="add"
                options={{
                    title: 'add something',
                    tabBarIcon: ({ color }) => <IconSquareRoundedPlus color={color} />,
                }}
            />
            <Tabs.Screen
                name="account"
                options={{
                    title: 'view account',
                    tabBarIcon: ({ color }) => <IconUser color={color} />,
                }}
            />
        </Tabs>
    );
}
