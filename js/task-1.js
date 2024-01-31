const UlItem = document.querySelectorAll("ul#categories > li.item");

console.log(`Number of categories:${UlItem.length}`);

UlItem.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(
    `Elements ${item.firstElementChild.nextElementSibling.children.length}`
  );
});
