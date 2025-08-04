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


const data = [
    {
        title:"Samsung Galaxy F06 5G (Lit Violet,128 GB)",
        memory:"4 GB RAM | 128 GB ROM| Expandable Upto 1500 GB",
        display: "17.02 cm (6.7 inch) Full HD+ Display",
        frontcamera:"50MP + 2 MP | 8MP Front Camera",
        battery:"5000 mAh Battery",
        processor:"Dimensity 6300 Processor",
        warrenty:"1 Year Manufacturer Warranty for Device and 6 Months for In-Box Accessories",
        image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/2/u/t/-original-imahbk7pnjgxudgz.jpeg?q=70",
        flipimage:"img/f-assurerd.png",
        price:"₹8,699",
        strike:"₹13.999",
        discount:"37% off",
        tagline:"Top discount of the sale",
        exchange:"₹7,150",
        num:"4.1",
        stars:"16,864",
        review:"1,171", 
    },
    {
      title: "Samsung Galaxy S24 FE 5G (Mint,128 GB)",
      memory: "8 GB RAM | 128 GB ROM",
      display: "17.02 cm (6.7 inch) Full HD+ Display",
      frontcamera: "50MP + 12MP | 10MP Front Camera",
      battery: "4700 mAh Battery",
      processor: "Exynos 2400e Processor",
      warrenty: "1 year Manufacturer Warranty for Device and 6 Months for In-Box Accessories",
      image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/s/z/-original-imahcfwmdvbcgdzs.jpeg?q=70",
      flipimage:"img/f-assurerd.png",
      price:"₹35,999",
      strike:"₹59,999",
      discount:"40% off",
      exchange:"₹31,050",
      num:"4.5",
      stars:"12,708",
      review:"1,037",
      bankoffer:"BankOffer",

    },
    {
        title:"MOTOROLA Edge 60 Fusion 5G (PANTONE Mykonos Blue, 256 GB)",
        memory:"8 GB RAM | 256 GB ROM |Expandable upto 1 TB ",
        display:"50MP + 13MP | 32 MP Front Camera",
        frontcamera:"50MP + 13MP | 32MP Front Camera",
        battery:"5500 mAh Battery",
        processor:"Dimensity 7400 Processor",
        charger:"68W Charger",
        warrenty:"1 year Warrenty on Headset and 6 Months Warrenty on Accessories",
        image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/6/b/c/-original-imahcjrax7j8fyuf.jpeg?q=70",
        flipimage:"img/f-assurerd.png",
        price:"₹22,999",
        strike:"₹25,999",
        discount:"11% off",
        exchange:"₹19,600",
        num:"4.5",
        stars:"41,179",
        review:"2,359",
        bankoffer:"BankOffer",
    },
    {
        title:"Motorola G85 5G (Cobalt Blue, 128 GB)",
        memory:"8 GB RAM | 128 GB ROM",
        display:"16.94 cm (6.67 inch) Full HD + Display",
        frontcamera:"50MP + * MP |32 MP Front Camera",
        battery:"5000 mAh battery",
        processor:"6s Gen 3 Processor",
        warrenty:"1 Year on Handset and 6 Month on Accessories",
        image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/i/p/l/-original-imah2fjcxjdjykpc.jpeg?q=70",
        flipimage:"img/f-assurerd.png",
        price:"₹15,999",
        strike:"₹20,999",
        discount:"23% off",
        exchange:"₹13,550",
        num:"4.4",
        stars:"2,16,993",
        review:"11,150",
        bankoffer:"BankOffer",
    },
    {
        title:"MOTOROLA Edge 60 Fusion 5G (PANTONE Slipstream, 256 GB)",
        memory:"8 GB RAM | 256 GB ROM | Expandable upto 1 TB",
        display:"16.94 cm (6.67 inch) Display",
        frontcamera:"50MP + 13MP | 32 MP Front Camera",
        battery:"5500 mAh Battery",
        processor:"Dimensity 7400 Processor",
        charger:"68W Charger",
        warrenty:"1 Year Warrenty on Handset and 6 Months Warrenty on Accessories",
        image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/i/c/-original-imahbfmdzukyctut.jpeg?q=70",
        flipimage:"img/f-assurerd.png",
        price:"₹22,999",
        strike:"₹25,999",
        discount:"11% off",
        exchange:"₹19,600",
        num:"4.5",
        star:"41,179",
        review:"2,359",
        bankoffer:"BankOffer",
    },
    {
        title:"Tecno Pova 7 5G (Oasis Green,128 GB)",
        memory:"8 GB RAM | 128 GB ROM",
        display:"17.22 cm (6.78 inch) Full HD+ Display",
        frontcamera:"50MP + AI | 13MP Front Camera",
        battery:"6000 mAh Battery",
        processor:"Dimensity 7300 Ultimate Processor",
        warrenty:"1 year Manuufacturer Warrenty for Phone",
        image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/v/v/-original-imahe8nfmrhvqx6a.jpeg?q=70",
        flipimage:"img/f-assurerd.png",
        price:"₹14,999",
        strike:"₹18,999",
        discount:"21% off",
        exchange:"₹12,650",
        num:"4.5",
        star:"1,298",
        review:"121",
        bankoffer:"BankOffer"

    },
    {
        title:"Motorola G85 5G (Olive Green, 128 GB)",
        memory:"8 GB RAM | 128 GB ROM",
        display:"16.94 cm (6.67 inch) Full HD+ Display",
        frontcamera:"50MP + 8MP | 32MP Front Camera",
        battery:"5000mAh Battery",
        processor:"6s Gen 3 Processor",
        warrenty:"1 Year on Handset and 6 Months on Accessories",
        image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/l/u/-original-imah2fjd7wfd9ksh.jpeg?q=70",
        flipimage:"img/f-assurerd.png",
        price:"₹15,999",
        strike:"₹20,999",
        discount:"23% off",
        exchange:"₹13,550",
        num:"4.4",
        star:"2,16,993",
        review:"11,150",
          bankoffer:"BankOffer",
    },
    {
        title:"Motorola G85 5G (Viva Magenta, 128 GB)",
        memory:"16.94 cm (6.67 inch) Full HD+ Display ",
        frontcamera:"50MP + 5MP | 32MP Front Camera",
        battery:"5000 mAh Battery",
        processor:"6s GEN 3 Processor",
        warrenty:"1 year on Handset and 6 Months on Accessories",
        image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/y/g/-original-imah4qtgjtzprg3g.jpeg?q=70",
        flipimage:"img/f-assurerd.png",
        price:"₹15,999",
        strike:"₹20,999",
        discount:"23% off",
        exchange:"₹13,550",
        num:"4.4",
        star:"2,16,993",
        review:"11,150",
        bankoffer:"BankOffer"
    },
    {
        title:"Motorola G85 5G(Urban Grey,128 GB)",
        memory:"8 GB RAM | 128 GB ROM",
        frontcamera:"50 MP +  8MP | 32 MP Front Camera",
        battery:"5000 mAh Battery",
        processor:"6s Gen 3 processor",
        warrenty:"1 Year on Headset and 6 Months on Acceessories",
        image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/z/q/f/-original-imah2fjd75hkcynr.jpeg?q=70",
        flipimage:"img/f-assurerd.png",
        price:"₹15,999",
        strike:"20,999",
        discount:"23% off",
        exchange:"₹13,550",
        num:"4.4",
        star:"2,16,993",
        review:"11,150",
        bankoffer:"BankOffer"
    },
    {
        title:"POCO C75 5G (Silver Stardust, 64 GB)",
        memory:"4 GB RAM | 64 GB ROM | Expandable Upto 1 TB",
        frontcamera:"50MP Rear Camera | 5MP Front Camera",
        battery:"5160 mAh Battery",
        processor:"4s Gen 2 5G Processor",
        warrenty:"1 Year Manufacturer Warrenty for Phone and 6 Months Warranty for In the Box Accessories",
        image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/i/b/b/-original-imahbr2czzcrgfx7.jpeg?q=70",
        flipimage:"img/f-assurerd.png",
        price:"7,699",
        strike:"₹10,999",
        discount:"30% off",
        exchange:"₹6,250",
        num:"4.3",
        star:"83,280",
        review:"4,112",
        bankoffer:"BankOffer"
    }
  ];


  

  const container = document.getElementById("container");
  const template = document.getElementById("templates").firstElementChild;



  
  
 
  data.forEach(item => {
    const clone = template.cloneNode(true);
    clone.style.display = "flex";


    clone.querySelector(".product-img").src = item.image;
    clone.querySelector("#title").textContent = item.title;
    clone.querySelector(".memory").textContent = item.memory;
    clone.querySelector(".display").textContent = item.display;
    clone.querySelector(".frontcamera").textContent = item.frontcamera;
    clone.querySelector(".battery").textContent = item.battery;
    clone.querySelector(".processor").textContent = item.processor;
    clone.querySelector(".warrenty").textContent = item.warrenty;
    clone.querySelector(".flip-cart-img" ).src=item.flipimage;
    clone.querySelector(".price").textContent=item.price;
    clone.querySelector(".strike").textContent=item.strike;
    clone.querySelector(".discount").textContent=item.discount;
    clone.querySelector(".tagline").textContent=item.tagline;
    clone.querySelector(".exchange").textContent=item.exchange;
    clone.querySelector(".num").textContent=item.num;
    clone.querySelector(".stars").textContent=item.stars;
    clone.querySelector(".review").textContent=item.review;
    clone.querySelector(".bankoffer").textContent=item.bankoffer;

    
    

    container.appendChild(clone);
    
  });                            
  
  


  //---TITLE OVER---------------
  function titleover(){
    const titles=document.getElementById("title")
    if(titles.style.color==="black"){
        titles.style.color="blue"
    }else{
        titles.style.color="black"
    }
}

  












  //MODEL--

//   const data = [
//     { title: "Card nnn1", memory: "This is card 1",display:"displaing",camera:"hio",battery:"iop",processor:"30ram",warrenty:'poi' },
//     { title: "Card mmm1", memory: "This is card 1",display:"displaing",camera:"hio",battery:"iop",processor:"30ram",warrenty:'poi'  },
//     { title: "Card uuu1", memory: "This is card 1",display:"displaing",camera:"hio",battery:"iop",processor:"30ram",warrenty:'poi' }
//   ];

//   const container = document.getElementById("container");
//   const template = document.getElementById("template").firstElementChild;

//   data.forEach(item => {
//     // Clone the card structure
//     const clone = template.cloneNode(true);
//     clone.style.display = "block";

//     // Insert dynamic data
//     clone.querySelector(".title").textContent = item.title;
//     clone.querySelector(".memory").textContent = item.memory;
//       clone.querySelector(".display").textContent = item.display;
//     clone.querySelector(".camera").textContent = item.camera;
//       clone.querySelector(".battery").textContent = item.battery;
//     clone.querySelector(".processor").textContent = item.processor;

//     // Append to container
//     container.appendChild(clone);
//   });


  