class Membership {
    // without provided parameter, initial members property to an empty array ([]).
    static autoId = 1
      constructor() {
        this.members = []
      }
    //You must check whether the provided name parameter is in members array or not by calling findMemberName(name) function.
    // If there is no member name in the members array then creates an object with two properties: memberId by getting value form an autoId 
    //and memberName by getting value from the provide parameter name and adding it to the end of members array. 
    //The autoId will increment by 1 for each new member.   
    //Returns the new length of members array in case adding a new member into array successfully, otherwise return -1
    // if there are duplicate member name in the members array.

    subscribe(name) {
      if (this.findMemberName(name) !== 1) {
        return -1 
    }
    const memberId = Membership
    this.members.push({ memberId:memberId , memberName: name })
    return this.members.length
    }
    //If the provided parameter id is undefined then you must return -1. Finding the provided parameter id in the members array 
    //by calling findMemberId(id). If id is found then removes a member from members array and shift the rest of it to the left, 
    //and return a member id, otherwise, return -1.
    unsubscribe(id) {
      if (id === undefined) {
        return -1
    }

    const unSub = this.findMemberId(id)
    if (unSub == 1) {
        this.members.splice(unSub, 1)
        return id
    }
    return -1

    }
    //returns the index of first element in the array that matches the provided parameter id. If no object matches, -1 is returned.
    
    findMemberId(id) {
      return this.members.findIndex(member => member.memberId === id)
    }

    //returns the index of first element in the array that matches the provided parameter name with case-insensitive. If no object matches,
    // -1 is returned.
    
    findMemberName(name) {
      return this.members.findIndex(member => member.memberName.toLowerCase() === name.toLowerCase())
    }
}
    