const SET_USER_DATA = 'SET_USER_DATA';


export type AuthType = {
    userId: number
    email: string
    login: string
    isAuth: boolean
}
type setUserDataActionType = ReturnType<typeof setUserData>


export type AuthActionTypes = setUserDataActionType


let initialState: AuthType = {
    userId: 2,
    email: 'piram@gmail.com',
    login: 'piram',
    isAuth: false,
}


const authReducer = (state = initialState, action: AuthActionTypes): AuthType => {


    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }


        default:
            return state;
    }
}
export const setUserData = (userId: number, email: string, login: string) => {
    return {
        type: SET_USER_DATA,
        data: {
            userId, email, login
        }
    } as const
}


export default authReducer;