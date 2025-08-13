// 1. Har bir so‘zni katta harf bilan yozish
function capitalizeWords(str) {
  // 1. Bo‘sh joylardan bo‘lib so‘zlarga ajratamiz
  // 2. Har bir so‘zni birinchi harfini katta qilib, qolganini kichik yozamiz
  // 3. So‘zlarni yana bo‘sh joy bilan birlashtiramiz
}
console.log(capitalizeWords("salom dunyo")) // "Salom Dunyo"

// 2. Massivdagi har bir ismni katta harfga o‘tkazing
function toUpperNames(names) {
  // 1. map() yordamida har bir ismdan yangi massiv yaratamiz
  // 2. Har bir ismni toUpperCase() bilan yozamiz
}
console.log(toUpperNames(["ali", "vali", "hasan"])) // ["ALI", "VALI", "HASAN"]

// 3. Massivda nechta musbat son borligini toping
function countPositive(numbers) {
  // 1. filter() yordamida musbat sonlargina ajratib oling
  // 2. filter() natijasining uzunligini qaytaring
}
console.log(countPositive([1, -3, 4, 0, 6])) // 3

// 4. Stringdagi bo‘sh joylarni olib tashlang
function removeSpaces(str) {
  // 1. trim() yordamida bosh va oxiridagi bo‘sh joylarni oling
  // 2. replaceAll() bilan oradagi bo‘sh joylarni ham olib tashlang
}
console.log(removeSpaces("  salom   dunyo  ")) // "salomdunyo"

// 5. Berilgan sonlar orasidan biror juft son bor-yo‘qligini tekshiring
function hasEvenNumber(arr) {
  // 1. some() yordamida bironta son juft ekanligini tekshiring
}
console.log(hasEvenNumber([1, 3, 5, 8])) // true

// 6. Massivdagi 0 qiymatli elementlarni olib tashlang
function removeZeros(arr) {
  // 1. filter() yordamida faqat 0 ga teng bo‘lmagan qiymatlarni oling
}
console.log(removeZeros([0, 1, 2, 0, 3])) // [1, 2, 3]

// 7. Har bir so‘zni teskari qilib qaytaring
function reverseWords(str) {
  // 1. split() bilan so‘zlarga ajrating
  // 2. map() orqali har bir so‘zni teskari qilib chiqing
  // 3. So‘zlarni yana birlashtiring
}
console.log(reverseWords("salom dunyo")) // "molas oynud"

// 8. Faqat 3 harfli so‘zlarni qoldiring
function threeLetterWords(words) {
  // 1. filter() yordamida uzunligi 3 ga teng so‘zlarni ajrating
}
console.log(threeLetterWords(["sal", "olma", "ko‘r", "bor"])) // ["sal", "ko‘r", "bor"]

// 9. Massivdagi sonlarni 2 ga ko‘paytiring
function doubleNumbers(numbers) {
  // 1. map() yordamida har bir elementni 2 ga ko‘paytiring
}
console.log(doubleNumbers([1, 2, 3])) // [2, 4, 6]

// 10. Matndagi har bir harfni alohida massivga oling
function splitChars(str) {
  // 1. split('') orqali harflarga bo‘ling
}
console.log(splitChars("hello")) // ['h','e','l','l','o']

// 11. Massivdagi butun sonlarni saqlang
function onlyIntegers(arr) {
  // 1. filter() yordamida Number.isInteger bilan tekshiring
}
console.log(onlyIntegers([1.5, 2, 3.1, 4])) // [2, 4]

// 12. Massivdagi har bir elementga uning indexini qo‘shing
function addIndex(arr) {
  // 1. map() yordamida qiymatga uning indeksini qo‘shing
}
console.log(addIndex([10, 20, 30])) // [10, 21, 32]

// 13. Stringda nechta 'a' harfi borligini sanang
function countA(str) {
  // 1. toLowerCase() qiling
  // 2. split() bilan harflarga bo‘ling
  // 3. filter() orqali faqat 'a' harflarini oling va uzunligini toping
}
console.log(countA("Ananas")) // 3

// 14. Har bir so‘zdan faqat birinchi harfni oling
function getInitials(str) {
  // 1. split() orqali so‘zlarga bo‘ling
  // 2. map() orqali har bir so‘zdan faqat birinchi harfni oling
  // 3. join('') bilan birlashtiring
}
console.log(getInitials("Hello World From JS")) // "HWFJ"

// 15. Ichma-ich massivlarni tekislashtiring
function flattenArray(arr) {
  // 1. flat() metodidan foydalaning
}
console.log(flattenArray([1, [2, 3], [4, 5]])) // [1,2,3,4,5]

// 17. Stringdagi raqamlarni sonlarga aylantiring
function extractNumbers(str) {
  // 1. split('') bilan harflarga bo‘ling
  // 2. filter() bilan faqat raqamlar ajrating
  // 3. map() bilan ularni Number ga aylantiring
}
console.log(extractNumbers("ab1c3d2")) // [1,3,2]

// 18. Har bir so‘zni teskari qilib, oxirgi so‘zni katta harf bilan qaytaring
function specialReverse(str) {
  // 1. split() orqali so‘zlarga bo‘ling
  // 2. map() orqali har birini teskari qiling
  // 3. oxirgi so‘zni toUpperCase() qiling
}
console.log(specialReverse("salom dunyo js")) // ['molas', 'oynud', 'SJ']

// 19. 2-qavatgacha bo‘lgan ichki massivlarni flatten qiling (flatMap bilan)
function flatMapExample(arr) {
  // 1. flatMap() yordamida birinchi qatlamni yoying
  // 2. Ichidagi yana bitta massiv bo‘lsa, uni ham yoying
}
console.log(flatMapExample([1, [2, [3, 4]], 5])) // [1,2,[3,4],5]

// 20. Massivda barcha qiymatlar son ekanligini tekshiring
function allNumbers(arr) {
  // 1. every() yordamida typeof qiymat 'number' ekanligini tekshiring
}
console.log(allNumbers([1, 2, 3])) // true
