export function Badge({ title }) {
  const badge = document.createElement('span');
  const text = document.createElement('p');
  text.innerText = title;

  badge.classList.add(
    'rounded-full',
    'h-28',
    'w-28',
    'inline-flex',
    'items-center',
    'justify-center',
    'bg-purple-900',
    'm-2.5',
    'select-none',
  );

  text.classList.add('text-white', 'text-center', 'select-none');

  badge.appendChild(text);

  return badge;
}
