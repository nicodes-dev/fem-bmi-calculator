import { tips } from '../data'

const Tips = () => {
  return (
    <section className="section-tips">
      <div className="py-[56px] md:py-[60px] pl-[19px] pr-[29px] grid gap-y-[40px] md:px-[41px] max-w-[950px] xl:max-w-[1160px] mx-auto lg:grid-cols-12 lg:gap-x-[32px] lg:px-0 lg:pt-[72px] lg:pb-[96px] ">
        {tips &&
          tips.map((tip, idx) => (
            <div
              key={idx}
              className="grid md:grid-cols-[max-content_1fr] md:grid-rows-[repeat(2,max-content)] md:gap-y-[1.5rem] md:items-center place-content-center md:gap-x-[40px] lg:col-span-4"
            >
              <img
                src={tip.imgSrc}
                className="md:col-span-1 row-span-full lg:col-span-full"
              />
              <h3 className="mt-[2rem] mb-[1.5rem] text-[#253347] font-semibold tracking-[-1.2px] text-[1.5rem] leading-[29px] md:col-start-2 md:m-0 lg:col-span-full">
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
