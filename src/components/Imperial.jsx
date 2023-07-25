import { useBMIContext } from '../hooks/useBMIContext'

const Imperial = () => {
  const { ft, setFt, inch, setInch, stone, setStone, pound, setPound } =
    useBMIContext()

  return (
    <div className="grid grid-cols-2 gap-x-[1.5rem] col-span-full gap-y-[1rem]">
      <div className="relative col-span-full grid-cols-2 gap-x-4 md:gap-x-6 grid">
        <label
          htmlFor="ft"
          className="text-[.875rem] leading-[21px] text-[#5e6e85] mb-[8px] col-span-full"
        >
          Height
        </label>
        <div className="relative ft">
          <input
            type="number"
            id="ft"
            className="border-[1px] border-[#d8e2e7] rounded-[12px] w-full py-[20px] px-[1.5rem] text-[1.5rem] font-semibold leading-[29px] tracking-[-1.2px]"
            value={ft === null || 0 ? '' : ft}
            onChange={e => {
              if (e.target.value.length === 0 || isNaN(e.target.value)) {
                setFt(null)
              } else setFt(Number(e.target.value))
            }}
            placeholder="0"
          />
        </div>
        <div className="relative inch">
          <input
            type="number"
            id="inch"
            name="inch"
            className="border-[1px] border-[#d8e2e7] rounded-[12px] w-full py-[20px] px-[1.5rem] text-[1.5rem] font-semibold leading-[29px] tracking-[-1.2px]"
            value={inch === null || 0 ? '' : inch}
            onChange={e => {
              if (e.target.value.length === 0 || isNaN(e.target.value)) {
                setInch(null)
              } else setInch(Number(e.target.value))
            }}
            placeholder="0"
          />
        </div>
      </div>
      <div className="relative col-span-full grid-cols-2 gap-x-4 md:gap-x-6 grid">
        <label
          htmlFor="stone"
          className="text-[.875rem] leading-[21px] text-[#5e6e85] mb-[8px] col-span-full"
        >
          Weight
        </label>
        <div className="relative stone">
          <input
            type="number"
            id="stone"
            className="border-[1px] border-[#d8e2e7] rounded-[12px] w-full py-[20px] px-[1.5rem] text-[1.5rem] font-semibold leading-[29px] tracking-[-1.2px]"
            value={stone === null || 0 ? '' : stone}
            onChange={e => {
              if (e.target.value.length === 0 || isNaN(e.target.value)) {
                setStone(null)
              } else setStone(Number(e.target.value))
            }}
            placeholder="0"
          />
        </div>
        <div className="relative pound">
          <input
            type="number"
            id="pound"
            name="pound"
            className="border-[1px] border-[#d8e2e7] rounded-[12px] w-full py-[20px] px-[1.5rem] text-[1.5rem] font-semibold leading-[29px] tracking-[-1.2px]"
            value={pound === null || 0 ? '' : pound}
            onChange={e => {
              if (e.target.value.length === 0 || isNaN(e.target.value)) {
                setPound(null)
              } else setPound(Number(e.target.value))
            }}
            placeholder="0"
          />
        </div>
      </div>
    </div>
  )
}
export default Imperial
