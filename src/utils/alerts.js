import Swal from "sweetalert2"

export async function fireAlert(error){
    await Swal.fire({
      title: error,
      confirmButtonColor: "#3085d6",
    })
}