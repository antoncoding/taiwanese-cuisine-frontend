export const writeDB = async (indexA, indexB, result, user = 'testuser') => {
  console.log(`write entry to db: ${indexA} vs ${indexB} => ${result}`);
};

export const getList = async () => [
  {
    name: '米粉湯',
    url: 'https://place-hold.it/300x200',
    score: 1012
  },
  {
    name: '貢丸湯',
    url: 'https://place-hold.it/300x200',
    score: 101
  },
  {
    name: '雞排',
    url: 'https://place-hold.it/300x200',
    score: 2000
  },
  {
    name: '大腸包小腸',
    url: 'https://place-hold.it/300x200',
    score: 988
  },
  {
    name: '茶葉蛋',
    url: 'https://place-hold.it/300x200',
    score: 371
  },
  {
    name: '蔥抓餅加蛋',
    url: 'https://place-hold.it/300x200',
    score: 209
  },
  {
    name: '鹹水雞',
    url: 'https://place-hold.it/300x200',
    score: 1638
  },
  {
    name: '鹽酥雞',
    url: 'https://place-hold.it/300x200',
    score: 1789
  },
  {
    name: '地瓜球',
    url: 'https://place-hold.it/300x200',
    score: 982
  },
  {
    name: '蚵仔煎',
    url: 'https://place-hold.it/300x200',
    score: 1123
  },
  {
    name: '火雞肉飯',
    url: 'https://place-hold.it/300x200',
    score: 1017
  },
];
