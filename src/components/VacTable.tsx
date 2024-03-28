export default function ({ completedPercent }: { completedPercent: number }) {
  return (
    <div className="relative">
      <div
        className="absolute h-[47.3%] z-10 right-0 top-1/4 border-l-red-600 border"
        style={{
          width: `${100 - completedPercent}%`,
          backdropFilter: `grayscale(1)`,
        }}
      />
      <img src="./vac-calendar/calendar.png" className="relative z-1" />
    </div>
  )
}
