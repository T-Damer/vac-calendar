import { useCallback, useState } from 'preact/hooks'
import { useSetAtom } from 'jotai'
import Card from 'components/Card'
import nameToBirthDateStorage from 'atoms/nameToBirthDateStorage'

function AddPatientForm() {
  const [fullName, setFullName] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const setPatientsData = useSetAtom(nameToBirthDateStorage)

  const clearData = useCallback(() => {
    setFullName('')
    setBirthDate('')
  }, [])

  const onSubmit = useCallback(() => {
    if (!fullName || !birthDate) return

    setPatientsData((prevData) => ({
      ...prevData,
      [fullName]: Number(new Date(birthDate)),
    }))
    clearData()
  }, [fullName, birthDate, setPatientsData, clearData])

  return (
    <div className="flex flex-col gap-2">
      <input
        className="input hover:bg-gray-700 hover:border-black transition-colors"
        placeholder="Full Name"
        onChange={(e) => setFullName(e.currentTarget.value)}
        value={fullName}
      />
      <input
        className="input hover:bg-gray-700 hover:border-black transition-colors"
        value={birthDate}
        onChange={(e) => setBirthDate(e.currentTarget.value)}
        type="date"
      />
      <div className="flex w-full items-center justify-between">
        <button
          className="btn w-24 tranistion-colors disabled:opacity-70 enabled:bg-green-700 enabled:border-0 enabled:text-white hover:enabled:bg-green-500"
          onClick={onSubmit}
          disabled={!fullName || !birthDate}
        >
          Submit
        </button>

        <button
          className="btn transition-colors hover:bg-gray-600 border-0 w-24"
          onClick={clearData}
        >
          Clear
        </button>
      </div>
    </div>
  )
}

export default function () {
  return (
    <Card dashedOutline>
      <AddPatientForm />
    </Card>
  )
}
