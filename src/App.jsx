import React from "react";
import MainApp from "./layouts/MainApp";

/**
 * Root application component. Delegates all rendering to the MainApp
 * layout which handles authentication, navigation and page rendering.
 */
export default function App() {
  return <MainApp />;
}
