import React from "react";
import RenderInBrowser from "react-render-in-browser";

const Example = () => {
  return (
    <div>
      <RenderInBrowser ie only>
        <div>Ugh, our super deeper animation wont work in ie</div>
      </RenderInBrowser>*
      <RenderInBrowser except firefox safari>
        <div>why dont u user firefox or safari</div>
      </RenderInBrowser>
      <RenderInBrowser chrome and firefox only>
        <div>i like chrome and firefox</div>
      </RenderInBrowser>
    </div>
  );
};
export default Example;
