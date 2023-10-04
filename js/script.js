let CINEMA_LIBRARY = {

    "Барби": {
        "year":     2023,
        "country":  ["США", "Великобритания"],
        "genre":    ["Комедия", "Приключения", "Фэнтези"],
        "filename": "/films/2023/barbie.mp4"
    },

    "Оппенгеймер": {
        "year":     2023,
        "country":  ["США", "Великобритания"],
        "genre":    ["Биография", "Драма", "История"],
        "filename": "/films/2023/oppenheimer.mp4"
    },

    "Человек-паук: Паутина вселенных": {
        "year":     2023,
        "country":  ["США"],
        "genre":    ["Мультфильм", "Фантастика", "Фэнтези", "Боевик", "Приключения"],
        "filename": "/films/2023/spider_man_across_the_spider_verse.mp4"
    },

};

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let data = new FormData(form);
    data = Object.fromEntries(data.entries());
    data = JSON.stringify(data);

    const debugP = document.createElement("p");
    debugP.textContent = data;
    form.appendChild(debugP);
});
