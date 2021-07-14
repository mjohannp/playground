const chalk = require("chalk")


console.log("Hello, World!")

console.log(chalk.red("Hallo rot"))
console.log(chalk.green("Hallo grün"))
console.log(chalk.yellow("Hallo gelb"))
console.log(chalk.blue("Hallo blau"))

function rainbow(text, background = false) {

    const colors = background ? 
    [chalk.bgRed, chalk.bgRedBright, chalk.bgYellow, chalk.bgGreen, chalk.bgBlueBright, chalk.bgBlue] :
    [chalk.red, chalk.redBright, chalk.yellow, chalk.green, chalk.blueBright, chalk.blue]

    let result = ""

    let index = 0
    for (const c of text) {
        result+= colors[index](c)
        index++
        if (index >= colors.length) {
            index = 0
        }
    }

    return result
}

console.log(rainbow("RainbowColors"))
console.log(rainbow("RainbowColors", true))

