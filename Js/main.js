function getSiteName() {
    const url = document.location.pathname;
    let siteName = siteNames.default;
    for (let key in siteNames) {
        if (url.includes(key)){
            siteName = siteNames [key]
            console.log("Соответствие найдено. Устанавливаем имя страницы: " + siteName);
            break
        }
    }
    return siteName;
}

const siteNames = {
    "index": "Цены",
    "about": "Кто мы?",
    "friends": "Наши друзья",
    "order": "Форма заказа",
    "feedback": "Форма обратной связи",
    "contacts": "Наши контакты",
};

function getMenu() {
    const url = document.location.pathname;
    for (let key in menu) {
        if (url.includes(key)){
            menu = menues [key]
            console.log("Соответствие найдено. Устанавливаем имя страницы: " + menu);
            break
        }
    }
    return menu;
}

const menu = '<a href="index.html"> Главная </a> <a href="about.html">ОПИСАНИЕ КОМПАНИИ</a>' +
    '<a href="friends.html">ДОМАШНИЙ ДРУГ</a> <a href="order.html">ФОРМА ЗАКАЗА</a> ' +
    '<a href="feedback.html">ОБРАТНАЯ СВЯЗЬ</a> <a href="contacts.html">КОНТАКТЫ</a>'