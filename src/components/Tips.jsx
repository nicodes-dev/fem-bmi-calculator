import { tips } from '../data'

const Tips = () => {
  return (
    <section className="section-tips">
      <div className="py-[3.5rem] md:py-[3.75rem] pl-[1.185rem] pr-[1.8125rem] grid gap-y-10 md:px-[2.5625] max-w-[59.375rem] xl:max-w-[72.5rem] mx-auto lg:grid-cols-12 lg:gap-x-[2rem] lg:px-0 lg:pt-[4.5rem] lg:pb-[6rem] ">
        {tips &&
          tips.map((tip, idx) => (
            <div
              key={idx}
              className="grid md:grid-cols-[max-content_1fr] md:grid-rows-[repeat(2,max-content)] md:gap-y-[1.5rem] md:items-center place-content-center md:gap-x-10 lg:col-span-4"
            >
              <img
                src={tip.imgSrc}
                className="md:col-span-1 row-span-full lg:col-span-full lg:mb-[1.3125rem]"
                alt={tip.heading}
              />
              <h3 className="mt-[2rem] mb-[1.5rem] text-[#253347] font-semibold tracking-[-1.2px] text-[1.5rem] leading-[1.8125rem] md:col-start-2 md:m-0 lg:col-span-full">
                {tip.heading}
              </h3>
              <p className="text-[1rem] text-[#5e6e85] leading-[150%] md:col-start-2 lg:col-span-full">
                {tip.content}
              </p>
            </div>
          ))}
      </div>
    </section>
  )
}
export default Tips
