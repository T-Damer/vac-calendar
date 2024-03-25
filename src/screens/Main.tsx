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
      <h1>Vaccination calendar</h1>
      <div className="flex flex-wrap" ref={parentRef}>
        {Object.entries(patients).map(([name, birthDate], index) => (
          <PatientCard name={name} birthDate={birthDate} key={index} />
        ))}
        <CreatePatientCard />
      </div>
    </div>
  )
}
