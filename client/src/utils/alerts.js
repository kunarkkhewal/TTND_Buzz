import Swal from 'sweetalert2';

export const successAlert = title => {
    Swal.fire({
        type: 'success',
        title,
    })
}

export const errorAlert = title => {
    Swal.fire({
        type: 'error',
        title,
    })
}

export const warningAlert = title => {
    Swal.fire({
        type: 'warning',
        title,
    })
}

export const infoAlert = title => {
    Swal.fire({
        type: 'info',
        title,
    })
}

export const savingAlert = title => {
    let timerInterval
    Swal.fire({
        title,
        timer: 15000,
        onBeforeOpen: () => {
            Swal.showLoading()
            timerInterval = setInterval(() => {
                Swal.getContent().querySelector('strong')
                    .textContent = Swal.getTimerLeft()
            }, 100)
        },
        onClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {
        if (
            // Read more about handling dismissals
            result.dismiss === Swal.DismissReason.timer
        ) {
            console.log('I was closed by the timer')
        }
    })
}