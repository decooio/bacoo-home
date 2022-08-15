import {useEffect, useMemo, useState} from "react";
import decoo, {Options, Client} from "@decooio/sdk";
import {Endpoint} from "@decooio/sdk/src/types";
import _ from 'lodash';
import {isBeta, JWT, PRIVATE_KEY } from "../src/helper/const";
import {useUser} from "./useUser";

export interface DecooIo {
  changeEndpoint: (p: Endpoint) => void,
  endpoint: Endpoint | null,
  endpoints: Endpoint[],
  client: Client | null,
}

const defOpt: Options = {
  zone: isBeta ? "beta" : "cn",
  baseUrl: "https://api.baitech-ipfs.cloud",
  jwt: JWT,
  privateKey: PRIVATE_KEY
}

export function useDecooIo(): DecooIo {
  const [endpoints, setEndpoints] = useState<Endpoint[]>([])
  const [endpoint, setEndpoint] = useState<Endpoint | null>(null)
  const opt = {...defOpt}
  // const r = useRouter();
  const {user} = useUser();
  if (user) {
    const jwt = window.localStorage.getItem('JWT');
    if (jwt) opt.jwt = jwt;
    if (user.userRsaPrivateKey) opt.privateKey = user.userRsaPrivateKey;
  }
  useEffect(() => {
    decoo.listEndpoints(opt)
      .then((points) => {
        console.info("p", points)
        for (const p of points) {
          if (!p.name) p.name = `DC-${p.id}`
        }
        setEndpoints(points)
        const last_endpoint_url = window.localStorage.getItem("last_endpoint_url");
        let find = _.find(points, p => p.apiHost === last_endpoint_url);
        if (!find) find = points[0]
        console.info('cruentP:', find)
        setEndpoint(find)
        window.localStorage.setItem("last_endpoint_url", find.apiHost);
      })
      .catch(console.error)
  }, [opt.zone, user])
  const changeEndpoint = (p: Endpoint) => {
    setEndpoint(p);
    window.localStorage.setItem("last_endpoint_url", p.apiHost);
  }

  const client = useMemo<Client | null>(() => {
    if (!endpoint) return null
    // console.info("opt-->:::",opt)
    return decoo.create({
      url: endpoint.apiHost,
      ...(opt ?? {})
    })
  }, [endpoint, opt.privateKey, opt.jwt, opt.zone]);

  return {
    changeEndpoint,
    endpoint,
    endpoints,
    client
  }
}
