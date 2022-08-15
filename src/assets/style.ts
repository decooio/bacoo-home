import {useEffect, useState} from "react";
const mobile_width = 960
export const Phone = `@media screen and (max-width: ${mobile_width}px)`

export function useDevice(){
  const [isMobile,setIsMobile] = useState(false)
  useEffect(() => {
    setIsMobile(window.innerWidth <= mobile_width)
    if (process.env.NODE_ENV === 'development'){
      const task = setInterval(() => {
        setIsMobile(window.innerWidth <= mobile_width)
      },1000)
      return () => clearInterval(task)
    }
  })
  return { isMobile }
}
