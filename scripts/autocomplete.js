function doAutocomplete(searchField) {
    if(searchField.length < 3) 
        $('#autocompleteBox').hide();
    else 
    {
        $.post("autocomplete.php", {queryString: searchField}, function(data){
           if(data.length > 0) 
           {
                $('#autocompleteBox').show();
                $('#autocompleteList').html(data);
            }
        });
    }
}

function selectValue(value) {
    $('#searchField').val(value);
    setTimeout("$('#autocompleteBox').hide();", 200);
}