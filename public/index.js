/**
 * Created by Teddy on 4/14/2016.
 */
function getOutput() {
    var stringInput = $("#inputStr").val();

    $.ajax({
        url: 'solution/'+stringInput,
        success: function(data) {
            $("#output").html("Result: " + data);
        },
        dataType: "text",
        type:'GET'
    });

}
