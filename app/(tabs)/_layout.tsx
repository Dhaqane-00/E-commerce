import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
    screenOptions={{headerShown:false}}>
      <Tabs.Screen
        name="index"
        options={{
          title:'Home',
          tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />
          ,
        }}
      />
      <Tabs.Screen
        name="bookmark"
        options={{
          title: 'Bookmarks',
          tabBarIcon: ({ color }) => <Ionicons name="bookmark" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <Ionicons name="person" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}