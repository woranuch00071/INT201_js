class Membership {
    static autoId = 1;

    constructor() {
        this.members = [];
    }

    findMemberId(id) {
        return this.members.findIndex(member => member.memberId === id);
    }

    findMemberName(name) {
        return this.members.findIndex(member => member.memberName.toLowerCase() === name.toLowerCase());
    }

    subscribe(name) {
        if (this.findMemberName(name) !== -1) {
            return -1; // Duplicate member name found
        }

        const memberId = Membership.autoId++;
        this.members.push({ memberId, memberName: name });
        return this.members.length; // Length of members array after adding new member
    }

    unsubscribe(id) {
        if (id === undefined) {
            return -1;
        }

        const index = this.findMemberId(id);
        if (index !== -1) {
            this.members.splice(index, 1);
            return id;
        }
        return -1;
    }
}

// Example usage:
const membership = new Membership();

console.log("Subscribe 'Alison Butler':", membership.subscribe("Alison Butler"));
console.log("Subscribe 'Simon Brown':", membership.subscribe("Simon Brown"));
console.log("Subscribe 'Alison Butler' again:", membership.subscribe("Alison Butler")); // Should return -1 due to duplicate name
console.log("Current members:", membership.members);

console.log("Unsubscribe member with id 2:", membership.unsubscribe(2));
console.log("Current members after unsubscribe:", membership.members);
