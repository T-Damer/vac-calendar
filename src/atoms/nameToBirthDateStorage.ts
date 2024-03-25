import { atomWithStorage } from 'jotai/utils'

interface NameToDate {
  [name: string]: number
}

export default atomWithStorage<NameToDate>('nameToDate', {})
