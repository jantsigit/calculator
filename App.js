import React, {useState} from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, Button, View } from "react-native";

function calculator () {
  const [numero1, setNumero1] = useState(0)
  const [numero2, setNumero2] = useState(0)
  const [tulos1, setTulos1] = useState(numero1+numero2)
  const [tulos2, setTulos2] = useState(numero1-numero2)

function teeYhteenlasku(){
setTulos1(numero1+numero2)
}

function teeVahennuslasku(){
  setTulos2(numero1-numero2);
  }

  return (
   
    <> <View style={styles.laatikko}>
      <Text>Pluslasku: {tulos1}</Text>
      <Text>Miinuslasku: {tulos2}</Text>

      <TextInput
        style={styles.input}
        type='number'
        placeholder="0"
        value={numero1}
        onChange={e=> setNumero1(+e.target.value)}
        

      />

      <TextInput
        style={styles.input}
        type='number'
        placeholder="0"
        value={numero2}
        onChange={e=> setNumero2(+e.target.value)}
      />
      
      <button onClick={teeYhteenlasku}>
       <Text>+</Text>
      </button>
      
      <button onClick={teeVahennuslasku}>
      <Text>-</Text>
      </button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 1,
    borderWidth: 1,
    padding: 5,
  },
  laatikko: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }
});

export default calculator;