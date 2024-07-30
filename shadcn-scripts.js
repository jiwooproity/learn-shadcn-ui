const { readdirSync } = require("fs");
const { resolve } = require("path");
const { createInterface } = require("readline/promises");
const { stdin, stdout } = require("process");
const { exec } = require("child_process");
const { aliases } = require("./components.json"); // shadcn/ui conf 파일

const MESSAGE = {
  CREATE: "생성할 Shadcn/ui 컴포넌트를 입력해 주세요. : ",
  OVERWRITE: "동일한 컴포넌트가 이미 있습니다. 덮어 씌우시겠습니까? (y/n) : ",
  CANCELED: "작업이 취소되었습니다.",
};

(() => {
  const rl = createInterface({ input: stdin, output: stdout }); // readline 생성

  // 알림
  const notice = (msgs, close = true) => {
    switch (typeof msgs) {
      case "object":
        msgs.forEach((msg) => console.log(msg));
        break;
      case "string":
        console.log(msgs);
      default:
        break;
    }

    if (close) {
      rl.close();
      process.exit();
    }
  };

  const getUserPkgManage = () => {
    const filePath = resolve(__dirname, `./`);
    const files = readdirSync(filePath);

    if (files.includes("package-lock.json")) {
      return "npx";
    } else if (files.includes("yarn.lock")) {
      return "yarn dlx";
    }
  };

  // 중복 컴포넌트 검증
  const validationComp = (componentName) => {
    const configPath = aliases.components.replace("@/", "");
    const filePath = resolve(__dirname, `src/${configPath}/ui`);
    const fileNames = readdirSync(filePath).map((file) => file.split("."));
    return fileNames.map((file) => file[0]).includes(componentName);
  };

  // 로그 전달
  const output = (err, stdout, stderr) => {
    notice([stderr, stdout]);
  };

  // 실행 스크립트
  (async () => {
    const componentName = await rl.question(MESSAGE.CREATE);
    let manage = getUserPkgManage();
    let option = ""; // shadcn/ui CLI 옵션

    // 덮어 씌울지에 대한 분기
    if (validationComp(componentName)) {
      if ((await rl.question(MESSAGE.OVERWRITE)) !== "y") {
        notice(MESSAGE.CANCELED);
      }

      option += "--overwrite";
    }

    // 컴포넌트 추가 스크립트
    exec(`${manage} shadcn-ui@latest add ${componentName} ${option}`, output);
  })();
})();
