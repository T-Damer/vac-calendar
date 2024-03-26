import { PropsWithChildren } from 'preact/compat'

interface CardProps extends PropsWithChildren {
  dashedOutline?: boolean
  onPress?: () => void
}

export default function ({ children, dashedOutline, onPress }: CardProps) {
  const outline = dashedOutline ? 'border-dashed' : 'border-solid'
  const minWidth = dashedOutline ? '' : 'min-w-36'
  const justify = dashedOutline ? 'justify-center' : 'justify-start'
  const bgHover = dashedOutline ? '' : 'hover:bg-opacity-70'

  return (
    <div
      className={`flex-1 ${bgHover} ${minWidth} ${justify} h-40 shadow-md border-2 ${outline} cursor-pointer rounded-xl p-3 m-1 bg-gray-300 transition-all border-gray-300  flex align-center`}
      onClick={onPress}
    >
      {children}
    </div>
  )
}
