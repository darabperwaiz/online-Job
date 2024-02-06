function validation() {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('ln').value;
    var phone = document.getElementById('pn').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('pass').value;
    var cpassword = document.getElementById('pass1').value;
    var company = document.getElementById('cn').value;
    var hiringex = document.getElementById('he').value;


    if (fname == "") {
        document.getElementById('name1').innerHTML = "**plese fill it";
        return false;
    }
    if ((fname.length < 2) || (fname.length >= 20)) {
        document.getElementById('name1').innerHTML = "**First name must be between 4 and 20";
        return false;
    }
    if (!isNaN(fname)) {
        document.getElementById('name1').innerHTML = "**Only characters are allowed";
        return false;
    }
    if (lname == "") {
        document.getElementById('l').innerHTML = "**plese fill it";
        return false;
    }
    if ((lname.length < 2) || (fname.length >= 20)) {
        document.getElementById('l').innerHTML = "**First name must be between 6 and 20";
        return false;
    }
    if (!isNaN(lname)) {
        document.getElementById('l').innerHTML = "**Only characters are allowed";
        return false;
    }
    if (phone == "") {
        document.getElementById('p').innerHTML = "**plese fill it";
        return false;
    }
    if (isNaN(phone)) {
        document.getElementById('p').innerHTML = "**User must write digit only not character";
        return false;
    }
    if (phone.length != 10) {
        document.getElementById('p').innerHTML = "**Phone number must be 10 digit only";
        return false;
    }
    if (email == "") {
        document.getElementById('em').innerHTML = "**plese fill it";
        return false;
    }
    if (email.indexOf('@') <= 0) {
        document.getElementById('em').innerHTML = "**@ is in invalid position";
        return false;
    }
    if ((email.charAt(email.length - 4) != '.') && (email.charAt(email.length - 3) != '.')) {
        document.getElementById('em').innerHTML = "**. is not in valid position";
        return false;
    }
    if (password == "") {
        document.getElementById('pas').innerHTML = "**plese fill it";
        return false;
    }
    if ((password.length <= 5) || (password.length > 20)) {
        document.getElementById('pas').innerHTML = "**Password must be between 6 and 20";
        return false;
    }
  
    if (cpassword == "") {
        document.getElementById('pas1').innerHTML = "**plese fill it";
        return false;
    }
    if (password != cpassword) {
        document.getElementById('pas').innerHTML = "**Password not matching";
        document.getElementById('pas1').innerHTML = "**Password not matching";
        return false;
    }
    if (company == "") {
        document.getElementById('c').innerHTML = "**plese fill it";
        return false;
    }
    if (hiringex == "") {
        document.getElementById('h').innerHTML = "**plese fill it";
        return false;
    }
    if (isNaN(hiringex)) {
        document.getElementById('h').innerHTML = "**It must be only number";
        return false;
    }
    


}