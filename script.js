"use strict";
const trainProject = {
  stations: [
    "Karachi Cantt",
    "Landhi",
    "Hyderabad",
    "Tando Adam",
    "Padidan",
    "Rohri",
    "Ghotki",
    "Sadikabad",
    "Rahim Yar Khan",
    "Khanpur",
    "Bahawalpur",
    "Multan Cantt",
    "Khanewal",
    "Abdul Hakim",
    "Shorkot Cantt",
    "Toba Tek Singh",
    "Gojra",
    "Faisalabad",
    "Sangla Hill",
    "Sukheke",
    "Hafizabad",
    "Alipur Chattha",
    "Wazirabad",
    "Gujrat",
    "Lala Musa",
    "Jhelum",
    "Dina",
    "Gujar Khan",
    "Chak Lala",
    "Rawalpindi",
  ],
  checkPoint: "Faisalabad",
  pickUp: "",
  destination: "",
  location: function (to) {
    if (trainProject.stations.includes(to)) {
      const location =
        trainProject.stations.indexOf(to) > 18 ? "after" : "before";
      console.log(location);
      return location;
    } else {
      console.log("enter a valid location");
    }
  },
  caragies: [
    72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72,
  ],
  carNotReservedAfter : function(){
    for(i=0; i < 12; i++)
    this.caragies[i] < 72 ? return [this.caragies[i]] ;

  } 
};
trainProject.pickUp = prompt("enter your pick up point");
trainProject.destination = prompt("enter your destination point");
const location = trainProject.location(trainProject.destination);

if (location === "after") {
  caragies.
}
