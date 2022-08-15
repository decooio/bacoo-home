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

export const baseUrl = isBeta
  ? "https://beta.api.baitech-ipfs.cloud"
  : "https://api.baitech-ipfs.cloud";
// @ts-ignore
export const prodJwt =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJrZXkiOnsiYXBpX2tleSI6IjVidkh6OFBCdVlhV2s3TkQydFpBNFRJaEFLM21NM0FHTDE2MjMyMzI0NjQyOTAiLCJ1c2VyX2lkIjo1fX0.ddfUSVZ7RkyDnNuOqKyIZSvQdEcgZW9s73QMszJoL8s";
export const betaJwt =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJrZXkiOnsiYXBpX2tleSI6IjJ2RVBtajlIYmkzcEpHTDhRanJSNjZRNkkzbUJrb0pJdDE2MjI3OTMzMzIzNDIiLCJ1c2VyX2lkIjoyfX0.Nq92bIOT1qKzEK5nwaGxUx1ViRr7sVeYnRMS9vXU27Y";
// for unLogin
export const JWT = isBeta ? betaJwt : prodJwt;

export const WIKI_URL = "https://wiki.decoo.io";

export const GATEWAY = "https://ipfs.decoo-cloud.cn";

export const DOWN_GATEWAY = "https://download.decoo-cloud.cn";

export const PRIVATE_KEY =
  "MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBAJ1JYhDjND01z3MIHeOTMQlz/tsSumEvgqlTmQUxnZFQ4YUFabfWQyTi/hYg2IODR97Edjzi8jiJdL6iOiP3Dxzl+rnretSszChMgfL7i6+REB43Vw2llYF1a91Zr9X0S2ii7NCmNC/qTsRIHuPs6VV9Igi47wF/L8aSRojIbO61AgMBAAECgYEAhCiz8NKoA0Kio9pPGviDvJitrTAoUR7VoCdxLQ8KgZ6/T8FDmke7tVPSAY/pvV9i1UiovPJIar78zG2NgsjF9cJtriNgN85ZrOi8EYObUI6HQDSsUxrJ8nXuykDnI9n2aP+yOt8swlGZLPMAJoZI3hvGcX9ml8SEKEcqFRAEAuECQQDoKRGjF69HdU29LnZ4DKqUdZU5oz1abXkfATZDEaxgIzxK5JB9Sp3AE0+tRkhSTADo+GqytfI3/Ki7HwpbqefZAkEArXAQvP0odiNaK3atYStsKi1zSSa6+4oUu2cynK4ykue4prtqeNjT+j+zt59LQVveHhs1iWjGaAj65K98jjgwPQJBAKccWMuy0sJ3F3wjo7cKNwciFEYm0JT01AiTUMG6SP/ynQWzvKXTPfXycJnjS0+h0c3gcr0s5quSPMpkr4oHpRECQGp7Hwuosaq2UanVluTNb/8FIH6M1MeSIuBbn2sqV8pxkaBr+BZxqNM/QOs/VUivSlNZiSjvtsAwozi7tNDsFlECQGy0gxRLEs02nm4MSk6i8BHPFCXjgN0uoMdbbARa8sgKBZfc0s9RL9DFxFZxjt7QLClF5Ol8aAo8ZONxEjOrNIE=";
