import Home from '../features/Booking/Home'
import Detail from '../features/Booking/Detail'
import Seats from '../features/Booking/Seats'
import Signin from '../features/Auth/Signin'
import Signup from '../features/Auth/Signup'

export const routes = [
    // lưu trường hợp có cả :page và trườn hợp ko có
    {path:'/',component:Home},
    {path:'/:page',component:Home},

    {path:'/detail',component:Detail},
    {path:'/seats',component:Seats},
    {path:'/signin',component:Signin},
    {path:'/signup',component:Signup},
]