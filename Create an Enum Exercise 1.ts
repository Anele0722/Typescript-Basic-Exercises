//1. Defining the tracfficlight enum as strings
enum TrafficLight {
    Red = "RED",
    Yellow = "YELLOW",
    Green = "GREEN"
}

//2. // Function to change colors every 10 seconds
function changeColor() {
    let currentColor = TrafficLight.Red; // initializes the currentColor variable to the initial state, which is Red.
    
// JavaScript function that repeatedly calls a function, with a fixed time delay between each call. Set to 10000 milliseconds (10 seconds).
    setInterval(() => {
        switch (currentColor) { //evaluate currentColor and perform actions based on its value.
            case TrafficLight.Red:
                console.log("Changing to Yellow");
                currentColor = TrafficLight.Yellow;
                break;
            case TrafficLight.Yellow:
                console.log("Changing to Green");
                currentColor = TrafficLight.Green;
                break;
            case TrafficLight.Green:
                console.log("Changing to Red");
                currentColor = TrafficLight.Red;
                break;
            default:   //The default case is a fallback
                break;
        }
    }, 10000); // 10 seconds interval
}

// Starting the color-changing process(Function Invocation)every 10 seconds.
changeColor();
