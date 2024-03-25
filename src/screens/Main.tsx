import { useAtomValue } from 'jotai'
import { useAutoAnimate } from '@formkit/auto-animate/preact'
import CreatePatientCard from 'components/CreatePatientCard'
import PatientCard from 'components/PatientCard'
import nameToBirthDateStorage from 'atoms/nameToBirthDateStorage'

export default function () {
  const patients = useAtomValue(nameToBirthDateStorage)
  const [parentRef] = useAutoAnimate()

  return (
    <div>
      <h1>📆 Vaccination calendar</h1>
      <search>Implement search by hiding unmatching elements</search>
      <div className="flex flex-wrap" ref={parentRef}>
        <CreatePatientCard />
        {Object.entries(patients)
          .reverse()
          .map(([name, birthDate], index) => (
            <PatientCard name={name} birthDate={birthDate} key={index} />
          ))}
      </div>
    </div>
  )
}
