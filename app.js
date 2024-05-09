$("#addTodo").click(function () {
    const inputTodo = $("input").val();
    $("#todoList").append("<il><input type = 'checkbox'>" + inputTodo + "</li>");

    $("input").val("");
});