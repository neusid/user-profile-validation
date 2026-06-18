import { describe, test, expect } from '@jest/globals';
import isValidationUserValid from "../utils/is_validation_user_valid";

describe('Validasi user profile', () => {
    test('Harusnya hasil validasi true', () => {
        let rawData: any = {
            userName: 'Jane Doe',
            email: 'jane.doe@gmail.com',
            age: 19,
            role: 'Member'
        }
        let checkBool: boolean = isValidationUserValid(rawData);
        expect(checkBool).toBe(true);
    });
});

