import { useBMIContext } from '../hooks/useBMIContext'

const Metric = () => {
  const { cm, setCm, kg, setKg } = useBMIContext()

  return (
    <div className="grid grid-cols-2 gap-x-[1.5rem] col-span-full gap-y-[1rem]">
      <div className="relative col-span-full md:col-start-1 md:col-span-1">
        <label
          htmlFor="height"
          className="text-[.875rem] leading-[1.3125rem] text-[#5e6e85] mb-[.5rem]"
        >
          Height
        </label>
        <div className="cm">
          <input
            type="number"
            id="height"
            name="height"
            className="cm border-[1px] border-[#d8e2e7] rounded-[.75rem] bg-white w-full py-[1.25rem] px-[1.5rem] text-[1.5rem] font-semibold leading-[1.8125rem] tracking-[-1.2px]"
            value={cm === null || 0 ? '' : cm}
            onChange={e => {
              if (e.target.value.length === 0 || isNaN(e.target.value)) {
                setCm(null)
              } else setCm(Number(e.target.value))
            }}
            placeholder="0"
          />
        </div>
      </div>
      <div className="relative col-span-full md:col-start-2 md:col-span-1">
        <label
          htmlFor="weight"
          className="text-[.875rem] leading-[1.3125rem] text-[#5e6e85] mb-[.5rem]"
        >
          Weight
        </label>
        <div className="kg">
          <input
            type="number"
            id="weight"
            name="weight"
            className="kg border-[1px] border-[#d8e2e7] rounded-[.75rem] bg-white w-full py-[1.25rem] px-[1.5rem] text-[1.5rem] font-semibold leading-[1.8125rem] tracking-[-1.2px]"
            value={kg === null || 0 ? '' : kg}
            onChange={e => {
              if (e.target.value.length === 0 || isNaN(e.target.value)) {
                setKg(null)
              } else setKg(Number(e.target.value))
            }}
            placeholder="0"
          />
        </div>
      </div>
    </div>
  )
}
export default Metric
