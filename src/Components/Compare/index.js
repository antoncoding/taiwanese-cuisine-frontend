import React, { useState, useMemo } from 'react';
import { Card, CardHeader, CardTitle, CardImg, CardBody, Button } from 'shards-react';
import { list as foodList, writeDB } from './utils'

function chooseFromList (targetList) {
  const random = targetList[Math.floor(Math.random()*targetList.length)]
  return random
}

function removeFromList (list, item) {
  return list.filter(element => element !==item)
}

function initialAB (indexs) {
  const shuffled = indexs.sort(() => 0.5 - Math.random());
  let selected = shuffled.slice(0, 2);
  return selected
}

function Compare() {
  
  const [done, setDone] = useState(false)
  const [indexList, updateIndexList] = useState([])
  const [optionAIdx, setOptionAIdx] = useState(0)
  const [optionBIdx, setOptionBIdx] = useState(0)

  useMemo(()=>{
    const initIndexs = Array.from(Array(11).keys())
    const [a, b] = initialAB(initIndexs)
    setOptionAIdx(a)
    setOptionBIdx(b)
    let _list = removeFromList(initIndexs, a)
    _list = removeFromList(_list, b)
    updateIndexList(_list)
  },[])

  const onClickOptionA = () => {
    writeDB(optionAIdx, optionBIdx, optionAIdx)
    if(indexList.length === 0) {
      setDone(true)
      return;
    }
    const newOptionB = chooseFromList(indexList)
    const _list = removeFromList(indexList, newOptionB)
    updateIndexList(_list)
    setOptionBIdx(newOptionB)
  }

  const onClickOptionB = () => {
    writeDB(optionAIdx, optionBIdx, optionBIdx)
    if(indexList.length === 0) {
      setDone(true)
      return;
    }
    const newOptionA = chooseFromList(indexList)
    const _list = removeFromList(indexList, newOptionA)
    updateIndexList(_list)
    setOptionAIdx(newOptionA)
  }


  return (
    <>
      <div style={{ paddingTop: '6%', textAlign: 'center' }}>
        <h3>哪個好吃？</h3>
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ padding: '3%', display: 'inline-block'}}>
          <Card style={{ maxWidth: '300px' }}>
            <CardHeader>選項一</CardHeader>
            <CardImg src='https://place-hold.it/300x200' />
            <CardBody>
              <CardTitle>{foodList[optionAIdx].name}</CardTitle>
              <Button disabled={done} theme='success' onClick={onClickOptionA} > Vote </Button>
            </CardBody>
          </Card>
        </div>
        <div style={{ padding: '3%', display: 'inline-block'}}>
          <Card style={{ maxWidth: '300px' }} >
            <CardHeader>選項二</CardHeader>
            <CardImg src='https://place-hold.it/300x200' />
            <CardBody>
              <CardTitle>{foodList[optionBIdx].name}</CardTitle>
              <Button disabled={done} theme='success' onClick={onClickOptionB} > Vote </Button>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Compare;
