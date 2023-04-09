import { View, Text, Pressable, StyleSheet } from "react-native";


function PrimaryButton({ buttonName }) {
    function pressHandler() {
        console.log("test");
    }
    return (
        <View style={styles.buttontOuterContainer}>
            <Pressable style={({ pressed }) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer} onPress={pressHandler} android_ripple={{ color: "#640233" }}>
                <Text style={styles.buttonText}>{buttonName}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttontOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: "hidden",
    },
    buttonInnerContainer: {
        backgroundColor: '#72063c',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75
    }
});

export default PrimaryButton;