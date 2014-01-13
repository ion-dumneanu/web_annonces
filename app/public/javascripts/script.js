$('document').ready(function() {
    $('#delete-multiple-items').click(function() {
        $('#delete-multiple-items-form').submit();
    });

    $('.item-check-input').change(function() {
        if (this.checked === true) {
            $(this).parent().css('background-color', '#c02835');
        } else {
            $(this).parent().css('background-color', '#ffe3e2');
        }
    });
});

function view_item(id)
{
    window.open('includes/pages/view.php?id=' + id, '', 'width=600,height=600');

}