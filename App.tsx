import React from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';
import { Router } from './src/routes/Router';
import { AuthProvider } from './src/context/Auth';


function App(): React.JSX.Element {
  
  return (
    <AuthProvider>
      <Router/>
    </AuthProvider>
  );
}

export default App;
