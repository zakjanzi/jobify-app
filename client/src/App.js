
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Dashboard, Register, Landing, Error, Newpage } from "./pages"


function App() {
  return (
  <BrowserRouter>

  <Routes>
    <Route path="/" element={<Dashboard/>} />
    <Route path="/register" element={<Register/>} />
    <Route path="/landing" element={<Landing/>} />
    <Route path="*" element={<Error/>} />
    <Route path="/newpage" element={<Newpage /> } />
  </Routes>
  </BrowserRouter>
   
  );
}

export default App;
