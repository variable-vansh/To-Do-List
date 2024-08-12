# To-Do-List

<!-- am I making a todo list to make a todo list? LOL -->

- use webpack
- todos objects --> dynamically created  using factories or constructors/classes
- a todo item has: title, description, dueDate, priority
    - optional: notes or checklist
- projecs are lists of todos
- user decides what task goes to which project
- there is a default project, where all unmarked tasks go
- user should be a able to create new projects
- application logic is separated: creating, marking, changing priority, etc in separate modules
- UI inspiration: https://todoist.com/, functionality:
    - view all projects
    - view all todos, in each project
    - expand a single todo to see/edit its details
    - delete a todo
- Look into using this npm library: https://github.com/date-fns/date-fns (for formatting and manipulating dates and times)
- see for how will storage work, currently on refreshing the page, the data disappears
    - checkout Web Storage API: https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API 
    - a function saves projects/todos to localStorage every time new project/todo is created
    - another function looks for that data in localStorage when page is loaded
    - be able to handle empty Web Storage
    - you can inspect data saved in localStorage using DevTools
    - localStorage uses JSON to send and store data, functions cannot be added to JSON, so figure out how they will be added again when data is fetched form localStorage