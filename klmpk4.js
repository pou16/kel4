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

  let pesan = document.getElementById("pesan");
  if (!ditemukan) {
    pesan.style.display = "block";
    console.log("Data tidak ditemukan");
  } else {
    pesan.style.display = "none";
  }
}

function tambahData() {
  let nama = document.getElementById("nama").value;
  let kelas = document.getElementById("kelas").value;
  let nilai = document.getElementById("nilai").value;

  if (nama === "" || kelas === "" || nilai === "") {
    alert("Semua data harus diisi!");
    return;
  }

  // Tentukan predikat
  let predikat = "";
  if (nilai >= 95) predikat = "A";
  else if (nilai >= 80) predikat = "B";
  else if (nilai >= 70) predikat = "C";
  else predikat = "D";

  // Tentukan status
  let status = nilai >= 70 ? "Lulus" : "Tidak Lulus";

  // Tambahkan ke tabel
  let table = document.getElementById("myTable");
  let row = table.insertRow(-1);

  row.insertCell(0).innerHTML = nama;
  row.insertCell(1).innerHTML = kelas;
  row.insertCell(2).innerHTML = nilai;
  row.insertCell(3).innerHTML = predikat;
  row.insertCell(4).innerHTML = status;

  console.log("Data berhasil ditambahkan:", nama);

  // Kosongkan input
  document.getElementById("nama").value = "";
  document.getElementById("kelas").value = "";
  document.getElementById("nilai").value = "";
}