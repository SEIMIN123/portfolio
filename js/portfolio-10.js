
const content ="이로써 저의 포트폴리오는 끝이 났습니다.``아직 부족한 실력입니다만 그래도 포기하지 않고 열심히 달려가보겠습니다.`쉬운 직업은 없다고 생각합니다. ``그만큼 웹디자인이라는 직업이 저에겐 매력적으로 다가왔기 때문에 `한단계, 한단계 밟아가며 틀을 깨는 사람이 되겠습니다.``저의 포트폴리오를 함께 해주셔서 진심으로 감사합니다.`"


const text = document.getElementById('text');
text.style.textAlign = "center";
let i = 0;

function typing() {

  if (i < content.length) {
    let txt = content.charAt(i);
    text.innerHTML += txt === "`" ? "<br/>" : txt;
    i++;
  }
}
setInterval(typing, 99);

const re = document.getElementById('return');
re.addEventListener('click', function () {
  let page = '../index.html';
  location.href = page;
});

const mover = re.children;

let move = [{
    transform: 'translateY(-5px)'
  },
  {
    transform: 'translateY(5px)'
  },
  {
    transform: 'translateY(-5px)'
  }

];

let moving = {
  duration: 4000,
  iterations: Infinity
};

re.animate(move, moving);


// const content =
//   "이로써 저의 포트폴리오는 끝이 났습니다.``아직 부족한 실력입니다만 그래도 포기하지 않고 열심히 달려가보겠습니다.`쉬운 직업은 없다고 생각합니다. ``그만큼 웹디자인이라는 직업이 저에겐 매력적으로 다가왔기 때문에 한단계, 한단계 밟아가며 틀을 깨는 사람이 되겠습니다.``저의 포트폴리오를 함께 해주셔서 감사합니다.`"

// const text = document.getElementById('text');
// text.style.textAlign = "center";
// let i = 0;

// function typing() {

//   if (i < content.length) {
//     let txt = content.charAt(i);
//     text.innerHTML += txt === "`" ? "<br/>" : txt;
//     i++;
//   }
// }
// setInterval(typing, 80);


// "이로써 저의 포트폴리오는 끝이 났습니다.``짧다면 짧고 길다면 긴 반년, 6개월동안 ``좋은 강사님을 만나서 많은 것을 배웠습니다.``다 같이 고생한 학생분들도, ``특히 더 고생하셨던 공욱재 강사님도 ``모두 다 잘되고 더 잘되서 ``어디선가 다시 보는 날이 오면 좋겠습니다.``모두 고생하셨고 좋은날만 있기를 진심으로 바랍니다.``그리고 저의 포트폴리오를 함께 해주셔서 감사합니다.`"