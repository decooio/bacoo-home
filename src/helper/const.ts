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
  ? "https://beta.api.decoo-cloud.cn"
  : "https://api.decoo-cloud.cn";
// @ts-ignore
export const prodJwt =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJrZXkiOnsiYXBpX2tleSI6IjRHTUJINmNQbXFmbDN4alloeHZVVXo2WWZQMTNwekk0RTE2MjMyMzI0NDQzNzciLCJ1c2VyX2lkIjo0fX0.FChp_uFc01QrlxYu4L3Z5npTosZKN7AztUNntYZ1HzQ";
export const betaJwt =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJrZXkiOnsiYXBpX2tleSI6IjJ2RVBtajlIYmkzcEpHTDhRanJSNjZRNkkzbUJrb0pJdDE2MjI3OTMzMzIzNDIiLCJ1c2VyX2lkIjoyfX0.Nq92bIOT1qKzEK5nwaGxUx1ViRr7sVeYnRMS9vXU27Y";
// for unLogin
export const JWT = isBeta ? betaJwt : prodJwt;

export const WIKI_URL = "https://wiki.decoo.io";

export const GATEWAY = "https://ipfs.decoo-cloud.cn";

export const DOWN_GATEWAY = "https://download.decoo-cloud.cn";

export const PRIVATE_KEY =
  "MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBAIGsvzyDTlDy5zNRKU72l/z9H9ngPROCPVU9QCVRKKW/IK8MvEuWqiuYCSBYWAfNelZCDBUdFEo9j1jDSIStCGXMiSS0Ec41drnn47j+3v/II2QntsCBx3rHgLt/zK92CO81298qQKShNUVAQmclQ+6deF4BtBRaf044l/QFj9HdAgMBAAECgYAg4hiAlN+IQYCFj+BEyN2T5vBrxKRYTR+WfPjGPcVr+oKkQTuCg4tVkLFHxX9VQzLxqr/7nqslhGTUYnkCRAqrwYAWmbS4Izkx90ky+DofC78oabI4YV0MQw54tIa0GUOtqqNSkEyeysdnEq7FrtsFZX3jdkZNdQjTOyyNJ2q+4QJBALf8ITNC7xPPwOdAs+n1zi6LKgFOjO4q5T62REslC7jovf1n4z5tPr523ZBOYId2K7ARrk+avGa12+HaHx4kpPUCQQC0bpLfMwAY1gOEG51AdO9lN7vS2H7wjZoLznV+8TsFwmH0PnuQpXYxRUkEOy/b2xjzezh7L+oloUyw+1mz7KhJAkEAmZHzaGVTR5ce7if8xKmu6vywGB0n11iotzrOMGcArNxgUVdYv+/R8osnD1/MhOVnO/TWKY3/+j+MBK3bUX7GzQJAaXEw/aTVSq5O8bYdiJyNhk4ywj3ouPVXb8zglyWsQ2pcShr1pQs87gA6cnGQP2BjzW5WDI9suz7vDYJl4qLLmQJBAK34kN8pp/fIeedk7YoKHEd4Fr7oLfJJzJ0yHBpzXuxOT1eZTpk8kCO0T7rsrgffuJMcnosP8pTzjNRCyBiuMrc=";
