import { navigate } from 'wouter-preact/use-browser-location'
import { useAtomValue } from 'jotai'
import calculateDates from 'helpers/calculateDates'
import nameToBirthDateStorage from 'atoms/nameToBirthDateStorage'

export default function ({ name }: { name: string }) {
  const birthDate = useAtomValue(nameToBirthDateStorage)[name]
  const calendar = calculateDates(birthDate)

  return (
    <div>
      <p onClick={() => navigate('/')} className="cursor-pointer">
        Go back
      </p>
      <p>{name}</p>
      <p>{new Date(birthDate).toLocaleDateString()}</p>
      <p>Masles - {calendar.masles}</p>
    </div>
  )
}
