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
    Swal.fire({
        title,
        onBeforeOpen: () => {
            Swal.showLoading()
        },
    })
}

export const deleteAlert = () => {
    return Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    });
}