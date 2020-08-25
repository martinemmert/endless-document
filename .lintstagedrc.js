module.exports = {
  "**/*.[j|t]s?(x)": (filenames) => `eslint ${filenames.join(" ")} --fix`,
  "!**/*.[j|t]s?(x)": (filenames) => `prettier --write ${filenames.join(" ")}`,
  // TODO: Run tests specific to the changed lerna projects.
};
