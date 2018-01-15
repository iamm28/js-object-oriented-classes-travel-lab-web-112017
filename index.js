class Driver {
  constructor(name,startDate){
    this.name = name
    this.startDate = new Date(startDate)
  }
  yearsExperienceFromBeginningOf(year){
    let endDate = new Date(year, 1, 1)
    let totalYears = (endDate - this.startDate)/(365*24*60*60*1000)
    return parseInt(totalYears+1)
  }
}

class Route {
  constructor(beginningLocation,endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

    blocksTravelled() {
      let v;
      let h1;
      let h2;
      let h;
     let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    if ((this.beginningLocation.vertical - this.endingLocation.vertical) < 0) {
      v = this.endingLocation.vertical - this.beginningLocation.vertical
    } else {
      v = this.beginningLocation.vertical - this.endingLocation.vertical
    }

    for(let i=0; i< eastWest.length; i++){
      if (this.beginningLocation.horizontal === eastWest[i]) {
          h1 = i
      }
    }

    for(let j=0; j< eastWest.length; j++){
      if (this.endingLocation.horizontal === eastWest[j]) {
          h2 = j
      }
    }
    if (h1-h2 < 0) {
      h = h2-h1
    } else {
      h = h1-h2
    }
    return v + h
  }
  estimatedTime(peak) {
    return peak ? this.blocksTravelled()/2 : this.blocksTravelled()/3
  }
}
