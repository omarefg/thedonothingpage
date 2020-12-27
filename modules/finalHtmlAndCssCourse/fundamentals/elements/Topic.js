import { Badge } from './Badge.js';

export function Topic({ title, content }) {
  const topic = document.createElement('div');
  const topicContent = document.createElement('div');
  const topicTitle = document.createElement('h1');

  topic.classList.add(
    'inline-flex',
    'flex-col',
    'justify-center',
    'items-center',
    'my-4',
    'w-full',
    'sm:w-1/3',
  );
  topicContent.classList.add(
    'flex',
    'justify-center',
    'flex-wrap',
  );
  topicTitle.classList.add('my-4');

  topicTitle.innerText = title;

  content.forEach((str) => {
    const badge = Badge({ title: str });
    topicContent.appendChild(badge);
  });

  topic.appendChild(topicTitle);
  topic.appendChild(topicContent);

  return topic;
}
