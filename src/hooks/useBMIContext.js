import { useContext } from 'react'
import { BMIContext } from '../context/BMIContext'

export function useBMIContext() {
  const context = useContext(BMIContext)

  if (!context) {
    throw Error('useBMIContext must be used inside BMIContextProvider')
  }

  return context
}
