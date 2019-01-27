export const Replacingstring = (string) =>{
    let plug = string.replace(/[^a-zA-Z ]/g, "");
    let result = plug.split(' ').join('-');
    return result;
}