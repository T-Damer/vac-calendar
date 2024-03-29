// On image we have 20 sectors with different date gaps (for example first sector is a gap from 0 to 30 days)
// We calculate time since birth in days and put it in a specific sector
// E.g. `daysFromBirth = 21`, it falls into 1st sector - [0, 30]
// we calculate `sectorCompletion` by doing (21 - 0) / 30 === 0.7
// We return 0.7% + leftDeadSpace as a width for css grayscale styles

import isBetween from 'helpers/isBetween'

const ONE_DAY = 1000 * 60 * 60 * 24

export default function (birthDate: number) {
  const today = new Date().getTime()
  const daysFromBirth = Math.round(Math.abs(today - birthDate) / ONE_DAY)

  let currentSector = 0
  for (const [index, gap] of gaps.entries()) {
    if (isBetween(daysFromBirth, gap[0], gap[1])) {
      const sectorCompletion = (daysFromBirth - gap[0]) / gap[1] // e.g. 34 days = (34 - 31) / 60 = 0.05 in gap [31, 60]

      currentSector = index + sectorCompletion
    }
  }

  const leftDeadZone = 10 // table legend on the left

  const amountOfSectors = 20
  const oneSector = (100 - leftDeadZone) / amountOfSectors // 4.5% for one sector, used for css styles
  const coloredSectorsPercent = currentSector * oneSector

  const completedPercent = leftDeadZone + coloredSectorsPercent

  const olderThan60 = completedPercent > 95 ? 100 : completedPercent // edge case because we start index from 0

  console.log('---- debug data ----')
  console.log([
    currentSector,
    oneSector,
    coloredSectorsPercent,
    completedPercent,
    olderThan60,
  ])

  return { completedPercent: olderThan60, daysFromBirth }
}

const gaps: [number, number][] = [
  [0, 7],
  [8, 60],
  [61, 90],
  [91, 120],
  [121, 180],
  [181, 360],
  [361, 450],
  [451, 540],
  [541, 600],
  [600, 2160],
  [2161, 2520],
  [2521, 4320],
  [4321, 5040],
  [5041, 5400],
  [5401, 6480],
  [6481, 9360],
  [9361, 12960],
  [12961, 20160],
  [20161, 21600],
  [21601, 999999],
]
