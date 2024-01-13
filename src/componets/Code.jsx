import React, { useContext } from "react";
import Editor from "./Editor";
import { Box, styled } from "@mui/material";
import DataProvider, { DataContext } from "../Context/DataProvider";

const BoxConatiner = styled(Box)`
  display: flex;
  background-color: #060606;
`;

export default function Code() {
  const { html, setHtml, css, setCss, javascript, setJavascript } =
    useContext(DataContext);

  return (
    <BoxConatiner>
      <Editor
        languageHeading="HTML"
        languageIcon="/"
        bgColor="#FF3c41"
        value={html}
        onChange={setHtml}
      />

      <Editor
        languageHeading="CSS"
        languageIcon="*"
        bgColor="#0EBEFF"
        value={css}
        onChange={setCss}
      />

      <Editor
        languageHeading="Javascript"
        languageIcon="()"
        bgColor="#fcd000"
        value={javascript}
        onChange={setJavascript}
      />
    </BoxConatiner>
  );
}
