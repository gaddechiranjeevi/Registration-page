function myfunc(event) {
    event.preventDefault()
    const Name = event.target.Name.value;
    const Email = event.target.Email.value;
    const Phone = event.target.Phone.value;
    const TTC = event.target.timeforcall.value;
    const myObj = {
        Name,
        Email,
        Phone,
        TTC
    }
    localStorage.setItem(myObj.Email,JSON.stringify(myObj));
}
// getting data from local storage.

window.addEventListener("DOMContentLoaded", () => {
    
    const localStoragemyObj = localStorage;
    const localStorageKeys = Object.keys(localStoragemyObj);

    for(var i = 0; i < localStorageKeys.lenght; i++){
      const key = localStorageKeys[i]
      const UserDetailsString = localStoragemyObj[key];
      const UserDetailsmyObj = JSON.parse(UserDetailsString);
    }
 })