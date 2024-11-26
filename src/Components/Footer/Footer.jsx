import React from 'react'
import { Box, Grid2, IconButton, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import DateRangeIcon from '@mui/icons-material/DateRange';
import SecurityIcon from '@mui/icons-material/Security';
import TonalityIcon from '@mui/icons-material/Tonality';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import MailLockIcon from '@mui/icons-material/MailLock';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

function Footer() {
    return (
        <div>
            <Grid2 container bgcolor={'darkblue'} display={'flex'} p={3}>
                <Grid2 display={'flex'} size={{ lg: 8, md: 8 }} gap={5}>
                    <Box display={'grid'} gap={6}>
                        <Box display={'flex'} >
                            <Box display={'flex'} className='h-[50px] w-[50px]'>
                                <SupportAgentIcon sx={{ color: 'white', fontSize: '50px' }} />
                            </Box>
                            <Typography sx={{ color: 'white' }} variant='h6'>Helpline Number <br />   <Typography component="span" variant="body2" sx={{ fontSize: '0.875rem' }}>
                                Call +91 9457889234<br />   <Typography component="span" variant="body2" sx={{ fontSize: '0.875rem' }}>
                                    (Mon-Sun 9am-6pm)
                                </Typography>
                            </Typography></Typography>
                        </Box>
                        <Box display={'flex'}>
                            <Box display={'flex'} className='h-[50px] w-[50px]'>
                                <TonalityIcon sx={{ color: 'white', fontSize: '50px' }} />
                            </Box>
                            <Typography sx={{ color: 'white' }} variant='h6'>100% ORIGINAL <br />   <Typography component="span" variant="body2" sx={{ fontSize: '0.875rem' }}>
                                guarantee for all products
                            </Typography></Typography>
                        </Box>
                    </Box>
                    <Box display={'grid'} gap={10}>
                        <Box display={'flex'}>
                            <Box display={'flex'} className='h-[50px] w-[50px]'>
                                <DateRangeIcon sx={{ color: 'white', fontSize: '50px' }} />
                            </Box>

                            <Typography sx={{ color: 'white' }} variant='h6'>Return within 7 days <br />   <Typography component="span" variant="body2" sx={{ fontSize: '0.875rem' }}>
                                of receiving your order
                            </Typography></Typography>
                        </Box>

                        <Box display={'flex'}>
                            <Box display={'flex'} className='h-[50px] w-[50px]'>
                                <AssignmentTurnedInIcon sx={{ color: 'white', fontSize: '50px' }} />
                            </Box>

                            <Typography sx={{ color: 'white' }} variant='h6'>Complete products <br />   <Typography component="span" variant="body2" sx={{ fontSize: '0.875rem' }}>
                                20,00,000+ products
                            </Typography></Typography>
                        </Box>
                    </Box>

                    <Box display={'grid'} gap={10}>
                        <Box display={'flex'}>
                            <Box display={'flex'} className='h-[50px] w-[50px]'>
                                <SecurityIcon sx={{ color: 'white', fontSize: '50px' }} />
                            </Box>
                            <Typography sx={{ color: 'white' }} variant='h6'>100% Safe & Secure Payments<br />   <Typography component="span" variant="body2" sx={{ fontSize: '0.875rem' }}>
                                Pay using secure payments methods
                            </Typography></Typography>
                        </Box>

                        <Box display={'flex'}>
                            <Box display={'flex'} className='h-[50px] w-[50px]'>
                                <MailLockIcon  sx={{ color: 'white', fontSize: '50px' }} />
                            </Box>
                            <Typography sx={{ color: 'white' }} variant='h6'>Buyer Protection<br />   <Typography component="span" variant="body2" sx={{ fontSize: '0.875rem' }}>
                                Committed to buyer interests
                            </Typography></Typography>
                        </Box>
                    </Box>

                </Grid2>
                <Grid2 size={{ lg: 4, md: 8 }}>
                    <Box display={'flex'} flexDirection={'column'} gap={3}>
                        <Typography sx={{ color: 'white' }} variant='h5'>Experince Foxboro Instrument </Typography>
                        <Box className='w-80 h-12' bgcolor={'yellowgreen'}>
                            <img src='apps.png' className="w-full h-full object-cover" />
                        </Box>

                        <Box pl={7} >

                            <Typography sx={{ color: 'white' }} variant='h5'>Follow us on</Typography>
                            <Box display="flex" gap={2}>
                                <IconButton aria-label="Facebook" sx={{ color: 'white' }}>
                                    <Facebook />
                                </IconButton>
                                <IconButton aria-label="Twitter" sx={{ color: 'white' }}>
                                    <Twitter />
                                </IconButton>
                                <IconButton aria-label="Instagram" sx={{ color: 'white' }}>
                                    <Instagram />
                                </IconButton>
                            </Box>
                        </Box>
                    </Box>
                </Grid2>
            </Grid2>
        </div>
    )
}


export default Footer
