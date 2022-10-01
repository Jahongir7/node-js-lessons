let courseName:string = 'Backend web development';
console.log(courseName);

let printNumbers = (start:number, end: number) => {
    let temp:string = '';
    if(start < end) {
        for(let i:number = start; i<=end; i++){
            temp +=`${i} `;
        }
        console.log(temp);
    }
    else{
        console.log("Invalid numbers");
        
    }
}

printNumbers(11,5)