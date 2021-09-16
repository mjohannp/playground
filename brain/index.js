const brain = require("brain.js")

var net = new brain.NeuralNetwork();

// Einfache Ampel lernen
// Rot  [1, 0, 0] => Stop [1, 0]
// Gelb [0, 1, 0] => Achtung [0.5, 0.5]
// Grün [0, 0, 1] => Go [0, 1]

net.train([
    { input: [1, 0, 0], output: [1] },
    { input: [0, 1, 0], output: [0.5] },
    { input: [1, 1, 0], output: [0.5] },
    { input: [0, 0, 1], output: [0] }
],
{
    log: (detail) => console.log(detail),
}
)

console.log(net.run([1,0,0]))
console.log(net.run([0,1,0]))
console.log(net.run([0,0,1]))
console.log(net.run([1,1,0]))

console.log(net.toJSON())
