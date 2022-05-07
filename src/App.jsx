import './styles/global.scss';

import { Routing } from './routes/Routing';
import UserProvider from './context/UserContext';

function App() {
  return (
    <>
      <UserProvider>
        <Routing />
      </UserProvider>
    </>
  );
}

export default App;
