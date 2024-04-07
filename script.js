document.addEventListener("DOMContentLoaded", function () {
  const yesButton = document.querySelector(".button");
  const noButton = document.querySelector(".button__negative");
  const textContainer = document.querySelector(".text");

  yesButton.addEventListener("click", function () {
    textContainer.innerHTML = `<h2>Pinguuuuu I love you so much! Words cant describe the love I have for you. I hope we can always stay besties like this and always support eachother through thick and thin. You have always been there for me and I hope to always be there for you too. You're not just a friend but a soulmate, someone who understands me like no one else. Every moment spent with you is a treasure and I will always cherish it.Thank you for everything you've done for me. I love you my bestie. Happy 2nd year anninversay to us. Here's to moreeeee! </h2><img src="images/cat-02.gif" alt="Yes Image" class="img-fluid" />`;
  });

  noButton.addEventListener("click", function () {
    textContainer.innerHTML = `<h2> Does not matter you are only. Kothi ping. SAY YES! </h2><img src="images/cat-03.gif" alt="No Image" class="img-fluid" />`;
  });
});
