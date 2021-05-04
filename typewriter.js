const sentence = "hello there from lighthouse labs";
let num = 1000;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, num)
  num += 50;
}
setTimeout(() => {
  process.stdout.write('\n')
}, 1000 + 50 * sentence.length);