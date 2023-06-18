function pillars(numPill, dist, width) {  
    if (numPill === 1) {
      return 0;
    }
    
    let totalDistance = (numPill - 1) * dist * 100;
    let totalWidth = (numPill - 2) * width;
    
    return totalDistance + totalWidth;
  }