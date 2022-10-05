export class MathUtil {
    public static printMathTable(value:number):string{
        let tempStr:string = '';
        for(let i:number = 0; i<=10; i++){
            tempStr += `${value} * ${i} = ${value * i } \n`
        }
        return tempStr;
    }
}