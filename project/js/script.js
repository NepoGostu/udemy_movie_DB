/* Задания на урок:

1. Удалить все рекламные блоки сот страницы (правая часть сайта)

2. Измениить жанр фильма, поменять "комедии" на "драма"

3. Изменить задний фон на изображение "img". Оно лежит в папке img

4. Список фильмов на странрице сформировать на основании данных из этого JS файла. Отсортировать по алфавиту

5.

6. Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" -
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

7. Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

8. При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

9. Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение:
"Добавляем любимый фильм"

10. Фильмы должны быть отсортированы по алфавиту */

'use strict';


document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            'Логан',
            'Лига справедливости',
            'Ла-Ла лэнд',
            'Одержимость',
            'Скотт Пилигримм против...',
        ]
    }

    const adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = document.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type = "checkbox"]');


    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value
        const favorite = checkbox.checked

        if(newFilm) {

            if(newFilm.length > 21) {
                newFilm = '${newFilm.substring(0,22)}...'
            }

            movieDB.movies.push(newFilm)
            sortArr(movieDB.movies)

            createMovieList(movieDB.movies, movieList)
        }
        event.target.reset()
    })


    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove()
        })
    }

    const makeChanges = () => {
        genre.textContent = 'драма'
        poster.style.backgroundImage = 'url("img/bg.jpg")'
    }

    const sortArr = (arr) => {
        arr.sort()
    }

    function createMovieList(films, parent) {
        movieList.innerHTML = '';
        films.forEach((film, i) => {
            parent.innerHTML +=   ` <li class="promo__interactive-item"> ${i + 1} ${film} ` +
                '                <div class="delete"></div>\n' +
                '        </li>'
        });
    }

    sortArr(movieDB.movies)
    makeChanges()
    deleteAdv(adv)
    createMovieList(movieDB.movies, movieList)
})




