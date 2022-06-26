const args = process.argv.splice(2);

const timer = function (args) {
  for (let i = 0; i < args.length; i += 1) {
    args[i] = Number(args[i]);
    if (!isNaN(args[i]) && args[i] > 0) {
      setTimeout(() => {
        return process.stdout.write("\x07");
      }, args[i] * 1000);
    }
  }
};

timer(args);
