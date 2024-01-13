import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../Context/DataProvider";
import { Box } from "@mui/material";
import styled from "styled-components";

const Container = styled(Box)`
  height: 41vh;
`


export default function Output() {
  const [src, setSrc] = useState("");
  const { html, css, javascript } = useContext(DataContext);
  const sourceCode = `
    <html>
     <body>${html}</body>
     <style>${css}</style>
     <script>${javascript}</script>
    </html>
    `;
 
  return (
    <Container>
      <iframe
        srcDoc={sourceCode}
        title="output"
        sandbox="allow-scripts"
        width="100%"
        height="100%"
      />
    </Container>
  );
}
