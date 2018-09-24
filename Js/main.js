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