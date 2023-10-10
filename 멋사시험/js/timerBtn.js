class TimerBtn {
  constructor() {
    const timeList = document.querySelector(".timer");
    this.hrs = timeList.querySelector(".hrs");
    this.min = timeList.querySelector(".min");
    this.sec = timeList.querySelector(".sec");
  }
  setup() {
    this.bindEvents();
  }

  bindEvents() {
    this.hrs.addEventListener("click", () => {
      let hrsValue = parseInt(this.hrs.textContent);
      let hrsText = "";
      if (hrsValue < 9) {
        hrsValue++;
        hrsText = "0" + hrsValue;
      } else if (hrsValue >= 9 && hrsValue < 99) {
        hrsValue++;
        hrsText = hrsValue;
      } else {
        hrsValue = 0;
      }
      console.log(hrsText);
      this.hrs.innerHTML = `${hrsText}`;
    });
    this.min.addEventListener("click", () => {
      let minValue = parseInt(this.min.textContent);
      let minText = "";
      if (minValue < 9) {
        minValue++;
        minText = "0" + minValue;
      } else if (minValue >= 9 && minValue < 99) {
        minValue++;
        minText = minValue;
      } else {
        minValue = 0;
      }
      console.log(minText);
      this.min.innerHTML = `${minText}`;
    });
    this.sec.addEventListener("click", () => {
      let secValue = parseInt(this.sec.textContent);
      let secText = "";
      if (secValue < 9) {
        secValue++;
        secText = "0" + secValue;
      } else if (secValue >= 9 && secValue < 99) {
        secValue++;
        secText = secValue;
      } else {
        secValue = 0;
      }
      console.log(secText);
      this.sec.innerHTML = `${secText}`;
    });
  }
}

export default TimerBtn;
