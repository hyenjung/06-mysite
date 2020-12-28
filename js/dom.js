/**
 *  Javascript 11대 객체
 * 1. string
 * 2. Numder
 * 3. Boolean
 * 4, Undefined
 * 5. Null
 * 6. Global -전역
 * 7. Math - 수학
 * 8. Date - 시간과 날짜
 * 9. Array - 배열
 * 10. RegExp - 정규표현식
 * 10. Object - 객체
 */


var colors = ['red','orange','blue','pink','green'];

function onCreateBox() {
    var cnt = Number($("input[name='cnt']").val());
    for(var i=0,color; i<cnt; i++){
        color = Math.ceil(Math.random()*5)-1; 
        $(".wrapper").append('<div class="box '+colors[color]+'"></div>');
    }
}
function onResetBox() {
    $(".wrapper").empty();
}
$("#btCreate").click(onCreateBox);
$("#btReset").click(onResetBox);