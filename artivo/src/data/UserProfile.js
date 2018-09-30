class UserProfile {

    constructor(
        name, 
        nickname, 
        postalCode, 
        email, 
        skillsToTeach, 
        skillsToLearn) {

        this.name = name;
        this.nickname = nickname;
        this.postalCode = postalCode;
        this.email = email;
        this.skillsToLearn = skillsToLearn;
        this.skillsToTeach = skillsToTeach;
    }
}

export default UserProfile;