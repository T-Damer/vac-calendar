import { navigate } from 'wouter-preact/use-browser-location'
import { useAtomValue } from 'jotai'
import calculateDates from 'helpers/calculateDates'
import nameToBirthDateStorage from 'atoms/nameToBirthDateStorage'

export default function ({ name }: { name: string }) {
  const birthDate = useAtomValue(nameToBirthDateStorage)[name]
  const calendar = calculateDates(birthDate)

  return (
    <div className="flex flex-col gap-2">
      <a
        onClick={() => navigate('/')}
        className="cursor-pointer hover:text-white transition-colors"
      >
        ◄ Go back
      </a>
      <span>Name: {name}</span>
      <span>Birth date: {new Date(birthDate).toLocaleDateString()}</span>
      <span>Age: {}</span>
      <span>Masles - {calendar.masles}</span>
    </div>
  )
}
