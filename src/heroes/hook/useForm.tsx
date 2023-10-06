import { useState } from 'react';

export const useForm = <T extends Object>( initState: T ) => {
    
    const [formState, setFormState] = useState( initState );

    const onInputChange = ( event:any ) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    return {
        ...formState,
        form: formState,
        onInputChange,
    }

}