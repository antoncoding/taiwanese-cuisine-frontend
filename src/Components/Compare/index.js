import React, { useState, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { ButtonBase } from '@aragon/ui';
import { Card, CardHeader, CardBody, Button } from 'shards-react';
import { getList, writeDB } from './utils';

function chooseFromList(targetList) {
  const random = targetList[Math.floor(Math.random() * targetList.length)];
  return random;
}

function removeFromList(list, item) {
  return list.filter((element) => element !== item);
}

function initialAB(indexs) {
  const shuffled = indexs.sort(() => 0.5 - Math.random());
  let selected = shuffled.slice(0, 2);
  return selected;
}

function Compare() {
  const history = useHistory();

  const [done, setDone] = useState(false);
  const [foodList, setFoodList] = useState([])
  const [indexList, updateIndexList] = useState([]);
  const [optionAIdx, setOptionAIdx] = useState(0);
  const [optionBIdx, setOptionBIdx] = useState(0);

  useMemo(async() => {
    const _foodList = await getList()
    const initIndexs = Array.from(Array(11).keys());
    const [a, b] = initialAB(initIndexs);
    setOptionAIdx(a);
    setOptionBIdx(b);
    let _list = removeFromList(initIndexs, a);
    _list = removeFromList(_list, b);
    setFoodList(_foodList)
    updateIndexList(_list);
  }, []);

  const onClickOptionA = () => {
    writeDB(optionAIdx, optionBIdx, optionAIdx);
    if (indexList.length === 0) {
      setDone(true);
      return;
    }
    const newOptionB = chooseFromList(indexList);
    const _list = removeFromList(indexList, newOptionB);
    updateIndexList(_list);
    setOptionBIdx(newOptionB);
  };

  const onClickOptionB = () => {
    writeDB(optionAIdx, optionBIdx, optionBIdx);
    if (indexList.length === 0) {
      setDone(true);
      return;
    }
    const newOptionA = chooseFromList(indexList);
    const _list = removeFromList(indexList, newOptionA);
    updateIndexList(_list);
    setOptionAIdx(newOptionA);
  };

  return (
    <>
      <div style={{ paddingTop: '6%', paddingBottom:  '4%',  textAlign: 'center', fontSize: 36 }}>
        哪個好吃
      </div>
      <div style={{ textAlign: 'center', }}>
        <div style={{ padding: '3%', display: 'inline-block' }}>
          <Card style={{ maxWidth: '500' }}>
          <ButtonBase onClick={onClickOptionA}>
            <CardHeader>選項A</CardHeader>
            <CroppedImg url={foodList.length === 0 ? 'https://place-hold.it/300x200' : foodList[optionAIdx].url}/>
            <CardBody>
            <div style={{fontSize: 25}} >{foodList.length === 0 ? '' : foodList[optionAIdx].name}</div>
            </CardBody>
            </ButtonBase>
          </Card>
        </div>
        <div style={{ padding: '3%', display: 'inline-block' }}>
          <Card style={{ maxWidth: '500' }}>
          <ButtonBase onClick={onClickOptionB}>
            <CardHeader>選項B</CardHeader>
            <CroppedImg url={foodList.length === 0 ? 'https://place-hold.it/300x200' : foodList[optionBIdx].url}/>
            <CardBody>
              <div style={{fontSize: 25}} >{ foodList.length === 0 ? '' : foodList[optionBIdx].name}</div>
            </CardBody>
            </ButtonBase>
          </Card>
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ padding: '3%', display: 'inline-block' }}>
          {done ? (
            <Button display='true' onClick={() => history.push('/ranking')}>
              {' '}
              看結果{' '}
            </Button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

export default Compare;

function CroppedImg ({url}){
  return (
    <div  style={{position: 'relative', top: 0, left: 0, height: 300}}>
    <img  
      style={{height: '100%', minHeight: 300}} 
      src={url} />
    </div>
  )
}