import React, { useEffect } from "react";
import { getLink } from "../api";

const RedirectPage = ({match}) => {
  const { params: {pathName} } = match;

   useEffect(() => {
    if (pathName) {
      console.log(pathName)
      getLink(pathName).then(res=>{
        console.log(res)
        if (res.data) {
          // alert(res.data.url)
          const { url }= res.data;
          window.location.replace(`${url.match(/http:\/\/|https:\/\//)?'':'http://'}${url}`);
        } else {
          alert("link not found");
          window.location.replace(window.location.origin);
        }
      })
    }
  }, [pathName]);

  return(
    <div></div>
  )
}

export default RedirectPage;