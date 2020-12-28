let employees= [
    {
      "Name": "Alan",
      "Role": "Manager",
      "HireDate": new Date('2019-01-01'),
      "Email": "alan@gmail.com",
      "online": true
    },
    {
        "Name": "Sarah",
        "Role": "CTO",
        "HireDate": new Date('2020-01-01'),
        "Email": "Sarah@gmail.com",
        "online": false
    },
    {
        "Name": "Ryan",
        "Role": "CEO",
        "HireDate": new Date('2015-01-01'),
        "Email": "Ryan@gmail.com",
        "online": false
      
    },

    {
        "Name": "Philip",
        "Role": "Developer",
        "HireDate": new Date('2016-01-01'),
        "Email": "Philip@gmail.com",
        "online": true
      
    },
    {
        "Name": "Tracy",
        "Role": "Developer",
        "HireDate": new Date('2018-01-01'),
        "Email": "Tracy@gmail.com",
        "online": true
      
    },

    {
        "Name": "Trevor",
        "Role": "Developer",
        "HireDate": new Date('2018-01-01'),
        "Email": "Trevor@gmail.com",
        "online": true
      
    }
   
  ];
  
  function manipulateArray(arr) {
    
    //returns only the first matching item from the array. Introduced in ES6
    const onlineEmpFind = employees.find(onlineEmp => onlineEmp.online === true); 
     // console.log(onlineEmpFind);
    
    //returns all the items matching the criteria.
    const onlineEmpFilter = employees.filter(onlineEmp => onlineEmp.online === true); 
   // console.log(onlineEmpFilter);

   //returns the first item matching the criteria by using filter(). Will return undefined if its empty. 
   //even though shift mutates the array, it mutated the array returned by filter, not the original one
   const onlineEmpFilter2 = employees.filter(onlineEmp => onlineEmp.online === true).shift(); 
   // console.log(onlineEmpFilter);

    // sort() is a callback function that takes 2 parameters.
    //Also sorts the original array - both sortHiringDate and employee array will be sorted.
    // const sortHiringDate = employees.sort((e1, e2) => e2.HireDate - e1.HireDate ); 
    // console.log(employees); //sorted

    //To overcome sort() cons, we can use slice to make a copy of original array before sorting it 
    const sortHiringDate1 = employees.slice().sort((e1, e2) => e2.HireDate - e1.HireDate ); 
    //console.log(employees); //not sorted
   // console.log(sortHiringDate1);

    //map DS can assign values to key. Without looping or editing original array, we can perform an operation on every element.
    //returns array of same length of as original array. Map supports immutability - original array is untouched
    const empDept = employees.map( employees=>{
            let deptProp = {
                "Role": employees.Role,
                "Dept": "IT"
              };
                if(employees.Role == "Developer")          
                deptProp['Dept'] = "IT";
                else
                deptProp['Dept'] = "Management";
                return deptProp;
           
        });
       // console.log(empDept );
        
      // How to add a new object at a specified spot in array.  
      //Push() =>adds to the end of an array. 
      //unshift() => adds to the beginning of an array.
      let newemp2 = {
        "Name": "Dan",
        "Role": "Developer",
        "HireDate": new Date('2016-01-01'),
        "Email": "Dan@gmail.com",
        "online": true
      }
      employees.splice(4, 0, newemp2); //parameters - index, # of items to remove, items to add


      //returns single value that results from reduction.Can be used for grouping of objects, counting instances
      //grouping peoples online
      function groupBy(objectArray, property) {
        return objectArray.reduce(function (acc, obj) {
          let key = obj[property]
          if (!acc[key]) {
            acc[key] = []
          }
          acc[key].push(obj)
          return acc
        }, {})
      }
      let onlineGroup = groupBy(employees, 'online')
       // console.log(onlineGroup);

        //consider a situation you need to use filter() and map() --> you can replace it with reduce(). since it is more efficient
        //traverses the loop only once.
       
        const devOnline = employees.filter(onlineEmp => onlineEmp.Role === "Developer").map(onlineemp =>{
          if( onlineemp.online === true)
          {
            return "online";
          }
          else
          return "offline";
        });
        console.log("filter and map " + devOnline);

        const devOnline2 = employees.reduce((accumulator, currentValue) => {
          if (currentValue.Role === "Developer" && currentValue.online === true) {
        
            accumulator.push(currentValue.online);
          }
          return accumulator;
        },[]);
        console.log("reduce " + devOnline2);



     }

  

  
  
manipulateArray(employees);