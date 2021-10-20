export const selector = document.getElementById('pages__change').addEventListener('click', () => {
    document.querySelector('.page__calc').classList.toggle('invisible');
    document.querySelector('.page__timer').classList.toggle('visible');
});