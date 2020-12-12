import styled from "@emotion/styled";

const FooterContainer = styled.div`
.footer{
    background: #152F4F;
    color:white;
    
    .links{
      ul {list-style-type: none;}
      li a{
        color: white;
        transition: color .2s;
        &:hover{
          text-decoration:none;
          color:#4180CB;
          }
      }
    }  
    .about-company{
      i{font-size: 25px;}
      a{
        color:white;
        transition: color .2s;
        &:hover{color:#4180CB}
      }
    } 
    .location{
      i{font-size: 18px;}
    }
    .copyright p{border-top:1px solid rgba(255,255,255,.1);} 
  }
`;

export default FooterContainer;
