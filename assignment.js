// Problem-1(kilometerToMeter) Solution:
function kilometerToMeter(kilometer){
    if(kilometer <= 0){
        return "Enter a valid value";
    }
    else{
        var result = kilometer * 1000; // 1 kilometer = 1000 meter;
        return result;
    };
};

// Problem-2(budgetCalculator) Solution:
function budgetCalculator(watch,phone,laptop){
  if(watch <= 0 && phone <= 0 && laptop <= 0){
      return "Enter a valid value";
  }
  else{
      var watch = watch * 50;
      var phone = phone * 100;
      var laptop = laptop * 500;
      var totalCost = watch + phone + laptop;
      return totalCost;
  };
};

// Problem-3(hotelCost) Solution:
function hotelCost(stayHotel){
var cost = 0;
if(stayHotel <= 10){
  cost = stayHotel * 100;
}
else if(stayHotel <= 20){
  var first10Days = 10 * 100;
  var remaining = stayHotel - 10;
  var second10Days = remaining * 80;
  cost = firstDays + secondDays;
}
else{
  var first10Days = 10 * 100;
  var second10Days = 10 * 80;
  var remaining = stayHotel - 20;
  var above20Days = remaining * 50;
  cost = first10Days + second10Days + above20Days;
};
  return cost;
};

//Problem-4(megaFriend) Solution:
var friend = ["abir","abdullah","robin","abdurrohim","ali"];
function megaFriend(arr){
var mega = arr[0];
  for (var i = 0; i < arr.length; i++){
      const element = arr[i];
      if( mega.length < element.length){
            mega = element;
      };
  };
  return mega;
};





