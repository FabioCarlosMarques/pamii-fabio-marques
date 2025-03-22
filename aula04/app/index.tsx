
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestone'

const firebaseConfig = {
  apiKey: "AIzaSyAx-GcBlSDKiYPfjANc8lYdb00Es8iCEOE",
  authDomain: "meu-primeiro-firebase-8d8b1.firebaseapp.com",
  projectId: "meu-primeiro-firebase-8d8b1",
  storageBucket: "meu-primeiro-firebase-8d8b1.firebasestorage.app",
  messagingSenderId: "559428984424",
  appId: "1:559428984424:web:48f6c866431f00dde0a5dd"
};

 firebase.initializeApp(firebaseConfig);

 import React, { useEffect, useState} from 'react';
 import { View, Text, Flatlist } from 'react-native';

 export default function App() {
  const [nomes, setNomes] = useState([]);

  useEffect(() =>{
    const fetchData = async () => {
      const nomesCollection = firebase.firestone().collection('Nomes');
      const snapsshot = await nomesCollection.get();

      const fetchData = async ()=> {;
        snapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data()});

      })

      setNomes(data);
      
      };

      fetchData();

      
    
    
 }
