import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import App from './App';
import store from "./redux/store";
import ProductListing from "./containers/ProductListing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(

  <Provider store={store}>
    <RouterProvider
      router={router}
      />
  </Provider>
);