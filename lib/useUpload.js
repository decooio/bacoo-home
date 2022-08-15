/* eslint-disable */
import {useCallback, useEffect, useMemo, useState} from 'react';
import {getPinedInfo, httpGet, pinFileToIpfs} from './http';
import {ErrorDist} from '../src/helper/const';

const createToken = '/api/cos/folder/auth';
const Bucket = 'decoo-1257135774';
const Region = `ap-hongkong`;

function poll(interval = 1000, f, arg, cb) {
  return new Promise((resolve, reject) => {
    const timer = setInterval(async () => {
      f(arg).then((cid) => {
        clearInterval(timer)
        resolve(cid)
      }).catch((e) => {
        if (e !== 'noData') {
          clearInterval(timer)
          reject(e)
        }
      })
    }, interval)
  })
}

let COS

function createCos(certs) {
  return new COS({
    ProgressInterval: 100,
    getAuthorization: function (options, callback) {
      // 服务端 JS 和 PHP 例子：https://github.com/tencentyun/cos-js-sdk-v5/blob/master/server/
      // 服务端其他语言参考 COS STS SDK ：https://github.com/tencentyun/qcloud-cos-sts-sdk
      // STS 详细文档指引看：https://cloud.tencent.com/document/product/436/14048
      callback(certs)
    }
  });
}

let loadToken = undefined


async function upFileToCloud(cos, fileName, file, onProgress) {
  try {
    return await cos.putObject({
      Bucket,
      Region,
      Key: fileName,              /* 必须 */
      StorageClass: 'STANDARD',
      Body: file, // 上传文件对象
      onProgress
    })
  } catch (e) {
    throw {type: ErrorDist.UpFileError, e}
  }
}

async function pinFile(result, file) {
  return true
}

const MB = 1024 * 1024

function getIntervalForFile(file) {
  const size = file.size
  if (size < 10 * MB) {
    return 1000
  } else if (size < 50 * MB) {
    return 1500
  } else if (size < 150 * MB) {
    return 2000
  } else if (size < 300 * MB) {
    return 3000
  } else {
    return 3500
  }
}

export function useUpload() {
  const [progress, setProgress] = useState(0)

  const updateProgress = (p, auto = false) => {
    setProgress((oldP) => {
      if (auto) {
        const nP = oldP + p
        return nP <= 99 ? nP : 99
      }
      if (oldP> p) return oldP
      return p
    })
  }
  useEffect(() => {
    // eslint-disable-next-line
    COS = require('cos-js-sdk-v5')
  }, [])

  const upload = async (file) => {
    let autoProgress
    try {
      // check file
      if (!file) return
      // Simulation progress for getToken
      autoProgress = setInterval(() => updateProgress(0.5, true), 100)
      const data = await httpGet(createToken)
      clearInterval(autoProgress)
      let certs = ({
        TmpSecretId: data.tmpSecretId,
        TmpSecretKey: data.tmpSecretKey,
        XCosSecurityToken: data.sessionToken,
        ExpiredTime: data.expiredTime
      })
      let fileInfo = {
        tmpFolderName: data.tmpFolderName,
        tmpFileName: data.tmpFileName  // AKA UUID
      }
      let [fileExt, ...others] = file.name.split('.').reverse()
      let fileName = `${fileInfo.tmpFolderName}/${fileInfo.tmpFileName}.${fileExt}`
      let cos = createCos(certs)
      const {Location} = await upFileToCloud(cos, fileName, file,
        (p) => updateProgress(p.percent * 60)
      )
      // Simulation progress for pin and polling get cid
      autoProgress = setInterval(() => updateProgress(0.5, true), 100)
      await pinFileToIpfs(`https://${Location}`, fileInfo.tmpFileName)
      // polling
      const cid = await poll(getIntervalForFile(file), getPinedInfo, fileInfo.tmpFileName)
      clearInterval(autoProgress)
      autoProgress = null
      setProgress(0)
      return cid
    } catch (e) {
      if (autoProgress) clearInterval(autoProgress)
      setProgress(0)
      throw e
    }
  }
  return {upload, progress}
}
