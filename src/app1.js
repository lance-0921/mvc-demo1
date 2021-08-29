import '/app1.css';
import $ from "jquery";

const $btn1 = $('#btnAdd')
const $btn2 = $('#btnReduce')
const $btn3 = $('#btnMultiply')
const $btn4 = $('#btnDivide')
const $number = $('#number')

const n = localStorage.getItem('n')   //getItem() 作为 Storage 接口的方法，接受一个键名（key name）作为参数，并返回对应键名的值（key's value）
$number.text(n || 100)

$btn1.on('click',()=>{
    let n = parseInt($number.text()) //parseInt把字符串 [ 参数 string 的值] 解析成整数
    n +=1
    localStorage.setItem('n',n)
    $number.text(n)
});

$btn2.on('click',()=>{
    let n = parseInt($number.text()) //parseInt把字符串 [ 参数 string 的值] 解析成整数
    n -=1
    localStorage.setItem('n',n)
    $number.text(n)
});

$btn3.on('click',()=>{
    let n = parseInt($number.text()) //parseInt把字符串 [ 参数 string 的值] 解析成整数
    n *=2
    localStorage.setItem('n',n)
    $number.text(n)
});

$btn4.on('click',()=>{
    let n = parseInt($number.text()) //parseInt把字符串 [ 参数 string 的值] 解析成整数
    n /=2
    localStorage.setItem('n',n)
    $number.text(n)
});

