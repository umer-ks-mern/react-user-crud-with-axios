import { BrowserRouter } from "react-router-dom";
import UserWrapper from "./page/user";

function App() {
  return (
    <BrowserRouter>
      <UserWrapper />
    </BrowserRouter>
  );
}

export default App;
