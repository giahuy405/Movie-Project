import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./app/routes";
import Header from "./components/Header";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {routes.map(({ path, component: Component }) =>
          <Route path={path} element={<Component />} />
        )}
         
      </Routes>
    </BrowserRouter>

  );
}

export default App;
