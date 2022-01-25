## Get all tasks
> Get https://todolistbysuyash.herokuapp.com/api/tasks/


    [
	{
		"_id": "61eebc65d43d907fcca74c1a",
		"title": "Do the clothes",
		"description": "Yoas",
		"date": "1615766400000",
		"assignedTo": "Aman",
		"priority": "Low",
		"duration": 30,
		"completed": false,
		"createdAt": "2022-01-24T14:49:09.093Z",
		"updatedAt": "2022-01-24T14:53:06.748Z",
		"__v": 0
	}
    ]


## Add Task
> Post https://todolistbysuyash.herokuapp.com/api/tasks/add

    {
	"title":"Title of the Task..",          // string
	"assignedTo":"Person name",             // string
	"priority":"High",                      // string "High" | "Low" | "Medium"
	"duration":60,                          // int in minutes
	"date":"2021-03-14",                    // string "yyyy-mm-dd"
	"completed":false,                      // boolean
	"description":"Description string"      // string
    }

## Delete Task
> DELETE https://todolistbysuyash.herokuapp.com/api/tasks/delete/TaskId

## Display Task by ID
> GET https://todolistbysuyash.herokuapp.com/api/tasks/TaskId

## Update Task

> PUT https://todolistbysuyash.herokuapp.com/api/tasks/update/TaskId

    {
	"title":"Title of the Task..",          // string
	"assignedTo":"Person name",             // string
	"priority":"High",                      // string "High" | "Low" | "Medium"
	"duration":60,                          // int in minutes
	"date":"2021-03-14",                    // string "yyyy-mm-dd"
	"completed":false,                      // boolean
	"description":"Description string"      // string
    }

## Get Completed Tasks 

> GET https://todolistbysuyash.herokuapp.com/api/tasks/completedTask/

## Get Completed Task with filters

### Date
> GET https://todolistbysuyash.herokuapp.com/api/tasks/completedTask/filter/date/
	{
		"date": "2021-04-11"
	}

### Priority 
> GET https://todolistbysuyash.herokuapp.com/api/tasks/completedTask/filter/priority/

	{         
	"priority":"High"  
    }

### Assigned 
> GET https://todolistbysuyash.herokuapp.com/api/tasks/completedTask/filter/assigned/

	{         
	"priority":"High"  
    }

### Date Range
> GET https://todolistbysuyash.herokuapp.com/api/tasks/completedTask/filter/dateRange/


	{         
	"from":"2022-12-14",
	"to":"2023-12-15"
    }





## Get Pending Tasks 

> GET https://todolistbysuyash.herokuapp.com/api/tasks/pendingTask/


## Get Pending Task with filters

### Date
> GET https://todolistbysuyash.herokuapp.com/api/tasks/pendingTask/filter/date/
	{
		"date": "2021-04-11"
	}

### Priority 
> GET https://todolistbysuyash.herokuapp.com/api/tasks/pendingTask/filter/priority/

	{         
	"priority":"High"  
    }

### Assigned 
> GET https://todolistbysuyash.herokuapp.com/api/tasks/pendingTask/filter/assigned/

	{         
	"priority":"High"  
    }

### Date Range
> GET https://todolistbysuyash.herokuapp.com/api/tasks/pendingTask/filter/dateRange/


	{         
	"from":"2022-12-14",
    "to":"2023-12-15"
    }
