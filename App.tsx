import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { estilo } from './css/Styles';

export default function App() {
  return (
    <View style={estilo.container}>


      {/* Início do header */}
      <View style={estilo.header}>
       
        <View style={estilo.perfil}>
          <Image source={{uri:"https://lh3.googleusercontent.com/proxy/uS4UXt2azXqFZhUEM2bDiHYwgXG154jcogTVJnyUc1Ge2WKjCzvU8XiYZXexPN1e_UiYCEbqU4NNLEVqqZWknqbvIYLHhILn0v_1vG07zZP0tfVtECcFDfu5Flj53s9a"}} style={estilo.imgperfil}/>
        </View>

        <View style={estilo.titulo}>
          <Text style={estilo.nome}> Pedro de Oliveira </Text>
          <Text style={estilo.descricao}>Programador</Text>
        </View>
        
        <View style={estilo.pesquisa}>
          <Image source={{uri:"https://upload.wikimedia.org/wikipedia/meta/thumb/7/7e/Vector_search_icon.svg/945px-Vector_search_icon.svg.png"}} style={estilo.imgpesquisa}/>
        </View>

      </View>
      {/* Fim do header ################################## */}

      {/* Inicio do Stores ============================================== */}
      <View style={estilo.stories}>
        <Text style={estilo.titulostories}>
          Stories
        </Text>
      </View>
      {/* Fim do Stores ################################## */}
    </View>
  );
}
