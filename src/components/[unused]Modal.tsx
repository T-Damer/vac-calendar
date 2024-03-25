import { JSX } from 'preact/jsx-runtime'

interface ModalProps {
  topText: string
  bodyContent: JSX.Element
  modalId: string
}

export function openModal(modalId: string) {
  ;(document.getElementById(modalId) as HTMLDialogElement).showModal()
}

export default function ({ modalId, topText, bodyContent }: ModalProps) {
  return (
    <dialog id={modalId} className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-lg">{topText}</h3>
        <p className="py-4">{bodyContent}</p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
      {/* Backdrop to close the dialog on back press */}
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  )
}
