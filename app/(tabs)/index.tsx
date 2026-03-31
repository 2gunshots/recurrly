
import { Link } from "expo-router";
import { Text } from "react-native";
import { styled } from "nativewind";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
    return (
        <SafeAreaView className="flex-1  bg-background p-5">
            <Text className="text-xl font-bold text-success">
                Welcome to Nativewind!
            </Text>
            <Link
                href="/onboarding"
                className="p-4 bg-primary text-white rounded-md"
            >
                Go to Onboarding
            </Link>
            <Link
                href="/(auth)/sign-in"
                className="mt-2 p-4 bg-primary text-white rounded-md"
            >
                Signin
            </Link>
        </SafeAreaView>
    );
}
