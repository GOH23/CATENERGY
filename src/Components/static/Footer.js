import { Box, Divider, Typography } from "@mui/material";
import { Col, Container, Row } from "react-bootstrap";
import { SlSocialVkontakte } from 'react-icons/sl'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FiFacebook } from 'react-icons/fi'
export function Footer() {
    return (<Container className="container_footer">
        <Row sm={1} md={3} lg={3} className="h-100 align-items-center">
            <Col>
                <Typography className='text_mob_foot_start' sx={{ fontSize: '1.3rem' }}>
                    <span style={{ fontWeight: 'bold' }}>CAT</span> ENERGY
                </Typography>
            </Col>
            <Divider className="hr_mob"/>
            <Col>
                <Box sx={{ fontSize: '30px', justifyContent: {md: 'space-between',xs: 'center'}, display: 'flex', color: 'gray', }}>
                    <SlSocialVkontakte />
                    <AiOutlineInstagram />
                    <FiFacebook />
                </Box>
            </Col>
            <Divider className="hr_mob"/>
            <Col >
                <Box className='text_mob_foot_center'>
                    <Typography sx={{ fontSize: '1.2rem' }}>Макет разработан DEMON <a href="https://www.figma.com/file/YYldURe3eBcTN1becXjgNK/Кэт-энерджи---landing">Макет</a></Typography>
                </Box>
            </Col>
        </Row>
    </Container>)
}