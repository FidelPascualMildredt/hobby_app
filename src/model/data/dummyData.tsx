
import { Category, Hobby } from '../classes/Category';
export const Categories = [
    new Category('1','Deportes','#0085C7'),
    new Category('2','Video Jugos','#FF8000'),
    new Category('3','Comidas','#FFB6C1'),
    new Category('4','Idiomas','#00C706'),
    new Category('5','Juego de mesa','#800080')

];

export const Hobbies = [
    new Hobby('1',['1','2'],'Halo 6',
    'https://i.pinimg.com/564x/aa/00/aa0095fed0b4cdffe16e435aad165e22.jpg',
    ['Concentracion']),
    new Hobby('2',['1','2'],
    'Correr',
    'https://fotografias.correryfitness.com/clipping/cmsimages01/2019/09/23/AE357C4B-E3AC-4DAE-B918-7C346BF5CA40/58.jpg',
    ['Concentracion','Condicion'])
];