import { navigate } from 'wouter-preact/use-browser-location'
import { useAtomValue } from 'jotai'
import calculateDates from 'helpers/calculateDates'
import nameToBirthDateStorage from 'atoms/nameToBirthDateStorage'

export default function ({ name }: { name: string }) {
  const birthDate = useAtomValue(nameToBirthDateStorage)[name]
  const calendar = calculateDates(birthDate)

  const today = new Date()
  const birth = new Date(birthDate)

  const age = today.getFullYear() - 2000 - birth.getFullYear()

  return (
    <div className="flex flex-col gap-x-2">
      <a
        onClick={() => navigate('/')}
        className="cursor-pointer hover:opacity-50 transition-opacity"
      >
        ◄ Go back
      </a>
      <img src="https://www.endocrincentr.ru/sites/default/files/all/pacientam/kalendar_profilakticheskih_privivok/nacionalniy_kalendar_profilakticheskih_privivok_b.jpg" />
      <span>Name: {name}</span>
      <span>Birth date: {birth.toLocaleDateString()}</span>
      <span>Age: {age < 0 ? 0 : age}</span>
      <span>Masles - {calendar.masles}</span>
    </div>
  )
}
