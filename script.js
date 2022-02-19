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
    section2.classList.add('service-1-section-2-hover');
    idservice1.classList.add('section-h1-style');
    idservice2.classList.add('section-rest-style');
    idservice3.classList.add('section-rest-style');
    idservice4.classList.add('section-rest-style');
    divBlockImg1.classList.remove('div-block-style');
    serviceH1.classList.add('h1-section-style-2');
    serviceP1.classList.add('h1-section-style-2');
}

function ClassRemoveService1() {
    section2.classList.remove('service-1-section-2-hover');
    idservice1.classList.remove('section-h1-style');
    idservice2.classList.remove('section-rest-style');
    idservice3.classList.remove('section-rest-style');
    idservice4.classList.remove('section-rest-style');
    divBlockImg1.classList.add('div-block-style');
    serviceH1.classList.remove('h1-section-style-2');
    serviceP1.classList.remove('h1-section-style-2');
}


service2.addEventListener("mouseover", ClassAddService2, true);
service2.addEventListener("mouseleave", ClassRemoveService2, true);


function ClassAddService2() {
    section2.classList.add('service-2-section-2-hover');
    idservice2.classList.add('section-h1-style');
    idservice1.classList.add('section-rest-style');
    idservice3.classList.add('section-rest-style');
    idservice4.classList.add('section-rest-style');
    divBlockImg2.classList.remove('div-block-style');
    serviceH1.classList.add('h1-section-style-2');
    serviceP1.classList.add('h1-section-style-2');
}

function ClassRemoveService2() {
    section2.classList.remove('service-2-section-2-hover');
    idservice2.classList.remove('section-h1-style');
    idservice1.classList.remove('section-rest-style');
    idservice3.classList.remove('section-rest-style');
    idservice4.classList.remove('section-rest-style');
    divBlockImg2.classList.add('div-block-style');
    serviceH1.classList.remove('h1-section-style-2');
    serviceP1.classList.remove('h1-section-style-2');
}


service3.addEventListener("mouseover", ClassAddService3, true);
service3.addEventListener("mouseleave", ClassRemoveService3, true);


function ClassAddService3() {
    section2.classList.add('service-3-section-2-hover');
    idservice3.classList.add('section-h1-style');
    idservice1.classList.add('section-rest-style');
    idservice2.classList.add('section-rest-style');
    idservice4.classList.add('section-rest-style');
    divBlockImg3.classList.remove('div-block-style');
    serviceH1.classList.add('h1-section-style');
    serviceP1.classList.add('h1-section-style');
}

function ClassRemoveService3() {
    section2.classList.remove('service-3-section-2-hover');
    idservice3.classList.remove('section-h1-style');
    idservice1.classList.remove('section-rest-style');
    idservice2.classList.remove('section-rest-style');
    idservice4.classList.remove('section-rest-style');
    divBlockImg3.classList.add('div-block-style');
    serviceH1.classList.remove('h1-section-style');
    serviceP1.classList.remove('h1-section-style');
}


service4.addEventListener("mouseover", ClassAddService4, true);
service4.addEventListener("mouseleave", ClassRemoveService4, true);


function ClassAddService4() {
    section2.classList.add('service-4-section-2-hover');
    idservice4.classList.add('section-h1-style');
    idservice1.classList.add('section-rest-style');
    idservice2.classList.add('section-rest-style');
    idservice3.classList.add('section-rest-style');
    divBlockImg4.classList.remove('div-block-style');
    serviceH1.classList.add('h1-section-style');
    serviceP1.classList.add('h1-section-style');
}

function ClassRemoveService4() {
    section2.classList.remove('service-4-section-2-hover');
    idservice4.classList.remove('section-h1-style');
    idservice1.classList.remove('section-rest-style');
    idservice2.classList.remove('section-rest-style');
    idservice3.classList.remove('section-rest-style');
    divBlockImg4.classList.add('div-block-style');
    serviceH1.classList.remove('h1-section-style');
    serviceP1.classList.remove('h1-section-style');
}



// Work //

const work = document.querySelector('.work')
const workOne = document.querySelector('#work-one')
const workTwo = document.querySelector('#work-two')
const workThree = document.querySelector('#work-three')
const workFour = document.querySelector('#work-four')
const workFive = document.querySelector('#work-five')
const damselInDior = document.querySelector('.damsel-in-dior')
const damselInDior2 = document.querySelector('.damsel-in-dior2')
const sosFood = document.querySelector('.sos-food')
const sosFood2 = document.querySelector('.sos-food2')
const caseFurniture = document.querySelector('.case-furniture')
const caseFurniture2 = document.querySelector('.case-furniture2')
const dryFarmWines = document.querySelector('.dry-farm-wines')
const dryFarmWines2 = document.querySelector('.dry-farm-wines2')
const reserveBar = document.querySelector('.reserve-bar')
const reserveBar2 = document.querySelector('.reserve-bar2')
const workOneTextH1 = document.querySelector('.work-one-text-h1')
const workThreeTextH1 = document.querySelector('.work-three-text-h1')
const workFourTextH1 = document.querySelector('.work-four-text-h1')
const workFiveTextH1 = document.querySelector('.work-five-text-h1')
const workOneTextP = document.querySelector('.work-one-text-p')
const workOneTextPDelivery = document.querySelector('.work-one-text-deliverables-p')
const workOneTextSpanDelivery = document.querySelector('.work-one-text-deliverables-span')
const workOneTextPDelivery2 = document.querySelector('.work-one-text-deliverables-p2')
const workOneTextSpanDelivery2 = document.querySelector('.work-one-text-deliverables-span2')
const workThreeTextPDelivery = document.querySelector('.work-three-text-deliverables-p')
const workThreeTextSpanDelivery = document.querySelector('.work-three-text-deliverables-span')
const workThreeTextPDelivery2 = document.querySelector('.work-three-text-deliverables-p2')
const workThreeTextSpanDelivery2 = document.querySelector('.work-three-text-deliverables-span2')
const workFourTextPDelivery = document.querySelector('.work-four-text-deliverables-p')
const workFourTextSpanDelivery = document.querySelector('.work-four-text-deliverables-span')
const workFourTextPDelivery2 = document.querySelector('.work-four-text-deliverables-p2')
const workFourTextSpanDelivery2 = document.querySelector('.work-four-text-deliverables-span2')
const workFiveTextPDelivery = document.querySelector('.work-five-text-deliverables-p')
const workFiveTextSpanDelivery = document.querySelector('.work-five-text-deliverables-span')
const workFiveTextPDelivery2 = document.querySelector('.work-five-text-deliverables-p2')
const workFiveTextSpanDelivery2 = document.querySelector('.work-five-text-deliverables-span2')

workOne.addEventListener("mouseover", workMouseOverEffect, true)
workOne.addEventListener("mouseout", workMouseOutEffect, true)

function workMouseOverEffect() {
    damselInDior.classList.remove('hide-scroll-text');
    damselInDior2.classList.remove('hide-scroll-text');
    workOne.classList.add('work-one-style');
    workTwo.classList.add('other-work-style');
    workThree.classList.add('other-work-style');
    workFour.classList.add('other-work-style');
    workFive.classList.add('other-work-style');
    workOneTextH1.classList.add('work-one-style-text');
    workOneTextP.classList.add('work-one-style-text');
    workOneTextPDelivery.classList.add('work-one-style-text');
    workOneTextSpanDelivery.classList.add('work-one-style-text');
    workOneTextPDelivery2.classList.add('work-one-style-text');
    workOneTextSpanDelivery2.classList.add('work-one-style-text');
}

function workMouseOutEffect() {
    damselInDior.classList.add('hide-scroll-text');
    damselInDior2.classList.add('hide-scroll-text');
    workOne.classList.remove('work-one-style');
    workTwo.classList.remove('other-work-style');
    workThree.classList.remove('other-work-style');
    workFour.classList.remove('other-work-style');
    workFive.classList.remove('other-work-style');
    workOneTextH1.classList.remove('work-one-style-text');
    workOneTextP.classList.remove('work-one-style-text');
    workOneTextPDelivery.classList.remove('work-one-style-text');
    workOneTextSpanDelivery.classList.remove('work-one-style-text');
    workOneTextPDelivery2.classList.remove('work-one-style-text');
    workOneTextSpanDelivery2.classList.remove('work-one-style-text');
}


workTwo.addEventListener("mouseover", workMouse2OverEffect, true)
workTwo.addEventListener("mouseout", workMouse2OutEffect, true)


function workMouse2OverEffect() {
    sosFood.classList.remove('hide-scroll-text');
    sosFood2.classList.remove('hide-scroll-text');
    workTwo.classList.add('work-two-style');
    workOne.classList.add('other-work-style');
    workThree.classList.add('other-work-style');
    workFour.classList.add('other-work-style');
    workFive.classList.add('other-work-style');
    
}
function workMouse2OutEffect() {
    sosFood.classList.add('hide-scroll-text');
    sosFood2.classList.add('hide-scroll-text');
    workTwo.classList.remove('work-two-style');
    workOne.classList.remove('other-work-style');
    workThree.classList.remove('other-work-style');
    workFour.classList.remove('other-work-style');
    workFive.classList.remove('other-work-style');
}


workThree.addEventListener("mouseover", workMouse3OverEffect, true)
workThree.addEventListener("mouseout", workMouse3OutEffect, true)

function workMouse3OverEffect() {
    caseFurniture.classList.remove('hide-scroll-text');
    caseFurniture2.classList.remove('hide-scroll-text');
    workThree.classList.add('work-three-style');
    workOne.classList.add('other-work-style');
    workTwo.classList.add('other-work-style');
    workFour.classList.add('other-work-style');
    workFive.classList.add('other-work-style');
    workThreeTextH1.classList.add('work-one-style-text');
    workThreeTextPDelivery.classList.add('work-one-style-text');
    workThreeTextSpanDelivery.classList.add('work-one-style-text');
    workThreeTextPDelivery2.classList.add('work-one-style-text');
    workThreeTextSpanDelivery2.classList.add('work-one-style-text');
}
function workMouse3OutEffect() {
    caseFurniture.classList.add('hide-scroll-text');
    caseFurniture2.classList.add('hide-scroll-text');
    workThree.classList.remove('work-three-style');
    workOne.classList.remove('other-work-style');
    workTwo.classList.remove('other-work-style');
    workFour.classList.remove('other-work-style');
    workFive.classList.remove('other-work-style');
    workThreeTextH1.classList.remove('work-one-style-text');
    workThreeTextPDelivery.classList.remove('work-one-style-text');
    workThreeTextSpanDelivery.classList.remove('work-one-style-text');
    workThreeTextPDelivery2.classList.remove('work-one-style-text');
    workThreeTextSpanDelivery2.classList.remove('work-one-style-text');
}


workFour.addEventListener("mouseover", workMouse4OverEffect, true)
workFour.addEventListener("mouseout", workMouse4OutEffect, true)

function workMouse4OverEffect() {
    dryFarmWines.classList.remove('hide-scroll-text');
    dryFarmWines2.classList.remove('hide-scroll-text');
    workFour.classList.add('work-four-style');
    workOne.classList.add('other-work-style');
    workTwo.classList.add('other-work-style');
    workThree.classList.add('other-work-style');
    workFive.classList.add('other-work-style');
    workFourTextH1.classList.add('work-one-style-text');
    workFourTextPDelivery.classList.add('work-one-style-text');
    workFourTextSpanDelivery.classList.add('work-one-style-text');
    workFourTextPDelivery2.classList.add('work-one-style-text');
    workFourTextSpanDelivery2.classList.add('work-one-style-text');
}
function workMouse4OutEffect() {
    dryFarmWines.classList.add('hide-scroll-text');
    dryFarmWines2.classList.add('hide-scroll-text');
    workFour.classList.remove('work-four-style');
    workOne.classList.remove('other-work-style');
    workTwo.classList.remove('other-work-style');
    workThree.classList.remove('other-work-style');
    workFive.classList.remove('other-work-style');
    workFourTextH1.classList.remove('work-one-style-text');
    workFourTextPDelivery.classList.remove('work-one-style-text');
    workFourTextSpanDelivery.classList.remove('work-one-style-text');
    workFourTextPDelivery2.classList.remove('work-one-style-text');
    workFourTextSpanDelivery2.classList.remove('work-one-style-text');
}


workFive.addEventListener("mouseover", workMouse5OverEffect, true)
workFive.addEventListener("mouseout", workMouse5OutEffect, true)

function workMouse5OverEffect() {
    reserveBar.classList.remove('hide-scroll-text');
    reserveBar2.classList.remove('hide-scroll-text');
    workFive.classList.add('work-five-style');
    workOne.classList.add('other-work-style');
    workTwo.classList.add('other-work-style');
    workThree.classList.add('other-work-style');
    workFour.classList.add('other-work-style');
    workFiveTextH1.classList.add('work-one-style-text');
    workFiveTextPDelivery.classList.add('work-one-style-text');
    workFiveTextSpanDelivery.classList.add('work-one-style-text');
    workFiveTextPDelivery2.classList.add('work-one-style-text');
    workFiveTextSpanDelivery2.classList.add('work-one-style-text');
}
function workMouse5OutEffect() {
    reserveBar.classList.add('hide-scroll-text');
    reserveBar2.classList.add('hide-scroll-text');
    workFive.classList.remove('work-five-style');
    workOne.classList.remove('other-work-style');
    workTwo.classList.remove('other-work-style');
    workThree.classList.remove('other-work-style');
    workFour.classList.remove('other-work-style');
    workFiveTextH1.classList.remove('work-one-style-text');
    workFiveTextPDelivery.classList.remove('work-one-style-text');
    workFiveTextSpanDelivery.classList.remove('work-one-style-text');
    workFiveTextPDelivery2.classList.remove('work-one-style-text');
    workFiveTextSpanDelivery2.classList.remove('work-one-style-text');
}