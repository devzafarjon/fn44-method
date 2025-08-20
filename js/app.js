// 1. Har bir so‘zni katta harf bilan yozish

function capitalizeWords(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ")
}
console.log(capitalizeWords("salom dunyo"))

// 2. Massivdagi har bir ismni katta harfga o‘tkazing

function toUpperNames(names) {
  return names.map((name) => name.toUpperCase())
}
console.log(toUpperNames(["ali", "vali", "hasan"]))

// 3. Massivda nechta musbat son borligini toping

function countPositive(numbers) {
  let filt = numbers.filter((number) => {
    if (number > 0 && number != 0) {
      return true
    }
  })
  return filt.length
}

console.log(countPositive([1, -3, 4, 0, 6]))

// 4. Stringdagi bo‘sh joylarni olib tashlang

function removeSpaces(str) {
  return str.trim().replaceAll(" ", "")
}
console.log(removeSpaces("  salom   dunyo  "))

// 5. Berilgan sonlar orasidan biror juft son bor-yo‘qligini tekshiring

function hasEvenNumber(arr) {
  return arr.some((number) => number % 2 === 0)
}
console.log(hasEvenNumber([1, 3, 5, 8]))

// 6. Massivdagi 0 qiymatli elementlarni olib tashlang

function removeZeros(arr) {
  return arr.filter((el) => el != 0)
}
console.log(removeZeros([0, 1, 2, 0, 3]))

// 7. Har bir so‘zni teskari qilib qaytaring

function reverseWords(str) {
  return str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ")
}
console.log(reverseWords("salom dunyo"))

// 8. Faqat 3 harfli so‘zlarni qoldiring

function threeLetterWords(words) {
  return words.filter((word) => word.length <= 3)
}
console.log(threeLetterWords(["sal", "olma", "ko'r", "bor"]))

// 9. Massivdagi sonlarni 2 ga ko‘paytiring

function doubleNumbers(numbers) {
  return numbers.map((el) => el * 2)
}
console.log(doubleNumbers([1, 2, 3]))

// 10. Matndagi har bir harfni alohida massivga oling

function splitChars(str) {
  return str.split("")
}
console.log(splitChars("hello"))

// 11. Massivdagi butun sonlarni saqlang

function onlyIntegers(arr) {
  return arr.filter((el) => Number.isInteger(el))
}
console.log(onlyIntegers([1.5, 2, 3.1, 4]))

// 12. Massivdagi har bir elementga uning indexini qo‘shing

function addIndex(arr) {
  return arr.map((el, index) => el + index)
}
console.log(addIndex([10, 20, 30]))

// 13. Stringda nechta 'a' harfi borligini sanang

function countA(str) {
  return str
    .toLowerCase()
    .split("")
    .filter((letter) => letter == "a").length
}
console.log(countA("Ananas"))

// 14. Har bir so‘zdan faqat birinchi harfni oling

function getInitials(str) {
  return str
    .split(" ")
    .map((word) => word[0])
    .join("")
}
console.log(getInitials("Hello World From JS"))

// 15. Ichma-ich massivlarni tekislashtiring

function flattenArray(arr) {
  return arr.flat(Infinity)
}
console.log(flattenArray([1, [2, 3], [4, 5]]))

// 17. Stringdagi raqamlarni sonlarga aylantiring

function extractNumbers(str) {
  return str
    .split("")
    .filter((el) => !isNaN(el) && el !== " ")
    .map(Number)
}
console.log(extractNumbers("ab1c3d2"))

// 18. Har bir so‘zni teskari qilib, oxirgi so‘zni katta harf bilan qaytaring

function specialReverse(str) {
  return str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .map((word, index, arr) =>
      index === arr.length - 1 ? word.toUpperCase() : word
    )
    .join(" ")
}
console.log(specialReverse("salom dunyo js"))

// 20. Massivda barcha qiymatlar son ekanligini tekshiring

function allNumbers(arr) {
  return arr.every((el) => typeof el === "number")
}
console.log(allNumbers([1, 2, 3]))
