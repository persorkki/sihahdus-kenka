import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import { useParams } from "react-router-dom";
import { Image } from "react-bootstrap";

function Racing() {
    const [image, setImage] = useState("https://cdn.discordapp.com/attachments/551357275730870276/972933424073564260/Upper_Prison.jpg");
    const [activeDropdown, setActiveDropdown] = useState("Upper Prison");

    useParams((params) => {
        setImage(params.img);
    }, []);
    const handleClick = (event) => {
        setImage(event.target.id);
        setActiveDropdown(event.target.textContent);
    };

    return (
        <>
            <Dropdown className="mb-2 text-end">
                <Dropdown.Toggle size="lg" variant="success" id="dropdown-basic">
                    {activeDropdown}
                </Dropdown.Toggle>
                <DropdownMenu>
                    <DropdownItem
                        id="https://cdn.discordapp.com/attachments/551357275730870276/972933424073564260/Upper_Prison.jpg"
                        onClick={(event) => {
                            handleClick(event);
                        }}
                    >
                        Upper Prison
                    </DropdownItem>

                    <Dropdown.Divider></Dropdown.Divider>

                    <DropdownItem
                        id="https://cdn.discordapp.com/attachments/551357275730870276/722123174770245642/Old_Fields.jpg"
                        onClick={(event) => {
                            handleClick(event);
                        }}
                    >
                        Old Fields
                    </DropdownItem>

                    <DropdownItem
                        id="https://cdn.discordapp.com/attachments/551357275730870276/722117440838041630/Den.jpg"
                        onClick={(event) => {
                            handleClick(event);
                        }}
                    >
                        Den
                    </DropdownItem>
                    
                    <DropdownItem
                        id="https://cdn.discordapp.com/attachments/551357275730870276/722117479727366295/Chamber_of_Sins_level_1.jpg"
                        onClick={(event) => {
                            handleClick(event);
                        }}
                    >
                        Chamber of Sins 1
                    </DropdownItem>

                    <DropdownItem
                        id="https://cdn.discordapp.com/attachments/551357275730870276/722117494881517579/Chamber_of_Sins_level_2.jpg"
                        onClick={(event) => {
                            handleClick(event);
                        }}
                    >
                        Chamber of Sins 2
                    </DropdownItem>

                    <DropdownItem
                        id="https://cdn.discordapp.com/attachments/551357275730870276/722117516746293248/Fellshrine.jpg"
                        onClick={(event) => {
                            handleClick(event);
                        }}
                    >
                        Fellshrine Ruins
                    </DropdownItem>

                    <DropdownItem
                        id="https://cdn.discordapp.com/attachments/551357275730870276/722117537113964574/Crypt.jpg"
                        onClick={(event) => {
                            handleClick(event);
                        }}
                    >
                        Crypt
                    </DropdownItem>

                    <DropdownItem
                        
                        id="https://cdn.discordapp.com/attachments/551357275730870276/722899682153463898/Vaal_Ruins.jpg"
                        onClick={(event) => {
                            handleClick(event);
                        }}
                    >
                        Vaal Ruins
                    </DropdownItem>

                    <Dropdown.Divider></Dropdown.Divider>

                    <DropdownItem
                        
                        id="https://i.redd.it/mpxksazluay81.jpg"
                        onClick={(event) => {
                            handleClick(event);
                        }}
                    >
                        Crematorium
                    </DropdownItem>
                    

                </DropdownMenu>
            </Dropdown>
            <Image className="expandable" src={image} fluid></Image>
        </>
    );
}

export default Racing;
