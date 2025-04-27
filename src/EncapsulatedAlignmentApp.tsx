import React, { useEffect } from "react";
import "./App.scss";
import "./components/SequenceLogo.scss";
import "./components/PositionalAxis.scss";
import "./components/PositionalBarplot.scss";
import "./components/msa-blocks-and-letters/MSABlocksAndLetters.scss";
import "./components/settings/Settings.scss";
import "./components/AlignmentFileLoader.scss";
import "./components/ResizeSensor.scss";
import "./components/minimap/MiniMap.scss";
import "./components/virtualization/VirtualizedMatrixViewer.scss";
import "./components/virtualization/VirtualScrollbars.scss";
import "./components/search/SequenceSearch.scss";
import "./components/layout/AlignmentViewerLayout.scss";
import "./components/alignment-metadata/AlignmentSpreadsheet.scss";
import "./common/MolecularStyles.module.scss";
import App from "./App";

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

export default function EncapsulatedAlignmentApp(props: any) {
  useEffect(() => {
    injectGlobalStyles();
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <App {...props} />
    </div>
  );
}
