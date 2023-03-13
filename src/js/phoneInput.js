export default function phoneInput() {
  let phoneMask = document.querySelectorAll("#phone-mask");
  phoneMask.forEach(e => e.addEventListener("keydown", function(e) {
    "ArrowLeft" != e.key && "ArrowRight" != e.key && "Backspace" != e.key && "Tab" != e.key && e.preventDefault();
    let t = "+7 (111) 111-11-11";
    if (/[0-9\+\ \-\(\)]/.test(e.key)) {
      let a = this.value,
        n = a.length;
      if (/[0-9]/.test(e.key)) {
        if ("1" == t[n]) {
          this.value = a + e.key;
        } else {
          for (let r = n; r < t.length; r++) {
            if ("1" == t[r]) {
              this.value = a + e.key;
              break;
            }
            a += t[r];
          }
        }
      }
    }
  }));
};

phoneInput();


