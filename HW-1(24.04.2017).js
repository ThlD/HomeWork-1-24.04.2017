function isPalindrome(str) {
  let strWithoutSpaces = str.replace(/\s/g, '').toLowerCase();
  return strWithoutSpaces == strWithoutSpaces.split('').reverse().join('');
}

// Проверка
// console.log(isPalindrome('А роза упала на лапу Азора'));
// console.log(isPalindrome('Я не палиндром'));
// console.log(isPalindrome('Sum summus mus'));
// console.log(isPalindrome('Saippuakivikauppias'));
// console.log(isPalindrome(''));

function dec(...args) {
  let len = args.length;
  let fun = args[len-1];
  for (let i = 0; i < len-1; i++) {
    console.log(fun(args[i]));
  }
}

// Проверка
// dec('Vasya', '123321', 'hello', 'odo', isPalindrome);
// dec('Vasya', '123321', 'hello', 'odo', function (str) {
//   return str.toUpperCase()
// });
// dec('Vasya', '123321', 'hello', 'odo', function (str) {
//   return str.split('').sort((a, b) => a > b).join('')
// });
