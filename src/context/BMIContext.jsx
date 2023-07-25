import { createContext, useState } from 'react'

export const BMIContext = createContext()

export const BMIContextProvider = ({ children }) => {
  const [formula, setFormula] = useState('metric')
  const [cm, setCm] = useState(null)
  const [kg, setKg] = useState(null)
  const [ft, setFt] = useState(null)
  const [inch, setInch] = useState(null)
  const [stone, setStone] = useState(null)
  const [pound, setPound] = useState(null)

  const convertFtToInches = (feet, inch) => {
    return feet * 12 + inch
  }

  const convertStToLbs = (st, lbs) => {
    return st * 14 + lbs
  }

  const height = formula === 'metric' ? cm : convertFtToInches(ft, inch)
  const weight = formula === 'metric' ? kg : convertStToLbs(stone, pound)

  return (
    <BMIContext.Provider
      value={{
        formula,
        setFormula,
        cm,
        setCm,
        kg,
        setKg,
        ft,
        setFt,
        inch,
        setInch,
        stone,
        setStone,
        pound,
        setPound,
        height,
        weight,
      }}
    >
      {children}
    </BMIContext.Provider>
  )
}
