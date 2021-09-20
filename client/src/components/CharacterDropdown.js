import { Form } from "react-bootstrap"

const CharacterDropDown = ({value, onChange}) => {

    
    

    return (

        <Form.Select value={value} onChange={onChange}>
            <option>Select category</option>
            <option value="Family">Family</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Sport">Sport</option>
            <option value="Travel">Travel</option>
        </Form.Select>
    )

}

export default CharacterDropDown;