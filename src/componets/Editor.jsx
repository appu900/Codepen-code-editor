import { Box, styled } from "@mui/material";
import React, { useState } from "react";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import { Close } from "@mui/icons-material";
import { Controlled as ControlledEditor } from "react-codemirror2";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import "../App.css";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

const Heading = styled(Box)`
  background: #1d1e22;
  display: flex;
  padding: 9px 12px;
  color: white;
`;

const Header = styled(Box)`
  display: flex;
  background: #060606;
  color: #fcfcfc;
  justify-content: space-between;
  font-weight: 700px;
`;

const Container = styled(Box)`
  height: 50vh;
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
  flex-direction: column;
  padding: 0px 8px 8px;
`;

export default function Editor({
  languageHeading,
  languageIcon,
  bgColor,
  value,
  onChange,
}) {
  function handleCodeChnage(editor, data, value) {
    console.log(value);
    onChange(value);
  }

  const [open, setOpne] = useState(true);

  return (
    <Container style={open ? null : { flexGrow: 0 }}>
      {/*upar wala part  */}
      <Header className="font-semibold ">
        <Heading>
          <Box
            component="span"
            className="item-center text-black "
            style={{
              background: bgColor,
              height: 20,
              width: 20,
              display: "flex",
              placeContent: "center",
              borderRadius: "5px",
              marginRight: 5,
              paddingBottom: 2,
            }}
          >
            {languageIcon}
          </Box>
          {languageHeading}
        </Heading>

        <CloseFullscreenIcon
          fontSize="small"
          style={{ color: "#fcfcfc" }}
          className="cursor-pointer"
          onClick={() => setOpne(!open)}
        />

      </Header>

      {/* editor wala part */}
      <ControlledEditor
        className="controlled-editor text-[15px]"
        value={value}
        onBeforeChange={handleCodeChnage}
        options={{
          theme: "material",
          lineNumbers: true,
        }}
      />
    </Container>
  );
}
