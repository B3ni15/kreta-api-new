import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Alert, Text, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { Div } from 'react-native-magnus';
import { Picker } from '@react-native-picker/picker';

interface Institute {
  instituteCode: string;
  name: string;
}

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [institutes, setInstitutes] = useState<Institute[]>([]);
  const [selectedInstituteCode, setSelectedInstituteCode] = useState<string>(''); // Az instituteCode-ot tároljuk
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchInstitutes = async () => {
      try {
        const response = await fetch('https://kretaglobalapi.e-kreta.hu/intezmenyek/kreta/publikus');
        const data: Institute[] = await response.json();
        setInstitutes(data);
        setIsLoading(false);
      } catch (error) {
        Alert.alert('Hiba', 'Nem sikerült betölteni az iskolákat.');
        setIsLoading(false);
      }
    };

    fetchInstitutes();
  }, []);

  const handleLogin = () => {
    if (!selectedInstituteCode) {
      Alert.alert('Hiba', 'Válassz ki egy iskolát!');
      return;
    }

    if (username === 'user' && password === 'password') {
      router.push({
        pathname: '/MainPage',
        params: { instituteCode: selectedInstituteCode },
      });
    } else {
      Alert.alert('Hiba', 'Hibás felhasználónév vagy jelszó!');
    }
  };

  return (
    <View className="flex-1 bg-[#0F1015] justify-center items-center">
      <Div className="w-4/5 max-w-md">
        <Text className="text-white text-4xl font-bold text-center mb-8">
          Bejelentkezés
        </Text>
        {isLoading ? (
          <Text className="text-white text-center">Iskolák betöltése...</Text>
        ) : (
          <>
            <Div className="space-y-5">
              <Picker
                selectedValue={selectedInstituteCode}
                onValueChange={(itemValue) => setSelectedInstituteCode(itemValue)}
                style={styles.picker}
              >
                <Picker.Item label="Válassz egy iskolát..." value="" />
                {institutes.map((institute) => (
                  <Picker.Item
                    key={institute.instituteCode}
                    label={institute.name}
                    value={institute.instituteCode}
                  />
                ))}
              </Picker>

              <TextInput
                className="bg-[#1E1E1E] text-white p-4 rounded-lg border border-[#1E90FF]"
                value={username}
                onChangeText={setUsername}
                placeholder="Felhasználónév"
                placeholderTextColor="#fff"
              />
              <TextInput
                className="bg-[#1E1E1E] text-white p-4 rounded-lg border border-[#1E90FF]"
                value={password}
                onChangeText={setPassword}
                placeholder="Jelszó"
                placeholderTextColor="#fff"
                secureTextEntry={true}
              />
              <Button
                title="Bejelentkezés"
                onPress={handleLogin}
                color="#1E90FF"
              />
            </Div>
          </>
        )}
      </Div>
    </View>
  );
};

const styles = StyleSheet.create({
  picker: {
    backgroundColor: '#1E1E1E',
    color: '#fff',
    borderRadius: 5,
    borderColor: '#1E90FF',
    borderWidth: 1,
  },
});

export default LoginScreen;