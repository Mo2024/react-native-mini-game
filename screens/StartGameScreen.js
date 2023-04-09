import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
function StartGameScreen() {
    const [enteredNumber, setEneteredNumber] = useState('');

    function numberInputHandler(num) {
        setEneteredNumber(num);
    }

    function resetInputHandler() {
        setEneteredNumber('');
    }

    function confirmInputHandler() {
        const num = parseInt(enteredNumber);
        if (isNaN(num) || num <= 0 || num >= 100) {
            Alert.alert('Invalid number!', 'Number has to be a number between 1 and 99', [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }])
        }
    }
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.numberInput} onChangeText={numberInputHandler} maxLength={2} keyboardType="number-pad" autoCapitalize="none" autoCorrect={false} value={enteredNumber} />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton pressHandler={resetInputHandler} buttonName="Reset" />
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton pressHandler={confirmInputHandler} buttonName="Confirm" />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 100,
        backgroundColor: '#3b021f',
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 8,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: "row"
    },
    buttonContainer: {
        flex: 1
    }
});


export default StartGameScreen;