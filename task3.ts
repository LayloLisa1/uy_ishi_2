//3-vazifa:

// Abstrakt CRUD classi va User interface dan foydalandim, Crud ham yozdim.
abstract class Crud<T> {
    abstract create(item: T): void;
    abstract read(id: number): T | undefined;
    abstract update(id: number, item: T): void;
    abstract delete(id: number): void;
}
interface User {
    id: number;
    name: string;
    email: string;
}

class Users extends Crud<User> {
    private user_list: User[] = [];

    create(user: User): void {
        this.user_list.push(user);
    }

    read(id: number): User | undefined {
        return this.user_list.find(user => user.id === id);
    }

    update(id: number, updatedUser: User): void {
        const index = this.user_list.findIndex(user => user.id === id);
        if (index !== -1) {
            this.user_list[index] = updatedUser;
        }
    }

    delete(id: number): void {
        for (let i = 0; i < this.user_list.length; i++) {
            if (this.user_list[i].id === id) {
                this.user_list[i] = this.user_list[this.user_list.length - 1];
                this.user_list.pop(); 
                break;
            }
        }
    }
}

const users = new Users();

users.create({ id: 1, name: "Laylo Boboxonova", email: "laylo@gmail.com" });
users.create({ id: 2, name: "Lisa Mona", email: "lisa@gmail.com" });

console.log(users.read(1)); 

users.update(1, { id: 1, name: "Laylo Updated", email: "laylo_updated@gmail.com" });
console.log(users.read(1)); 

users.delete(1);
console.log(users.read(1));
