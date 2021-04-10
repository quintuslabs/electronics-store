class LocalStorage {
    constructor() {
        this.userData = JSON.parse(localStorage.getItem("auth")) || {};
    }
    getToken() {
        return this.userData.token;
    }
    getUserId() {
        return this.userData.user_id;
    }

    getUserDetails() {
        return this.userData;
    }

    setUserDetails(userDetails) {
        this.userData = userDetails;
        localStorage.setItem("auth", JSON.stringify(userDetails));
    }
    logout() {
        localStorage.removeItem("auth");
    }
}

export default new LocalStorage();
