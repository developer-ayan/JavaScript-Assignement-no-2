// ============================= Changing Case =================================


// Question No 1 :



// var Input_Capitals_letter = prompt("Enter Your Name","Search Of Any Element")
// console.log(Input_Capitals_letter.toUpperCase())



// Question No 2 :



// var Input_Title_case = prompt("Enter Any Name","Write Your Type")
// var Input_Title_case2 = Input_Title_case.slice(0,1).toUpperCase() + Input_Title_case.slice(1)
// console.log(Input_Title_case2)



// ============= Strings: measuring length and extracting parts ==================



// Question No 1 :

// var Input_of_Models = prompt("Write Your Particular Models","Like Mobile : Cars : All Of Things")
// document.write(Input_of_Models.length + ": Length Is " + " And This Model " + Input_of_Models)
// document.write("<br><br><br>")



//  Question No 2 :



// var Input_of_Last_character = prompt("Write A Program .","My Name Is Ayan")
// var Input_of_Last_character2 = Input_of_Last_character.slice(-1)
// console.log(Input_of_Last_character2)



// ======================== Strings: finding segments ==========================


// Question no 1 :


// var Finding_To_Index_letter = "Pakistani"
// var Finding_To_Index_letter2 = Finding_To_Index_letter.slice(-2,-1)
// document.write(Finding_To_Index_letter + " <br> " + Finding_To_Index_letter2)



// Question no 2 :



// var text = prompt("Enter A Username","!,.@")
// for(i = 0; i < text.length;i++){
//     if(text.charAt(i) === "!"|| text.charAt(i) !== "@" || text.charAt(i) !== "." || text.charAt(i) !== "," ){
//         console.log("Exclamation point found!");
//     }else{
//         console.log("Exclamation Are not found")
//     }
// }




// Question no 3 :


// var Count_Of_String_occurrences = ("The quick brown fox jumps over the lazy Dog")
// var a =  Count_Of_String_occurrences.
// alert(a)



// ================== Strings: finding a character at a location ===============



// Question no 1 :


// var Character_Location = "pakistani";
// var Character_Location2 = Character_Location.charAt(3);
// document.write(Character_Location + " ) And Index is 3 > " + Character_Location2)



// ======================= Strings: replacing characters ======================



// Question no 2 :



// var String_Replace = "Hyder"
// var String_Replace2 = String_Replace.replace(/Hyder/g,"Islam")
// var String_Replace3 = String_Replace2.replace(/Islam/g,"Hyderabad")
// document.write(String_Replace + " To " + String_Replace2 + " In The Word " + String_Replace3)



// Question no 3 :


// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var message2 = message.replace(/and/g,"&")
// console.log(message2)



// =========================== Rounding Numbers ================================



// question no 1 :



// var Round_number = +prompt("Enter A number",3.45214)
// var Round_number2 = Math.round(Round_number)
// var Round_number3 = Math.floor(Round_number)
// var Round_number4 = Math.ceil(Round_number)
// document.write(" Round Method Your Value " + Round_number2 + " <br><br> ")
// document.write(" Floor Method Your Value " + Round_number3  + " <br><br> ")
// document.write(" Ceil Method Your Value " + Round_number4)



// question no 2 :


// var Float_Point = parseFloat(prompt("Enter A number ",-2.678 ))
// var Float_Point1 = Float_Point.toFixed(2)
// var Float_Point2 = Math.round(Float_Point)
// var Float_Point3 = Math.floor(Float_Point)
// var Float_Point4 = Math.ceil(Float_Point)
// document.write(" Float To Fixed Method Your Value " + Float_Point1 + " <br><br> ")
// document.write(" Float Round Method Your Value " + Float_Point2  + " <br><br> ")
// document.write(" Float Floor Method Your Value " + Float_Point3 + " <br><br> ")
// document.write(" Float Ceil Method Your Value " + Float_Point4)


// ============================ Generating random numbers ==========================


// Question no 1 :


// var Dice = Math.random() * 2
// console.log(Dice)


// Question no 2 :



// var head = 1
// var tails = 2

// var toss = Math.random() * 2
// var toss2 = Math.floor(toss)

// if(toss2 === 0){
//     console.log("0 Win Head")
// }else if(toss2 === 1){
//     console.log("1 Win Tails")
// }else{
//     console.log("Not Tossing Coin")
// }



// Question no 3 :


// var Random_store = Math.random() * 20
// var Random_store2 = Math.floor(Random_store)
// console.log(Random_store2)
// if(Random_store2 < 11){
//     console.log("Congratulation Are U win 😄.!")
// }else{
//     console.log("Are U loss The game Sorry 😢.")
// }



// ================== Converting strings to integers and decimals ==================



// Question no 1 :


// var weight = parseFloat(prompt("Enter Your weight",60.223445))
// var weight0 = Math.floor(weight)
// var weight1 = Math.floor(weight) + "kgs"
// var weight2 = weight.toFixed(1) + "kgs"
// var weight3 = weight.toFixed(1) + "Kilograms"

// document.write(" Your Weight is " + weight0 + "<br><br>")
// document.write(" Then Your Weight is " + weight1 + "<br><br>")
// document.write(" Then Your Weight is " + weight2 + "<br><br>")
// document.write(" Then Your Weight is " + weight3 + "<br><br>")


// =============== Converting strings to numbers, numbers to strings ==============


// Question no 1 :


// var Convert_string = "472"
// var Convert_string2 = parseInt(Convert_string)
// console.log(Convert_string2)
// console.log(typeof(Convert_string2))


// Question no 2 :

// var convert_Number = 35.36;
// var convert_Number2 = convert_Number.toString()
// var convert_Number3 = convert_Number2.replace('.',"")
// console.log(convert_Number3)



// ===================== Controlling the length of decimals =====================

 
// Question no 1 :


// var percentage = 30 / 45 * 100;
// var percentage2 = percentage.toFixed(2)
// console.log(percentage2)