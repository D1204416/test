let img_url = {
    "旺財": "dog.jpg",
    "天網灰灰": "graycat.png",
    "白冰冰": "whitedog.png",
    "黃珠格格": "orangecat.png",
    "金魚": "goldfish.png",
    "五阿哥": "bird.png",
    "小花": "flowercat.png",
    "跳跳": "rabbit.png",

};


let animals = [
    "Dog 旺財 2024/07/06 reward:9000",
    "Cat 天網灰灰 2024/05/06 reward:9000",
    "WhiteDog 白冰冰 2024/08/05 reward:8000",
    "Bird 黃珠格格 2024/03/12 reward:5000",
    "Fish 金魚 2024/04/22 reward:3000",
    "bird 五阿哥 2024/09/01 reward:8500",
    "Cat 小花 2024/02/14 reward:7500",
    "Rabbit 跳跳 2024/01/30 reward:6000",

];


// 解析 animals 陣列並生成 animals_list
let animals_list = animals.map(item => {
    let [type, name, date, reward] = item.split(' ');
    let rewardAmount = parseInt(reward.split(':')[1]);
    return {
        type,
        name,
        date,
        reward: rewardAmount,
        img: img_url[name]
    };
});

console.log("Initial animals_list:");
console.log(animals_list);

// (2) 依據寵物種類的名稱來排序
let sortedByType = [...animals_list].sort((a, b) => a.type.localeCompare(b.type));
console.log("Sorted by type:");
console.log(sortedByType);

// (3) 依據reward的金額來排序
let sortedByReward = [...animals_list].sort((a, b) => b.reward - a.reward);
console.log("Sorted by reward:");
console.log(sortedByReward);

// (4) 依據時間的大小來排序
let sortedByDate = [...animals_list].sort((a, b) => new Date(a.date) - new Date(b.date));
console.log("Sorted by date:");
console.log(sortedByDate);


// 第三題
// 3-1. 由JS渲染畫面到html
function show() {
    let row = "<div class=\"row\">";
    let str = "";
    for (let i = 0; i < 8; i++) {
        const animal = animals_list[i].name;
        const img = animals_list[i].img;
        const type = animals_list[i].type;
        const date = animals_list[i].date;
        const reward = animals_list[i].reward;

        const card = `<div class="col-sm-6 col-md-4 col-lg-3 card">`;
        const cardBodyDiv = `<div class="card-body d-flex flex-column text-center">`;
        const cardTitle = `<h5 class="card-title">${animal}</h5>`;
        const imgTag = `<img class="card-img" src="/img/${img}" alt="Card image">`;
        const typeDiv = `<div class="card-text">Type: ${type}</div>`;
        const dateDiv = `<div class="card-text">Date: ${date}</div>`;
        const rewardDiv = `<div class="card-text">Reward: ${reward}</div>`;

        str += card + cardBodyDiv + cardTitle + imgTag + typeDiv + dateDiv + rewardDiv + '</div>' + '</div>' ;
    }

    document.getElementById("medals").innerHTML = row + str + '</div>';
}

show();


// 寵物種類名稱排序按鈕
// function typeSort() {
//     animals_list.sort((a, b) => a.type.localeCompare(b.type));  // 對字串做排序
//     show();
// }

// 獎金金額排序按鈕
// function rewardSort() {
//     animals_list.sort((a, b) => b.reward - a.reward);  // 由大而小
//     show();
// }

// 日期排序按鈕
// function dateSort() {
//     animals_list.sort((a, b) => new Date(a.date) - new Date(b.date));  // 由小到大
//     show();
// }


function typeSort() {
    let len = animals_list.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (animals_list[j].type.localeCompare(animals_list[j + 1].type) > 0) {
                let temp = animals_list[j];
                animals_list[j] = animals_list[j + 1];
                animals_list[j + 1] = temp;
            }
        }
    }
    show();
}


function rewardSort() {
    let len = animals_list.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (animals_list[j].reward < animals_list[j + 1].reward) {
                let temp = animals_list[j];
                animals_list[j] = animals_list[j + 1];
                animals_list[j + 1] = temp;
            }
        }
    }
    show();
}


function dateSort() {
    let len = animals_list.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (new Date(animals_list[j].date) < new Date(animals_list[j + 1].date)) {
                let temp = animals_list[j];
                animals_list[j] = animals_list[j + 1];
                animals_list[j + 1] = temp;
            }
        }
    }
    show();
}