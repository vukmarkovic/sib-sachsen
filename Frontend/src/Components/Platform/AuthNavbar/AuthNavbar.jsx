import React from 'react'
import { Container, Navbar } from '@themesberg/react-bootstrap'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const AuthNavbar = () => {
    return (
        <>
            <Navbar variant="dark" expanded className="pt-3 pb-4">
                <Container fluid className="px-0">
                    <div
                        style={{
                            position: 'relative',
                            display: 'inline-block',
                        }}
                    >
                        <a
                            className="navbar-brand pl-4"
                            href={process.env.PUBLIC_URL + '/'}
                            title="Homepage"
                        >
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    '/img/brand/sib-logo.svg'
                                }
                                style={{
                                    marginLeft: 2,
                                    marginBottom: 5,
                                    height: '48px',
                                }}
                                alt="soft.fact Logo"
                            />
                        </a>
                        <Typography component="div" className="pl-4">
                            <Box fontWeight="bold" display="inline">
                                empowered by{' '}
                                <a
                                    href="https://softfact.works/"
                                    target={'_blank'}
                                >
                                    soft.fact
                                </a>
                            </Box>
                        </Typography>
                        {/* <p className='pl-5'></p> */}
                    </div>
                </Container>
            </Navbar>
        </>
    )
}
export default AuthNavbar
