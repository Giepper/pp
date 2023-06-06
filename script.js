const portfolioImgContainer = document.querySelector('.portfolio-img-container');
const imgArr = ['img/mlyn.jpg','img/choinka.jpg','img/kaluza.jpg','img/kamienica.jpg','img/ksiezyc.jpg'];
let coutArray = [];

for(let x=0;x<imgArr.length;x++){
    let newOb = document.createElement('img');
    newOb.src = imgArr[x];
    newOb.classList.add('portfolio-img');
    coutArray.push(newOb)
    portfolioImgContainer.appendChild(coutArray[x]);
}