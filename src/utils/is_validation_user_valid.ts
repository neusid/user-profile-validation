import UserProfile from "../entities/user_profile";

export default function isValidationUserValid(data: any): data is UserProfile {

    if (typeof data.userName !== 'string' || data.userName.lenght >= 20 || data.userName.lenght < 3) return false;

    if (typeof data.email !== 'string' || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)) return false;

    if (typeof data.age !== 'number' || data.age < 17 || data.age > 50) return false;

    if (data.website !== undefined && typeof data.website === 'string') {
        try {
            new URL(data.website);
        } catch {
            return false;
        }
    }

    const dataRoles = ['Admin', 'Moderator', 'Member'];

    if (!dataRoles.includes(data.role)) return false;

    return true;
}