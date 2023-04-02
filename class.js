// Proses penghitungan dalam class calculate
class calculate {
    constructor (firstNumber, operator, secondNumber){
      this.firstNumber = firstNumber;
      this.operator = operator;
      this.secondNumber = secondNumber;
    }
  
    // Hitung kalkulasi pada fungsi result()
    result () {
      let out = 0;
      if (this.operator == "+") {
        out = this.firstNumber + this.secondNumber;
        log(`output result : ${out}`);
        return Math.round(out * 1000) / 1000;
      } else if (this.operator == "-") {
        out = this.firstNumber - this.secondNumber;
        log(`output result : ${out}`);
        return Math.round(out * 1000) / 1000;
      } else if (this.operator == "*") {
        out = this.firstNumber * this.secondNumber;
        log(`output result : ${out}`);
        return Math.round(out * 1000) / 1000;
      } else if (this.operator == "/") {
        out = this.firstNumber / this.secondNumber;
        log(`output result : ${out}`);
        return Math.round(out * 1000) / 1000;
      } else {
        // Jika operator tidak ada
        out = undefined;
        log("Terjadi kesalahan pada variabel operator!");
        return out;
      }
    }
  }