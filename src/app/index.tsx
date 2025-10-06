import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

export default function Index() {
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Lấy token từ AsyncStorage
        const token = await AsyncStorage.getItem("userToken");

        if (token) {
        } else {
          router.replace("/LoginScreen");
        }
      } catch (e) {
        console.log("Error checking token:", e);
        router.replace("/LoginScreen");
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return null; // vì router.replace sẽ điều hướng sang màn khác
}
