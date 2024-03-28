import { navigate } from 'wouter-preact/use-browser-location'
import { useAtomValue } from 'jotai'
import VacTable from 'components/VacTable'
import calculateCompletedVacs from 'helpers/calculateCompletedVacs'
import nameToBirthDateStorage from 'atoms/nameToBirthDateStorage'

export default function ({ name }: { name: string }) {
  const birthDate = useAtomValue(nameToBirthDateStorage)[name]
  const { completedPercent, daysFromBirth } = calculateCompletedVacs(birthDate)

  const today = new Date().toLocaleDateString()
  const birth = new Date(birthDate).toLocaleDateString()

  return (
    <div className="flex flex-col gap-x-2">
      <a
        onClick={() => navigate('/')}
        className="cursor-pointer hover:opacity-50 transition-opacity"
      >
        ◄ Go back
      </a>
      <VacTable completedPercent={completedPercent} />
      <span>Name: {name}</span>
      <span>Birth date: {birth}</span>
      <span>Today is: {today}</span>
      <span>Age: {daysFromBirth} days</span>
    </div>
  )
}
