import { ScrollView, StatusBar, Text, View } from "react-native";
import "../../global.css";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchInput from "../../components/SearchInput";
import Card from "../../components/Card";
const pic = require('../../assets/images/pic.png');

export default function Index() {
  return (
    <SafeAreaView>
      <ScrollView className=" h-screen">
        <View className=" h-28 flex justify-end">
          <Text className="text-center text-[38px] font-regular font-extrabold">ulmo</Text>
        </View>
        <View className="mt-10">
        <SearchInput onChangeText = {console.log()} value= {''}
        />
        </View>
        <ScrollView horizontal className="Border">
          <Card image={pic} text={'Best OF 2020'} onPress={() => console.log()} />
          <Card image={pic} text={'Best OF 2020'} onPress={() => console.log()} />
        </ScrollView>
      </ScrollView>
      <StatusBar barStyle="dark-content" />
    </SafeAreaView>
  );
}
