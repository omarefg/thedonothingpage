export function Link({ title, onClick, children }) {
  const a = document.createElement('a');
  if (children) {
    a.appendChild(children);
  } else {
    a.innerText = title;
  }
  a.addEventListener('click', onClick);
  return a;
}
