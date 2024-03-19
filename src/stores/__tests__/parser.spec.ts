// type Character = {
//   name: string
//   age: number
//   sex: string
//   kind: string
//   hair: {
//     color: string
//     length: string
//     style: string
//   }
//   eyes: {
//     color: string
//     shape: string
//   }
//   height: string
//   body: {
//     type: string
//     build: string
//   }
//   cloth: {
//     type: string
//     color: string
//   }
//   shoes: {
//     type: string
//     color: string
//   }
// }

// function characterToJsonArray(character: Character): string[] {
//   let words = []

//   words.push(character.sex)
//   words.push(character.kind)
//   words.push(`${character.hair.color} ${character.hair.length} ${character.hair.style} hair`)
//   words.push(`${character.eyes.color} ${character.eyes.shape} eyes`)
//   words.push(character.height)
//   words.push(character.body.type)
//   words.push(character.body.build + ' build')
//   words.push(`${character.cloth.color} ${character.cloth.type} clothes`)
//   words.push(`${character.shoes.color} ${character.shoes.type}`)

//   return words
// }

// // Example usage
// const character: Character = {
//   name: 'Aelar',
//   age: 127,
//   sex: 'male',
//   kind: 'elf',
//   hair: {
//     color: 'silver',
//     length: 'long',
//     style: 'straight'
//   },
//   eyes: {
//     color: 'emerald green',
//     shape: 'almond'
//   },
//   height: 'tall',
//   body: {
//     type: 'slim',
//     build: 'light'
//   },
//   cloth: {
//     type: 'formal',
//     color: 'midnight blue'
//   },
//   shoes: {
//     type: 'boots',
//     color: 'dark brown'
//   }
// }

// const character2 = {
//   name: 'Ivar',
//   age: 735,
//   sex: 'other',
//   kind: 'human',
//   hair: {
//     color: 'red',
//     length: 'medium',
//     style: 'wavy'
//   },
//   eyes: {
//     color: 'green',
//     shape: 'round'
//   },
//   height: 'short',
//   body: {
//     type: 'plump',
//     build: 'light'
//   },
//   cloth: {
//     type: 'sporty',
//     color: 'red'
//   },
//   shoes: {
//     type: 'sandals',
//     color: 'brown'
//   }
// }

// const words = characterToJsonArray(character2)
// console.log(words)
// // join words with comma
// console.log(words.join(', '))

// import { describe, it, expect } from 'vitest'

// describe('HelloWorld', () => {
//   it('renders properly', () => {})
// })
