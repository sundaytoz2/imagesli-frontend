// Flower 타입을 정의합니다.
// {
//   "month": 1,
//   "name": "개나리",
//   "meaning": "재회의 기쁨",
//   "imageUrl": "/path/to/image",
//   "priceRange": "₩20,000 - ₩50,000",
//   "tips": "개나리는 밝은 분위기를 선호합니다."
// },

export interface Flower {
  month: number
  name: string
  meaning: string
  imageUrl: string
  priceRange: string
  tips: string
}
