import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
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

      <ScrollView horizontal={false}>
      {/* Inicio do Stores ============================================== */}
      <View style={estilo.stories}>
        <Text style={estilo.titulostories}>
          Stories
        </Text>

        <ScrollView horizontal={true} style={estilo.scrollstories}>
          <View>
            <Text style={estilo.blackbox}>Live</Text>
            <Image source={{uri:"https://img.wallpapersafari.com/tablet/800/1280/50/17/SbOCfo.jpg"}} style={estilo.imgstories}/>
            
            <View style={estilo.txticon}>
              <Text style={estilo.txt}>Savannah</Text>
              <Image source={require("./assets/iconverified.png")} style={estilo.icon}/>
            </View>

          </View>

          <View>
            <Text style={estilo.redbox}>Premiere</Text>
            <Image source={{uri:"https://img.wallpapersafari.com/tablet/800/1280/87/59/letphF.jpg"}} style={estilo.imgstories}/>
          
            <View style={estilo.txticon}>
              <Text style={estilo.txt}>Cooper</Text>
              <Image source={require("./assets/iconverified.png")} style={estilo.icon}/>
            </View>
          
          </View>

          <View>
            <Text style={estilo.blackbox}>Live</Text>
            <Image source={{uri:"https://images.hdqwalls.com/download/feeling-down-moment-4k-71-800x1280.jpg"}} style={estilo.imgstories}/>
            
            <View style={estilo.txticon}>
              <Text style={estilo.txt}>Howard</Text>
              <Image source={require("./assets/iconverified.png")} style={estilo.icon}/>
            </View>
          
          </View>

          <View>
            <Text style={estilo.blackbox}>Live</Text>
            <Image source={{uri:"https://images.hdqwalls.com/download/girl-with-black-hat-so-800x1280.jpg"}} style={estilo.imgstories}/>
            <View style={estilo.txticon}>
              <Text style={estilo.txt}>Black Hat Woman</Text>
              <Image source={require("./assets/iconverified.png")} style={estilo.icon}/>
            </View>
          </View>

          <View>
            <Text style={estilo.redbox}>Premiere</Text>
            <Image source={{uri:"https://c0.wallpaperflare.com/preview/418/511/718/black-background-black-hat-fashion-model-gesture.jpg"}} style={estilo.imgstories}/>
            <View style={estilo.txticon}>
              <Text style={estilo.txt}>Black Hat Man</Text>
              <Image source={require("./assets/iconverified.png")} style={estilo.icon}/>
            </View>
          </View>
        </ScrollView>

        <Text>Texto</Text>
        <Text>Texto</Text>
        <Text>Texto</Text>
        <Text>Texto</Text>
        <Text>Texto</Text>
        <Text>Texto</Text>
        <Text>Texto</Text>
        <Text>Texto</Text>
        <Text>Texto</Text>

        
        <Text>Texto</Text>
        <Text>Texto</Text>
        <Text>Texto</Text>
        <Text>Texto</Text>
        <Text>Texto</Text>
        <Text>Texto</Text>
        <Text>Texto</Text>
        <Text>Texto</Text>
        <Text>Texto</Text>
        <Text>Texto</Text>

        
        <Text>Texto</Text>
        <Text>Texto</Text>

      </View>
      {/* Fim do Stores ################################## */}
      </ScrollView>
    </View>
  );
}
