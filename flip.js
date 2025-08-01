function brandclick(){
    const brandbox=document.getElementById("brand-id")
    if(brandbox.style.display==="none"||brandbox.style.display===""){
        brandbox.style.display="block"
    }else{
        brandbox.style.display="none"
    }
}

function togglefilter(){
    const filterbox=document.getElementById("customer-id")
    if(filterbox.style.display==='none' || filterbox.style.display===""){
        filterbox.style.display="block";
    }else{
        filterbox.style.display="none"
    }
}
function gstclick(){
    const gstbox=document.getElementById("gst-id")
    if(gstbox.style.display==='none' || gstbox.style.display===""){
        gstbox.style.display="block"
    }else{
        gstbox.style.display="none"
    }

}
function ramclick(){
    const rambox=document.getElementById("ram-id")
    if(rambox.style.display==='none' || rambox.style.display===""){
        rambox.style.display="block"
    }else{
        rambox.style.display="none"
    }

}
function internalclick(){
    const internalbox=document.getElementById("internal-id")
    if(internalbox.style.display==="none"|| internalbox.style.display===""){
        internalbox.style.display="block"
    }else{
        internalbox.style.display="none"
    }
}
function batteryclick(){
    const batterybox=document.getElementById("battery-id")
        if(batterybox.style.display==="none"|| batterybox.style.display===""){
             batterybox.style.display="block"
        }else{
            batterybox.style.display="none"
        }
           
    }
function screenclick(){
    const screenbox=document.getElementById("screen-id")
    if(screenbox.style.box==="none"||screenbox.style.display===""){
        screenbox.style.display="block"
    }else{
        screenbox.style.display="none"
    }
}
function primaryclick(){
    const primarybox=document.getElementById("primary-id")
    if(primarybox.style.display==="none"||primarybox.style.display===""){
        primarybox.style.display="block"
    }else{
        primarybox.style.display="none"
    }
}
function secondaryclick(){
    const secondarybox=document.getElementById("secondary-id")
    if(secondarybox.style.display==="none"||secondarybox.style.display===""){
        secondarybox.style.display="block"
    }else{
        secondarybox.style.display="none"
    }
}
function processorclick(){
    const processorbox=document.getElementById("processor-id")
    if(processorbox.style.display==="none"||processorbox.style.display===""){
        processorbox.style.display="block"
    }else{
        processorbox.style.display="none"
    }
}
function specialityclick(){
    const specialitybox=document.getElementById("speciality-id")
    if(specialitybox.style.display==="none"||specialitybox.style.display===""){
        specialitybox.style.display="block"
    }else{
        specialitybox.style.display="none"
    }
}
function resolutionclick(){
    const resolutionbox=document.getElementById("resolution-id")
    if(resolutionbox.style.display==="none"||resolutionbox.style.display===""){
        resolutionbox.style.display="block"
    }else{
        resolutionbox.style.display="none"
    }
}
function operatingclick(){
    const operatingbox=document.getElementById("operating-id")
        if(operatingbox.style.display==="none"||operatingbox.style.display===""){
            operatingbox.style.display="block"
        }else{
            operatingbox.style.display="none"
        }
    }

function networkclick(){
    const networkbox=document.getElementById("network-id")
    if(networkbox.style.display==="none"||networkbox.style.display===""){
        networkbox.style.display="block"
    }else{
        networkbox.style.display="none"
    }
}
function simclick(){
    const simbox=document.getElementById("sim-id")
    if(simbox.style.display==="none"||simbox.style.display===""){
        simbox.style.display="block"
    }else{
        simbox.style.display="none"
    }
}
function offersclick(){
    const offersbox=document.getElementById("offers-id")
    if(offersbox.style.display==="none"||offersbox.style.display===""){
        offersbox.style.display="block"
    }else{
        offersbox.style.display="none"
    }
}
function featuresclick(){
    const featuresbox=document.getElementById("features-id")
    if(featuresbox.style.display==="none"||featuresbox.style.display===""){
        featuresbox.style.display="block"
    }else{
        featuresbox.style.display="none"
    }
}
function typeclick(){
    const typebox=document.getElementById("type-id")
    if(typebox.style.display==="none"||typebox.style.display===""){
        typebox.style.display="block"
    }else{
        typebox.style.display="none"
    }
}
function cores(){
    const corebox=document.getElementById("no-of-cores-id")
    if(corebox.style.display==="none"||corebox.style.display===""){
        corebox.style.display="block"
    }else{
        corebox.style.display="none"
    }
}
function availabilityclick(){
    const availabilitybox=document.getElementById("availability-id")
    if(availabilitybox.style.display==="none"||availabilitybox.style.display===""){
        availabilitybox.style.display="block"
    }else{
        availabilitybox.style.display="none"
    }
}
function discountclick(){
    const discountbox=document.getElementById("discount-id")
    if(discountbox.style.display==="none"||discountbox.style.display===""){
        discountbox.style.display="block"
    }else{
        discountbox.style.display="none"
    }
}
function osversionclick(){
    const osversionbox=document.getElementById("os-version-id")
    if(osversionbox.style.display==="none"||osversionbox.style.display===""){
       osversionbox.style.display="block"
    }else{
       osversionbox.style.display="none"
    }
}
function clockclick(){
    const clockbox=document.getElementById("clock-id")
    if(clockbox.style.display==="none"||clockbox.style.display===""){
       clockbox.style.display="block"
    }else{
       clockbox.style.display="none"
    }
}

//BELOW HEADER
// HOME

const box=document.getElementById("homehover1")
box.addEventListener("mouseover",function(){
    box.style.color="#2874f0"
})
const boxout=document.getElementById("homehover1")
boxout.addEventListener("mouseout",function(){
    boxout.style.color="grey"
})
//MOBILE AND ACCESORIES
const box2=document.getElementById("homehover2")
box2.addEventListener("mouseover",function(){
    box2.style.color="#2874f0"
})
const boxout2=document.getElementById("homehover2")
boxout2.addEventListener("mouseout",function(){
    boxout2.style.color="grey"
})
//MOBILE
const box3=document.getElementById("homehover3")
box3.addEventListener("mouseover",function(){
    box3.style.color="#2874f0"
})
const boxout3=document.getElementById("homehover3")
boxout3.addEventListener("mouseout",function(){
    boxout3.style.color="grey"
})


//BOX---------
function boxmouse(){
    const boxin=document.getElementById("some")
    if(boxin.style.display==="block"||boxin.style.display===""){
        boxin.style.display="block"
    }
}




//ELECTRONICS---------

function electromouse(){
    const font=document.getElementById("sub")
    if(font.style.color===""){
        font.style.color="blue"
    }
    const over=document.getElementById("eachid")
    if(over.style.display==="none"||over.style.display===""){
        over.style.display="block"
    }
   
}
function electroout(){
    const font=document.getElementById("sub")
    if(font.style.color==="blue"){
        font.style.color=""
    }
    
     const over=document.getElementById("eachid")
    if(over.style.display==="block"||over.style.display===""){
        over.style.display="none"
    } 
}


//TV AND AAPLIANCES---------

function electromouse1(){
    const font1=document.getElementById("sub1")
    if(font1.style.color===""){
        font1.style.color="blue"
    }
     const over=document.getElementById("eachid")
    if(over.style.display==="none"||over.style.display===""){
        over.style.display="block"
    }
}
function electroout1(){
    const font1=document.getElementById("sub1")
    if(font1.style.color==="blue"){
        font1.style.color=""
    }
    const over=document.getElementById("eachid")
    if(over.style.display==="block"||over.style.display===""){
        over.style.display="none"
    }
}


//MEN---------

function electromouse2(){
    const font2=document.getElementById("sub2")
    if(font2.style.color===""){
        font2.style.color="blue"
    }
     const over=document.getElementById("eachid")
    if(over.style.display==="none"||over.style.display===""){
        over.style.display="block"
    }
}
function electroout2(){
    const font2=document.getElementById("sub2")
    if(font2.style.color==="blue"){
        font2.style.color=""
    }
    const over=document.getElementById("eachid")
    if(over.style.display==="block"||over.style.display===""){
        over.style.display="none"
    }
}


//WOMEN---
function electromouse3(){
    const font3=document.getElementById("sub3")
    if(font3.style.color===""){
        font3.style.color="blue"
    }
     const over=document.getElementById("eachid")
    if(over.style.display==="none"||over.style.display===""){
        over.style.display="block"
    }
}
function electroout3(){
    const font3=document.getElementById("sub3")
    if(font3.style.color==="blue"){
        font3.style.color=""
    }
    const over=document.getElementById("eachid")
    if(over.style.display==="block"||over.style.display===""){
        over.style.display="none"
    }
}


//BABY & KIDS---------
function electromouse4(){
    const font4=document.getElementById("sub4")
    if(font4.style.color===""){
        font4.style.color="blue"
    }
     const over=document.getElementById("eachid")
    if(over.style.display==="none"||over.style.display===""){
        over.style.display="block"
    }
}
function electroout4(){
    const font4=document.getElementById("sub4")
    if(font4.style.color==="blue"){
        font4.style.color=""
    }
    const over=document.getElementById("eachid")
    if(over.style.display==="block"||over.style.display===""){
        over.style.display="none"
    }
}
//HOME & FURNITURE---------
function electromouse5(){
    const font5=document.getElementById("sub5")
    if(font5.style.color===""){
        font5.style.color="blue"
    }
     const over=document.getElementById("eachid")
    if(over.style.display==="none"||over.style.display===""){
        over.style.display="block"
    }
}
function electroout5(){
    const font5=document.getElementById("sub5")
    if(font5.style.color==="blue"){
        font5.style.color=""
    }
    const over=document.getElementById("eachid")
    if(over.style.display==="block"||over.style.display===""){
        over.style.display="none"
    }
}
//SPORTS BOOKS & MORE----------
function electromouse6(){
    const font6=document.getElementById("sub6")
    if(font6.style.color===""){
        font6.style.color="blue"
    }
     const over=document.getElementById("eachid")
    if(over.style.display==="none"||over.style.display===""){
        over.style.display="block"
    }
}
function electroout6(){
    const font6=document.getElementById("sub6")
    if(font6.style.color==="blue"){
        font6.style.color=""
    }
    const over=document.getElementById("eachid")
    if(over.style.display==="block"||over.style.display===""){
        over.style.display="none"
    }
}
//FLIGHT----
function electromouse7(){
    const font7=document.getElementById("sub7")
    if(font7.style.color===""){
        font7.style.color="blue"
    }
   
}
function electroout7(){
    const font7=document.getElementById("sub7")
    if(font7.style.color==="blue"){
        font7.style.color=""
    }
   
}


//OFFER ZONE
function electromouse8(){
    const font8=document.getElementById("sub8")
    if(font8.style.color===""){
        font8.style.color="blue"
    }
   
}
function electroout8(){
    const font8=document.getElementById("sub8")
    if(font8.style.color==="blue"){
        font8.style.color=""
    }
   
}