$(document).ready(function() {
    enableSelectBoxes();
});

function enableSelectBoxes(){
    $('div.selectBox').each(function(){
        $(this).children('span.selected').html($(this).children('div.selectOptions').children('span.selectOption:first').html());
        $(this).attr('value',$(this).children('div.selectOptions').children('span.selectOption:first').attr('value'));
 
        $(this).children('span.selected,span.selectArrow').click(function(){
            if($(this).parent().children('div.selectOptions').css('display') == 'none')
            {
                $(this).parent().children('div.selectOptions').css('display','block');
            }
            else
            {
                $(this).parent().children('div.selectOptions').css('display','none');
            }
        });
 
        $(this).find('span.selectOption').click(function(){
            $(this).parent().css('display','none');
            $(this).closest('div.selectBox').attr('value',$(this).attr('value'));
            $(this).parent().siblings('span.selected').html($(this).html());
        });
    });				
}

// -------------------Sort ---------------------------------------------->
const sortIcon = document.querySelector('.sort-icon');
const sortValue = document.querySelector('.sort-value');
const sortList = document.querySelector('.sort-list');
const sortListItems = document.querySelectorAll('.sort-list__item');

sortValue.addEventListener('click', () => {
    sortList.classList.toggle('_open-list');
    sortIcon.classList.toggle('sort-clicked-icon');
});

sortListItems.forEach(el => {
    el.addEventListener('click', (event) => {
        sortValue.textContent = event.target.textContent; 
        sortList.classList.remove('_open')
    })
})



// ---------------- Questions-section --------------------------------->
const questionText = document.querySelectorAll('.questions-popup-wrapper');
const questionTitle = document.querySelectorAll('.question-item__title');
const questionIcon = document.querySelectorAll('.question-item__icon');

questionIcon.forEach(el => {
    el.addEventListener('click', () => {
    el.classList.toggle('questions-item__icon-click');
        questionText.forEach(element => {
            if(element.id === el.id){
                element.classList.toggle('_open');
                
            }
        });
        questionTitle.forEach(title => {
            const titleText = title.textContent
            if(title.id === el.id){
                title.classList.toggle('_open-title'); 
            }
        });
    });
});
