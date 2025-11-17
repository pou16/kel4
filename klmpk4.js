function myFunction() {
  let input = document.getElementById("myInput");
  let filter = input.value.toUpperCase();
  let table = document.getElementById("myTable");
  let tr = table.getElementsByTagName("tr");

for (let i = 1; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[0];

    if (td) {
      let txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        ditemukan = true;
      } else {
        tr[i].style.display = "none";
      }
    }
  }
function myFunction() {
  let input = document.getElementById("myInput");
  let filter = input.value.toUpperCase();
  let table = document.getElementById("myTable");
  let tr = table.getElementsByTagName("tr");

  let ditemukan = false;

for (let i = 1; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[0];

    if (td) {
      let txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        ditemukan = true;
      } else {
        tr[i].style.display = "none";
      }
    }
  }
let pesan= document.getElementById("pesan");
if (!ditemukan) {
  pesan.style.display = "block";
  console.log("Data Tidak Ditemukan");
} else {
  pesan.style.display = "none";
}
}
