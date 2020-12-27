export function Link({ title, onClick }) {
  const li = document.createElement('li');
  const button = document.createElement('button');
  button.innerText = title;
  button.addEventListener('click', onClick);
  li.appendChild(button);
  return li;
}
