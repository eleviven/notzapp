import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import RootRouter from "../routes";
import { Layout } from "../components";
import { store } from "../store";
import theme from "../chakra.theme";

export default function App() {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Layout>
            <RootRouter />
          </Layout>
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
  );
}
