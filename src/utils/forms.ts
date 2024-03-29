export function update(inputs: any, name: string, newValue: any){

    return{ ...inputs, [name]: { ...inputs[name], value: newValue}}
}

export function toValues(inputs: any){
    const data: any ={};
    for(var name in inputs){
        data[name] = inputs[name].value;
    }
    return data;
}

export function updateAll(inputs: any, newValue: any){
    const newInput: any = {};
    for (var name in inputs){
        newInput[name] = {...inputs[name], value: newValue[name]};
    }
    return newInput;
}