import React, { useEffect } from "react";
import { AlignmentViewer, FastaAlignment } from "./index";
import "./App.scss";
import "./components/SequenceLogo.scss";

// Inject global styles for full height
const injectGlobalStyles = () => {
  if (document.getElementById("av2-global-style")) return;
  const style = document.createElement("style");
  style.id = "av2-global-style";
  style.innerHTML = `
    html, body, #root {
      height: 100%;
      margin: 0;
      padding: 0;
    }
  `;
  document.head.appendChild(style);
};

export const EncapsulatedAlignmentViewer = ({
  fastaText,
  alignmentName = "Alignment",
  ...viewerProps
}: {
  fastaText: string;
  alignmentName?: string;
  [key: string]: any;
}) => {
  useEffect(() => {
    injectGlobalStyles();
  }, []);

  const alignmentObj = FastaAlignment.fromFileContents(alignmentName, fastaText);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <AlignmentViewer
        alignment={alignmentObj}
        style={{ width: "100%", height: "100%" }}
        {...viewerProps}
      />
    </div>
  );
};
