import '../styles/main.css';

document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('button');

  button.addEventListener('click', () => {
    console.info('Click 🖱');
  });
});
