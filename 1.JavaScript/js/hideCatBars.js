if (document.getElementById("navbar").classList.contains('navbar navbar-mobile') == true) {
    document.getElementById("myBtnContainer").classList.remove('.fixed-top');
    document.getElementById('myBtnContainer').classList.add(".hidden").classList.add('.nav-hidden');
}

// if (document.getElementById("navbar").className.match(/(?:^|\s)navbar navbar-mobile(?!\S)/) == true) {
//     document.getElementById("catBar").classList.remove('.fixed-top');
// }

// if (document.getElementById("navbar").classList.contains('.navbar .navbar-mobile') == true) {
//     document.getElementById("catBar").classList.remove('fixed-top');
//     // document.getElementById("MyElement").classList.toggle('MyClass');
//  }