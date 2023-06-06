const unreadMessages = document.querySelectorAll(".unread");
const unread = document.querySelector("#title-number");
const markAll = document.querySelector("#mark-all");

unread.innerText = unreadMessages.length;

unreadMessages.forEach((message) => {
    message.addEventListener("click", () => {
        message.classList.remove("unread");
        const newUnreadMessages = document.querySelectorAll(".unread");
        unread.innerText = newUnreadMessages.length;
    })
})

markAll.addEventListener("click", () => {
    unreadMessages.forEach((message) => {
        message.classList.remove("unread")
    })
    const newUnreadMessages = document.querySelectorAll(".unread");
    unread.innerText = newUnreadMessages.length;
})