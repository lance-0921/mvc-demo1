import './app3.css';
import $ from 'jquery';

const $rec = $('#app3 .rec')

$rec.on('click',()=>{
    $rec.toggleClass('active')
})