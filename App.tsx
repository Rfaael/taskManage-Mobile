import { StatusBar } from 'react-native';

//ALL SCREENS
import { Home } from './src/Screens/Home';

export default function App() {
  return (
    <>

       <StatusBar
          barStyle="default"
          backgroundColor={'transparent'}
          translucent
        />
      
      <Home />
    </>
  );
}

