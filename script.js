const service1 = document.querySelector('.service-1')
const service2 = document.querySelector('.service-2')
const service3 = document.querySelector('.service-3')
const service4 = document.querySelector('.service-4')
const idservice1 = document.querySelector('#service-1')
const idservice2 = document.querySelector('#service-2')
const idservice3 = document.querySelector('#service-3')
const idservice4 = document.querySelector('#service-4')
const section2 = document.querySelector('.section-2')
const divBlockImg1 = document.querySelector('.div-block-1')
const divBlockImg2 = document.querySelector('.div-block-2')
const divBlockImg3 = document.querySelector('.div-block-3')
const divBlockImg4 = document.querySelector('.div-block-4')
const serviceH1 = document.querySelector('.h1-section-a')
const serviceP1 = document.querySelector('.p-section-b')



service1.addEventListener("mouseover", ClassAddService1, true);
service1.addEventListener("mouseleave", ClassRemoveService1, true);

function ClassAddService1() {
    idservice1.classList.add('section-h1-style');
    idservice2.classList.add('section-rest-style');
    idservice3.classList.add('section-rest-style');
    idservice4.classList.add('section-rest-style');
    divBlockImg1.classList.remove('div-block-style');
}

function ClassRemoveService1() {
    idservice1.classList.remove('section-h1-style');
    idservice2.classList.remove('section-rest-style');
    idservice3.classList.remove('section-rest-style');
    idservice4.classList.remove('section-rest-style');
    divBlockImg1.classList.add('div-block-style');
}


service2.addEventListener("mouseover", ClassAddService2, true);
service2.addEventListener("mouseleave", ClassRemoveService2, true);


function ClassAddService2() {
    idservice2.classList.add('section-h1-style');
    idservice1.classList.add('section-rest-style');
    idservice3.classList.add('section-rest-style');
    idservice4.classList.add('section-rest-style');
    divBlockImg2.classList.remove('div-block-style');
}

function ClassRemoveService2() {
    idservice2.classList.remove('section-h1-style');
    idservice1.classList.remove('section-rest-style');
    idservice3.classList.remove('section-rest-style');
    idservice4.classList.remove('section-rest-style');
    divBlockImg2.classList.add('div-block-style');
}


service3.addEventListener("mouseover", ClassAddService3, true);
service3.addEventListener("mouseleave", ClassRemoveService3, true);


function ClassAddService3() {
    idservice3.classList.add('section-h1-style');
    idservice1.classList.add('section-rest-style');
    idservice2.classList.add('section-rest-style');
    idservice4.classList.add('section-rest-style');
    divBlockImg3.classList.remove('div-block-style');
}

function ClassRemoveService3() {
    idservice3.classList.remove('section-h1-style');
    idservice1.classList.remove('section-rest-style');
    idservice2.classList.remove('section-rest-style');
    idservice4.classList.remove('section-rest-style');
    divBlockImg3.classList.add('div-block-style');
}


service4.addEventListener("mouseover", ClassAddService4, true);
service4.addEventListener("mouseleave", ClassRemoveService4, true);


function ClassAddService4() {
    idservice4.classList.add('section-h1-style');
    idservice1.classList.add('section-rest-style');
    idservice2.classList.add('section-rest-style');
    idservice3.classList.add('section-rest-style');
    divBlockImg4.classList.remove('div-block-style');
}

function ClassRemoveService4() {
    idservice4.classList.remove('section-h1-style');
    idservice1.classList.remove('section-rest-style');
    idservice2.classList.remove('section-rest-style');
    idservice3.classList.remove('section-rest-style');
    divBlockImg4.classList.add('div-block-style');
}



// Work //

const work = document.querySelector('.work')
const workOne = document.querySelector('#work-one')
const workTwo = document.querySelector('#work-two')
const workThree = document.querySelector('#work-three')
const workFour = document.querySelector('#work-four')
const workFive = document.querySelector('#work-five')
const damselInDior = document.querySelector('.damsel-in-dior')
const sosFood = document.querySelector('.sos-food')
const caseFurniture = document.querySelector('.case-furniture')
const dryFarmWines = document.querySelector('.dry-farm-wines')
const reserveBar = document.querySelector('.reserve-bar')
const workOneTextH1 = document.querySelector('.work-one-text-h1')
const workTwoTextH1 = document.querySelector('.work-two-text-h1')
const workThreeTextH1 = document.querySelector('.work-three-text-h1')
const workFourTextH1 = document.querySelector('.work-four-text-h1')
const workFiveTextH1 = document.querySelector('.work-five-text-h1')
const gradiantOne = document.querySelector('.gradient-one')
const gradiantTwo = document.querySelector('.gradient-two')
const gradiantThree = document.querySelector('.gradient-three')
const gradiantFour = document.querySelector('.gradient-four')
const gradiantFive = document.querySelector('.gradient-five')

workOneTextH1.addEventListener("mouseover", workMouseOverEffect, true)
workOneTextH1.addEventListener("mouseout", workMouseOutEffect, true)

function workMouseOverEffect() {
    damselInDior.classList.remove('hide-scroll-text');
    gradiantOne.classList.remove('hide-scroll-text');
    workOne.classList.add('work-one-style');
    workOneTextH1.classList.add('work-one-style');
    work.classList.add('work-1-background');
}

function workMouseOutEffect() {
    damselInDior.classList.add('hide-scroll-text');
    gradiantOne.classList.add('hide-scroll-text');
    workOne.classList.remove('work-one-style');
    workOneTextH1.classList.remove('work-one-style');
    work.classList.remove('work-1-background');
}


workTwoTextH1.addEventListener("mouseover", workMouse2OverEffect, true)
workTwoTextH1.addEventListener("mouseout", workMouse2OutEffect, true)


function workMouse2OverEffect() {
    sosFood.classList.remove('hide-scroll-text');
    gradiantTwo.classList.remove('hide-scroll-text');
    workTwo.classList.add('work-two-style');
    workTwoTextH1.classList.add('work-one-style');
    work.classList.add('work-2-background');
}
function workMouse2OutEffect() {
    sosFood.classList.add('hide-scroll-text');
    gradiantTwo.classList.add('hide-scroll-text');
    workTwo.classList.remove('work-two-style');
    workTwoTextH1.classList.remove('work-one-style');
    work.classList.remove('work-2-background');
}


workThreeTextH1.addEventListener("mouseover", workMouse3OverEffect, true)
workThreeTextH1.addEventListener("mouseout", workMouse3OutEffect, true)

function workMouse3OverEffect() {
    caseFurniture.classList.remove('hide-scroll-text');
    gradiantThree.classList.remove('hide-scroll-text');
    workThree.classList.add('work-three-style');
    workThreeTextH1.classList.add('work-one-style');
    work.classList.add('work-3-background');
}
function workMouse3OutEffect() {
    caseFurniture.classList.add('hide-scroll-text');
    gradiantThree.classList.add('hide-scroll-text');
    workThree.classList.remove('work-three-style');
    workThreeTextH1.classList.remove('work-one-style');
    work.classList.remove('work-3-background');
}


workFourTextH1.addEventListener("mouseover", workMouse4OverEffect, true)
workFourTextH1.addEventListener("mouseout", workMouse4OutEffect, true)

function workMouse4OverEffect() {
    dryFarmWines.classList.remove('hide-scroll-text');
    gradiantFour.classList.remove('hide-scroll-text');
    workFour.classList.add('work-four-style');
    workFourTextH1.classList.add('work-one-style');
    work.classList.add('work-4-background');
}
function workMouse4OutEffect() {
    dryFarmWines.classList.add('hide-scroll-text');
    gradiantFour.classList.add('hide-scroll-text');
    workFour.classList.remove('work-four-style');
    workFourTextH1.classList.remove('work-one-style');
    work.classList.remove('work-4-background');
}


workFiveTextH1.addEventListener("mouseover", workMouse5OverEffect, true)
workFiveTextH1.addEventListener("mouseout", workMouse5OutEffect, true)

function workMouse5OverEffect() {
    reserveBar.classList.remove('hide-scroll-text');
    gradiantFive.classList.remove('hide-scroll-text');
    workFive.classList.add('work-five-style');
    workFiveTextH1.classList.add('work-one-style');
    work.classList.add('work-5-background');
}
function workMouse5OutEffect() {
    reserveBar.classList.add('hide-scroll-text');
    gradiantFive.classList.add('hide-scroll-text');
    workFive.classList.remove('work-five-style');
    workFiveTextH1.classList.remove('work-one-style');
    work.classList.remove('work-5-background');
}



// Custom Cursor

let clientX = -100;
let clientY = -100;
const innerCursor = document.querySelector(".cursor--small");

const initCursor = () => {
  // add listener to track the current mouse position
  document.addEventListener("mousemove", e => {
    clientX = e.clientX;
    clientY = e.clientY;
  });
  const render = () => {
    innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
    
    
    requestAnimationFrame(render);
  };
  requestAnimationFrame(render);
};

initCursor();



let lastX = 0;
let lastY = 0;
let isStuck = false;
let showCursor = false;
let group, stuckX, stuckY, fillOuterCursor;

const initCanvas = () => {
    const canvas = document.querySelector(".cursor--canvas");
    const shapeBounds = {
      width: 75,
      height: 75
    };
    paper.setup(canvas);
    const strokeColor = "#d90a2c";
    const strokeWidth = 1;
    const segments = 8;
    const radius = 15;

    const polygon = new paper.Path.RegularPolygon(
        new paper.Point(0, 0),
        segments,
        radius
      );

      polygon.strokeColor = strokeColor;
  polygon.strokeWidth = strokeWidth;
  polygon.smooth();
  group = new paper.Group([polygon]);
  group.applyMatrix = false;

  const noiseObjects = polygon.segments.map(() => new SimplexNoise());
  let bigCoordinates = [];

  const lerp = (a, b, n) => {
    return (1 - n) * a + n * b;
  };

  const map = (value, in_min, in_max, out_min, out_max) => {
    return (
      ((value - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    );
  };

  paper.view.onFrame = event => {
    // using linear interpolation, the circle will move 0.2 (20%)
    // of the distance between its current position and the mouse
    // coordinates per Frame
    lastX = lerp(lastX, clientX, 0.1);
    lastY = lerp(lastY, clientY, 0.05);
    group.position = new paper.Point(lastX, lastY);
  }


}
initCanvas();


const scroller = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    multiplier: 0.5,
  });



  
