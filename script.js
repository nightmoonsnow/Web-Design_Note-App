
$(document).ready(function(){
    // Toggle the content on click
    $('.accordion-title').click(function(){
        $(this).next('.accordion-content').slideToggle();
        $('.accordion-content').not($(this).next()).slideUp();
    });

    // Show delete button on hover
    $('.accordion-item').hover(
        function(){
            $(this).find('.delete-button').show();
        },
        function(){
            $(this).find('.delete-button').hide();
        }
    );

    // Delete the block on delete button click
    $('.delete-button').click(function(){
        $(this).closest('.accordion-item').remove();
    });
});