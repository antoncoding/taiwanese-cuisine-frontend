const PREFIX = 'https://cors-anywhere-anton.herokuapp.com/'
// const PREFIX = ''

export const vote = async (winner, loser) => {
    fetch(PREFIX + `http://taiwanese-cuisine-backend-dev.ap-northeast-2.elasticbeanstalk.com/votef?loser=${loser}&winner=${winner}`).then(res => {
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
