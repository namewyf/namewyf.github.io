# 如何混合使用commonjs和esm

## 背景
在npm的各种模块里，有的模块最新引入，使用的是esm，有些是commonjs。

如果说回退包的版本，都使用commonjs，那么又会错失很多更新的内容。

## 解决

### 1. 修改后缀混合使用commonjs和esm。

当我们把文件命名为`.mjs`时，Node.js会默认使用esm模块化规范。

如果使用`.cjs`，Node.js会默认使用commonjs模块化规范。

如果是`.js`，则会看package.json的type字段，如果为module，则使用esm，否则使用commonjs。

利用这一点，就能混合使用commonjs和esm。

这种方式的缺点是不同的只能把esm和commonjs的模块分开文件夹使用，不能把commonjs和esm的模块混合在一个文件里使用。

>需要注意，当修改后缀之后，我们在使用node执行的该文件时，需要使用node xxx.cjs，写文件的名称时，要对应的修改

### 2. 创建ESM包管理器
wrapper.mjs
```js
import inquirer from 'inquirer';
export { inquirer };
```

`import('./wrapper.mjs')`,这个语法很重要
main.cjs
```js
const { program } = require('commander');

import('./wrapper.mjs').then(({ inquirer }) => {
    program.version('1.0.0');
    inquirer.prompt([
        {
            name: "userName",
            type: "input",
            message: "你的名字叫什么？"
        }
    ]).then(answer => {
        console.log("回答内容", answer);
    });
});
```

### 3. 一律用ESM

对于
```js
const { program } = require('commander');
```

也可以用
```js
import { program } from 'commander';
```
导入