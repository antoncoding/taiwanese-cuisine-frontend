import React, { useMemo, useState } from 'react';
import { DataView } from '@aragon/ui'
import CroppedImg from '../CroppedImg'

import { getList } from '../Compare/utils';

function Ranking() {

  const [foodList, setList] = useState([])

  useMemo(async()=>{
    const _list = await getList()
    const sortedList = _list.sort((a, b) => a.Score > b.Score ? -1 : 1)
    setList(sortedList)
  }, [])

  return (
    <>
      <div style={{ padding: '6%', textAlign: 'center', fontSize: 36 }}>
        小吃排行榜
      </div>
      <DataView
        fields={[ '排名', '', '名稱' , '分數', '出賽']}
        entries={foodList.slice(0, 10)}
        renderEntry={(item, index) => {
          return [
            index + 1,
            <CroppedImg url={item.Image} width={200} height={120}/>,
            <div style={{fontSize:25}}> {item.Name} </div>,
            item.Score,
            item.Played
          ]
        }}
        entriesPerPage={5}
      />
    </>
  );
}

export default Ranking;
