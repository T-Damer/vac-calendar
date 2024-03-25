import { PropsWithChildren } from 'preact/compat'

interface CardProps extends PropsWithChildren {
  dashedOutline?: boolean
  onPress?: () => void
}

export default function ({ children, dashedOutline, onPress }: CardProps) {
  const outline = dashedOutline ? 'border-dashed' : 'border-solid'

  return (
    <div
      className={`flex-1 h-40 border-2 ${outline} cursor-pointer rounded-md p-3 m-1 bg-gray-700 border-gray-300 text-white flex align-center justify-center min-h-32`}
      onClick={onPress}
    >
      {children}
    </div>
  )
}
