import { Box, LinearProgress } from "@mui/material";
import { Col, Container, Row } from "react-bootstrap";
import { BsArrowRightShort } from 'react-icons/bs'
import { BiLeaf } from 'react-icons/bi'
import { motion } from 'framer-motion'
import { GiDrippingTube } from 'react-icons/gi'
import { ImSpoonKnife } from 'react-icons/im'
import { LuAlarmClock } from 'react-icons/lu'
export default function MainPage() {
    const MainCarsAnimationVar = {
        initial: {
            x: 10,
            opacity: 0,

        },
        animate: (custom) => ({
            x: 0,
            opacity: 1,
            transition: {
                duration: 1.5,
                delay: 0.20 * custom,

            }
        })
    }
    const K4CardAnimationVar = {
        initial: {
            x: 0,
            opacity: 0,

        },
        animate: (custom) => ({
            x: 0,
            opacity: 1,
            transition: {
                duration: 1.5,
                delay: 0.20 * custom,

            }
        })
    }
    return (<><Container className="container_box">
        <Row className="content_box_1">
            <Col style={{ marginBottom: '20px' }}>
                <Box className="card_box">
                    <Box className="card_title">
                        <motion.img variants={MainCarsAnimationVar} custom={1} initial='initial' whileInView='animate' viewport={{ once: true }} src="/media/cat_back (1).png" alt="" />
                        <motion.p variants={MainCarsAnimationVar} custom={1.5} initial='initial' whileInView='animate' viewport={{ once: true }}>похудение</motion.p>
                    </Box>
                    <Box className='card_desc_box'>
                        <motion.p variants={MainCarsAnimationVar} custom={2} initial='initial' whileInView='animate' viewport={{ once: true }} className="card_content">Ваш кот весит больше собаки и почти утратил способность
                            лазить по деревьям? Пора на диету! Cat Energy Slim поможет
                            вашему питомцу сбросить лишний вес.</motion.p>
                        <motion.button variants={MainCarsAnimationVar} custom={2.5} initial='initial' whileInView='animate' viewport={{ once: true }} className="card_btn">каталог slim <BsArrowRightShort /></motion.button>
                    </Box>
                </Box>
            </Col>
            <Col style={{ marginBottom: '20px' }}>
                <Box className="card_box">
                    <Box className="card_title">
                        <motion.img variants={MainCarsAnimationVar} custom={1} initial='initial' whileInView='animate' viewport={{ once: true }} src="/media/cat_back.png" alt="" />
                        <motion.p variants={MainCarsAnimationVar} custom={1.5} initial='initial' whileInView='animate' viewport={{ once: true }}>набор массы</motion.p>
                    </Box>
                    <Box className='card_desc_box'>
                        <motion.p variants={MainCarsAnimationVar} custom={2} initial='initial' whileInView='animate' viewport={{ once: true }} className="card_content">Заработать авторитет среди дворовых котов и даже собак?
                            Серия Cat Energy Pro поможет вашему коту нарастить
                            необходимые мышцы!</motion.p>
                        <motion.button variants={MainCarsAnimationVar} custom={2.5} initial='initial' whileInView='animate' viewport={{ once: true }} className="card_btn">каталог pro <BsArrowRightShort /></motion.button>
                    </Box>
                </Box>
            </Col>
        </Row>
        <motion.p variants={MainCarsAnimationVar} custom={1} initial='initial' whileInView='animate' viewport={{ once: true }} className="title_content_text"> Как это работает</motion.p>
        <Row className="content_box_2" md='2' sm='1' lg='4'>
            <Col className="tablet_ver flex-fill">
                <div className="card_for_box2 text t1">
                    <motion.div variants={K4CardAnimationVar} custom={1} initial='initial' whileInView='animate' viewport={{ once: true }} className="card_icon_box">
                        <BiLeaf />
                    </motion.div>
                    <motion.div variants={MainCarsAnimationVar} custom={1.5} initial='initial' whileInView='animate' viewport={{ once: true }} className="card_content_box">
                        <p>
                            Функциональное питание
                            содержит только полезные
                            питательные вещества.
                        </p>
                    </motion.div>
                </div>
            </Col>
            <Col className="tablet_ver  flex-fill">
                <div className="card_for_box2 text t2">
                    <motion.div variants={K4CardAnimationVar} custom={1.5} initial='initial' whileInView='animate' viewport={{ once: true }} className="card_icon_box">
                        <GiDrippingTube />
                    </motion.div>
                    <motion.div variants={MainCarsAnimationVar} custom={2} initial='initial' whileInView='animate' viewport={{ once: true }} className="card_content_box">
                        <p>
                            Выпускается в виде порошка,
                            который нужно лишь залить
                            кипятком и готово.
                        </p>
                    </motion.div>
                </div>
            </Col>
            <Col className="mob_ver  flex-fill">
                <div className="card_for_box2 text t3">
                    <motion.div variants={K4CardAnimationVar} custom={2} initial='initial' whileInView='animate' viewport={{ once: true }} className="card_icon_box">
                        <ImSpoonKnife />
                    </motion.div>
                    <motion.div variants={MainCarsAnimationVar} custom={2.5} initial='initial' whileInView='animate' viewport={{ once: true }} className="card_content_box">
                        <p>
                            Замените один-два приема
                            обычной еды на наше
                            функциональное питание.
                        </p>
                    </motion.div>
                </div>
            </Col>
            <Col className="mob_ver  flex-fill">
                <div className="card_for_box2 text t4">
                    <motion.div variants={K4CardAnimationVar} custom={2.5} initial='initial' whileInView='animate' viewport={{ once: true }} className="card_icon_box">
                        <LuAlarmClock />
                    </motion.div>
                    <motion.div variants={MainCarsAnimationVar} custom={3} initial='initial' whileInView='animate' viewport={{ once: true }} className="card_content_box">
                        <p>Уже через месяц наслаждайтесь
                            изменениями к лучшему
                            вашего питомца!</p>
                    </motion.div>
                </div>
            </Col>
        </Row>
        <p className="title_content_text phone_text_none">Живой пример</p>
    </Container>
        <Container fluid className="content_box_3">

            <Row lg='2' md='1' sm='1'>
                <Col className='phone_text_title'>
                    <p className="title_content_text">Живой пример</p>
                </Col>
                <Col className="box_brake">
                    <p className="life_box_text">
                        Борис сбросил 5 кг за 2 месяца, просто заменив свой
                        обычный корм на Cat Energy Slim. Отличный результат
                        без изнуряющих тренировок! При этом он не менял своих
                        привычек и по-прежнему спит по 16 часов в день.
                    </p>
                    <div className="life_content">
                        <div className="box_life_cont type1">
                            5кг
                        </div>
                        <div className="box_life_cont type2">
                            60 дней
                        </div>
                        <div className="box_life_cont_tablet">
                            <p>Затраты на питание: <br className="br_phone" />15 000 РУБ.</p>
                        </div>
                    </div>
                </Col>
                <Col className="box_tablet" style={{ position: 'relative' }}>
                    <div className="box_aft_bef">
                        <img className="image_before" src="/media/before-desktop.png" alt="" />
                        <img className="image_after" src="/media/after-desktop.png" alt="" />
                    </div>

                </Col>
                <Col style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                    <div className="price_box">
                        <div className="price_box_text">
                            Затраты на питание:
                        </div>
                        <div className="price_box_text">
                            15 000 РУБ.
                        </div>
                    </div>
                </Col>
                <Col className="box_tablet">
                    <div className="price_box">
                        <div className="price_box_text">
                            БЫЛО
                        </div>
                        <div className="flex-fill d-flex justify-content-center align-content-center">
                            <input className="range_box" min='0' max='100' value='50' type='range' />
                        </div >
                        <div className="price_box_text">
                            СТАЛО
                        </div>
                    </div>
                </Col>
                <Row sm={1} className="mobile_before_after_container">
                    <Col style={{ textAlign: 'center', marginTop: '42px' }}>
                        <img src="/media/before-mobile 1.png" alt="" />
                    </Col>
                    <Col className="progress_bar">
                        <div className="price_box_text">
                            БЫЛО
                        </div>
                        <LinearProgress sx={{ width: '100px', height: '14px', borderRadius: '10px', backgroundColor: 'white' }} color="success" value={50} variant="determinate" />
                        <div className="price_box_text">
                            СТАЛО
                        </div>
                    </Col>
                </Row>

            </Row>

        </Container>
        <Container fluid className="cat_tablet_container">

            <div className="image_tablet_container">
                <img src="/media/image_cat_tablet.png" width={'auto'} height={'auto'} alt="" />
            </div>
            <Box className="teblet_bef_aft_box">
                <div className="price_box_text">
                    БЫЛО
                </div>
                <div className="d-flex justify-content-center align-content-center">
                    <input className="range_box_tablet" min='0' max='100' value='50' type='range' />
                </div >
                <div className="price_box_text">
                    СТАЛО
                </div>
            </Box>
        </Container>
    </>)
}