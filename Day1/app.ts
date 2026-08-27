let btn = document.getElementById("btn")! as HTMLButtonElement;

let template = document.getElementById("model")! as HTMLTemplateElement;

clone = template.content.cloneNode(true);

btn.addEventListener("click", () => {
  document.body.appendChild(clone);
});
