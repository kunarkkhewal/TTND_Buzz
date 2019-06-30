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