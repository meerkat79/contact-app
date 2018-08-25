export let validateEmail = (val: string) => {
    console.log(val);
}
export let validateName = (val: string) => {

    let isError: boolean = false;
    
    if(val.length+1 < 3) {
        isError = true;
    }
    else {
        isError = false;
    }

    console.log(isError);

    return isError;

}

export let validatePhone = (val: string) => {
    console.log(val);
}
