import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material";

const logo =
  "https://blog.codepen.io/wp-content/uploads/2023/09/logo-white.png";

const Container = styled(AppBar)`
  background: #060606;
  height: 7vh;
`;

export default function Header() {
  return (
    <div>
      <Container className="" position="static">
        <Toolbar>
          <img src={logo} alt="" className="h-8" />
        </Toolbar>
      </Container>
    </div>
  );
}
