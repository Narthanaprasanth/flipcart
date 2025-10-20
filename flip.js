
//BELOW HEADER
// HOME

const box = document.getElementById("homehover1")
box.addEventListener("mouseover", function () {
    box.style.color = "#2874f0"
})
const boxout = document.getElementById("homehover1")
boxout.addEventListener("mouseout", function () {
    boxout.style.color = "grey"
})
//MOBILE AND ACCESORIES
const box2 = document.getElementById("homehover2")
box2.addEventListener("mouseover", function () {
    box2.style.color = "#2874f0"
})
const boxout2 = document.getElementById("homehover2")
boxout2.addEventListener("mouseout", function () {
    boxout2.style.color = "grey"
})
//MOBILE                                                                               
const box3 = document.getElementById("homehover3")
box3.addEventListener("mouseover", function () {
    box3.style.color = "#2874f0"
})                                                          
const boxout3 = document.getElementById("homehover3")
boxout3.addEventListener("mouseout", function () {
    boxout3.style.color = "grey"
})

//ELECTRONICS---------

function electromouse() {
    const over = document.getElementById("eachid")
    if (over.style.display === "none" || over.style.display === "") {
        over.style.display = "block"
    }
    const over1 = document.getElementById("some")
    if (over1.style.display === "none" || over1.style.display === "") {
        over1.style.display = "block"
    }

}


//--TV AND APPLIANCES---------- 

function electromouse1() {
    const over = document.getElementById("eachid")
    if (over.style.display === "none" || over.style.display === "") {
        over.style.display = "block"
    }
    const over1 = document.getElementById("some")

}
function electroout() {
    const over = document.getElementById("eachid")

    if (over.style.display === "block" || over.style.display === "") {
        (over.style.display = "none")
    }

}
//MEN---------

function electromouse2() {


    const over = document.getElementById("eachid")
    if (over.style.display === "none" || over.style.display === "") {
        over.style.display = "block"
    }
    const over1 = document.getElementById("some")
    if (over1.style.display === "none" || over1.style.display === "") {
        over1.style.display = "block"
    }
}
function electroout() {
    const over = document.getElementById("eachid")
    if (over.style.display === "block" || over.style.display === "") {
        (over.style.display = "none")
    }
}

//WOMEN--- 
function electromouse3() {

    const over = document.getElementById("eachid")
    if (over.style.display === "none" || over.style.display === "") {
        over.style.display = "block"
    }
    const over1 = document.getElementById("some")
    if (over1.style.display === "none" || over1.style.display === "") {
        over1.style.display = "block"
    }
}



//BABY & KIDS---------
function electromouse4() {

    const over = document.getElementById("eachid")
    if (over.style.display === "none" || over.style.display === "") {
        over.style.display = "block"
    }
    const over1 = document.getElementById("some")
    if (over1.style.display === "none" || over1.style.display === "") {
        over1.style.display = "block"
    }
}

//HOME & FURNITURE---------
function electromouse5() {

    const over = document.getElementById("eachid")
    if (over.style.display === "none" || over.style.display === "") {
        over.style.display = "block"
    }
    const over1 = document.getElementById("some")
    if (over1.style.display === "none" || over1.style.display === "") {
        over1.style.display = "block"
    }
}

// SPORTS BOOKS & MORE----------
function electromouse6() {

    const over = document.getElementById("eachid")
    if (over.style.display === "none" || over.style.display === "") {
        over.style.display = "block"
    }
    const over1 = document.getElementById("some")
    if (over1.style.display === "none" || over1.style.display === "") {
        over1.style.display = "block"
    }
}



//OFFER ZONE
function electromouse8() {
    const font8 = document.getElementById("sub8")
    if (font8.style.color === "") {
        font8.style.color = "blue"
    }
}
function electroout8() {
    const font8 = document.getElementById("sub8")
    if (font8.style.color === "blue") {
        font8.style.color = "black"
    }
}


function fulltext() {
    const fulltextover = document.getElementById("homehover2")
    fulltextover.textContent = "mobiles & Accessories"
}
function fullhide() {
    const fulltextover = document.getElementById("homehover2")
    fulltextover.textContent = "mobiles & A..."
}



function popular() {
    const pop = document.getElementById("popular-id")
    const low = document.getElementById("low-high-id")
    const newer = document.getElementById("newest-id")
    const high = document.getElementById("high-low-id")

    pop.style.fontFamily = "semibold"
    low.style.fontFamily = "regular"
    high.style.fontFamily = "regular"
    newer.style.fontFamily = "regular"

    if (pop.style.color === "" || "black") {
        (pop.style.color = "blue") && (pop.style.borderBottom = "2px solid blue")
    } if (low.style.color === "blue" || "") {
        (low.style.color = "black") && (low.style.borderBottom = "none")
    } if (low.style.color === "black") {
        low.style.color = "black"
    } else if (newer.style.color === "blue") {
        (newer.style.color = "black") && (newer.style.borderBottom = "none")
    } if (pop.style.color === "blue") {
        (newer.style.color = "black") && (newer.style.borderBottom = "none")

    }
    if (pop.style.color === "blue") {
        (high.style.color = "black") && (high.style.borderBottom = "none")

    }
    displayProducts(products)
}
function lowhigh() {
    const low = document.getElementById("low-high-id")
    const pop = document.getElementById("popular-id")
    const newer = document.getElementById("newest-id")
    const high = document.getElementById("high-low-id")

    low.style.fontFamily = "semibold"
    pop.style.fontFamily = "regular"
    high.style.fontFamily = "regular"
    newer.style.fontFamily = "regular"

    if (low.style.color === "" || "black") {
        (low.style.color = "blue") && (low.style.borderBottom = "2px solid blue")
    }
    if (high.style.color === "blue") {
        (high.style.color = "black") && (high.style.borderBottom = "none")
    }
    if (pop.style.color === "blue") {
        (pop.style.color = "black") && (pop.style.borderBottom = "none")
    }
    if (newer.style.color === "blue") {
        (newer.style.color = "black") && (newer.style.borderBottom = "none")
    }
    let sorted = [...products].sort((a, b) => {
        let priceA = parseInt(a.price.replace(/[₹,]/g, ""));
        let priceB = parseInt(b.price.replace(/[₹,]/g, ""));
        return priceA - priceB;
    });
    displayProducts(sorted)
}
function highlow() {
    const high = document.getElementById("high-low-id")
    const low = document.getElementById("low-high-id")
    const pop = document.getElementById("popular-id")
    const newer = document.getElementById("newest-id")

    high.style.fontFamily = "semibold"
    pop.style.fontFamily = "regular"
    low.style.fontFamily = "regular"
    newer.style.fontFamily = "regular"

    if (high.style.color === "" || "black") {
        (high.style.color = "blue") && (high.style.borderBottom = "2px solid blue")
    }
    if (high.style.color === "blue") {
        (pop.style.color = "black") && (pop.style.borderBottom = "none")
    }

    if (low.style.color === "blue") {
        (low.style.color = "black") && (low.style.borderBottom = "none")
    }
    if (high.style.color === "blue") {
        (newer.style.color = "black") && (newer.style.borderBottom = "none")
    }
    if (high.style.color === "blue") {
        (pop.style.color = "black") && (pop.style.borderBottom = "none")
    }
    let sorted = [...products].sort((a, b) => {
        let priceA = parseInt(a.price.replace(/[₹,]/g, ""));
        let priceB = parseInt(b.price.replace(/[₹,]/g, ""));
        return priceB - priceA
    })
    displayProducts(sorted);

}
function newestfirst() {
    const newer = document.getElementById("newest-id")
    const high = document.getElementById("high-low-id")
    const pop = document.getElementById("popular-id")
    const low = document.getElementById("low-high-id")

    newer.style.fontFamily = "semibold"
    low.style.fontFamily = "regular"
    high.style.fontFamily = "regular"
    pop.style.fontFamily = "regular"

    if (newer.style.color === "" || "black") {
        (newer.style.color = "blue") && (newer.style.borderBottom = "2px solid blue") && (high.style.color = "black") && (high.style.borderBottom = "none")

    }
    if (pop.style.color === "blue" || "black") {
        (pop.style.color = "black") && (pop.style.borderBottom = "none")
    }
    if (newer.style.color === "blue") {
        (low.style.color = "black") && (low.style.borderBottom = "none")
    }
    let sorted = [...products].sort((a, b) => a.id - b.id);
    displayProducts(sorted)

}




//--MORE--
const moreLink = document.getElementById("moreid");
const moreContainer = document.getElementById("more-id");


moreLink.addEventListener("mouseenter", () => {
    moreContainer.style.display = "block";
});


moreLink.addEventListener("mouseleave", (e) => {
    // check if mouse enters container         
    if (!moreContainer.matches(':hover')) {
        moreContainer.style.display = "none";
    }
});

moreContainer.addEventListener("mouseleave", () => {
    moreContainer.style.display = "none";
});


moreContainer.addEventListener("mouseenter", () => {
    moreContainer.style.display = "block";
});



//--LOGIN---

const loginDiv = document.getElementById('logid');
const loginBtn = document.querySelector('.main-but');


loginBtn.addEventListener('mouseenter', () => {
    loginDiv.style.display = 'block';
});

loginBtn.addEventListener('mouseleave', () => {
    loginDiv.style.display = 'none';
});

loginDiv.addEventListener('mouseenter', () => {
    loginDiv.style.display = 'block';
});

loginDiv.addEventListener('mouseleave', () => {
    loginDiv.style.display = 'none';
});

//SEARCH BOX

let availablekeywords = [
    'shoes',
    't-shirts',
    'laptops',
    'watches',
    'tv',
    'sares'
]





const resultbox = document.querySelector(".result-box")
const inputbox = document.getElementById("searchids")

inputbox.onkeyup = function () {
    let result = [];
    let input = inputbox.value
    if (input.length) {
        result = availablekeywords.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase())
        })
    }
    display(result)
}

function display(result) {
    if (!result.length) {
        resultbox.innerHTML = '';
        return;
    }
    const content = result.map((list) => {
        return '<div  class="structure">' + list + '</div>';
    }).join("");

    resultbox.innerHTML = "<ul>" + content + "</ul>";
}

//FILTER-BOX--



let productDiv = document.querySelector(".product")
var CategoryListDiv = document.querySelector(".CategoryList")


let products = [];


async function loadProducts() {
    let res = await fetch("flip.json");
    products = await res.json();
    displayProducts(products);
}

function displayProducts(list) {
    productDiv.innerHTML = "";
    list.forEach(element => {
        productDiv.innerHTML += `  
      <div class="productCard">
        <div class="productItems">
          <img src="${element.image}" alt="${element.title}">
          <div class="compare-main"> 
       <div> <input type="checkbox" id="comparebox"></div>
          <div class=compare>add to compare</div>
        </div>
        </div>               
        <div class="productItemsmid">
          <h3 class="productTitle">${element.title}</h3>
          <div class="ratings">
            <div class="ppp">
              <p class="nam">${element.num} 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" 
                     width="20" height="20" fill="white">   
                  <polygon points="12,2 15.09,8.26 22,9.27 
                                   17,14.14 18.18,21.02                      
                                   12,17.77 5.82,21.02 
                                   7,14.14 2,9.27 
                                   8.91,8.26"/>      
                </svg>
              </p>
            </div>                                         
            <p class="st">${element.stars} Ratings &</p>
            <p class="re">${element.review} Reviews</p>
          </div>                         
          <p>${element.memory}</p> 
          <p>${element.display}</p>
          <p>${element.frontcamera}</p>
          <p>${element.battery}</p>
          <p>${element.processor}</p>
          <p>${element.warrenty}</p> 
        </div>
        
        <div class="productItemslast">
          <div class="sep">
            <p>${element.price}</p>
            <img src="img/f-assurerd.png" alt="" width="70px" height="21px">
          </div>
          <div class="sep1">
            <p class="strike">${element.strike}</p>
            <p class="discount">${element.discount}</p>
          </div>
          <div class="bank">
            <p>${element.bankoffer}</p>
          </div>
        </div>
      </div>
    `;
    });



    const cards = document.querySelectorAll(".productCard");
    cards.forEach(card => {
        const title = card.querySelector(".productTitle");
        card.addEventListener("mouseenter", () => {
            title.style.color = "blue"
        })
        card.addEventListener("mouseleave", () => {
            title.style.color = ""
        })
    })
}

// ------------------- FILTERS -------------------
//FILTER BY PRICE
function filterbyprice() {
    window.scroll({ top: 0 });

    let minSelect = document.getElementById("minPrice");
    let maxSelect = document.getElementById("maxPrice");

    let minVal = minSelect.value;
    let maxVal = maxSelect.value;

    let activeBox0 = document.getElementById("activeFilters0");
    let clear = document.getElementsByClassName("clearall")[0];


    if ((minVal === "0" || minVal === "") && (maxVal === "30000+" || maxVal === "")) {
        activeBox0.innerHTML = "";
        clear.innerHTML = "";
    } else {
        activeBox0.innerHTML = `<span class="active-tag" data-min="${minVal}" data-max="${maxVal}">
            ✕ ₹${minVal} - ₹${maxVal}
        </span>`;
        clear.innerHTML = "<span onclick='clearAll()'>CLEAR ALL</span>";
    }


    let tag = activeBox0.querySelector(".active-tag");
    if (tag) {
        tag.addEventListener("click", function () {
            minSelect.value = "0";
            maxSelect.value = "30000+";
            filterbyprice();
        });
    }
}

// Attach change event to both selects
document.getElementById("minPrice").addEventListener('change', filterbyprice);
document.getElementById("maxPrice").addEventListener('change', filterbyprice);




//Filter by BRAND--
function filterbyram() {
    window.scroll({
        top: 0
    })
    let checked = Array.from(document.querySelectorAll('.CategoryList input:checked'))
        .map(cb => cb.value)

    let filtered = checked.length === 0
        ? products
        : products.filter(p => checked.some(brand => p.titlename.includes(brand)));
    window.scroll({
        top: 0
    })

    displayProducts(filtered);
    //FILTER TOP------

    let activeBox = document.getElementById("activeFilters");
    let clear = document.getElementsByClassName("clearall")[0];

    if (checked.length === 0) {
        activeBox.innerHTML = "";
        clear.innerHTML = "";
    } else {
        activeBox.innerHTML = checked
            .map(val => `<span class="active-tag" data-value="${val}" >✕ ${val}</span>`)
            .join(" ");
        clear.innerHTML = "<span onclick='clearAll()'>CLEAR ALL</span>";
    }
    document.querySelectorAll(".active-tag").forEach(tag => {
        tag.addEventListener("click", function () {
            let value = this.getAttribute("data-value");

            document.querySelectorAll('.CategoryList input[type="checkbox"]').forEach(cb => {
                if (cb.value === value) cb.checked = false
            })
            filterbyram()
        })
    })
}

// Filter by Customer Rating
function filterbycustomer() {
    window.scroll({
        top: 0
    })
    let checked = Array.from(document.querySelectorAll('.customerList input:checked'))
        .map(cb => cb.value);

    let filtered = checked.length === 0
        ? products
        : products.filter(p => {
            return checked.some(val => {
                if (val === "4") {
                    return parseFloat(p.num) >= 4;
                }
                if (val === "3") {
                    return parseFloat(p.num) >= 3;
                }
            });
        });
    displayProducts(filtered);
}
//---------------------FILTER TOP--------------------
function filtercustomer() {
    let checked = Array.from(document.querySelectorAll('.customerList input:checked'))
        .map(cb => cb.value);

    let activeBox = document.getElementById("activeFilters2");
    let clear = document.getElementsByClassName("clearall")[0];

    if (checked.length === 0) {
        activeBox.innerHTML = "";
        clear.innerHTML = "";
    } else {
        activeBox.innerHTML = checked
            .map(val => `<span class="active-tag" data-value="${val}">✕ ${val}★ & above</span>`)
            .join(" ");
        clear.innerHTML = "<span onclick='clearAll()'>CLEAR ALL</span>";
    }

    document.querySelectorAll(".active-tag").forEach(tag => {
        tag.addEventListener("click", function () {
            let value = this.getAttribute("data-value");

            document.querySelectorAll('.customerList input[type="checkbox"]').forEach(cb => {
                if (cb.value === value) cb.checked = false;
            });

            this.remove();


            filterbycustomer();
        });
    });
}

// Filter by RAM
function filterByRAM() {
    window.scroll({
        top: 0
    })
    let checked = Array.from(document.querySelectorAll('.memoryList input:checked'))
        .map(cb => cb.value);

    let filtered = checked.length === 0
        ? products
        : products.filter(p => checked.some(ram => p.memory.includes(ram)));

    displayProducts(filtered);
    //FILTER TOP------

    let activeBox = document.getElementById("activeFilters3");
    let clear = document.getElementsByClassName("clearall")[0];

    if (checked.length === 0) {
        activeBox.innerHTML = "";
        clear.innerHTML = "";
    } else {
        activeBox.innerHTML = checked
            .map(val => `<span class="active-tag" data-value="${val}">✕ ${val}</span>`)
            .join(" ");
        clear.innerHTML = "<span onclick='clearAll()'>CLEAR ALL</span>";
    }
    document.querySelectorAll(".active-tag").forEach(tag => {
        tag.addEventListener("click", function () {
            let value = this.getAttribute("data-value");

            document.querySelectorAll('.memoryList input[type="checkbox"]').forEach(cb => {
                if (cb.value === value) cb.checked = false;
            })
            filterByRAM()
        })
    })
}
//Filter by INTERNAL
function filterByInternal() {
    window.scroll({
        top: 0
    })
    let checked = Array.from(document.querySelectorAll('.internalList input:checked'))
        .map(cb => cb.value);

    let filtered = checked.length === 0
        ? products
        : products.filter(p => {
            return checked.some(val => {
                if (val.includes("256")) {
                    return parseFloat(p.titval) >= 256;
                }
                if (val.includes("128")) {
                    return parseFloat(p.titval) >= 128 && parseFloat(p.titval) <= 255;
                }
                if (val.includes("64")) {
                    return parseFloat(p.titval) >= 64 && parseFloat(p.titval) <= 127;
                }
            });
        });
    displayProducts(filtered);
    //FILTER TOP----------                                                                          
    let activeBox = document.getElementById("activeFilters4");
    let clear = document.getElementsByClassName("clearall")[0];

    if (checked.length === 0) {
        activeBox.innerHTML = "";
        clear.innerHTML = "";
    } else {
        activeBox.innerHTML = checked
            .map(val => `<span class="active-tag" data-value="${val}">✕ ${val}</span>`)
            .join(" ");
        clear.innerHTML = "<span onclick='clearAll()'>CLEAR ALL</span>";
    }
    document.querySelectorAll(".active-tag").forEach(tag => {
        tag.addEventListener("click", function () {
            let value = this.getAttribute("data-value");

            document.querySelectorAll('.internalList input[type="checkbox"]').forEach(cb => {
                if (cb.value === value) cb.checked = false;
            })
            this.remove();
            filterByInternal();

        })
    })
}
//Filter by Battery Storage
function filterByBattery() {
    window.scroll({
        top: 0
    })
    let checked = Array.from(document.querySelectorAll('.batteryList input:checked'))
        .map(cb => cb.value);

    let filtered = checked.length === 0
        ? products
        : products.filter(p => checked.includes(p.batteryVal));

    displayProducts(filtered);
    //FILTER TOP
    let activeBox = document.getElementById("activeFilters5");
    let clear = document.getElementsByClassName("clearall")[0];

    if (checked.length === 0) {
        activeBox.innerHTML = "";
        clear.innerHTML = "";
    } else {
        activeBox.innerHTML = checked
            .map(val => `<span class="active-tag" data-value="${val}">✕ ${val}</span>`)
            .join(" ");
        clear.innerHTML = "<span onclick='clearAll()'>CLEAR ALL</span>";
    }
    document.querySelectorAll(".active-tag").forEach(tag => {
        tag.addEventListener("click", function () {
            let value = this.getAttribute("data-value")

            document.querySelectorAll('.batteryList input[type="checkbox"]').forEach(cb => {
                if (cb.value === value) cb.checked = false
            })
            this.remove();
            filterByBattery();

        })
    })
}


// Filter by Screen size
function filterByScreen() {
    window.scroll({
        top: 0
    })
    let checked = Array.from(document.querySelectorAll('.screenList input:checked'))
        .map(cb => cb.value);

    let filtered = checked.length === 0
        ? products
        : products.filter(p => checked.includes(p.displayval));

    displayProducts(filtered);
    //FILTER TOP
    let activeBox = document.getElementById('activeFilters6')
    let clear = document.getElementsByClassName("clearall")[0];

    if (checked.length === 0) {
        activeBox.innerHTML = ""
    } else {
        activeBox.innerHTML = checked
            .map(val => `<span class="active-tag" data-value="${val}">✕<span>${val}</span></span>`).join(" ")
        clear.innerHTML = "<span onclick='clearAll()'>CLEAR ALL</span>";
    }
    document.querySelectorAll(".active-tag").forEach(tag => {
        tag.addEventListener("click", function () {
            let value = this.getAttribute("data-value")

            document.querySelectorAll('.screenList input[type="checkbox"]').forEach(cb => {
                if (cb.value === value) cb.checked = false;
            })
            this.remove();
            filterByScreen();
        })
    })
}
//Filter by primary Camera
function filterbyprimary() {
    window.scroll({
        top: 0
    })
    let checked = Array.from(document.querySelectorAll('.primaryList input:checked'))
        .map(cb => cb.value)
    let filtered = checked.length === 0
        ? products
        : products.filter(p => {
            return checked.some(val => {
                if (val.includes("13")) {
                    return parseFloat(p.primaryval) >= 13 && (p.primaryval) <= 15.9;
                }
                if (val.includes("16")) {
                    return parseFloat(p.primaryval) >= 16 && (p.primaryval) <= 20.9;
                }
                if (val.includes("21")) {
                    return parseFloat(p.primaryval) >= 21;
                }
            })
        })
    displayProducts(filtered);

    //FILTER TOP
    let activeBox = document.getElementById("activeFilters7")
    let clear = document.getElementsByClassName("clearall")[0];
    if (checked.length === 0) {
        activeBox.innerHTML = ""
        clear.innerHTML = ""
    } else {
        activeBox.innerHTML = checked
            .map(val => `<span class="active-tag" data-value="${val}">✕${val}</span>`)
            .join(" ")
        clear.innerHTML = "<span onclick='clearAll()'>CLEAR ALL</span>";
    }
    document.querySelectorAll(".active-tag").forEach(tag => {
        tag.addEventListener("click", function () {
            let value = this.getAttribute("data-value");

            document.querySelectorAll('.primaryList input[type="checkbox"]').forEach(cb => {
                if (cb.value === value) cb.checked = false;
            })
            this.remove();
            filterbyprimary();

        })
    })
}

//filter by secondary camera
function filterbysecondary() {
    window.scroll({
        top: 0
    })
    let checked = Array.from(document.querySelectorAll('.secondaryList input:checked'))
        .map(cb => cb.value)
    let filtered = checked.length === 0
        ? products
        : products.filter(p => {
            return checked.some(val => {
                if (val.includes("5")) {
                    return parseFloat(p.secondaryval) >= 5 && parseFloat(p.secondaryval) <= 7.9;
                }
                if (val.includes("8")) {
                    return parseFloat(p.secondaryval) >= 8 && parseFloat(p.secondaryval) <= 11.9;
                }
                if (val.includes(" 14")) {
                    return parseFloat(p.secondaryval) >= 13 && parseFloat(p.secondaryval) <= 15.9;
                }
                if (val.includes("21")) {
                    return parseFloat(p.secondaryval) >= 21
                }
                return false
            })
        })
    displayProducts(filtered);
    //FILTER TOP-------
    let activeBox = document.getElementById("activeFilters8")
    let clear = document.getElementsByClassName("clearall")[0];

    if (checked.length === 0) {
        activeBox.innerHTML = "";
        clear.innerHTML = ""
    } else {
        activeBox.innerHTML = checked
            .map(val => `<span class="active-tag" data-value="${val}">✕${val}</span>`)
            .join(" ")
        clear.innerHTML = "<span onclick='clearAll()'>CLEAR ALL</span>";
    }
    document.querySelectorAll(".active-tag").forEach(tag => {
        tag.addEventListener("click", function () {
            let value = this.getAttribute("data-value");

            document.querySelectorAll('.secondaryList input[type="checkbox"]').forEach(cb => {
                if (cb.value === value) cb.checked = false;
            })
            this.remove();
            filterbysecondary();
        })

    })

}
// ------------------- EVENT LISTENERS -------------------
document.querySelectorAll('.price-container select').forEach(select => {
    select.addEventListener('change', filterbyprice);
});

document.querySelectorAll('.CategoryList input')
    .forEach(cb => cb.addEventListener('change', filterbyram));

document.querySelectorAll('.customerList input')
    .forEach(cb => cb.addEventListener('change', filterbycustomer));

document.querySelectorAll('.memoryList input')
    .forEach(cb => cb.addEventListener('change', filterByRAM));

document.querySelectorAll('.internalList input')
    .forEach(cb => cb.addEventListener('change', filterByInternal));

document.querySelectorAll('.batteryList input')
    .forEach(cb => cb.addEventListener('change', filterByBattery));

document.querySelectorAll('.screenList input')
    .forEach(cb => cb.addEventListener('change', filterByScreen));

document.querySelectorAll('.primaryList input')
    .forEach(cb => cb.addEventListener('change', filterbyprimary));

document.querySelectorAll('.secondaryList input')
    .forEach(cb => cb.addEventListener('change', filterbysecondary));




// ------------------- INITIAL LOAD -------------------
loadProducts();
//  SVG TOGGLE-----------

function toggleSection(iconId, listId) {
    const svg = document.getElementById(iconId).querySelector("svg");
    const section = document.getElementById(listId);

    const isHidden = section.style.display === "none" || section.style.display === "";
    section.style.display = isHidden ? "flex" : "none";

    svg.style.transform = isHidden ? "rotate(180deg)" : "rotate(0deg)";
    svg.style.transition = "transform 0.3s ease";
}

window.addEventListener("DOMContentLoaded", () => {
    const mappings = {
        brandid: "cattid",
        ramid: "memoryid",
        custid: "customerid",
        intid: "internalid",
        battid: "batteryid",
        scrnid: "screenid",
        primaryid: "primid",
        secondaryid: "secondid"
    };

    Object.entries(mappings).forEach(([iconId, listId]) => {
        const svg = document.getElementById(iconId)?.querySelector("svg");
        const section = document.getElementById(listId);
        if (!svg || !section) return;

        const isVisible = window.getComputedStyle(section).display !== "none";
        svg.style.transform = isVisible ? "rotate(180deg)" : "rotate(0deg)";
        svg.style.transition = "transform 0.3s ease";
    });
});





//CLEAR ALL---UPPER
function clearAll() {
   
    const activeFilterIds = [
        "activeFilters0",
        "activeFilters",
        "activeFilters2",
        "activeFilters3",
        "activeFilters4",
        "activeFilters5",
        "activeFilters6",
        "activeFilters7",
        "activeFilters8"
    ];

    const clearMainIds = [
        "clearmainid0",
        "clearmainid",
        "clearmainid2",
        "clearmainid3",
        "clearmainid4",
        "clearmainid5",
        "clearmainid6",
        "clearmainid7",
        "clearmainid8"
    ];
    activeFilterIds.forEach(id => {
        const el = document.getElementById(id)
        if (el) el.innerHTML = ""
    })
    clearMainIds.forEach(id => {
        const el = document.getElementById(id)
        if (el) el.style.display = "none"
    })

    const clearAllId = document.getElementById("clearallid")
    if (clearAllId) clearAllId.innerHTML = ""


    const checkboxContainer = [
        "#cattid",
        "#customerid",
        "#memoryid",
        "#internalid",
        "#batteryid",
        "#screenid",
        "#primid",
        "#secondid"
    ]
    checkboxContainer.forEach(selector => {
        document.querySelectorAll(`${selector} input[type=checkbox]`).forEach(cb => (cb.checked = false))
    })

    if (typeof displayProducts === "function") {
        displayProducts(products)
    }
}


//CLEAR--1 BRAND
const clearit = document.getElementById("clearmainid");

function updateClearButton() {
    if (document.querySelectorAll('.CategoryList input:checked').length > 0) {
        clearit.style.display = "flex";
    } else {
        clearit.style.display = "none";
    }
}
function clearclick() {
    let activeBox = document.getElementById("activeFilters");

    document.querySelectorAll('#cattid input[type="checkbox"]').forEach(cb => cb.checked = false);

    document.getElementById("clearmainid").style.display = "none";
    activeBox.innerHTML = "";
    let clearid = document.getElementById("clearallid")
    clearid.innerHTML = ""


    displayProducts(products)
}


document.querySelectorAll('.CategoryList input[type="checkbox"]').forEach(cb => {
    cb.addEventListener("change", updateClearButton);
});

updateClearButton();


//CLEAR --2 CUSTOMER RATING
const clearit2 = document.getElementById("clearmainid2")
function updateClearButton2() {
    if (document.querySelectorAll('.customerList input:checked').length > 0) {
        clearit2.style.display = "flex";
    } else {
        clearit2.style.display = "none"
    }
}
function clearclick2() {
    let activeBox = document.getElementById("activeFilters2")

    document.querySelectorAll('#customerid input[type="checkbox"]').forEach(cb => cb.checked = false)
    document.getElementById("clearmainid2").style.display = "none"
    activeBox.innerHTML = ""
    let clearid = document.getElementById("clearallid")
    clearid.innerHTML = ""

    displayProducts(products)
}

document.querySelectorAll('.customerList input[type="checkbox"]').forEach(cb => {
    cb.addEventListener("change", updateClearButton2)
})
updateClearButton2()
//CLEAR --3 RAM
const clearit3 = document.getElementById("clearmainid3")
function updateClearButton3() {
    if (document.querySelectorAll('.memoryList input:checked').length > 0) {
        clearit3.style.display = "flex"
    } else {
        clearit3.style.display = "none"
    }
}
function clearclick3() {
    let activeBox = document.getElementById("activeFilters3")
    document.querySelectorAll('#memoryid input[type="checkbox"]').forEach(cb => cb.checked = false)
    document.getElementById("clearmainid3").style.display = "none"
    activeBox.innerHTML = ""
    let clearid = document.getElementById("clearallid")
    clearid.innerHTML = ""

    displayProducts(products)
}
document.querySelectorAll('.memoryList input[type="checkbox"]').forEach(cb => {
    cb.addEventListener("change", updateClearButton3)
})
updateClearButton3()

/* CLEAR ALL--4 INTERNAL STORAGE */
const clearit4 = document.getElementById("clearmainid4")
function updateClearButton4() {
    if (document.querySelectorAll('.internalList input:checked').length > 0) {
        clearit4.style.display = "flex"
    } else {
        clearit4.style.display = "none"
    }
}
function clearclick4() {
    let activeBox = document.getElementById("activeFilters4")
    document.querySelectorAll('#internalid input[type="checkbox"]').forEach(cb => cb.checked = false)
    document.getElementById("clearmainid4").style.display = "none"
    activeBox.innerHTML = ""
    let clearid = document.getElementById("clearallid")
    clearid.innerHTML = ""
}
document.querySelectorAll('.internalList input[type="checkbox"]').forEach(cb => {
    cb.addEventListener("change", updateClearButton4)
})
updateClearButton4()

/* CLEAR ALL--5 BATTERY CAPACITY */

const clearit5 = document.getElementById("clearmainid5")
function updateClearButton5() {
    if (document.querySelectorAll('.batteryList input:checked').length > 0) {
        clearit5.style.display = "flex"
    } else {
        clearit5.style.display = "none"
    }
}
function clearclick5() {
    let activeBox = document.getElementById("activeFilters5")
    document.querySelectorAll('#batteryid input[type="checkbox"]').forEach(cb => cb.checked = false)
    document.getElementById("clearmainid5").style.display = "none"
    activeBox.innerHTML = ""
    let clearid = document.getElementById("clearallid")
    clearid.innerHTML = ""
}
document.querySelectorAll('.batteryList input[type="checkbox"]').forEach(cb => {
    cb.addEventListener("change", updateClearButton5)
})
updateClearButton5()

/* CLEAR ALL--6 SCREEN SIZE */
const clearit6 = document.getElementById("clearmainid6")
function updateClearButton6() {
    if (document.querySelectorAll('.screenList input:checked').length > 0) {
        clearit6.style.display = "flex"
    } else {
        clearit6.style.display = "none"
    }
}
function clearclick6() {
    let activeBox = document.getElementById("activeFilters6")
    document.querySelectorAll('#screenid input[type="checkbox"]').forEach(cb => cb.checked = false)
    document.getElementById("clearmainid6").style.display = "none"
    activeBox.innerHTML = ""
    let clearid = document.getElementById("clearallid")
    clearid.innerHTML = ""
}
document.querySelectorAll('.screenList input[type="checkbox"]').forEach(cb => {
    cb.addEventListener("change", updateClearButton6)
})
updateClearButton6()

/* CLEAR ALL--7 PRIMARY CAMERA */

const clearit7 = document.getElementById("clearmainid7")
function updateClearButton7() {
    if (document.querySelectorAll('.primaryList input:checked').length > 0) {
        clearit7.style.display = "flex"
    } else {
        clearit7.style.display = "none"
    }
}
function clearclick7() {
    let activeBox = document.getElementById("activeFilters7")
    document.querySelectorAll('#primid input[type="checkbox"]').forEach(cb => cb.checked = false)
    document.getElementById("clearmainid7").style.display = "none"
    activeBox.innerHTML = ""
    let clearid = document.getElementById("clearallid")
    clearid.innerHTML = ""
}
document.querySelectorAll('.primaryList input[type="checkbox"]').forEach(cb => {
    cb.addEventListener("change", updateClearButton7)
})
updateClearButton7()

/* CLEAR ALL--8 SECONDARY CAMERA */

const clearit8 = document.getElementById("clearmainid8")
function updateClearButton8() {
    if (document.querySelectorAll('.secondaryList input:checked').length > 0) {
        clearit8.style.display = "flex"
    } else {
        clearit8.style.display = "none"
    }
}
function clearclick8() {
    let activeBox = document.getElementById("activeFilters8")
    let clearid = document.getElementById("clearallid")
    document.querySelectorAll('#secondid input[type="checkbox"]').forEach(cb => cb.checked = false)
    document.getElementById("clearmainid8").style.display = "none"
    activeBox.innerHTML = ""
    clearid.innerHTML = ""

}
document.querySelectorAll('.secondaryList input[type="checkbox"]').forEach(cb => {
    cb.addEventListener("change", updateClearButton8)
})
updateClearButton8()



//SEARCH INSIDE BRRAND-----------------
const searchbox = document.getElementById("searchboxid")
const brandlist = document.getElementById("brandlist")

searchbox.addEventListener("keyup", () => {
    const query = searchbox.value.toLowerCase();

    brandlist.querySelectorAll("label").forEach(label => {
        const text = label.textContent.toLowerCase()
        if (text.includes(query)) {
            label.style.display = "block"
        } else {
            label.style.display = "none"
        }
    })
})




function filterbypricerange() {
    const minDropdown = document.getElementById("minPrice")
    const maxDropdown = document.getElementById("maxPrice")

    const handleOne = document.querySelector(".handle-one")
    const handleTwo = document.querySelector(".handle-two")

    const track = document.querySelector(".track")





    //DROPDOWN VALUE
    let minVal = minDropdown.value;
    let maxVal = maxDropdown.value;

    const steps = {
        "0": 0,
        "10000": 1,
        "15000": 2,
        "20000": 3,
        "30000": 4,
        "30000+": 5,
    }

    let minStep = steps[minVal];
    let maxstep = steps[maxVal];

    let minpos = minStep * 45;
    let maxpos = maxstep * 45;
    //HANDLE POSITION
    handleOne.style.left = `${minpos}px`;
    handleTwo.style.left = `${maxpos}px`;

    //TRACK POSITION
    track.style.left = `${minpos}px`;
    track.style.width = `${maxpos - minpos}px`;

    //PRODUCT DISPLAY 
    const min = parseInt(minVal, 10)
    const max = (maxVal === "30000+") ? Infinity : parseInt(maxVal, 10);

    const filtered = products.filter(p => {
        const price = parseInt(p.price.replace(/[₹,]/g, ""), 10)
        return price >= min && price <= max;
    })

    document.getElementById("priceclearid").style.display = "flex";
    document.getElementById("clearmainid0").style.display = "flex";
    displayProducts(filtered);
}

function priceclear() {
    const maxDropdown = document.getElementById("maxPrice")
    maxDropdown.value = "30000+"
    const minDropdown = document.getElementById("minPrice")
    minDropdown.value = "0"

    document.getElementById("activeFilters0").innerHTML = ""

    document.getElementById("priceclearid").style.display = "none"

    filterbypricerange()
    displayProducts(products)
}

window.addEventListener("load", priceclear);



// ----------PRICE DRAGS------------
const slider = document.querySelector(".range");
const track = document.querySelector(".track")
const handleOne = document.querySelector(".handle-one");
const handleTwo = document.querySelector(".handle-two")

let isDragging = null;

const steps = [0, 10000, 15000, 20000, 30000, "30000+"];
const stepWidth = 45;

// DRAG STARTS                                
[handleOne, handleTwo].forEach(handle => {
    handle.addEventListener("mousedown", () => {
        isDragging = handle;
        document.addEventListener("mousemove", onDrag);
        document.addEventListener("mouseup", stopDrag);
    })
})

function onDrag(e) {
    e.preventDefault()
    const rect = slider.getBoundingClientRect();
    let pos = e.clientX - rect.left;



    // HANDLE DOESNOT GOES OUTSIDE THE TRACK
    pos = Math.max(0, Math.min(pos, stepWidth * (steps.length - 1)))

    let stepIndex = Math.round(pos / stepWidth);          //WHICH STEP THE HANDLE NEAREST TO
    let snapPos = stepIndex * stepWidth;          //ALIGN THE HANDLE TO EXACT STEP

    // current positions
    let minpos = parseInt(handleOne.style.left) || 0;
    let maxpos = parseInt(handleTwo.style.left) || stepWidth * (steps.length - 1);

    //STOPS IF OVERLAP--HANDLEONE
    if (isDragging === handleOne) {
        if (snapPos >= maxpos - stepWidth) {
            snapPos = maxpos - stepWidth;
        }
        handleOne.style.left = snapPos + "px";
        minpos = snapPos;
    } //---STOPS IF OVERLAP--HANDLE-TWO
    else if (isDragging === handleTwo) {

        if (snapPos <= minpos + stepWidth) {
            snapPos = minpos + stepWidth;
        }
        handleTwo.style.left = snapPos + "px";
        maxpos = snapPos;
    }

    // UPDATE TRACK
    track.style.left = minpos + "px";
    track.style.width = (maxpos - minpos) + "px";

    // GET VALUE->TO UPDATE DROPDOWN
    let minVal = steps[minpos / stepWidth];
    let maxVal = steps[maxpos / stepWidth];

    // UPDATE DROPDOWN                     
    updateDropdowns(minVal, maxVal);

    // FILTER PRODUCT WHILE DRAGING          
    filterProductsByRange(minVal, maxVal);


    let activeBox0 = document.getElementById("activeFilters0");
    let clear = document.getElementsByClassName("clearall")[0];

    // Check if both are default values
    if ((minVal === "0" || minVal === "") && (maxVal === "30000+" || maxVal === "")) {
        activeBox0.innerHTML = "";
        clear.innerHTML = "";
    } else {
        activeBox0.innerHTML = `<span class="active-tag" data-min="${minVal}" data-max="${maxVal}">
            ✕ ₹${minVal} - ₹${maxVal}
        </span>`;
        clear.innerHTML = "<span onclick='clearAll()'>CLEAR ALL</span>";
    }
}

// STOP DRAG
function stopDrag() {
    document.removeEventListener("mousemove", onDrag);
    document.removeEventListener("mouseup", stopDrag);
    isDragging = null;
}

// FILTER FUNCTION
function filterProductsByRange(minVal, maxVal) {
    const min = parseInt(minVal, 10);
    const max = (maxVal === "30000+") ? Infinity : parseInt(maxVal, 10);

    const filtered = products.filter(p => {
        const price = parseInt(p.price.replace(/[₹,]/g, ""), 10);
        return price >= min && price <= max;
    });

    // show clear button
    document.getElementById("priceclearid").style.display = "flex";
    document.getElementById("clearmainid").style.display = "flex";

    displayProducts(filtered);
}

function updateDropdowns(minVal, maxVal) {
    const minDropdown = document.getElementById("minPrice");
    const maxDropdown = document.getElementById("maxPrice");

    if (minDropdown) minDropdown.value = minVal;
    if (maxDropdown) maxDropdown.value = maxVal;
}






document.getElementById("minPrice").addEventListener("change", showClear);
document.getElementById("maxPrice").addEventListener("change", showClear);

function filterProductsByRange(minVal, maxVal) {
    const min = parseInt(minVal, 10);
    const max = (maxVal === "30000+") ? Infinity : parseInt(maxVal)

    const filtered = products.filter(p => {
        const price = parseInt(p.price.replace(/[₹,]/g, ""), 10);
        return price >= min && price <= max
    })
    showClear()
    displayProducts(filtered)
}
function showClear() {
    document.querySelector(".clearprice").style.display = "flex"
}

function clearrate() {
    document.querySelector(".clearprice").style.display = "none"
}




function last() {
    const maxDropdown = document.getElementById("maxPrice")
    maxDropdown.value = "30000+"
    const minDropdown = document.getElementById("minPrice")
    minDropdown.value = "0"

    document.getElementById("priceclearid").style.display = "none"

    filterbypricerange()
    displayProducts(products)
}

window.addEventListener("load", priceclear);



window.onload = function () {
    document.getElementById("clearmainid").style.display = "none";
}



       

                                   
        
 
          
 
                  
                                   
        
          
          
                        

  

 
 
             