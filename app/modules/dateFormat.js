export default function getDate(string){
   var stringArr = string.split(' ');
   var numArray = [];

   stringArr.forEach(function(item){
      if(parseInt(item)){
          numArray.push(item);
      }
   });

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!

    var yyyy = today.getFullYear();
    if(dd < 10){
        dd = '0' + dd;
    }
    if(mm < 10){
        mm = '0' + mm;
    }

    var date = numArray[0] + '-' + mm + '-' + yyyy;

   return date;
}
