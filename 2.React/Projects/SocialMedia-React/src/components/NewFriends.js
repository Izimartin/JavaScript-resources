import profile6 from "../assets/bckg17.jpg"
import profile2 from "../assets/bckg19.jpg"
import profile3 from "../assets/bckg18.jpg"
import profile4 from "../assets/bckg20.jpg"
import profile5 from "../assets/bckg21.jpg"

  
  const NewFriends = [
    {
        id: Math.random(),
        profileimg: profile6,
        friendname: "Luke Skywalker",
        accepted: false,
        title: "Quality control"
    },
    {
        id: Math.random(),
        profileimg: profile2,
        friendname: "Jack Senku",
        accepted: true,
        title: "Web Developer"
        
    },
    {
        id: Math.random(),
        profileimg: profile3,
        friendname: " Paulina Dante",
        accepted: false,
        title: "Lecturer"
    },
    {
        id: Math.random(),
        profileimg: profile4,
        friendname: "Aries Shinsu",
        accepted:false,
        title: "Tech Recruiter"
    },
    {
        id: Math.random(),
        profileimg: profile5,
        friendname: "Jotaro Zaworldo",
        accepted: false,
        title: "Chef"
    },
]

export default NewFriends;