/** @type {import('vls').VeturConfig} */
module.exports = {
  settings: {
    "vetur.useWorkspaceDependencies": true,
    "vetur.experimental.templateInterpolationService": true
  },
  projects: [
    {
      root: './www',
      package: './www/package.json',
      tsconfig: './www/tsconfig.json',
    }
  ]
}