function handleLoginClick(event) {
    console.log("Login button clicked", event);
    // Prevent the form from actually submitting and causing a page reload
    event.preventDefault();
    window.open('./login.html', '_self');
}