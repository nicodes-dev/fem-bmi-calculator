import { limitationList, limitation } from '../data'

const Limitations = () => {
  return (
    <section className="mt-[4.5rem] mb-[5rem] md:mt-[6rem] md:grid-cols-12 md:gap-x-[.625rem] md:px-[2.5625rem] grid lg:gap-x-[2rem] max-w-[59.375rem] xl:max-w-[1160px] mx-auto lg:px-0 lg:mb-[88px] limitations">
      <div className="mb-[3.5rem] pl-[1.1875rem] pr-[1.8125rem] col-span-full lg:col-span-6  text-center lg:text-left lg:px-0  limitations-heading">
        <h4 className="text-[#253347] text-[2rem] leading-[110%] font-semibold tracking-[-1.6px] mb-[2rem] lg:text-[3rem]">
          {limitation.heading}
        </h4>
        <p className="text-[1rem] leading-[150%]  text-[#5e6e85]">
          {limitation.content}
        </p>
      </div>
      {limitationList &&
        limitationList.map((limitation, idx) => (
          <div
            key={idx}
            className={`p-[1.5rem] grid grid-cols-[max-content_1fr] gap-x-[1rem] shadow-[16px_2rem_3.5rem_0px_rgba(143,174,207,0.25)] rounded-[1rem] ml-[1.1875rem] mr-[1.8125rem] items-center place-content-center gap-y-[1rem] mb-[1rem] md:col-span-6  md:mx-0 md:mb-6 lg:p-8 lg:mb-8 ${
              (idx === 0 && 'lg:col-start-8 lg:col-end-12') ||
              (idx === 1 && 'md:col-start-7  lg:col-start-5 lg:col-end-9') ||
              (idx === 2 && ' lg:col-start-9 lg:col-end-13') ||
              (idx === 3 && 'md:col-start-7  lg:col-start-3 lg:col-end-7') ||
              (idx === 4 && 'md:col-start-4  lg:col-start-7 lg:col-end-11')
            }`}
          >
            <img
              src={limitation.imgSrc}
              className="col-start-1"
              alt={limitation.heading}
            />
            <span className="col-start-2 text-[20px] tracking-[-1px] text-[#253347] font-semibold leading-[100%]">
              {limitation.heading}
            </span>
            <p className="text-[1rem] leading-[150%] text-[#5e6e85] col-span-full ">
              {limitation.content}
            </p>
          </div>
        ))}
    </section>
  )
}
export default Limitations
