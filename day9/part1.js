const part1 = file => require("node:fs")
    .readFileSync(file, "utf-8")
    .split("\n")
    .slice(0, -1)
    .map(l => l.split(" ").map(e => +e))
    .map(l => {
        l = [ l ];
        while (!l.at(-1).every(e => e === 0)) {
            l.push(l.at(-1).map((e, i, a) => (a[i + 1] ?? 0) - e).slice(0, -1));
        }
        return l;
    })
    .map(l => l.map(e => e.at(-1)).reduce((p, c) => p + c))
    .reduce((p, c) => p + c);

console.log(part1("input"));
