class UserObject {
    name: string | undefined;
    pet: Object | undefined;
    uninitialized: boolean | undefined;
}

function CreateUser(name: string, pet: Object) {
    var user = new UserObject();
    user.name = name;
    user.pet = pet;
    user.uninitialized = false;

    return user;
}

function CreateUserUninitialized() {
    var user = new UserObject();
    user.uninitialized = true;

    return user;
}

const UserConverter = {
    toFirestore: (user: UserObject) => {
        return {
            name: user.name,
            pet: user.pet,
            uninitialized: user.uninitialized,
        }
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options)

        var user = new UserObject();
        user.name = data.name;
        user.pet = data.pet;
        user.uninitialized = data.uninitialized;

        return user;
    }
}

export { UserObject, UserConverter, CreateUser, CreateUserUninitialized }