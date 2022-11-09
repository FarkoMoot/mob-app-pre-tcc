import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Table from "../../screens/Table";
import Home from "../../screens/Home";
import Stats from "../../screens/Stats";

const { Navigator, Screen } = createNativeStackNavigator();

export default function(){
  return(
    <Navigator initialRouteName="Home" screenOptions={{ headerShown: false }} >
      <Screen name="Home" component={Home} />
      <Screen name="Table" component={Table} />
      <Screen name="Stats" component={Stats} initialParams={{'_time1':'casa','_time2':'visitante'}} />
    </Navigator>
  )
}