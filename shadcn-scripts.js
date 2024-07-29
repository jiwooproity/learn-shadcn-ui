const readline = require("readline/promises");
const { stdin, stdout } = require("process");
const { exec } = require("child_process");

(async () => {
  const rl = readline.createInterface({ input: stdin, output: stdout });
  const component = await rl.question("생성할 Shadcn/ui 컴포넌트를 입력해 주세요. :");
  exec(`yarn dlx shadcn-ui@latest add ${component}`, (err, stdout) => {
    console.log(stdout);
    return;
  });
})();
