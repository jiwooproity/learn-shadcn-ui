const { readdirSync } = require("fs");
const path = require("path");
const { createInterface } = require("readline/promises");
const { stdin, stdout } = require("process");
const { exec } = require("child_process");

const OVERWRITE_MESSAGE = "동일한 컴포넌트가 이미 있습니다. 덮어 씌우시겠습니까? (y/n) :";
const CREATE_COMPONENT = "생성할 Shadcn/ui 컴포넌트를 입력해 주세요. :";
const CANCELED_MESSAGE = "작업이 취소되었습니다.";

const readdir = () => {
  const filePath = path.resolve(__dirname, "src/components/common/ui");
  const fileNames = readdirSync(filePath).map((file) => file.split("."));
  return fileNames.map((file) => file[0]);
};

(async () => {
  let option = "";
  const haveComps = readdir();
  const rl = createInterface({ input: stdin, output: stdout });
  const component = await rl.question(CREATE_COMPONENT);

  // 덮어 씌울지에 대한 분기
  if (haveComps.includes(component)) {
    const doOverwrite = await rl.question(OVERWRITE_MESSAGE);

    if (doOverwrite.toLowerCase() !== "y") {
      console.log(CANCELED_MESSAGE);
      rl.close();
      process.exit();
    }

    option += "--overwrite";
  }

  // 로그 전달
  const output = (err, stdout, stderr) => {
    console.log(stderr);
    console.log(stdout);
    rl.close();
    process.exit();
  };

  // 컴포넌트 추가 스크립트
  exec(`yarn dlx shadcn-ui@latest add ${component} ${option}`, output);
})();
