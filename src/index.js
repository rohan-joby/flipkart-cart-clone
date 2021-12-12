import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import { CartProvider } from "./store/cartProvider";
import { SaveProvider } from "./store/saveProvider";

ReactDOM.render(
  <CartProvider>
    <SaveProvider>
      <App />
    </SaveProvider>
  </CartProvider>,
  document.getElementById("root")
);
