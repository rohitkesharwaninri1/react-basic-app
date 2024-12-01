import React, { useState, useEffect } from 'react'

export default function useCounter(initialState) {
    const [counter, setCounter] = useState(initialState)

    const handleIncreament = (value) => {
        setCounter(counter+value)
    }
    const handleClean = () => {
        setCounter(0)
    }
    return {
        handleIncreament,
        counter,
        handleClean
    }
}
