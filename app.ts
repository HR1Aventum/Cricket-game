class Players {
    name: string;
    ball:number[]=[];
  
    constructor(n: string) {
      this.name = n;
    }
  
    describe(this: Players) {
      console.log('Department: ' + this.name);
    }
    hit(){
        let run = Math.floor(Math.random()*7);
        this.ball.push(run);
    }
    totalrun(){
        console.log(this.ball.length);
        console.log(this.ball)
    }
  }
  
  const accounting = new Players('Accounting');
  
  accounting.describe();
  accounting.hit();
  accounting.totalrun();
  
//   const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
  
//   accountingCopy.describe();






