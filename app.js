const tasks = [];
const options = {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric",
};

let taskName = document.getElementById("taskName");
let taskDesc = document.getElementById("taskDesc");
let dueDate = document.getElementById("dueDate");

let taskCard = document.getElementById("flexContainer");

let card1Content = document.getElementById("card1Content");

taskCard.style.display = "none";

let warningAlert = document.getElementById("warningAlert");

renderTasks = () => {
  taskCard.innerHTML = "";
  tasks.map((task) => {
    let flexContainer = document.createElement("div");

    taskCard.appendChild(flexContainer);

    let checkboxDiv = document.createElement("div");
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkboxDiv.appendChild(checkbox);

    let taskDetails = document.createElement("div");
    let tasksName = document.createElement("p");
    let tasksDescription = document.createElement("p");
    let tasksTime = document.createElement("p");

    taskDetails.appendChild(tasksName);
    taskDetails.appendChild(tasksDescription);
    taskDetails.appendChild(tasksTime);

    flexContainer.appendChild(checkboxDiv);
    flexContainer.appendChild(taskDetails);
    flexContainer.classList.add("flex");

    tasksName.innerText = task.name;
    tasksDescription.innerText = task.desc;

    let dateToFormat = new Date(task.time);
    let newDate = dateToFormat.toLocaleTimeString("en-us", options);

    tasksTime.innerText = newDate;
    tasksTime.style.color = "red";

    checkBoxCheck = () => {
      if (checkbox.checked == true) {
        taskDetails.classList.add("tasks-bg");
      } else {
        taskDetails.classList.remove("tasks-bg");
      }
    };

    checkbox.onclick = () => {
      checkBoxCheck();
    };

    taskName.value = "";
    taskDesc.value = "";
    dueDate.value = "";
  });
};

warning = () => {
  warningAlert.style.display = "inline-block";
};

addTask = () => {
  let taskObj = {
    name: taskName.value,
    desc: taskDesc.value,
    time: dueDate.value,
  };

  if (taskName.value == "") {
    warning();
  } else {
    tasks.push(taskObj);
    renderTasks();
    warningAlert.style.display = "none";
    card1Content.style.display = "none";
    taskCard.style.display = "block";
  }
};
