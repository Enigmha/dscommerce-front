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

export function validate(inputs: any, name: string){
    if(!inputs[name].validation){
        return inputs;
    }
    const isInValid = !inputs[name].validation(inputs[name].value)
    return{ ...inputs, [name]: {...inputs[name], invalid: isInValid.toString()}};
}

export function toDirty(inputs: any, name: string){
    return{...inputs, [name]: {...inputs[name], dirty: "true" }};
}

export function updateAndValidate(inputs: any, name: string, newValue: any){
    const dataUpadate = update(inputs,name, newValue);
    return validate(dataUpadate, name);
    
}

export function dirtyAndValidate(inputs: any, name: string){
    const dataDirty = toDirty(inputs,name);
    return validate(dataDirty, name);
    
}