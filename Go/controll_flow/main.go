package main

import "fmt"

func main(){
	var a int;
	// var b int;
	// fmt.Scanln(&a,&b);
	// if a>b{
	// 	fmt.Println("Your'e Lucky");
	// }else{
	// 	fmt.Println("Sorry Better Luck Next Time");
	// };
	

	_,err := fmt.Scanln(&a);
	if err != nil{
		fmt.Println("No Input Detected\nPlease re-Run the programme and input a valid number")
	}

	switch {
	case a%2==0:
		fmt.Println("Your'e Lucky");
	case a%2!=0:
		fmt.Println("Sorry Better Luck Next Time");
	default:
		fmt.Println("Wrong Input")
	}
}