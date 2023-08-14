import { View, Text, Map } from "@tarojs/components";
import Taro, { useReady, getCurrentInstance } from "@tarojs/taro";
import "./index.scss";

export default function Index() {
  let mapCtx;
  let currentRouter: any = getCurrentInstance().router;
  let params: any = currentRouter.params;
  useReady(() => {
    console.log("Page loaded.");
    mapCtx = Taro.createMapContext("myMap");
  });

  return (
    <View className='index'>
      <Text>Hello world!</Text>
      <Map
        id='myMap'
        latitude={params.lat}
        longitude={params.lng}
        className='surround-map'
      />
    </View>
  );
}
