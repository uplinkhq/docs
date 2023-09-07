import React from "react"

export default function Embed({ children }) {
  React.useEffect(() => {
    window.iframely?.load()
  }, [])

  return (
    <>
      <div className="iframely-embed">
        <div className="iframely-responsive">
          <a data-iframely-url="" href={children}></a>
        </div>
      </div>
    </>
  )
}
