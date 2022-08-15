import {isBeta} from "../src/helper/const"

type BR =
  'dev' | 'main';
type Check = {
  branch: BR,
  isBeta: boolean,
}
const Checks: Check[] = [
  {branch: "dev", isBeta: true},
  {branch: "main", isBeta: false},
]

export function check() {
  const args = process.argv
  const remote_ref = args[args.length - 2]
  const remote_branch = remote_ref.replace('refs/heads/', '')
  // need check
  const check = Checks.find((item) => item.branch === remote_branch)
  if (!check) {
    console.info('not need check consts')
    return
  }
  let error = false
  if (check.isBeta !== isBeta) {
    error = true
    console.error(`isBeta error: The correct value would be ${check.isBeta}`)
  }
  if (error) {
    process.exit(1)
  } else {
    console.info('✅ : Check Consts', check)
  }
}

check();
