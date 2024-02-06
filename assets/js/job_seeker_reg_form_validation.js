function validation() {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('ln').value;
    var phone = document.getElementById('pn').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('pass').value;
    var cpassword = document.getElementById('pass1').value;
    var location = document.getElementById('loca').value;
    var skills = document.getElementById('cn').value;
    var experience = document.getElementById('he').value;
    var highestqualification = document.getElementById('dn').value;


    if (fname == "") {
        document.getElementById('name1').innerHTML = "**please fill it";
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
        document.getElementById('l').innerHTML = "**please fill it";
        return false;
    }
    if ((lname.length < 2) || (fname.length >= 20)) {
        document.getElementById('l').innerHTML = "**last name must be between 4 and 20";
        return false;
    }
    if (!isNaN(lname)) {
        document.getElementById('l').innerHTML = "**Only characters are allowed";
        return false;
    }
    if (phone == "") {
        document.getElementById('p').innerHTML = "**please fill it";
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
        document.getElementById('em').innerHTML = "**please fill it";
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
        document.getElementById('pas').innerHTML = "**please fill it";
        return false;
    }
    if ((password.length <= 5) || (password.length > 20)) {
        document.getElementById('pas').innerHTML = "**Password must be between 4 and 20";
        return false;
    }

    if (cpassword == "") {
        document.getElementById('pas1').innerHTML = "**please fill it";
        return false;
    }
    if (password != cpassword) {
        document.getElementById('pas').innerHTML = "**Password not matching";
        document.getElementById('pas1').innerHTML = "**Password not matching";
        return false;
    }

    if (location == "") {
        document.getElementById('loc1').innerHTML = "**please fill it";
        return false;
    }
    if ((location.length < 6) || (location.length >= 100)) {
        document.getElementById('loc1').innerHTML = "**First name must be between 4 and 20";
        return false;
    }
    if (!isNaN(location)) {
        document.getElementById('loc1').innerHTML = "**Only characters are allowed";
        return false;
    }
    if (skills == "") {
        document.getElementById('c').innerHTML = "**please fill it";
        return false;
    }
    if ((skills.length < 2) || (skills.length >= 100)) {
        document.getElementById('c').innerHTML = "**First name must be between 4 and 20";
        return false;
    }
    if (!isNaN(skills)) {
        document.getElementById('c').innerHTML = "**Only characters are allowed";
        return false;
    }
    if (experience == "") {
        document.getElementById('h').innerHTML = "**please fill it";
        return false;
    }
    
    if (isNaN(experience)) {
        document.getElementById('h').innerHTML = "**Only digits are allowed";
        return false;
    }
    if (highestqualification == "") {
        document.getElementById('a').innerHTML = "**please fill it";
        return false;
    }
    if ((highestqualification.length < 4) || (highestqualification.length >= 20)) {
        document.getElementById('a').innerHTML = "**First name must be between 4 and 20";
        return false;
    }
    if (!isNaN(highestqualification)) {
        document.getElementById('a').innerHTML = "**Only characters are allowed";
        return false;
    }



}