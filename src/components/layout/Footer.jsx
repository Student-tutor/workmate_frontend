import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { useAuth0 } from "@auth0/auth0-react";
import { FooterCont, Logo } from "../../Styled";
import logo from '../../assets/images/logo.png'
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import { NavLink } from "react-router-dom";

export default function Footer() {
    const { loginWithRedirect } = useAuth0();

    const { logout, isAuthenticated } = useAuth0();

      return (
    <FooterCont >
    <footer className='footer-color'>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="text.secondary"
        color="white"
      >    
        <Container maxWidth="lg">
          <Grid container spacing={5}>
          <Grid item xs={12} sm={3}>
              <Box marginBottom={2}> <Logo src={logo} alt="" /> <b>Workmate</b> </Box>
              <Box marginBottom={1}> Zeeson Information Technology and Innovation,</Box>
              <Box marginBottom={1}> Shop 4, Student Union Secretariat, BUK New Campus,
                Bayero University Kano, Nigeria. </Box>
              <Box marginTop={2} className='adress-text'> <EmailIcon/> people@workmateteam.com </Box>
              <Box marginTop={2} className='adress-text'> <CallIcon/> <WhatsAppIcon/> +2348059303261</Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box borderBottom={1} marginBottom={1}> <b>Company</b></Box>
              <Box>
                <Link href="/about-us" color="inherit">
                  About Us
                </Link>
              </Box>
              <Box>
                <Link href="/contact-us" color="inherit">
                Contact Us
                </Link>
              </Box>
              <Box>
                <Link href="/privacy-policy" color="inherit">
                  Privacy
                </Link>
              </Box>
            </Grid>
            {!isAuthenticated ?  
            <Grid item xs={12} sm={3}>
            <Box borderBottom={1} marginBottom={1}><b>My Account</b></Box>
            <Box>
              <Link to="" color="inherit" 
              onClick={() => loginWithRedirect()} 
              >
                Sign In
              </Link>
            </Box>
            <Box>
              <Link to="" color="inherit"
              onClick={() =>
                  loginWithRedirect({
                    screen_hint: "signup",
                  })
                 } 
              >
                Join 
              </Link>
            </Box>
          </Grid>
            :
            <Grid item xs={12} sm={3}>
            <Box borderBottom={1} marginBottom={1}><b>Quick Links</b></Box>
            <Box>
              <NavLink to="/dashboard" style={{ textDecoration: 'none', color: 'white' }} color="inherit">
                Dashboard
              </NavLink>
            </Box>
            <Box>
              <Link to="" color="inherit"
                onClick={() => 
                  logout({ returnTo: window.location.origin })
                }
              >
                Sign Out
              </Link>
            </Box>
          </Grid>
            }
            
            <Grid item xs={12} sm={3}>
              <Box borderBottom={1} marginBottom={1}> <b>Social Media</b></Box>
              <Box>
                <Link href="https://twitter.com/Workmate_Team" color="inherit">
                  Twitter
                </Link>
              </Box>
              <Box>
                <Link href="https://www.facebook.com/workmateteam" color="inherit">
                  Facebook
                </Link>
              </Box>
              <Box>
                <Link href="https://www.linkedin.com/company/79070981/" color="inherit">
                  Linkedin
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            <b>Workmate Team</b> &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
      </footer>
      </FooterCont>
  );
}



