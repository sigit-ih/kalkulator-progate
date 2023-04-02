console.clear();
let log = (print) => console.log(print);

// Hapus semua variabel
let clearInput = () => {
    firstNum = 0;
    secondNum = 0;
    operator = "";
    display = "0";
    noInput = true;
    negativeNum = false;
    decimalNum = false;
    exp = false;
    document.getElementById('panel').value = display;
    log("Hapus semua variabel");
  };
  
  // Tampilkan nilai display ke dalam panel di HTML
  let displayInput = () => {
    document.getElementById('panel').value = display;
    log(`Tampilkan ${display} ke panel kalkulator`);
  };
  
  // Nilai dalam array dibagi 100 persen 
  let inputPercent = () => {
    let temp = parseFloat(display);
    display = String(temp / 100);
    if (display.length >= 15) {
      let a = Math.round(parseFloat(display) * 1000) / 1000;
      display = String(a.toExponential(3));
      log(`Jika panjang display >= 15, ubah ke ekponensial dengan 3 desimal`);
    }
    log(`Bagi display dengan 100%`);
  };
  
  // Masukkan input pertama dan operator
  let inputOperator = (opr) => {
    if (noInput == true) {
       // Operator tidak dijalankan jika tidak ada input pertama
      log(`Jika tidak ada angka pertama, perintah tidak dijalankan`);
    } else if (operator == ""){
      // Simpan operator
      operator = opr;
      firstNum = parseFloat(display);
      display = "0";
      if (operator == "" || operator == null || operator == undefined) {
        log("Nilai operator tidak ada");
      }
      negativeNum = false;
      decimalNum = false;
      log(`Masukkan ${firstNum} ke variabel firstNum`); 
    } else {
      // Ganti operator jika operator sudah ada
      operator = opr;
      if (operator == "" || operator == null || operator == undefined) {
        log("Nilai operator tidak ada");
      }
      log(`Ganti operator menjadi ${operator}`);
    }
  };
  
  // Masukkan nomor kedua ke secondNum, hitung dalam class calculate pada fungsi result(), dan display hasil pada panel di HTML
  let equalsInput = () => {
    secondNum = parseFloat(display);
    log(`Masukkan ${secondNum} ke variabel secondNum`);
    let out = new calculate(firstNum, operator, secondNum);
    let hasil = out.result();
    // Ubah angka setelah desimal menjadi 3 jika panjang hasil >= 15 
    if (hasil % 1 != 0 && String(hasil).length >= 15) {
      log(`Ubah angka desimal dari ${hasil} menjadi 3 jika hasil >= 15 digit`);
      let x = Math.round(hasil * 10000000000) / 10000000000;
      hasil = x;
    }
    // Ubah hasil menjadi exponensial jika >= 15 digit
    if (String(hasil).length >= 15) {
      let temp = hasil.toExponential(3);
      hasil = temp;
      log(`Ubah ${hasil} menjadi exponensial jika hasil >= 15 digit`);
      exp = true;
    } 
    // Simpan kalkulasi ke dalam history
    let logHistory = `${firstNum} ${operator} ${secondNum} = ${hasil}`;
    history.push(logHistory);
    log(history);
    log(`Simpan hasil sebagai log history`);
  
    // Tampilkan hasil ke dalam display
    display = String(hasil);
    document.getElementById('panel').value = display;
    log(`Tampilkan hasil ke panel kalkulator`);
  
    // Masukkan hasil ke dalam digit pertama
    afterFinish(hasil);
  };
  
  // Masukkan hasil kalkulasi menjadi digit pertama
  let afterFinish = (hsl) => {
    if (exp == false) {
      firstNum = hsl;
    }
    secondNum = 0;
    operator = "";
    log("Hasil menjadi digit pertama");
  };