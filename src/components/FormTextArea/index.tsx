

export default function FormTextArea(props: any){ 

    const { 
        validation, 
        invalid = "false", 
        dirty = "false", 
        onTurnDirty,
        ...textaProps
    } =props;

    function handleBlur(){
        onTurnDirty(props.name);
    }

    return(
        <textarea
            { ...textaProps}
            onBlur={handleBlur}
            data-invalid={invalid}
            data-dirty={dirty}
        />
    )

}