import React from "react";
import "./assets/css/style.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./utils/theme";
import MainNavigation from "./components/MainNavigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loader from "./assets/images/loader.gif";
import { AuthWrapper } from "./context/auth";
import Header from "./components/header";
import Footer from "./components/footer";
import { CartWrapper } from "./context/cart";

export default function App() {
  return (
    <BrowserRouter>
      <AuthWrapper>
        <CartWrapper>
          <ThemeProvider theme={theme}>
            <div className="loader-wrapper">
              <img src={loader} alt="loader" />
            </div>
            <Header />
            <main>
              <MainNavigation />
            </main>
            <Footer />
            <ToastContainer />
          </ThemeProvider>
        </CartWrapper>
      </AuthWrapper>
    </BrowserRouter>
  );
}
