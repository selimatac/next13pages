import "@/styles/globals.css";
import { wrapper } from "../store";
import { Provider } from "react-redux";

const MyApp = ({ Component, ...rest }: any) => {
  const { store, props } = wrapper.useWrappedStore({ Component, rest });

  return (
    <Provider store={store}>
      <Component {...props.pageProps} />
    </Provider>
  );
};

export default MyApp;
