class RegisterElements {

    inputFirstName = () => { return '[@placeholder="First Name"]' };
    inputLastName = () => { return '[@placeholder="Last Name"]' };
    inputAddress = () => { return '//*[@id="basicBootstrapForm"]/div[2]/div/textarea' };
    inputAddressEmail = () => { return '#eid' };
    inputPhoneNumber = () => { return '#basicBootstrapForm' };
    selectFile = () => { return '#imagesrc' };
    checkRagioGender = () => { return '[@type="radio"]' };
    checkBoxHobbies = () => { return '#checkbox1' };
    inputLanguage = () => { return '#msdd' };
    selectCountry = () => { return '#countries' };
    selectYear = () => { return '#yearbox' };
    selectMonth = () => { return '[@placeholder="Month"]' };
    selectDay = () => { return '#daybox' };
    inputPass = () => { return '#firstpassword' };
    inputConfirmPass = () => { return '#secondpassword' };
    submitRegister = () => { return '#submitbtn' };

} export default RegisterElements;