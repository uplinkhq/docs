import React       from "react"
import BrowserOnly from "@docusaurus/BrowserOnly"

export default function Embed({ children }) {
  return (
    <>
      <BrowserOnly>
        {() => {
          if (window.iframely)
            window.iframely.load()
        }}
      </BrowserOnly>
      <div className="iframely-embed">
        <div className="iframely-responsive">
          <a data-iframely-url="" href={children}></a>
        </div>
      </div>
    </>
  )
}
