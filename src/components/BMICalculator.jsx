import { reverseBMIForImperial, reverseBMIFormula } from '../utils'
import {
  LOWEST_IDEAL_BMI,
  HIGHEST_IDEAL_BMI,
  UNDERWEIGHT_BMI,
  LOWEST_OVERWEIGHT_BMI,
  HIGHEST_OVERWEIGHT_BMI,
  UNDERWEIGHT,
  NORMAL_WEIGHT,
  OVERWEIGHT,
  OBESE,
} from '../constants'
import { welcomeMessage } from '../data'
import { useBMIContext } from '../hooks/useBMIContext'
import { useBMI } from '../hooks/useBMI'
import Metric from './Metric'
import Imperial from './Imperial'

const BMICalculator = () => {
  const { formula, setFormula, height, weight } = useBMIContext()

  const BMI = useBMI(height, weight, formula)

  const { st: lowestSt, lbs: lowestLbs } = reverseBMIForImperial(
    height,
    LOWEST_IDEAL_BMI
  )

  const { st: highestSt, lbs: highestLbs } = reverseBMIForImperial(
    height,
    HIGHEST_IDEAL_BMI
  )

  const changeFormulaHandler = e => setFormula(e.target.value)

  return (
    <div
      className="bg-white shadow-[16px_32px_56px_0px_rgba(143,174,207,0.25)] p-[1.5rem] rounded-[16px] grid gap-y-[1.5rem] mt-[3rem] md:mt-[40px] col-span-full md:p-[2rem] md:gap-y-[2rem] md:grid-cols-2 gap-x-[1.5rem] lg:col-start-7 lg:col-span-6 lg:row-start-2 lg:mt-[43px] lg:items-start
    "
    >
      <h2 className="text-[1.5rem] font-semibold leading-[29px] tracking-[-1.2px] text-[#253347] col-span-full">
        Enter your details below
      </h2>
      <div className="grid grid-cols-2 gap-x-[1.5rem] col-span-full">
        <div className="flex">
          <input
            type="radio"
            id="metric"
            value="metric"
            checked={formula === 'metric'}
            onChange={changeFormulaHandler}
          />
          <label
            htmlFor="metric"
            className="col-span-1 text-[1rem] leading-[150%] font-semibold text-[#253347] pl-[1.5rem]"
          >
            Metric
          </label>
        </div>
        <div className="flex">
          <input
            type="radio"
            id="imperial"
            value="imperial"
            checked={formula === 'imperial'}
            onChange={changeFormulaHandler}
          />
          <label
            htmlFor="imperial"
            className="col-start-2 col-end-3 text-[1rem] leading-[150%] font-semibold text-[#253347] pl-[1.5rem]"
          >
            Imperial
          </label>
        </div>
      </div>
      {formula === 'metric' && <Metric />}
      {formula === 'imperial' && <Imperial />}

      <div className="bg-[linear-gradient(90deg,_#345ff6_0%,_#587dff_100%)] p-[2rem] rounded-[1rem] text-white md:p-[2rem] md:rounded-[16px_100px_100px_16px] grid md:grid-cols-2 md:grid-rows-[min-content_1fr] place-content-center items-center gap-x-[1.5rem] col-span-full">
        {!BMI ? (
          <>
            <p className="text-[1.5rem] leading-[29px] font-semibold tracking-[-1.2px] md:col-span-full mb-[1rem]">
              {welcomeMessage.heading}
            </p>
            <p className="text-[.875rem] leading-[21px] col-span-full">
              {welcomeMessage.content}
            </p>
          </>
        ) : (
          <>
            <p className="text-[1rem] leading-[150%] font-semibold mb-[8px] md:col-span-1">
              Your BMI is...
            </p>
            <p className="text-[3rem] font-semibold leading-[52.8px] tracking-[-2.4px] lg:tracking-[-3.2px] mb-[1.5rem] md:mb-0 md:col-span-1 md:row-start-2 lg:text-[4rem] lg:leading-[70.4px]">
              {BMI}
            </p>
            <p className="text-[.875rem] leading-[150%] md:col-start-2 md:row-span-full">
              Your BMI suggests you&#39;re{' '}
              {BMI >= LOWEST_IDEAL_BMI && BMI <= HIGHEST_IDEAL_BMI
                ? NORMAL_WEIGHT
                : BMI <= UNDERWEIGHT_BMI
                ? UNDERWEIGHT
                : BMI >= LOWEST_OVERWEIGHT_BMI && BMI <= HIGHEST_OVERWEIGHT_BMI
                ? OVERWEIGHT
                : OBESE}
              . Your ideal weight is between{' '}
              {formula === 'metric' ? (
                <span className="font-extrabold">
                  {reverseBMIFormula(height, LOWEST_IDEAL_BMI)}
                  kgs - {reverseBMIFormula(height, HIGHEST_IDEAL_BMI)}
                  kgs.
                </span>
              ) : (
                <>
                  <span className="font-extrabold">
                    {lowestSt > 0 && `${lowestSt}st`}{' '}
                    {lowestLbs > 0 && `${lowestLbs}lbs`} -{' '}
                  </span>
                  <span className="font-extrabold">
                    {highestSt > 0 && `${highestSt}st`}{' '}
                    {highestLbs > 0 && `${highestLbs}lbs`}
                  </span>
                </>
              )}
            </p>
          </>
        )}
      </div>
    </div>
  )
}
export default BMICalculator
