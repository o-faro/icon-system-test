import React, { useState, ReactElement } from "react";
import bemHelper from "react-bem-helper";
import Icon from "react-icon-system";

const bm = new bemHelper({
  name: "test",
  outputIsString: true,
});

export const Tabs = (): ReactElement => {
  const [visibleTab, setVisibleTab] = useState<"Tab1" | "Tab2">("Tab1");
  return (
    <>
      <div className={bm("tab-wrapper")}>
        <button
          onClick={() => {
            if (visibleTab === "Tab1") {
              return;
            }
            setVisibleTab("Tab1");
          }}
        >
          <span>Tab1</span>
          <Icon src="arrow-right-small" class="icon" />
        </button>
        <button
          onClick={() => {
            if (visibleTab === "Tab2") {
              return;
            }
            setVisibleTab("Tab2");
          }}
        >
          <Icon src="arrow-left-small" class="icon" />
          <span>Tab2</span>
        </button>
      </div>
      <div className={bm("tab-content")}>
        {visibleTab === "Tab1" && <div> Tabcontent 1 </div>}
        {visibleTab === "Tab2" && <div> Tabcontent 2 </div>}
      </div>
    </>
  );
};
