const ffi = require('ffi-napi');
const path = require('path');
const ref = require('ref-napi');
const express = require("express")

const app = express()

const libPath = path.resolve(process.cwd(), "./lib/demo.dll")

console.log("库文件路径：", libPath);

const lib = ffi.Library(libPath, {
    add: [ref.types.double, [ref.types.double, ref.types.double]],
    subtract: [ref.types.double, [ref.types.double, ref.types.double]],
    multiply: [ref.types.double, [ref.types.double, ref.types.double]],
})

console.log("计算结果1", lib.add(1, 2))
console.log("计算结果2", lib.subtract(1, 2))
console.log("计算结果3", lib.multiply(1, 2))

app.get("/add", (req, res) => {
    res.send(`${lib.add(1, 2)}`)
})

app.get("/subtract", (req, res) => {
    res.send(`${lib.subtract(1, 2)}`)
})

app.listen(5207)
