export const validateEmailAndPassword = (email, password) => {
    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isValidPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);

    if (!isValidEmail) return 'Email Id is not valid';
    if(!isValidPassword) return 'Password is not valid';
    return null;
}

