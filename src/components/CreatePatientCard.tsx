import { useAtom } from 'jotai'
import { useCallback, useMemo, useState } from 'preact/hooks'
import Card from 'components/Card'
import HumanIcon from 'components/HumanIcon'
import nameToBirthDateStorage from 'atoms/nameToBirthDateStorage'

function AddPatientForm() {
  const [fullName, setFullName] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [patientsData, setPatientsData] = useAtom(nameToBirthDateStorage)

  const clearData = useCallback(() => {
    setFullName('')
    setBirthDate('')
  }, [])

  const onSubmit = useCallback(() => {
    if (!fullName || !birthDate) return

    if (patientsData[fullName]) {
      alert('This name already exists\nPlease use another one')
      return
    }

    setPatientsData((prevData) => ({
      ...prevData,
      [fullName]: Number(new Date(birthDate)),
    }))
    clearData()
  }, [fullName, birthDate, patientsData, setPatientsData, clearData])

  const disabled = useMemo(() => !fullName || !birthDate, [birthDate, fullName])

  return (
    <div className="flex flex-col gap-2">
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="text"
          placeholder="Full Name"
          className="grow"
          onChange={(e) => setFullName(e.currentTarget.value)}
          value={fullName}
          required
        />
        <HumanIcon />
      </label>
      <input
        className="input"
        value={birthDate}
        onChange={(e) => setBirthDate(e.currentTarget.value)}
        type="date"
        required
      />
      <div className="flex w-full items-center justify-between">
        <button
          className="btn transition-all disabled:opacity-70 hover:bg-gray-600 border-0 w-28"
          onClick={clearData}
          disabled={!fullName && !birthDate}
        >
          Clear
        </button>

        <button
          className="btn w-28 tranistion-all disabled:opacity-70 enabled:bg-green-700 enabled:border-0 enabled:text-white hover:enabled:bg-green-500"
          onClick={onSubmit}
          disabled={disabled}
        >
          Submit
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
