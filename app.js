//Тэмдэглэлт өдрүүдийн description-ыг хадгалах JSON
var calendar2021 = {
  jan: { 1: "Сайхан амарна", 5: "Дахиад сайхан амарна" },
  feb: {
    1: "Сагсны тэмцээнтэй",
    3: "Шагнал гардуулна даа",
    17: "Жавхлан багшийн лаб 2-ыг хийнэ",
  },
  mar: {
    2: "Энэ лабынхаа хугацааг сунгах уу яах вэ гэдэгээ шийднэ",
    6: "Энд юу бичье дээ байз",
    8: "Эмэгтэйчүүддээ баяр хүргэнэ дээ",
  },
  apr: { 1: "Бүгдээрээ худлаа ярьцаагаагаарай" },
  may: { 10: "Энэ сард ч ёстой юу ч болдоггүй сар даа" },
  jun: { 6: "Жавхлан багшийн төрсөн өдөр" },
  jul: { 4: "Хичээл амарсаан ураа" },
  aug: { 1: "Хөдөө явдаг цаг даа", 25: "Хичээл сонголт эхэллээ" },
  sep: { 1: "9-н сарын нэгэн боллоо ерөөсөө бидний баяр даа" },
  oct: { 13: "Сур сур бас дахин сур" },
  nov: { 2: "Сурсаар л бай", 6: "Мэдэхгүй ээ нэг өдөр байгаа" },
  dec: {
    20: "Өвлийн семистер хаагдах нь дээ",
    30: "Дүн гаргаж дууслаа баярлалаа баяртай",
  },
};

//12 сарыг массивт хадгалах
var months = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];

const pushDay = (rowIndex, number, month) => {
  //Тухайн сар хэддэх өдрөөс эхлэж байгаа болон хэд хоногтой болохыг тогтооно...
  const date = new Date();
  date.setMonth(number);
  const sariinHonog = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const omnohSariinHonog = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  date.setDate(1);
  let start_index = date.getDay();
  date.setDate(sariinHonog);
  let last_index = date.getDay();
  if (start_index == 0) start_index = 7;

  var i,
    html = "",
    tolow = true;

  //7 хоногийг оруулна
  document.querySelector(
    ".weekday" + number
  ).innerHTML = `<div class="wd">Sun</div>
  <div class="wd">Mon</div>
  <div class="wd">Tue</div>
  <div class="wd">Wed</div>
  <div class="wd">Thu</div>
  <div class="wd">Fri</div>
  <div class="wd">Sat</div>`;

  //Календар дээр өдрүүдийг оруулна. Өдрүүдийг оруулахдаа special өдрүүдийг өнгөөр ялгаж өгнө.
  for (i = 0; i <= sariinHonog; i++) {
    if (tolow) {
      if (i == start_index - 1) {
        tolow = false;
        i = 0;
        continue;
      }
      html += `<div class="box"></div>`;
      document.querySelector(`.day${number}`).innerHTML = html;
    } else {
      if (month === "jan") {
        if (calendar2021.jan[i] !== undefined) {
          var randomColor = Math.floor(Math.random() * 16777215).toString(16);
          html += `<div class="box" style = "background : #${randomColor}">${i}</div>`;
          specialDay(rowIndex, number, i, randomColor);
        } else {
          html += `<div class="box">${i}</div>`;
        }
      }
      if (month === "feb") {
        if (calendar2021.feb[i] !== undefined) {
          var randomColor = Math.floor(Math.random() * 16777215).toString(16);
          html += `<div class="box" style = "background : #${randomColor}">${i}</div>`;
          specialDay(rowIndex, number, i, randomColor);
        } else {
          html += `<div class="box">${i}</div>`;
        }
      }
      if (month === "mar") {
        if (calendar2021.mar[i] !== undefined) {
          var randomColor = Math.floor(Math.random() * 16777215).toString(16);
          html += `<div class="box" style = "background : #${randomColor}">${i}</div>`;
          specialDay(rowIndex, number, i, randomColor);
        } else {
          html += `<div class="box">${i}</div>`;
        }
      }
      if (month === "apr") {
        if (calendar2021.apr[i] !== undefined) {
          var randomColor = Math.floor(Math.random() * 16777215).toString(16);
          html += `<div class="box" style = "background : #${randomColor}">${i}</div>`;
          specialDay(rowIndex, number, i, randomColor);
        } else {
          html += `<div class="box">${i}</div>`;
        }
      }
      if (month === "may") {
        if (calendar2021.may[i] !== undefined) {
          var randomColor = Math.floor(Math.random() * 16777215).toString(16);
          html += `<div class="box" style = "background : #${randomColor}">${i}</div>`;
          specialDay(rowIndex, number, i, randomColor);
        } else {
          html += `<div class="box">${i}</div>`;
        }
      }
      if (month === "jun") {
        if (calendar2021.jun[i] !== undefined) {
          var randomColor = Math.floor(Math.random() * 16777215).toString(16);
          html += `<div class="box" style = "background : #${randomColor}">${i}</div>`;
          specialDay(rowIndex, number, i, randomColor);
        } else {
          html += `<div class="box">${i}</div>`;
        }
      }
      if (month === "jul") {
        if (calendar2021.jul[i] !== undefined) {
          var randomColor = Math.floor(Math.random() * 16777215).toString(16);
          html += `<div class="box" style = "background : #${randomColor}">${i}</div>`;
          specialDay(rowIndex, number, i, randomColor);
        } else {
          html += `<div class="box">${i}</div>`;
        }
      }
      if (month === "aug") {
        if (calendar2021.aug[i] !== undefined) {
          var randomColor = Math.floor(Math.random() * 16777215).toString(16);
          html += `<div class="box" style = "background : #${randomColor}">${i}</div>`;
          specialDay(rowIndex, number, i, randomColor);
        } else {
          html += `<div class="box">${i}</div>`;
        }
      }
      if (month === "sep") {
        if (calendar2021.sep[i] !== undefined) {
          var randomColor = Math.floor(Math.random() * 16777215).toString(16);
          html += `<div class="box" style = "background : #${randomColor}">${i}</div>`;
          specialDay(rowIndex, number, i, randomColor);
        } else {
          html += `<div class="box">${i}</div>`;
        }
      }
      if (month === "oct") {
        if (calendar2021.oct[i] !== undefined) {
          var randomColor = Math.floor(Math.random() * 16777215).toString(16);
          html += `<div class="box" style = "background : #${randomColor}">${i}</div>`;
          specialDay(rowIndex, number, i, randomColor);
        } else {
          html += `<div class="box">${i}</div>`;
        }
      }
      if (month === "nov") {
        if (calendar2021.nov[i] !== undefined) {
          var randomColor = Math.floor(Math.random() * 16777215).toString(16);
          html += `<div class="box" style = "background : #${randomColor}">${i}</div>`;
          specialDay(rowIndex, number, i, randomColor);
        } else {
          html += `<div class="box">${i}</div>`;
        }
      }
      if (month === "dec") {
        if (calendar2021.dec[i] !== undefined) {
          var randomColor = Math.floor(Math.random() * 16777215).toString(16);
          html += `<div class="box" style = "background : #${randomColor}">${i}</div>`;
          specialDay(rowIndex, number, i, randomColor);
        } else {
          html += `<div class="box">${i}</div>`;
        }
      }
      document.querySelector(`.day${number}`).innerHTML = html;
    }
  }

  //Бүх өдрийг оруулж дууссаны дараа үлдсэн хэсгийг нь хоосон зайгаар дүүргэнэ
  if (last_index != 0) {
    for (i = last_index; i < 7; i++) {
      html += `<div class="box"></div>`;
      document.querySelector(`.day${number}`).innerHTML = html;
    }
  }
};

const specialDay = (index, number, day, color) => {
  var html = `<div class="row-el">
  <div class="color" style="background-color: #${color}"></div>
  <div class="months">${months[number]} - ${day}</div>
  <div class="colorText">${calendar2021[months[number]][day]}</div>
</div>`;
  document.querySelector(".row-" + index).insertAdjacentHTML("beforeend", html);
};

//Веб ачааллаж эхлэхэд тухайн функц хамгийн түрүүнд ажиллана.
var rowIndex = 2;
const webStart = () => {
  // console.log(calendar2021.feb[3]);
  for (var i = 0; i < 12; i++) {
    if (rowIndex === 1) {
      rowIndex = 2;
    } else {
      rowIndex = 1;
    }
    pushDay(rowIndex, i, months[i]);
  }
};
window.addEventListener("load", webStart);
