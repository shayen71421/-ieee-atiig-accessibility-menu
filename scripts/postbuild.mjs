import { readFileSync, writeFileSync } from "fs"

const file = "dist/index.js"
const content = readFileSync(file, "utf8")
if (!content.startsWith('"use client"')) {
  writeFileSync(file, '"use client";\n' + content)
}
