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
  ? "https://beta-api.baitech-ipfs.net/"
  : "https://api.baitech-ipfs.net/";
// @ts-ignore
export const prod_auth =
  "Bearer c3Vic3RyYXRlLWNUSlNYN1lGWEY1dFM1UHJ3NTd0NGkyc05xU1V6ZHM2QnhIdHhHRTViSE5aRWNKVjc6MHgwYTI2MjA1YjMwMjQ3NjczNGQ4ZWE5Mzk1YTZjZjVkYTIwOTU3YzQ0MzIyNDUwZjE4MzUzMGFkZDcyN2Q1OTA0ZjJhNTM4NmUyZTY1ZWYxNTEyNzFhYTgwMDlkN2EyYTZlNDE3NGUxYTQ1ZTUyZDM1MDI4ZDY1NzM5OWVlNjY4Nw==";
export const beta_auth =
  "Bearer c3Vic3RyYXRlLWNUTEJlSGlvd2JDZE1rdjNLaENSQkxzbXNmRDNicVlnVlZURU5DQlp1ZjIxRW5OOEc6MHgwMjFiNTU1OTg3ZGU4OTJlY2JlMmE5MWIzMTI3Mzg4OGIwYTUwYzZmN2ExNzAwNTFhNzVkNjAwMDc2NzhiYjA1YTU0NWIwYjJkNjVkYmRlNTJmNWQyNDU0NzljODRiMzExZDQxMjM5MjU3MzM5MTlhMGFkMzhiZWE0YjRlZGM4OQ";
// for unLogin
export const AUTH = isBeta ? beta_auth : prod_auth;
export const SUB_DOMAIN = isBeta ? '099equ' : '099eqs';

export const WIKI_URL = "https://wiki.decoo.io";

export const GATEWAY = "https://ipfs.decoo-cloud.cn";

export const DOWN_GATEWAY = "https://download.decoo-cloud.cn";

export const PRIVATE_KEY =
  "MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBAIGsvzyDTlDy5zNRKU72l/z9H9ngPROCPVU9QCVRKKW/IK8MvEuWqiuYCSBYWAfNelZCDBUdFEo9j1jDSIStCGXMiSS0Ec41drnn47j+3v/II2QntsCBx3rHgLt/zK92CO81298qQKShNUVAQmclQ+6deF4BtBRaf044l/QFj9HdAgMBAAECgYAg4hiAlN+IQYCFj+BEyN2T5vBrxKRYTR+WfPjGPcVr+oKkQTuCg4tVkLFHxX9VQzLxqr/7nqslhGTUYnkCRAqrwYAWmbS4Izkx90ky+DofC78oabI4YV0MQw54tIa0GUOtqqNSkEyeysdnEq7FrtsFZX3jdkZNdQjTOyyNJ2q+4QJBALf8ITNC7xPPwOdAs+n1zi6LKgFOjO4q5T62REslC7jovf1n4z5tPr523ZBOYId2K7ARrk+avGa12+HaHx4kpPUCQQC0bpLfMwAY1gOEG51AdO9lN7vS2H7wjZoLznV+8TsFwmH0PnuQpXYxRUkEOy/b2xjzezh7L+oloUyw+1mz7KhJAkEAmZHzaGVTR5ce7if8xKmu6vywGB0n11iotzrOMGcArNxgUVdYv+/R8osnD1/MhOVnO/TWKY3/+j+MBK3bUX7GzQJAaXEw/aTVSq5O8bYdiJyNhk4ywj3ouPVXb8zglyWsQ2pcShr1pQs87gA6cnGQP2BjzW5WDI9suz7vDYJl4qLLmQJBAK34kN8pp/fIeedk7YoKHEd4Fr7oLfJJzJ0yHBpzXuxOT1eZTpk8kCO0T7rsrgffuJMcnosP8pTzjNRCyBiuMrc=";
