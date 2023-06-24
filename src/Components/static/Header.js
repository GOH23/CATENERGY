import { Box } from '@mui/material';
import { motion } from 'framer-motion'
import { Navbar, Nav, Container, NavLink, } from 'react-bootstrap'
export default function Header() {
    const HeaderAnimationVar = {
        initial: {
            x: 10,
            opacity: 0,

        },
        animate: (custom) => ({
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.4,
                delay: 0.20 * custom,

            }
        })
    }
    return (<header className='headerclass'>
        <Navbar expand='md' className='navbar_mobile'>
            <Container fluid>
                <Navbar.Brand className='header_brand'><img className='logo' src='/media/logo-desktop.png' alt="" /></Navbar.Brand>
                <Navbar.Brand className='mobile_brand'><img src='/media/logo-mobile.png' alt="" /></Navbar.Brand>
                <p className='brand_text_mobile'><span>CAT</span> ENERGY</p>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='button_toggle' />
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <motion.div>
                            <NavLink className='header_menu_item'>ГЛАВНАЯ</NavLink>
                        </motion.div>
                        <motion.div>
                            <NavLink className='header_menu_item'>КАТАЛОГ ПРОДУКЦИИ</NavLink>
                        </motion.div>
                        <motion.div>
                            <NavLink className='header_menu_item'>ПОДБОР ПРОГРАММЫ</NavLink>
                        </motion.div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
            <Box sx={{ flexBasis: '414px' }}>
                <motion.p variants={HeaderAnimationVar} custom={1} initial='initial' whileInView='animate' viewport={{ once: true }} className='content_brand_item'>Функциональное
                    питание для котов
                </motion.p>
                <motion.p variants={HeaderAnimationVar} custom={2} initial='initial' whileInView='animate' viewport={{ once: true }} className='content_item'>
                    Занялся собой? Займись котом!
                </motion.p>
                <motion.button variants={HeaderAnimationVar} custom={3} initial='initial' whileInView='animate' viewport={{ once: true }} className='header_button_item'>подобрать программу</motion.button>
            </Box>
            <Box className="header_img_box">
                <motion.img variants={HeaderAnimationVar} custom={4} initial='initial' whileInView='animate' viewport={{ once: true }} src='/media/index-can.png' alt="" />
            </Box>

        </Box>
    </header>);
}