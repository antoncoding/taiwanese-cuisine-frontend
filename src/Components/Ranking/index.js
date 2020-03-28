import React, { useMemo, useState } from 'react';
import { DataView } from '@aragon/ui'
import { getList } from '../Compare/utils';

function Ranking() {

  const [foodList, setList] = useState([])

  useMemo(async()=>{
    const _list = await getList()
    const sortedList = _list.sort((a, b) => a.score > b.score ? -1 : 1)
    setList(sortedList)
    console.log(sortedList)
  }, [])

  return (
    <>
      <div style={{ padding: '6%', textAlign: 'center', fontSize: 36 }}>
        小吃排行榜
      </div>
      <DataView
        fields={[ '排名', '', '名稱' , '分數']}
        entries={foodList.slice(0, 10)}
        renderEntry={(item, index) => {
          return [
            index + 1,
            <img src={item.url} height={120}/>,
            <div style={{fontSize:25}}> {item.name} </div>,
            item.score
          ]
        }}
        entriesPerPage={5}
      />
    </>
  );
}

export default Ranking;
