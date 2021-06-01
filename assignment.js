//  https://github.com/JannatunNurMimi/assignment-basic-js.git



function kilometerToMeter(kilometer){
    if(kilometer>0){
    var meter= kilometer*1000;
    }
    return meter;
    
}


function budgetCalculator(watch,phone,laptop){

    if(watch&&phone&&laptop >0){
     var watch_value =50;
     var phone_value =100;
     var laptop_value =500;
     var total_watch = watch*watch_value;
     var total_phone =phone*phone_value;
     var total_laptop =laptop*laptop_value;

    var total =total_watch + total_phone + total_laptop;
    }
    return total;
}



function hotelCost(days){
 
   var total = 0;

    if(days<=10){
    var cost_level1 =100;
    var total = cost_level1*days;
    }

   else if(days<=20){
    var first_part =  10*100; 
    var cost_level2 = 80;
    var remain_days = days-10;
    var second_part = cost_level2*remain_days;
    total = first_part + second_part;
    
    }
    else{
       var  first_part = 10*100;
       var second_part = 10*80;

      var cost_level3 =50;
      var remain_days2 = days-20;
      var third_part = cost_level3*remain_days2;
      var total = first_part + second_part + third_part;
    }
  
   return total;

}





function megaFriend(friendsName){

    var mega_friend_name ='';

    for (var i = 0; i < friendsName.length; i++) {

        if (mega_friend_name.length < friendsName[i].length) {
            mega_friend_name = friendsName[i];
        }
    }
   
    return mega_friend_name;
  }

