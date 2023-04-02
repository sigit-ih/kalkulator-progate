// Declare variable
let firstNum = 0;
let operator = "";
let secondNum = 0;
let display = "0";
const history = [];
let noInput = true;
let negativeNum = false;
let decimalNum = false;
let exp = false;

// Fungsi yang dijalankan ketika tombol kalkulator diklik
function clickBtn(btn) {
  let value = btn.value;
  if (value == "=") {
    // Jika tombol = ditekan hitung semua kalkulasi
    if (operator != "") {
      equalsInput();
    }
    log(`Selesai [end]`);
  } else if (value == "AC") {
    // Jika tombol AC ditekan kembali ke kondisi awal
    clearInput();
    log(`Hapus input [end]`);
  } else if (value == "%") { 
    // Jika tombol % ditekan, bagi bilangan dengan 100 persen
    inputPercent();
    displayInput();
    log(`Bagi display dengan 100 persen [end]`);
  } else if ((display == "0" || display == "-0") && value != "." && value != "+" && value != "*" && value != "/") {
    // Jika display menunjukkan 0, ganti display menjadi value
    if (display == "-0") {
      if (value == ".") {
      display += value;
      decimalNum = true;
      log(`Tambah value menjadi -0${value}`);
      } else {
      display[1] = value;
      log(`Ganti -0 menjadi -${value}`);
      }
    } else {
      display = value;
      log(`Ganti 0 dengan ${value}`);
    } 
    displayInput();
    noInput = false;
    if (value == "-") {
      negativeNum = true;
    }
    if (value == ".") {
      decimalNum = true;
    }
    exp = false;
    log(`Ganti angka awal [end]`);
  } else if (value == "+" || value == "-" || value == "*" || value == "/") {
    // Jika tombol operator ditekan, masukkan digit menjadi digit pertama dan simpan operator
    if (negativeNum == true & display.length == 1) {
      log("Masukkan angka setelah input negatif! [end]");
    } else {
      inputOperator(value);
      if (noInput == false) {
        log(`Input ${value} ke variabel operator [end]`);
      }
    }
  } else if (display.length >= 15) {
    // Jika digit yang ada melebihi 15 angka, tampilkan pesan alert dan cegah angka untuk disimpan
    log("Max digit 15 [end]");
    alert("Telah mencapai maksimum digit 15");
    displayInput();
  } else {
    // Jika tombol angka ditekan, simpan ke dalam display
    if (decimalNum == true && value == ".") {
      log("Tidak boleh ada lebih dari satu titik desimal!");
    } else {
      if (exp == true) {
        display = value;
      } else {
        display += value;
      }
      displayInput();
      noInput = false;
      if (value == ".") {
        decimalNum = true;
      }
      exp = false;
      log(`Input ${value} ke variabel display [end]`);
    }
  }
}