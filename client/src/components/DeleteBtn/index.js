import React from "react";
import { CloseIcon } from '@chakra-ui/icons';

const closeFix = {
    fixer: {
        marginTop: '1.5%',
        color: '#1f1f1f',
    }
}

function DeleteBtn(props) {
    return (
        <CloseIcon {...props} role="button" tabIndex="0" boxSize={4} style={closeFix.fixer} viewBox="-3 -3 30 30"/>
    )
};

export default DeleteBtn;