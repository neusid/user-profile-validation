import isValidationUserValid from "./utils/is_validation_user_valid";

let rawData: any = {
    userName: 'Jane Doe',
    email: 'jane.doe@gmail.com',
    age: 10,
    role: 'Member'
}

let checkBool: boolean = isValidationUserValid(rawData);

if (checkBool) {
    console.log(`Data valid terhadap UserProfile!, Selamat ${rawData.userName}`);
} else {
    console.log(`Data tidak valid terhadap UserProfile!`);
}