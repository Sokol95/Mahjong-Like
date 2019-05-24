function shuffle(array) {
  const _array = array.slice(0)
  for (let i = _array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    let temp = _array[i]
    _array[i] = _array[j]
    _array[j] = temp
  }

  return _array
}

export default function initializeDeck() {
  const arr = []
  let randomNumber
  let id = 0

  while (arr.length < 16) {
    randomNumber = Math.floor(Math.random() * 100)
    if (arr.indexOf(randomNumber) === -1) {

      arr.push(...[{
        id: id++,
        item: randomNumber
      }, {
        id: id++,
        item: randomNumber
      }])
    }
  }

  return shuffle(arr)
}