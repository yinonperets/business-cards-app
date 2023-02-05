import "./App.css";
import Layout from "./layout/Layout";
import Router from "./routes/Router";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./providers/ThemeProvider";
import { SnackbarProvider } from "./providers/SnackbarProvider";
import { UserProvider } from "./users/providers/UserProvider";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider>
          <SnackbarProvider>
            <UserProvider>
              <Layout>
                <Router />
              </Layout>
            </UserProvider>
          </SnackbarProvider>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
