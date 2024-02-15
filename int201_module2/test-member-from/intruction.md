## test-member-from
1. Member data prepared in ./data/members.js with two functions: { getMembers, findMember }
2. A function called *memberForm()* works when a user clicks a member button, a member search panel will show. After the user enters a searching member id, if found then the member detail will display, otherwise, no data shows. Write three nested functions in the following:
    - Nested Functions:
        - **addEventHandler()** adds *memberHandler()* function to a member button and *searchHandler()* function to a search button with event 'click'.
        - **memberHandler()** when a user clicks a member button, in case there are previous searching results, you must clear all previous content firstly. Then you must create and display a member id's search panel within `<div id="searchMember"></div>`. The search panel consists of the following element structure:

                <p>Your Member Id:</p>
                <input id="memberId">
                <button>search</button>
        You must add *searchHandler* function to a search button

        - **searchHandler()** when a user clicks a search button, in case there are previous searching results, you must clear all previous content firstly. Then you must call *findMember()* function (imported from members.js ) and then create and display the member object returned from the function within `<div id="foundMember"></div>`. For example, if searching with 1003, it will result in the following element structure:

                <p>id: 1003</p>
                <p>firstname: Zaida</p>
                <p>lastname: Daniels</p>
                <p>email: ZaidaDaniels@dayrep.com</p>
                <p>address: 1367 Clarksburg Park Road Sedona, AZ 86336</p>

        Ps.ไม่ได้ทำส่วนนี้
        Note that there is one white space after comma (:).
