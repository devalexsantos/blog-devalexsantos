import { TailSpin } from 'react-loader-spinner'

export function LoadingSpinner() {
  return (
    <>
      <TailSpin
        height={50}
        width={50}
        color="#E1E1E6"
        ariaLabel="tail-spin-loading"
        radius="1"
      />
    </>
  )
}
