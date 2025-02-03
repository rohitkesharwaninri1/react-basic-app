import React from 'react';
import {getPokeData} from '../api/pokeApi';
import { useDispatch } from 'react-redux';
import { storePokeData } from '../store/Slices/pokeSlice';

export default function usePoke() {
  const dispatch = useDispatch()

  const handlePokeData = async () => {
    const response = await getPokeData();
    dispatch(storePokeData(response))
  }
  
  return {
    handlePokeData
  }
}

