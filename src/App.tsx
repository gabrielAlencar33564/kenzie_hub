import RoutesPage from "./routes";
import UserProvider from "./contexts/userContext";
import "./styles/reset.css";
import "./styles/global.css"
import TechProvider from "./contexts/techContext";

function App() {
  return (
    <UserProvider>
      <TechProvider>
        <RoutesPage />
      </TechProvider>
    </UserProvider>
  );
}

export default App;