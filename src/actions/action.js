export const ifloading_show = 'ifloading_show';
export const LOGIN_CLICK = 'LOGIN_CLICK';

















export function LOGINCLICK(index) {
    return {
        type: LOGIN_CLICK,
        data:index
    }
}
export function ifloadingshow(index) {
    return {
        type: ifloading_show,
        data:index
    }
}