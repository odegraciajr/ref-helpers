const categories = [
  {
    type: 213,
    categoryId: '20003',
    categoryName: 'baseball-cards',
    sportsName: 'Baseball',
    sportsId: '185223',
    icon: '⚾️',
    description: 'Baseball item related'
  },
  {
    type: 214,
    categoryId: '20019',
    categoryName: 'basketball-cards',
    sportsName: 'Basketball',
    sportsId: '185226',
    icon: '🏀',
    description: 'Basketball item related'
  },
  {
    type: 215,
    categoryId: '20014',
    categoryName: 'football-cards',
    sportsName: 'Football',
    sportsId: '185224',
    icon: '🏈',
    description: 'Football item related'
  },
  {
    type: 216,
    categoryId: '156940',
    categoryName: 'tcg-cards',
    sportsName: 'Pokemon',
    sportsId: '477173',
    icon: '🐸',
    description: 'Pokemon item related'
  },
  {
    type: 217,
    categoryId: '20004',
    categoryName: 'soccer-cards',
    sportsName: 'Soccer',
    sportsId: '364957',
    icon: '⚽️',
    description: 'Soccer item related'
  },
  {
    type: 218,
    categoryId: '20023',
    categoryName: 'golf-cards',
    sportsName: 'Golf',
    sportsId: '186451',
    icon: '⛳️',
    description: 'Golf item related'
  },
  {
    type: 219,
    categoryId: '20020',
    categoryName: 'hockey-cards',
    sportsName: 'Hockey',
    sportsId: '185225',
    icon: '🏑',
    description: 'Hockey item related'
  }
];

const grades = [
  { title: 'None', group: '', sort: 'A' },
  { title: 'Raw', group: '', sort: 'A' },

  { title: 'PSA 10', group: 'PSA', sort: 'B' },
  { title: 'PSA 9', group: 'PSA', sort: 'B' },
  { title: 'PSA 8.5', group: 'PSA', sort: 'B' },
  { title: 'PSA 8', group: 'PSA', sort: 'B' },
  { title: 'PSA 7.5', group: 'PSA', sort: 'B' },
  { title: 'PSA 7', group: 'PSA', sort: 'B' },
  { title: 'PSA 6.5', group: 'PSA', sort: 'B' },
  { title: 'PSA 6', group: 'PSA', sort: 'B' },
  { title: 'PSA 5.5', group: 'PSA', sort: 'B' },
  { title: 'PSA 5', group: 'PSA', sort: 'B' },
  { title: 'PSA 4.5', group: 'PSA', sort: 'B' },
  { title: 'PSA 4', group: 'PSA', sort: 'B' },
  { title: 'PSA 3.5', group: 'PSA', sort: 'B' },
  { title: 'PSA 3', group: 'PSA', sort: 'B' },
  { title: 'PSA 2.5', group: 'PSA', sort: 'B' },
  { title: 'PSA 2', group: 'PSA', sort: 'B' },
  { title: 'PSA 1.5', group: 'PSA', sort: 'B' },
  { title: 'PSA 1', group: 'PSA', sort: 'B' },

  { title: 'BGS 10 Black', group: 'BGS', sort: 'C' },
  { title: 'BGS 10', group: 'BGS', sort: 'C' },
  { title: 'BGS 9.5', group: 'BGS', sort: 'C' },
  { title: 'BGS 9', group: 'BGS', sort: 'C' },
  { title: 'BGS 8.5', group: 'BGS', sort: 'C' },
  { title: 'BGS 8', group: 'BGS', sort: 'C' },
  { title: 'BGS 7.5', group: 'BGS', sort: 'C' },
  { title: 'BGS 7', group: 'BGS', sort: 'C' },
  { title: 'BGS 6.5', group: 'BGS', sort: 'C' },
  { title: 'BGS 6', group: 'BGS', sort: 'C' },
  { title: 'BGS 5.5', group: 'BGS', sort: 'C' },
  { title: 'BGS 5', group: 'BGS', sort: 'C' },
  { title: 'BGS 4.5', group: 'BGS', sort: 'C' },
  { title: 'BGS 4', group: 'BGS', sort: 'C' },
  { title: 'BGS 3.5', group: 'BGS', sort: 'C' },
  { title: 'BGS 3', group: 'BGS', sort: 'C' },
  { title: 'BGS 2.5', group: 'BGS', sort: 'C' },
  { title: 'BGS 2', group: 'BGS', sort: 'C' },
  { title: 'BGS 1.5', group: 'BGS', sort: 'C' },
  { title: 'BGS 1', group: 'BGS', sort: 'C' },

  { title: 'SGC 10', group: 'SGC', sort: 'D' },
  { title: 'SGC 9.5', group: 'SGC', sort: 'D' },
  { title: 'SGC 9', group: 'SGC', sort: 'D' },
  { title: 'SGC 8.5', group: 'SGC', sort: 'D' },
  { title: 'SGC 8', group: 'SGC', sort: 'D' },
  { title: 'SGC 7.5', group: 'SGC', sort: 'D' },
  { title: 'SGC 7', group: 'SGC', sort: 'D' },
  { title: 'SGC 6.5', group: 'SGC', sort: 'D' },
  { title: 'SGC 6', group: 'SGC', sort: 'D' },
  { title: 'SGC 5.5', group: 'SGC', sort: 'D' },
  { title: 'SGC 5', group: 'SGC', sort: 'D' },
  { title: 'SGC 4.5', group: 'SGC', sort: 'D' },
  { title: 'SGC 4', group: 'SGC', sort: 'D' },
  { title: 'SGC 3.5', group: 'SGC', sort: 'D' },
  { title: 'SGC 3', group: 'SGC', sort: 'D' },
  { title: 'SGC 2.5', group: 'SGC', sort: 'D' },
  { title: 'SGC 2', group: 'SGC', sort: 'D' },
  { title: 'SGC 1.5', group: 'SGC', sort: 'D' },
  { title: 'SGC 1', group: 'SGC', sort: 'D' },

  { title: 'BVG 10 Black', group: 'BVG', sort: 'E' },
  { title: 'BVG 10', group: 'BVG', sort: 'E' },
  { title: 'BVG 9.5', group: 'BVG', sort: 'E' },
  { title: 'BVG 9', group: 'BVG', sort: 'E' },
  { title: 'BVG 8.5', group: 'BVG', sort: 'E' },
  { title: 'BVG 8', group: 'BVG', sort: 'E' },
  { title: 'BVG 7.5', group: 'BVG', sort: 'E' },
  { title: 'BVG 7', group: 'BVG', sort: 'E' },
  { title: 'BVG 6.5', group: 'BVG', sort: 'E' },
  { title: 'BVG 6', group: 'BVG', sort: 'E' },
  { title: 'BVG 5.5', group: 'BVG', sort: 'E' },
  { title: 'BVG 5', group: 'BVG', sort: 'E' },
  { title: 'BVG 4.5', group: 'BVG', sort: 'E' },
  { title: 'BVG 4', group: 'BVG', sort: 'E' },
  { title: 'BVG 3.5', group: 'BVG', sort: 'E' },
  { title: 'BVG 3', group: 'BVG', sort: 'E' },
  { title: 'BVG 2.5', group: 'BVG', sort: 'E' },
  { title: 'BVG 2', group: 'BVG', sort: 'E' },
  { title: 'BVG 1.5', group: 'BVG', sort: 'E' },
  { title: 'BVG 1', group: 'BVG', sort: 'E' }
];

const graders = [
  {
    name: 'PSA',
    code: 'psa'
  },
  {
    name: 'BGS',
    code: 'bgs'
  },
  {
    name: 'SGC',
    code: 'sgc'
  },
  {
    name: 'HGA',
    code: 'hga'
  }
];

module.exports = {
  categories,
  grades,
  graders
}