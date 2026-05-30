import React, { useState, useCallback } from "react";
import BuyActionWindow from "./BuyActionWindow";
import { ToastContainer, useToast } from "./Toast";

const GeneralContext = React.createContext({
  openBuyWindow:  (uid) => {},
  closeBuyWindow: () => {},
  showToast:      ({ type, title, message }) => {},
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");

  const { toasts, addToast, removeToast } = useToast();

  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  const showToast = useCallback(({ type = "success", title, message }) => {
    addToast({ type, title, message });
  }, [addToast]);

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow:  handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        showToast,
      }}
    >
      {props.children}

      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}

      {/* Global toast notifications */}
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
