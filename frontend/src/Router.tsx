import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthView } from "./pages/AuthView";
import { HomeView } from "./pages/HomeView";
import { EstoqueTable } from "./components/EstoqueTable";
import { MovimentacaoTable } from "./components/MovimentacaoTable";
import { UsuariosTable } from "./components/UsuariosTable";
import App from "./App";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="auth" element={<AuthView />} />
          <Route path="home" element={<HomeView />}>
            <Route path="estoque" element={<EstoqueTable />} />
            <Route path="movimentacao" element={<MovimentacaoTable />} />
            <Route path="usuarios" element={<UsuariosTable />} />
            <Route index element={<Navigate to="estoque" />} />
          </Route>
          <Route index element={<AuthView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
