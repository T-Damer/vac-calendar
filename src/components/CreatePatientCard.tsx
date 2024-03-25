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
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="text"
          placeholder="Full Name"
          className="grow"
          onChange={(e) => setFullName(e.currentTarget.value)}
          value={fullName}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 mr-0.5"
        >
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
        </svg>
      </label>
      <input
        className="input"
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
