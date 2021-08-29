import './app4.css'
import $ from 'jquery'

const $trans = $('#app4 .trans')

$trans.on('click',()=>{
    
    $trans.toggleClass('active')
})