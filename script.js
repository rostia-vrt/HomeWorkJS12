function editFunc() {
    let edt = document.querySelector('.editBox');
    edt.style.display = 'block';
    let stl = document.querySelector('.styleBox');
    stl.style.display = 'none';
    let ptxt = document.querySelector('.box1');
    let txtarea = document.querySelector('.text');
    txtarea.value = ptxt.innerHTML;
}

function colors() {
    let somecolor = document.querySelectorAll('.pText');
    for (i = 0; i < somecolor.length; i++) {
        somecolor[i].style.fontSize = event.target.value;
    }
}

let sel = document.querySelector('.select1');
let somefonts = document.querySelectorAll('.pText');
sel.onchange = function () {
    for (i = 0; i < sel.options.length; i++) {
        if (sel.options[i].selected) {
            for (p = 0; p < somefonts.length; p++) {
                somefonts[p].style.fontFamily = sel.options[i].value;
            }
        }
    }
}

let txColor = document.querySelectorAll('.smbox');
let elText = document.querySelectorAll('.pText');
for (i = 0; i < txColor.length; i++) {
    txColor[i].addEventListener('click', myfunc => {
        let styles = window.getComputedStyle(myfunc.target);
        for (k = 0; k < elText.length; k++) {
            elText[k].style.color = styles.getPropertyValue('color');
        }

    })
}

let bold = document.querySelector('.boldText');
let italic = document.querySelector('.cursiveText');
let bText = document.querySelectorAll('.pText');
bold.onclick = function () {
    for (i = 0; i < bText.length; i++) {
        bText[i].style.fontWeight = 'bold';
    }
}
italic.onclick = function () {
    for (i = 0; i < bText.length; i++) {
        bText[i].style.fontStyle = 'italic';
    }
}



function addClick() {
    let add = document.querySelector('.box3');
    add.style.display = 'block';
    let box1 = document.querySelector('.box1');
    box1.style.display = 'none';
    let box2 = document.querySelector('.box2');
    box2.style.display = 'none';
    let inputs = document.querySelector('.inputs');
    inputs.style.display = 'none';

}

function saveClick() {
    let txt = document.querySelector('.box1');
    let text = document.querySelector('.text');
    txt.innerHTML = text.value;
}

function tableClick() {
    let bx = document.querySelector('.box3');
    bx.style.height = '450px';
    let tb = document.querySelector('.tableBox');
    tb.style.display = 'block';
    let clk = document.querySelector('.listBox');
    clk.style.display = 'none';
}

function listClick() {
    let cl = document.querySelector('.listBox');
    cl.style.display = 'block';
    let tbl = document.querySelector('.tableBox');
    tbl.style.display = 'none';
    let b3 = document.querySelector('.box3');
    b3.style.height = '300px';
}

function styleFunc() {
    let ed = document.querySelector('.editBox');
    ed.style.display = 'none';
    let st = document.querySelector('.styleBox');
    st.style.display = 'block';
}

function colorofText() {
    let color = document.querySelector('.boxColors');
    color.style.display = 'flex';
}

let f2 = document.forms['form2'];
f2.createList.onclick = function () {
    let b3 = document.querySelector('.box3');
    b3.style.display = 'none';
    let box2 = document.querySelector('.box2');
    box2.style.display = 'block';
    let box1 = document.querySelector('.box1');
    box1.style.display = 'block';
    let edt = document.querySelector('.editBox');
    edt.style.display = 'block';
    let inputs = document.querySelector('.inputs');
    inputs.style.display = 'flex';


    let select4 = f2.selectMarks.value;
    let countLi = f2.countLi.value;
    let text = document.querySelector('.text')
    let ul = document.createElement('ul');
    text.appendChild(ul);
    for (let i = 0; i < countLi; i++) {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.style.type = `${select4}`;
        li.textContent = `Li`;
    }
}

let f1 = document.forms['form1'];
f1.button.onclick = function () {
    let b3 = document.querySelector('.box3');
    b3.style.display = 'none';
    let box2 = document.querySelector('.box2');
    box2.style.display = 'block';
    let box1 = document.querySelector('.box1');
    box1.style.display = 'block';
    let edt = document.querySelector('.editBox');
    edt.style.display = 'block';
    let inputs = document.querySelector('.inputs');
    inputs.style.display = 'flex';


    let CountTR = f1.countTR.value;
    let CountTD = f1.countTD.value;
    let WidthTD = f1.widthTD.value;
    let HeightTD = f1.heightTD.value;
    let WidthBorder = f1.borderWdt.value;
    let select2 = f1.selectType.value;
    let select3 = f1.selectColor.value;

    let newTable = document.createElement('table');
    let text = document.querySelector('.text');
    text.appendChild(newTable);
    for (let i = 0; i < CountTR; i++) {
        let newTR = document.createElement('tr');
        newTable.appendChild(newTR);
        for (let k = 0; k < CountTD; k++) {
            let newTD = document.createElement('td');
            newTR.appendChild(newTD);
            newTD.style.width = `${WidthTD}px`;
            newTD.style.height = `${HeightTD}px`;
            newTD.style.border = `${WidthBorder}px ${select2} ${select3}`;
            newTD.textContent = `TD`;
        }
    }
}