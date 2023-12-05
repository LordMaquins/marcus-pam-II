import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAz4IX1sNKCNShL8ZOtDxNy0saLzQs1m_I",
  authDomain: "firstfirestore-84c24.firebaseapp.com",
  projectId: "firstfirestore-84c24",
  storageBucket: "firstfirestore-84c24.appspot.com",
  messagingSenderId: "1046860226617",
  appId: "1:1046860226617:web:1fe34769fc837aee27ade8"
};



firebase.initializeApp(firebaseConfig);


import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';

export default function App() {
  const [nomes, setNomes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const pessoasCollection = firebase.firestore().collection('Pessoas');
      const snapshot = await pessoasCollection.get();

      const data = [];
      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });

      setNomes(data);
    };

    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Lista de Nomes:</Text>
      <FlatList
        data={nomes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.nome} {item.sobrenome}</Text>
          </View>
        )}
      />
    </View>
  );
}