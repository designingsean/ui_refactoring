$(function() {
    // Finds each required="required" form element and checks their value.
    // If value is empty, add class to parent element and change listener to input.
    // Change listener will remove class parent and itself from input when fired.
    $('#submit_button').click(function(e) {
        e.preventDefault();
        $.each($('[required]'), function(key, field) {
            var $field = $(field);
            var $parent = $field.parent('div');
            if (field.value === '') {
                $parent.addClass('is-required');
                $field.one('change', function(e) {
                    e.preventDefault();
                    $parent.removeClass('is-required');
                });
            }
        });
    });
});