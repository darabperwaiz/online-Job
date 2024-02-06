function validation() {
    var title = document.getElementById('t').value;
    var location = document.getElementById('loc').value;
    var experience = document.getElementById('ex').value;
    
    var skill = document.getElementById('sk').value;

    var timing = document.getElementById('time').value;
    var salary = document.getElementById('sal').value;
    var description = document.getElementById('desc').value;
    

    if (title == "") {
        document.getElementById('t1').innerHTML = "**please fill it";
        return false;
    }
    if ((title.length < 4) || (title.length >= 200)) {
        document.getElementById('t1').innerHTML = "**Title must be between 4 and 20";
        return false;
    }
    if (!isNaN(title)) {
        document.getElementById('t1').innerHTML = "**Only characters are allowed";
        return false;
    }
    if (location == "") {
        document.getElementById('loc1').innerHTML = "**please fill it";
        return false;
    }
    if ((location.length < 4) || (location.length >= 20)) {
        document.getElementById('loc1').innerHTML = "**Title must be between 4 and 20";
        return false;
    }
    if (!isNaN(location)) {
        document.getElementById('loc1').innerHTML = "**Only characters are allowed";
        return false;
    }
    
    if (experience<0 ) {
        document.getElementById('ex1').innerHTML = "**Only characters are allowed";
        return false;
    }
   



}