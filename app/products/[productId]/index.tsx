import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const ProductDetail = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>ProductDetail {id}</Text>
    </View>
  );
};

export default ProductDetail;
