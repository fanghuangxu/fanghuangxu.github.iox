function runExe() {
  const { exec } = require('child_process');

  exec('3C%20IDLE.exe', (error, stdout, stderr) => {
    if (error) {
      console.error(`执行 .exe 文件时出错: ${error}`);
      return;
    }
    console.log(`.exe 文件的输出: ${stdout}`);
  });
}
