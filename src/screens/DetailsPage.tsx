import { navigate } from 'wouter-preact/use-browser-location'
import { useAtom } from 'jotai'
import { useCallback } from 'preact/hooks'
import VacTable from 'components/VacTable'
import calculateCompletedVacs from 'helpers/calculateCompletedVacs'
import nameToBirthDateStorage from 'atoms/nameToBirthDateStorage'

export default function ({ name }: { name: string }) {
  const [patientsData, setPatientsData] = useAtom(nameToBirthDateStorage)
  const birthDate = patientsData[name]
  const { completedPercent, daysFromBirth } = calculateCompletedVacs(birthDate)

  const today = new Date().toLocaleDateString()
  const birth = new Date(birthDate).toLocaleDateString()

  const deleteEntry = useCallback(() => {
    if (!patientsData[name]) return

    delete patientsData[name]

    navigate('/')
    setPatientsData(patientsData)
  }, [name, patientsData, setPatientsData])

  return (
    <div className="flex flex-col gap-x-2">
      <div className="flex justify-between items-center">
        <a
          onClick={() => navigate('/')}
          className="cursor-pointer hover:opacity-50 transition-opacity"
        >
          ◄ Go back
        </a>

        <a className="text-red-400 cursor-pointer" onClick={deleteEntry}>
          Delete
        </a>
      </div>
      <VacTable completedPercent={completedPercent} />
      <span>Name: {name}</span>
      <span>Birth date: {birth}</span>
      <span>Today is: {today}</span>
      <span>Age: {daysFromBirth} days</span>
    </div>
  )
}
