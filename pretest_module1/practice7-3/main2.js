class Membership {
    static autoId = 1
    
    constructor() {
        this.id = Membership.autoId++
        this.members = []
    }
    subscribe(name) {

    }
    unsubscribe(id) {}
    findMemberId(id) {
        this.members.findIndex((autoId) =>{})
    }
    findMemberName(name) {
        this.members.findIndex((members) => {
            return(
            members.name.toLowercase() === name.toLowercase()
        )}

        )
    }
  }