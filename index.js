// Câu 1

// SƠ ĐỒ 3 KHỐI

// Input:ngày, tháng ,năm

// Process :1 lấy Input
// xác định ngày tháng năm tiếp theo và trước đó 
// in ket qua 

// Output :ngày tháng năm trước hoặc sau đó 

var day=1
var month=12
var year=2010

var nextday=day+1;   
var nextmonth=month;
var nextyear=year;

var lastday=day-1
var lastmonth=month
var lastyear=year

// var next_day_month_year;
// var last_day_month_year;

if(day>=31 && month===1 ||month===3 ||month===5 ||month===7 ||month===8 ||month===10 ){
var nextday=1;
var nextmonth=month+1
var nextyear=year

}else if(day>=31 && month===12){
var nextday=1;
var nextmonth=1
var nextyear=year+1

}else if(day===30){
var nextday=1;
var nextmonth=month+1
var nextyear=year

}else if(month===2 && day>=28){
var nextday=1;
var nextmonth=month+1
var nextyear=year

}


if(day<=1 && month===2 ||month===4 ||month===6 ||month===8 ||month===9 ||month===11 ){
var lastday=31
var lastmonth=month-1
var lastyear=year

} else if(day<=1 && month===1){
var lastday=31
var lastmonth=month-1
var lastyear=year-1

} else if(day<=1 && month===3){
    var lastday=28
    var lastmonth=month-1
    var lastyear=year

} else if(day<=1  ){
var lastday=30
var lastmonth=month-1
var lastyear=year
}


console.log("hôm sau","ngày",nextday,"tháng",nextmonth,"năm",nextyear)

console.log("hôm qua","ngày",lastday,"tháng",lastmonth,"năm",lastyear)




// Câu 2

// SƠ ĐỒ 3 KHỐI

// Input: tháng ,năm

// Process :1 lấy Input
// đếm tháng đó có bn ngày
// in ket qua 

// Output :số ngày trong tháng năm đó


var month2=2;
var year2=2015
var days_of_month_year;


if(month2===2 && year2%4===0){
    var days_of_month_year=29

}else if(month2=2){
    var days_of_month_year=28

}else if(month2===1 ||month2===3 ||month2===5 ||month2===7 ||month2===8 ||month2===10 ||month2===12){
var days_of_month_year=31

}else {
    var days_of_month_year=30
}

console.log("số ngày trong tháng",days_of_month_year)





// Câu 3

// SƠ ĐỒ 3 KHỐI

// Input: số nguyên có 3 chữ số

// Process :1 lấy Input
// gán cách đọc từng số
// in ket qua 

// Output :cách đọc số nguyên đó 

var number=921

var dozens_number=(number%100-(number%100)%10)/10
var hundred_number=(number-number%100)/100
var units_number=number-(dozens_number*10+hundred_number*100)

// var read_Hnumber=;
// var read_Dnumber=;
// var read_Unumber=;

console.log(hundred_number)
console.log(dozens_number)
console.log(units_number)

if (hundred_number===1){
    var hundred_number="một trăm"
}else if(hundred_number===2){
    var hundred_number="hai trăm"
}

else if(hundred_number===3){
    var hundred_number="ba trăm"
}

else if(hundred_number===4){
    var hundred_number="bốn trăm"
}
else if(hundred_number===5){
    var hundred_number="năm trăm"
}
else if(hundred_number===6){
    var hundred_number="sáu trăm"
}
else if(hundred_number===7){
    var hundred_number="bảy trăm"
}
else if(hundred_number===8){
    var hundred_number="tám trăm"
}
else if(hundred_number===9)
{ var hundred_number="chín trăm"}


if (dozens_number===1){
    var dozens_number=" mười"
}else if(dozens_number===2){
    var dozens_number="hai mươi"
}

else if(dozens_number===3){
    var dozens_number="ba mươi"
}

else if(dozens_number===4){
    var dozens_number="bốn mươi"
}
else if(dozens_number===5){
    var dozens_number="năm mươi"
}
else if(dozens_number===6){
    var dozens_number="sáu mươi"
}
else if(dozens_number===7){
    var dozens_number="bảy mươi"
}
else if(dozens_number===8){
    var dozens_number="tám mươi"
}
else if(dozens_number===9)
{ var dozens_number="chín mươi"}
else if(dozens_number===0){
    var dozens_number="lẻ"
}



if(units_number===1 && (dozens_number==="lẻ" || dozens_number==="mười"))
{
    
    var units_number="một"
}else if(units_number===1){
    var units_number="mốt"
}



// else if(units_number===1 && dozens_number===0){
//     var units_number="một"
// }else if(units_number===1 ){
//     var units_number="mốt"
else if(units_number===2){
    var units_number="hai "
}

else if(units_number===3){
    var units_number="ba "
}

else if(units_number===4){
    var units_number="bốn "
}
else if(units_number===5){
    var units_number="năm "
}
else if(units_number===6){
    var units_number="sáu "
}
else if(units_number===7){
    var units_number="bảy "
}
else if(units_number===8){
    var units_number="tám "
}
else if(units_number===9)
{ var units_number="chín "}



console.log(hundred_number,dozens_number,units_number)




// Câu 4

// SƠ ĐỒ 3 KHỐI

// Input: tên và tọa độ của 3 sv
// tọa độ trường học

// Process :1 lấy Input
// so sánh nơi nào xa nhất 
// in ket qua 

// Output :tên sv xa trường nhất 


var name1="Hiếu"
var name2="Khải"
var name3="Hiệp"
var school="Lộc"

var coor_name1_X=5
var coor_name2_X=10
var coor_name3_X=8
var coor_schoolX=-1


var coor_name1_Y=7
var coor_name2_Y=9
var coor_name3_Y=3
var coor_schoolY=7

var coorXY_name1=Math.sqrt(
Math.pow(coor_name1_X-coor_schoolX,2)+Math.pow(coor_name1_Y-coor_schoolY,2)
)

console.log(coorXY_name1)


var coorXY_name2=Math.sqrt(
    Math.pow(coor_name2_X-coor_schoolX,2)+Math.pow(coor_name2_Y-coor_schoolY,2)
    )
    
console.log(coorXY_name2)

    

var coorXY_name3=Math.sqrt(
Math.pow(coor_name3_X-coor_schoolX,2)+Math.pow(coor_name3_Y-coor_schoolY,2)
        )
        
        console.log(coorXY_name3)

if(coorXY_name1 >coorXY_name2&& coorXY_name1>coorXY_name3 )  {
    console.log("nhà xa nhất là bạn:",name1)

}
else if(coorXY_name2 >coorXY_name1&& coorXY_name2>coorXY_name3 )  {
    console.log("nhà xa nhất là bạn:",name2)

} 
else if(coorXY_name3 >coorXY_name2&& coorXY_name3>coorXY_name1 )  {
    console.log("nhà xa nhất là bạn:",name3)
} 