import { header } from '../data'
import logo from '../assets/images/logo.svg'
import BMICalculator from './BMICalculator'

const Header = () => {
  return (
    <header className="header">
      <div className="relative py-[2rem] px-[1.5rem] grid md:grid-cols-12 md:px-[41px] gap-x-[10px] max-w-[950px] xl:max-w-[1160px] mx-auto lg:gap-x-[2rem] lg:grid-rows-[max-content_1fr] lg:pt-[75px] lg:p-0 lg:items-start">
        <img
          src={logo}
          alt="logo"
          className="w-[40px] mx-auto md:col-span-full lg:w-auto lg:mx-0"
        />
        <div className="col-span-full lg:col-span-5 lg:col-start-1 ">
          <h1 className="text-[3rem] leading-[52.8px] tracking-[-2.4px] font-semibold text-[#253347] text-center my-6 col-span-full max-w-[350px] mx-auto md:mt-[40px] md:mb-[24px] lg:mb-[35px] lg:col-span-6 lg:text-left lg:text-[4rem] lg:leading-[110%] lg:tracking-[-3.2px] lg:max-w-none lg:col-start-1 lg:row-start-2 lg:mt-[127px]">
            {header.heading}
          </h1>
          <p className="text-center text-[1rem] leading-[1.5rem] text-[#5e6e85] col-span-full lg:col-start-1 lg:text-left lg:col-span-6 lg:max-w-[465px] lg:row-start-3 mx-auto max-w-[700px]">
            {header.content}
          </p>
        </div>
        <BMICalculator />
      </div>
    </header>
  )
}
export default Header
