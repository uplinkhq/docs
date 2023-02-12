import React from "react";

export default function Embed({children}) {
  iframely.load()
  return (
    <div className="iframely-embed">
      <div className="iframely-responsive">
        <a data-iframely-url="" href={children}></a>
      </div>
    </div>
  )
}
