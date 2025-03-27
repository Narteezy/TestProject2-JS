function meanScore(...args) {
   if (!args.every(arg => typeof arg === 'number')) {
      console.error("Все аргументы в вызове функции должны быть числами!");
      return;
   }
   
   const sum = args.reduce((acc, num) => acc + num, 0);
   const mean = sum / args.length;
   
   return Number(mean.toFixed(2));
}

console.log(meanScore(7, 20, 25));
console.log(meanScore(3, 10, 26, 37, 66, 90, 5907));
console.log(meanScore(7, "20", 25));

