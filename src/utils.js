import {
  DIVISOR_FOR_KILOS,
  DIVISOR_FOR_INCHES,
  DIVISOR_FOR_POUNDS,
} from './constants'

export const calculateByMetric = (height, weight) => {
  const result = (weight / height / height) * 10000

  return parseFloat((Math.round(result * 10) / 10).toFixed(1))
}

export const convertMetric = (dividend, divisor) => dividend / divisor

export const reverseBMIFormula = (height, BMI) => {
  const heightInInches = convertMetric(height, DIVISOR_FOR_INCHES)
  const weightInPounds =
    (heightInInches * heightInInches * BMI) / DIVISOR_FOR_POUNDS
  return roundToOneDecimal(convertMetric(weightInPounds, DIVISOR_FOR_KILOS))
}

export const reverseBMIForImperial = (height, BMI) => {
  const weightInPounds = (height * height * BMI) / 703
  const lbs = Math.floor(weightInPounds % 14)
  const st = Math.floor(weightInPounds / 14)

  return { st, lbs }
}

export const roundToOneDecimal = val => {
  return (Math.floor(val * 10) / 10).toFixed(1)
}

export const calculateByImperial = (heightInInches, weightInPounds) => {
  const result = (weightInPounds / (heightInInches * heightInInches)) * 703
  return (Math.round(result * 10) / 10).toFixed(1)
}
