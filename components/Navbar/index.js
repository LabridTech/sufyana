import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Image from "next/image";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/router';


export function Navbar(){
     const route = useRouter();
      return(
          <Box component="div"  className='flex mb-10 sm:mb-1 justify-around  flex-col sm:flex-row ' >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              className='text-golden'
              onClick={()=> route.push('/') }
            >
              <Image alt='logo' src='/suf.png'  width={90} height={90} />
              
              <Typography
              variant="h4"
              component="div"
              className='text-#FFD700 font-itc font-bold'
              
            >
              SUFIANAH
            </Typography>
            </IconButton>
           <Box component="div" className='flex mb-5 sm:mb-0 justify-center sm:justify-evenly'>
            
            <Button onClick={()=>{route.push('/product')}}  className='text-white' >
                Shop
            </Button>
            <Button onClick={()=> route.push('/aboutus') } className='text-white' >
                About us
            </Button>
            <Button onClick={()=> route.push('/ourservice') } className='text-white' >
                Service
            </Button>
          </Box>
  
          <Box component="div" className='flex justify-center sm:justify-evenly items-center '>
            
            <SearchIcon className='fill-white mx-1' />
            <FavoriteBorderOutlinedIcon onClick={()=> {event.preventDefault, route.push('/login')} } className='fill-white mx-1 ' />
            <ShoppingCartOutlinedIcon onClick={()=> route.push('/cart') } className='fill-white mx-1 ' />
          </Box>
  
              
              
            </Box>           
        
        
      )
  }