const dairy = document.querySelector('.grid-container');

let dairycont = [
  // { title: 'myjournal', date: '21/06/24', text_area: 'my journal design using js', btn_area: '.' },
  // { title: 'myjournal', date: '21/06/24', text_area: 'my journal design using js', btn_area: '.' },
];

function clearApp() {
  dairy.innerHTML = '';
}

// //to display page
const displayDairy = () => {
  clearApp();
  for (i = 0; i < dairycont.length; i++) {
    const dairy_div = dairyPage(dairycont[i]);
    appendTodairy(dairy_div);
  }
};

const appendTodairy = (page) => {
  dairy.appendChild(page);
};

// to create html page
function dairyPage(c) {
  const dairy_page = document.createElement('div');
  dairy_page.setAttribute('class', 'dairy-PG bd-rd');

  const top_div = document.createElement('div');
  top_div.setAttribute('class', 'top-div bd-rd-bt p-2');

  const mid_div = document.createElement('div');
  mid_div.setAttribute('class', 'mid-div bd-rd-bt p-2');

  const btm_div = document.createElement('div');
  btm_div.setAttribute('class', 'btm-div');

  //creating elementstag
  const title = document.createElement('p');
  title.setAttribute('class', 'title');
  title.innerText = `${c.title}`;

  const date = document.createElement('p');
  date.setAttribute('class', 'date');
  date.innerText = `${c.date}`;

  const text_area = document.createElement('p');
  text_area.setAttribute('class', 'text-area');
  text_area.innerText = `${c.text_area}`;

  const btn_area = document.createElement('p');
  btn_area.setAttribute('class', 'btn');
  btn_area.innerText = `${c.btn_area}`;

  //append
  dairy_page.append(top_div, mid_div, btm_div);
  top_div.append(title, date);
  mid_div.appendChild(text_area);
  btm_div.append(btn_area);

  return dairy_page;
}

function dairy_form() {
  const form = document.querySelector('.JD-form');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const form_title = document.querySelector('#title').value;
    const form_date = document.querySelector('#date').value;
    const form_textarea = document.querySelector('#big-textbox').value;

    const dairy_info = {
      title: form_title,
      date: form_date,
      text_area: form_textarea,
    };

    addPage(dairy_info);
  });
}

function addPage(dairy_info) {
  dairycont.push(dairy_info);
  addtoLocalstorage();
}

function addtoLocalstorage() {
  let str = JSON.stringify(dairycont);
  localStorage.setItem('info_d', str);
  displayDairy();
}

function getformLocal() {
  let str = localStorage.getItem('info_d');
  if (!str) {
    dairycont = [];
  } else {
    dairycont = JSON.parse(str);
  }
  displayDairy();
}

dairy_form();
getformLocal();
