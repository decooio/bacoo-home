/* eslint-disable */
export const ErrorDist = {
  GetTokenError: "GetTokenError",
  FileSizeError: "FileSizeError",
  UpFileError: "UpFileError",
  PinFileError: "PinFileError",
};
//Max filesize, Mb
export const fileSizeLimitMb = 2048;

// @ts-ignore
export const isBeta = true;
// @ts-ignore
export const oem: string = "baitech";
export interface OEMConfig {
  name: string;
  logo: string;
  logoDark: string;
  fav: string;
  showBeian: boolean;
  subDomain: string;
  baseUrl: string;
  auth: string;
}

function createOemConfig(): OEMConfig {
  if (oem === "zhong") {
    return {
      name: "中广链存",
      logo: "/zhong/logo.png",
      logoDark: '/zhong/logo_dark.png',
      fav: "/zhong/fav.ico",
      showBeian: false,
      subDomain: isBeta ? "099equ" : "099eqs",
      baseUrl: isBeta ? "https://beta-api.baitech-ipfs.net/" : "https://api.baitech-ipfs.net/",
      auth: isBeta
        ? "Bearer c3Vic3RyYXRlLWNUTEJlSGlvd2JDZE1rdjNLaENSQkxzbXNmRDNicVlnVlZURU5DQlp1ZjIxRW5OOEc6MHgwMjFiNTU1OTg3ZGU4OTJlY2JlMmE5MWIzMTI3Mzg4OGIwYTUwYzZmN2ExNzAwNTFhNzVkNjAwMDc2NzhiYjA1YTU0NWIwYjJkNjVkYmRlNTJmNWQyNDU0NzljODRiMzExZDQxMjM5MjU3MzM5MTlhMGFkMzhiZWE0YjRlZGM4OQ"
        : "Bearer c3Vic3RyYXRlLWNUSjJ3bUg5WmZuOHpLd0M2NnFQanZpRHU4M05yVmdjM0JHTG56emJNOFRSWkxhWmk6MHhiYWNlNzRhMDAwMjc5MDY3MzBlMTc5NmEyNWU2OWU2ZWRjYmIyNzg1MDEwZjVjYzYxOTg0YmQwM2I2NDk5YTE5MTY5MTEyMDdhNDNkNGFmM2MwMWEyNjRhMTRiN2UyOGQ2ZmRhYzExOTJhMmU5YmZiMTc5NjMzNGYxZTE5MGU4Mg==",
    };
  }
  return {
    name: "百工链存",
    logo: "/logo.png",
    logoDark: '/logo_dark.png',
    fav: "/logo.ico",
    showBeian: true,
    subDomain: isBeta ? "099equ" : "099eqs",
    baseUrl: isBeta ? "https://beta-api.baitech-ipfs.net/" : "https://api.baitech-ipfs.net/",
    auth: isBeta
      ? "Bearer c3Vic3RyYXRlLWNUTEJlSGlvd2JDZE1rdjNLaENSQkxzbXNmRDNicVlnVlZURU5DQlp1ZjIxRW5OOEc6MHgwMjFiNTU1OTg3ZGU4OTJlY2JlMmE5MWIzMTI3Mzg4OGIwYTUwYzZmN2ExNzAwNTFhNzVkNjAwMDc2NzhiYjA1YTU0NWIwYjJkNjVkYmRlNTJmNWQyNDU0NzljODRiMzExZDQxMjM5MjU3MzM5MTlhMGFkMzhiZWE0YjRlZGM4OQ"
      : "Bearer c3Vic3RyYXRlLWNUSjJ3bUg5WmZuOHpLd0M2NnFQanZpRHU4M05yVmdjM0JHTG56emJNOFRSWkxhWmk6MHhiYWNlNzRhMDAwMjc5MDY3MzBlMTc5NmEyNWU2OWU2ZWRjYmIyNzg1MDEwZjVjYzYxOTg0YmQwM2I2NDk5YTE5MTY5MTEyMDdhNDNkNGFmM2MwMWEyNjRhMTRiN2UyOGQ2ZmRhYzExOTJhMmU5YmZiMTc5NjMzNGYxZTE5MGU4Mg==",
  };
}

export const oemConfig: OEMConfig = createOemConfig();
