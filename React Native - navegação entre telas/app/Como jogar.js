import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

function Page() {
  const titleRef = useRef(null);

  useEffect(() => {
    // Inicie a animação após o componente ser montado
    titleRef.current?.bounceInUp(1000); // 1000 é a duração da animação em milissegundos
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Animatable.View
          ref={titleRef}
          style={styles.titleContainer}
        >
          <Text style={styles.title}>Não Jogue</Text>
        </Animatable.View>
        <Text style={styles.subtitle}>pelo seu bem</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F0F0',
  },
  main: {
    alignItems: 'center',
  },
  titleContainer: {
    marginBottom: 20, // Espaço entre o título e o subtítulo
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 36,
    color: '#38434D',
  },
});

export default Page;