import { ActivityIndicator, StyleSheet, View } from "react-native";
type Props = {
    validation: boolean;
}
export const Loader = ({validation}: Props) => {
    if(!validation) return null;
    return (
        <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        </View>
    );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    });
