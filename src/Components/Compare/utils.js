
export const vote = async (winner, loser) => {
    fetch(`${process.env.REACT_APP_CORS_PREFIX || ''}http://taiwanese-cuisine-backend-dev.ap-northeast-2.elasticbeanstalk.com/votec?loser=${loser}&winner=${winner}`).then(res => {
      console.log(res)
    }).catch(error => {
      console.error(error)
    })
  
};

/**
 * @return {Promise<{Name:string, Image:string, Played: number, Score: number}[]>}
 */
export const getList = async () => {
  const response = await fetch(`${process.env.REACT_APP_CORS_PREFIX || ''}http://taiwanese-cuisine-backend-dev.ap-northeast-2.elasticbeanstalk.com/cuisinec/`);
  const list = await response.json()
  return list
}
