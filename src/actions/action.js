export const SLIDER_SHOW = 'SLIDER_SHOW';
export const LOGIN_CLICK = 'LOGIN_CLICK';

















export function LOGINCLICK(index) {
    return {
        type: LOGIN_CLICK,
        data:index
    }
}
export function SLIDERSHOW(index) {
    return {
        type: SLIDER_SHOW,
        data: index
    }
}