class Players {
    name: string;
    ball:[number,number,number,number,number,number]
    
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
  
  const Players1= new Players('Accounting');
  
  Players1.describe();
  Players1.hit();
  Players1.totalrun();
  
//   const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
  
//   accountingCopy.describe();






