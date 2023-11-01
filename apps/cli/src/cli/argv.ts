import arg from "arg";

export function parseArgs(argv: string[]) {
  argv = argv.slice(2);
  return arg(
    {
      "--help": Boolean,
      "--version": Boolean,
      "--service": [String],
      "--devContainerImage": String,
      "-s": "--service",
      "-v": "--version",
    },
    {
      argv,
    }
  );
}

export function displayHelp() {
  console.log(`Usages: inizio [options]
Options:
  --help,             Show help
  --version, -v       Show version number
  --service, -s       Specify a service to run
  --devContainerImage Specify a dev container image to use
  `);
}

export function displayVersion() {
  // TODO: read package json version
  console.log("0.0.1");
}
