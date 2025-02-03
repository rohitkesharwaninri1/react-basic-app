import React from 'react'
import Button from '../../components/Button'
import Table from '../../components/Table';
import usePokeData from '../../hooks/usePoke'
import { useSelector } from 'react-redux';

export default function Poke() {
  const { handlePokeData } = usePokeData();
  const pokeData = useSelector((state) => state.pokeData.data.moves);

  return (
    <div>
      <Button text="Load Poke Data" onclick={handlePokeData} />
      <div style={{ marginTop: '20px' }}>
        <Table data={pokeData} />
      </div>
    </div>
  )
}
