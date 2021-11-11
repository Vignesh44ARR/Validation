
    
window.onload = () => document.querySelector(".alert").innerHTML = "Kindly fill this field"
function formValidate() {



    let Form = document.forms['RegForm']


    let name = Form.Name.value
    let address = Form.Address.value
    let email = Form.EMail.value
    let password = Form.Password.value
    let confirmpassword = Form.cPassword.value
    let phone = Form.phone.value

    let name_Pattern = /[a-zA-Z]{2,25}/g
    let address_Pattern = /[a-zA-Z0-9]+/g
    let phone_Pattern = /[6-9]\d{9}$/
    let email_Pattern= /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9\.-]+).([a-z]{2,10})$/
    let password_Pattern = /[A-Z]+[a-z]+[0-9]+[\!\@\#\$\%\^\&\*\(\)]+/g
   


 
    if (!name_Pattern.test(name))
        document.querySelector("#name").innerHTML = "Name should be altest 2"
    else
        document.querySelector("#name").innerHTML = ""



    if (!address_Pattern.test(address))
        document.querySelector("#address").innerHTML = "Invalid Address"
    else
        document.querySelector("#address").innerHTML = ""


    if (!email_Pattern.test(email))
        document.querySelector("#email").innerHTML = "Invalid Email Id"
    else
        document.querySelector("#email").innerHTML = ""

   
    if (!password_Pattern.test(password)) {
        document.querySelector("#pwd").innerHTML = "Altest one Numberic, Caps, Small, Symbols Required "

    }
    else
        document.querySelector("#pwd").innerHTML = ""


    if (confirmpassword.length === 0)
        document.querySelector("#cpwd").innerHTML = "Field is empty"
    else {
        if (password != confirmpassword)
            document.querySelector("#cpwd").innerHTML = "Password Mismatching"
        else
            document.querySelector("#cpwd").innerHTML = ""
    }

    if (!phone_Pattern.test(phone))
        document.querySelector("#phone").innerHTML = "Invalid Phone No"
    else
        document.querySelector("#phone").innerHTML = ""

    return false
}