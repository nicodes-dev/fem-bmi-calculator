import { useState, useEffect } from 'react'
import { calculateByMetric, calculateByImperial } from '../utils'

export const useBMI = (height, weight, formula) => {
  const [BMI, setBMI] = useState(null)

  useEffect(() => {
    if (formula === 'metric') {
      if (height > 0 && weight > 0) {
        setBMI(calculateByMetric(height, weight))
      } else {
        setBMI(null)
      }
    } else {
      if (height > 0 && weight > 0) {
        setBMI(calculateByImperial(height, weight))
      } else {
        setBMI(null)
      }
    }
  }, [formula, weight, height])

  return BMI
}
