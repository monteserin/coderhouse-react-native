import 'dotenv/config';
import MainNavigator from './navigation';
import Provider from './app/Provider';


const App = () => <Provider><MainNavigator /></Provider>

export default App; 