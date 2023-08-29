import React from 'react'
import Swal from 'sweetalert2';


// https://sweetalert2.github.io/ --> Documentation
export const Alerts = () => {

    const showAlert = (title, text, icon) => {
        // alert(`${title}: ${text}`);
        Swal.fire({ title, text, icon })
    };

    const showConfirm = () => {
        // if (window.confirm("Are you sure you want to continue")) {
        //     alert("Confirmed!");
        // } else {
        //     alert("Cancelled!");
        // }
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    };


    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col gap-10">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                    onClick={() => showAlert('Info', 'Description of Info', 'info')}>
                    Info
                </button>
                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
                    onClick={() => showAlert('Success', 'Description', 'success')}>
                    Success
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
                    onClick={() => showAlert('Error', 'Description', 'error')}>
                    Error
                </button>
                <button className="bg-slate-500 hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded"
                    onClick={() => showAlert('Question', 'Description', 'question')}>
                    Question
                </button>
                <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 px-4 rounded"
                    onClick={showConfirm}>
                    Confirm
                </button>
            </div>
        </div>
    )
}
