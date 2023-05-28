
        function addTask() {
            const taskInput = document.getElementById("taskInput");
            var deadlineInput = document.getElementById("deadlineInput");

            var task = taskInput.value.trim();//קולט למשתנה אחר את מה שהוזן בתיבת הטקסט ומסיר רווחים
            var taskList = document.getElementById("taskList")//הוספת האובייקט 
            var task = taskInput.value;
            var deadline = deadlineInput.value;

            if (task !== "" && task.length <= 30) { //במידה והקלט תקין
                const listItem = document.createElement("li"); //יצירת אובייקט מסוג רשימה
                
                const text = document.createTextNode(task + " \u00A0\u00A0 " + deadline);
                const tx = document.createElement("div");
                tx.className="tx";
                tx.append(text);
                listItem.appendChild(tx);
                
            
//--------------------------------------------------------------------------------------------------------

                const buttons = document.createElement("div");
                buttons.className="buttons";
                
                //Delete button
                const deleteButton = document.createElement("button");//יצירת כפתור מחיקה
                deleteButton.textContent = "Delete"; //הזנת שם הכפתור

                //Down button
                const downButton = document.createElement("button");
                downButton.textContent = "Down"

                //Up button
                const upButton = document.createElement("button");
                upButton.textContent = "Up"
                

                const checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                buttons.append(deleteButton,upButton,downButton,checkbox);

//--------------------------------------------------------------------------------------------------------
               checkbox.addEventListener("click",function(){
                listItem.remove();               });
               
                deleteButton.addEventListener("click", function () {//Delete
                    listItem.remove();
                });
                downButton.addEventListener("click", function () {
                    var nextTaskInList = listItem.nextElementSibling; //שומר אצלו את הפנייה למשימה שאחריו ברשימה
                    if (nextTaskInList) {//בודק אם קיימת משימה אחריה - במידה ולא, לא יעשה כלום
                      listItem.parentNode.insertBefore(nextTaskInList, listItem);//העברת המשימה הבאה לפני המשימה הנוכחית שעליה לחצנו
                    }
                  });
                upButton.addEventListener("click", function () {//Up
                    var beforeTaskList = listItem.previousElementSibling;//שומר אצלו את הפנייה למשימה שלפניו
                    if(beforeTaskList) //בודק אם קיימת משימה לפניו - במידה ולא, לא יעשה כלום
                    listItem.parentNode.insertBefore(listItem,beforeTaskList);//
                });
                
                
                listItem.appendChild(buttons);
                taskList.appendChild(listItem);
                
                
                taskInput.value = "" //מנקה את שורת הזנת המשימה
                deadlineInput.value = "";
            }
        }
    
    