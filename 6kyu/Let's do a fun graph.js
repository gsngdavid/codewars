function graph(arr) {
  
    if(arr.length === 0) {
      return '';
    }

    let graph = "";
    
    const greatest = arr.reduce((grt, cur) => cur > grt ? cur : grt);
    const rows = greatest;
    const cols = arr.length;
    
    for(let i = rows; i >= 0; i--) {
        let rowLine = "";
      for(let j = 0; j < cols; j++) {
              
        if(arr[j] > i) {
          rowLine += "|    |";
        }
        if(arr[j] < i) {
          rowLine += "......";
        }
        if(arr[j] === i) {
          rowLine += " ____ ";
        }
        
      }
      i === greatest ? rowLine += ` ^ ${i}\n` : rowLine += ` | ${i}\n`;
      graph += rowLine;
    }

    return graph.trimEnd();
}