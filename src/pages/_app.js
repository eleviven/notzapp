import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "../components";
import Home from "../pages/index";
import { store } from "../store";
import theme from "../chakra.theme";

export default function App() {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Layout>
          <Home />
        </Layout>
      </ChakraProvider>
    </Provider>
  );
}
