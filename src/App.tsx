import React from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { ChatButton, IncomingThemeVariables } from "@dialectlabs/react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import "./App.css";

export const themeVariables: IncomingThemeVariables = {
  dark: {
    modal: "modal",
  },
};

function App() {
  const wallet = useWallet();

  return (
    <div className="App">
      <WalletMultiButton />
    </div>
  );
}

export default App;
