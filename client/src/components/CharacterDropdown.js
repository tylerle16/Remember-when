import { Form } from "react-bootstrap"

const CharacterDropDown = ({value, onChange}) => {

    
    

    return (

        <Form.Select value={value} onChange={onChange}>
            <option value="">Select category</option>
            <option value="Family">Family</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Sport">Sport</option>
            <option value="Travel">Travel</option>
            <option value="Animals">Animals</option>
            <option value="Entertainment">Entertainment</option>

        </Form.Select>
    )

}

export default CharacterDropDown;