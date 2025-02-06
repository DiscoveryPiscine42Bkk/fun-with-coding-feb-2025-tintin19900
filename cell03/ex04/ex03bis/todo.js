$(document).ready(function () {
    loadTodos();

    $("#newButton").click(function () {
        const todoText = prompt("Enter a new to-do:");
        if (todoText && todoText.trim() !== "") addTodo(todoText.trim());
    });

    function createTodo(text) {
        const $todoDiv = $("<div>").addClass("todo").text(text);

        $todoDiv.click(function () {
            if (confirm("Are you sure you want to delete this to-do?")) {
                $(this).remove();
                saveTodos();
            }
        });

        return $todoDiv;
    }

    function addTodo(todoText) {
        const $ftList = $("#ft_list");
        const $todoDiv = createTodo(todoText);
        $ftList.prepend($todoDiv);
        saveTodos();
    }

    function saveTodos() {
        const todos = $("#ft_list .todo").map(function () {
            return $(this).text();
        }).get();

        document.cookie = `todos=${encodeURIComponent(JSON.stringify(todos))}; path=/; max-age=31536000`;
    }

    function loadTodos() {
        const cookies = document.cookie.split("; ");
        const todoCookie = cookies.find(cookie => cookie.startsWith("todos="));

        if (todoCookie) {
            try {
                const todos = JSON.parse(decodeURIComponent(todoCookie.split("=")[1]));

                todos.reverse().forEach(todoText => {
                    $("#ft_list").prepend(createTodo(todoText));
                });
            } catch (error) {
                console.error("Error parsing cookie:", error);
            }
        }
    }
});
