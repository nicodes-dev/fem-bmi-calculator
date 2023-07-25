import manImg from '../assets/images/image-man-eating.webp'
import { result } from '../data'

const Result = () => {
  return (
    <section className="pt-10 md:pt-[4rem] lg:pt-[9.4375rem] pb-[4.4375rem] grid md:grid-cols-12 gap-x-[10px] xl:max-w-[1160px] lg:mx-auto lg:gap-x-[32px] lg:max-w-[950px] result relative">
      <picture className="col-start-1 md:col-span-6">
        <img
          src={manImg}
          className="md:object-[-40px_0] md:h-full lg:object-[0_0]"
          alt="man eating"
        />
      </picture>
      <div className="pt-[3rem] flex flex-col gap-y-[2rem] px-[1.5rem] md:pr-[41px] md:pt-[2.1875rem] md:col-start-7 md:col-end-13 md:self-end lg:col-start-8 lg:col-span-5 lg:text-left lg:px-0 lg:gap-y-[2.1875rem] lg:max-w-[27.8125rem]">
        <h2 className="text-[2rem] leading-[110%] tracking-[-1.6px] font-semibold text-[#253347] lg:text-[3rem] lg:tracking-[-2.4px]">
          {result.heading}
        </h2>
        <p className="self-stretch text-[1rem] leading-[1.5rem] text-[#5e6e85] md:mb-[2.125rem] lg:mb-10">
          {result.content}
        </p>
      </div>
    </section>
  )
}
export default Result
