//Write a program that takes an array of days like "Mon", "Tue", and "Fri" and uses a switch statement to print what type of delivery is scheduled on each day.


const deliverySchedules = (days)=>{
    days.forEach(day =>{
        switch(day){
            case "Monday":
                console.log("Pizza delivery")
                break;
            case "Tuesday":
                console.log("Milk delivery")
                break;
            case "Friday":
                console.log("Flied rice delivery")
                break;
            default:
                console.log("no deliveries done on this day")                
        }
    })
}

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
deliverySchedules(days)


// Create a program that loops through an array of book statuses and prints "Ready to lend" if the status is "available" or "Checked out" if the status is "borrowed".


const bookStatus = (statuses)=>{
    statuses.forEach( status =>{
        switch(status){
            case "available":
                console.log("Ready to lend")
                break;
            case "borrowed":
                console.log("Checked out")
                break;
            default:
                console.log("Book not in store")   
                break;     
        }
    })
}

const statuses =["borrowed", "available", ""]
bookStatus(statuses)

//Given an array of customer ages, write a program that checks each age and prints "Adult" if the age is 18 or above, and "Minor" otherwise.


const customerAge = (ages)=>{
        ages.forEach( age =>{
            if(age >= 18){
                console.log("Adult")
            }
            else{
                console.log("Minor")
            }
        })
}

const ages = [12,54,34,23,21,18,5,45]
customerAge(ages)


//Write a program using a while loop that simulates a countdown of lives in a game starting from 5 and prints "You have X lives left" on each loop until it reaches 0.


const livesCountDown = ()=>{
        let lives = 5
        while(lives >= 0){
            console.log(`You have ${lives}`)
            lives--
        }
}

livesCountDown()

//Using a do...while loop, write a program that loops through an array of user feedback and prints each comment until the array is empty.


const userFeedback = (feedback)=>{

    feedback.forEach( feed =>{
    do{
        console.log({feed})
    }
    while( feed < feedback.length)
    })
    
}
const feedback = ["okay", "yes", "good", "bad", "fair"]
userFeedback(feedback)


//Write a program that loops through an array of user login statuses and prints "Welcome back!" if the user is "logged in" or "Please log in" otherwise.


const loginStatus = (loginStatuses)=>{
    loginStatuses.forEach(status =>{
        switch(status){
            case "logged in":
                console.log("Welcome back")
                break;
            default:
                console.log("Please login");
                break;    
        }
    })
}
const loginStatuses = ["logged in", "not logged in"]
loginStatus(loginStatuses)

// Write a program that processes an array of support ticket priorities using a switch statement to print how quickly each one should be addressed based on whether the priority is "low", "medium", or "high".


const supportTicketPriorities = (priorities) =>{
    for(let i = 0; i<= priorities.length; i++){
        switch(priorities[i]){
            case "low":
                console.log("This ticket should be addressed the last")
                break;
            case "medium":
                console.log("This ticket should be addressed soon")
                break;
            case "high":
                console.log("This ticket should be addressed immediately")
                break;
            default:
                console.log("No a priority")            
        }
    }
}
const priorities = ["high", "low","medium", "very high"]
supportTicketPriorities(priorities)

// Create a while loop that simulates a quiz countdown from 10 seconds, printing each number until it reaches 0.



const quizCountDown = ()=>{
    let seconds = 10
    while(seconds >= 0){
        console.log(`You have ${seconds}`)
        seconds--
    }
}

quizCountDown()