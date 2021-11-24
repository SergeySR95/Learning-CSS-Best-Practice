// Двойное нажатие как в Инстаграмм
const post = document.querySelector(".post");
const likesE1 = document.querySelector(".likes");
const heart = document.querySelector(".heart-icon");

likesE1.innerText = "Пока нет ни одного лайка";

let counter = 0;

post.addEventListener("dblclick", () => {
  counter++;

  if (counter === 1) likesE1.innerText = counter + " лайк";
  else likesE1.innerText = counter + " лайка";

  heart.classList.add("animate-like");
  setTimeout(() => {
    heart.classList.remove("animate-like");
  }, 800);
});
