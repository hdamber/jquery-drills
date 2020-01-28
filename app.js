// submit button with alert
$('#btnSubmit').on("click", function () {
    alert($("#someText").val());
});



// form with value alert
$("#submit").attr(function () {
    alert($("#someText").val())
});


// button enable and disable
$(function () {
    $('#btnSubmit').prop('disabled', true);
    $('#someText').keyup(function () {
        if ($(this).val() != '') {
            $('#btnSubmit').prop('disabled', false);
        }
    });
});



// create unorder list
let $someText = $('#someText');
let $btnSubmit = $('#btnSubmit');


$('<ul></ul>').appendTo('body');

//random color click FIX
    function getRandomColor(event) {
        let letters = '0123456789ABCDEF';
        let color = '#';

        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    
    function setRandomColor(event) {
        $(event.target).css("background-color", getRandomColor());
    }

$btnSubmit.click(function () {

    let li = $('<li></li>');


    li.click((e) => {
        setRandomColor(e)
    });

    li.append($($someText).val())
    li.appendTo('ul');

 // remove list item with a double click
   li.dblclick(function () {
        li.remove(li);
    });
   
});

 



// div element appended to the body and h2

// let $someText = $('#someText');
// let $btnSubmit = $('#btnSubmit');

// $('<div></div>').addClass('divClass').appendTo('body');
// $btnSubmit.click(function () {
//     $('<h2>' + $($someText).val() + '</h2>').appendTo('.divClass')
// });



//hover and border radius

// $(function() {
//     $('.divClass').hover(
//     function() {
//         $(this).css({
//             'background-color': '#b3b3ff',
//             'border-radius': '40px' })
//     }, function() {
//         $(this).css('background-color', '')
//     });
