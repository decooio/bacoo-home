import {useEffect, useState} from "react";
import {withLoading} from "../components/common/Loading";
import {getPlanDetails, PlanDetails} from "./http_billing";
import {useError} from "../src/hooks/utils";
import {getUserInfo} from "./http";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {updatePref} from "../redux/main";
import {saveItemIntoStorage} from "../src/helper/utils";

export function useUser(): {
  user: IUserInfo | null,
  update: (u: IUserInfo | null) => void,
  refreshUser: () => Promise<void>,
} {
  const user = useSelector((state: any) => state.reducerPref.userinfo) as IUserInfo
  const put = useDispatch()

  const router = useRouter()

  const updateUser = async (u: IUserInfo | null) => {
    put(updatePref({ userinfo: u }))
    saveItemIntoStorage('userinfo', u)
    return u
  }
  const refreshUser = async () => {
    try {
        const u = await getUserInfo()
        await updateUser(u)
    } catch(e) {
      window.localStorage.removeItem('JWT')
      window.localStorage.removeItem('userinfo')
      window.localStorage.removeItem('showNeedBindGithubAccountDot')
      await updateUser(null)
      router.replace('/login')
    }
  }
  return {user, update: updateUser, refreshUser}
}

export function usePlanDetails(user: IUserInfo | null) {
  const onError = useError()
  const [plan, setPlan] = useState<PlanDetails | null>(null)
  useEffect(() => {
    if (user) {
      withLoading(
          getPlanDetails()
              .then(setPlan)
      ).catch(onError)
    }
  }, [user])
  return {plan}
}

