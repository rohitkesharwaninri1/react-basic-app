import React, { useState, useEffect } from 'react'

export default function App() {
  const n = 10;
  const [gridObj, setGridObj] = useState({});
  const [colorBlock, setColorBlock] = useState([]);
  const [selectedColor, setSelectedColor] = useState("")

  useEffect(() => {
    let gridObj = {};
    let colorX = [];
    for (let i = 1; i <= n * n; i++) {
      gridObj[i] = { color: "", id: i }
    }
    for (let i = 1; i <= n; i++) {
      colorX.push({ color: `#${Math.floor(Math.random() * 100000)}1`})
    }

    setGridObj(gridObj)
    setColorBlock(colorX)
  }, [])

  const handleSetGridColor = (item) => {
    let newObj = {...gridObj}
    newObj[item.id] = { id: item.id, color: selectedColor }
    setGridObj(newObj)
  }
  console.log("colorX",colorBlock)
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ width: '100%', padding: '0px', display: 'grid', gridTemplateColumns: `repeat(${n}, 1fr)`, gridTemplateRows:'repeat(${n}, 1fr)'}}>
        {
          Object.values(gridObj).map(item => {
            return (<div
              onClick={() => handleSetGridColor(item)} key={item.id + "grid"}
              style={{ cursor: 'pointer', border: '1px solid #dadada', height: `70px`, backgroundColor: item.color }}>
              {item.id}
            </div>)
          })
        }
      </div>
      <div style={{ width: '100%', padding: '0px', display: 'grid', gridTemplateColumns: `repeat(${n}, 1fr)`, gridTemplateRows:'repeat(${n}, 1fr)' }}>
        {
          colorBlock.map(item => {
            return (<div
              onClick={() => setSelectedColor(item.color)}
              key={item.id + "color"}
              style={{ cursor: 'pointer', border: '1px solid #dadada',  height: `70px`, backgroundColor: item.color }}>
              {item.id}
            </div>)
          })
        }
      </div>
    </div>

  )
}
