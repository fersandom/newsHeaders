import { defineStore } from 'pinia'
import { reactive } from 'vue'
export const useContentStore = defineStore('content', () => {
  const articles = reactive([
    {
      id: 1001,
      headline: 'What a pair!',
      image: 'https://verifica.efe.com/wp-content/uploads/2024/03/Lamine-Yamal-19-anos.jpg',
      short: 'These 2 boys may be the new Puyol and Messi',
      date: 1719141406,
      featured: true
    },
    {
      id: 1002,
      headline: 'Italy loses on own merits',
      image:
        'https://icdn.football-italia.net/wp-content/uploads/2024/06/spain-v-italy-group-b-uefa-euro-2024.jpg',
      short: 'Somebody please tell them catenaccio is not real football',
      date: 1719142963,
      featured: true
    },
    {
      id: 1003,
      headline: 'Spain to round of 16',
      image:
        'https://e0.365dm.com/24/06/768x432/skysports-alvaro-morata-lamine-yamal_6586890.jpg?20240620214538',
      short: 'Spain passes to the next round in spite of Morata. The guy makes me miss Raúl',
      date: 1719143417,
      featured: false
    }
  ])

  function sortArticlesByDate(array) {
    return array.sort((a, b) => {
      b.date - a.date
    })
  }

  function getFeatured(array) {
    for (const item of array) {
      if (item.featured) {
        return item
      }
    }
  }

  return { articles, sortArticlesByDate, getFeatured }
})
