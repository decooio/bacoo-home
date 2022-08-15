import {useRouter} from "next/router";
import {useUser} from "../../lib/useUser";
import {useEffect} from "react";

const Index = () => {
  const {user} = useUser()
  const router = useRouter()
  useEffect(() => {
    if (user && user?.mobile) {
      router.replace('/panel/fileManager')
    } else {
      router.replace('/bind_phone')
    }
  }, [])
  return null
}
export default Index
