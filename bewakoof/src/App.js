
import './App.css';
import { Heading,Image } from '@chakra-ui/react';
import AllRoutes from './Component/AllRoutes';

function App() {
  return (
    <div className="App">
     <Heading fontSize={"xl"}>Welcome to</Heading><Image src="https://images.bewakoof.com/web/ic-desktop-pride-bwkf-logo.svg" m={"auto"}/>
    <AllRoutes/>
    </div>
  );
}

export default App;
