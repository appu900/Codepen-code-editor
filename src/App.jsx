import { Button } from "@mui/material";
import React from "react";
import Home from "./componets/Home";
import DataProvider from "./Context/DataProvider";

export default function () {
  return (
    <div className="">
      <DataProvider>
        <Home />
      </DataProvider>
    </div>
  );
}
