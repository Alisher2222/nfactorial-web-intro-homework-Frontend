let vehicle = {}
vehicle.brandName = "BMW";
vehicle.model = "X5";
vehicle.model = "M1";
delete vehicle.model;



let salaries = {
	Aroo: 100,
	Dalida: 160,
	Samat: 130
}
 let sum = 0;
 
 for(let i in salaries){
    sum+=salaries[i];
 }