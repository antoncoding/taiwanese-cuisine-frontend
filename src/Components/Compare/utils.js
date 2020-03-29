const PREFIX = 'https://cors-anywhere-anton.herokuapp.com/'
// const PREFIX = ''

export const writeDB = async (winner, loser) => {
    fetch(PREFIX + `http://taiwanese-cuisine-backend-dev.ap-northeast-2.elasticbeanstalk.com/vote?losser=${loser}&winner=${winner}`).then(res => {
      console.log(res)
    }).catch(error => {
      console.error(error)
    })
  
};

/**
 * @return {Promise<{Name:string, Image:string, Played: number, Score: number}[]>}
 */
export const getList = async () => {
  const response = await fetch(PREFIX + 'http://taiwanese-cuisine-backend-dev.ap-northeast-2.elasticbeanstalk.com/cuisinef/');
  const list = await response.json()
  return list
}

// const mockList = [
//   {
//     name: '米粉湯',
//     url: 'https://d3l76hx23vw40a.cloudfront.net/recipe/hq24-026b.jpg',
//     score: 1012
//   },
//   {
//     name: '貢丸湯',
//     url: 'https://www.wecook123.com/wp-content/uploads/2017/05/%E6%89%8B%E5%B7%A5%E8%B2%A2%E4%B8%B8%E6%B9%AF_28I7yL9wGz.jpg',
//     score: 101
//   },
//   {
//     name: '雞排',
//     url: 'https://attach.setn.com/newsimages/2018/07/13/1443100-XXL.jpg',
//     score: 2000
//   },
//   {
//     name: '大腸包小腸',
//     url: 'https://taiwan.sharelife.tw/tw-feat-store-img/44721/c840130617285911.jpg',
//     score: 988
//   },
//   {
//     name: '茶葉蛋',
//     url: 'https://s.yimg.com/zp/MerchandiseImages/091E0DD0B1-Product-17939407.jpg',
//     score: 371
//   },
//   {
//     name: '蔥抓餅加蛋',
//     url: 'https://pic.pimg.tw/hsoldbody/1502790612-80446948_wn.jpg',
//     score: 209
//   },
//   {
//     name: '鹹水雞',
//     url: 'https://i.ytimg.com/vi/QAxQKKDGzXQ/maxresdefault.jpg',
//     score: 1638
//   },
//   {
//     name: '鹽酥雞',
//     url: 'https://pic.pimg.tw/dreamycat0421/1371371670-1921309306.jpg',
//     score: 1789
//   },
//   {
//     name: '地瓜球',
//     url: 'https://cf.shopee.tw/file/4868ce3c08b415661f293e65c79e1e01',
//     score: 982
//   },
//   {
//     name: '蚵仔煎',
//     url: 'https://ali.xinshipu.cn/20180128_85/original/1517092639487.jpg',
//     score: 1123
//   },
//   {
//     name: '火雞肉飯',
//     url: 'https://i1.wp.com/amonblog.com/wp-content/uploads/2017/09/1504274266-08d0794ef558a335ee5b0e6f10f1339b.jpg?w=640&ssl=1',
//     score: 1017
//   },
// ]