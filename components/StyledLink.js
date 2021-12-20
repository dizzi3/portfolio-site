import { useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

function StyledLink({children, href, target, marginBottom, fontSize='1.5em', padding='.5em'}){

    const Link = styled.a`
        color: ${useColorModeValue('#000', '#f8f8f8')};
        padding: 0 ${padding};
        font-size: ${fontSize};
        font-family: Ubuntu, sans-serif;
        font-weight: 500;
        position: relative;
        text-decoration: none;
        width: fit-content;
        margin-bottom: ${marginBottom};

        &:hover{
            color: ${useColorModeValue('#ff0100', '#65b5e9')};
            cursor: pointer;
        }

        &::before{
            content: "";
            position: absolute;
            display: block;
            width: 100%;
            height: 2px;
            bottom: 0;
            left: 0;
            background-color: ${useColorModeValue('#ff0100', '#65b5e9')};
            transform: scaleX(0);
            transition: transform 0.3s ease;
        }

        &:hover::before{
            transform: scaleX(1);
        }
    `

    return(
        <Link href={href} target={target}>{children}</Link>
    )
}

export default StyledLink