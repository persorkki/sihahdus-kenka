import { Dropdown } from "react-bootstrap";

function CustomDropdown() {
    return (
        <>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    misc
                </Dropdown.Toggle>
            </Dropdown>
        </>
    );
}

export default CustomDropdown;