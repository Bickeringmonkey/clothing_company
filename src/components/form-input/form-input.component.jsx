import { FormInputlLabel, Input, Group} from './form-input.styles';

const FormInput = ({ label, ...otherProps}) => {
    return(
        <Group>
        <Input { ...otherProps } />
        {label && (
            <FormInputlLabel shrink={otherProps.value.length}>
            {label}
            </FormInputlLabel> 
        )}
        </Group>
    );
}

export default FormInput;