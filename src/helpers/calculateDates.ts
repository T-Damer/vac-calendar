export default function (birthDate: number) {
  const today = new Date().getDate()
  const tuberculosis = today - birthDate > 7
  const tuberculosisRv = today - birthDate > 365 * 7
  const hepatitisBv1 = false
  const hepatitisBv2 = false
  const hepatitisBv3 = false

  return {
    tuberculosis,
    tuberculosisRv,
    hepatitisBv1,
    hepatitisBv2,
    hepatitisBv3,
  }
}
