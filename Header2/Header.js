import Nav from './Nav';

function Header(props) {
   /*  console.log("Header props", props); */
    return (
    <>      {/* реакт фрагмент */}
        <header>
            {/* {console.log("Header props", props)} */} 
           <h1>{props.data.site_name}</h1>
           <h2>{props.data.site_title}</h2>
           {/* <h1>site_name</h1>
           <h2>site_title</h2> */}
           <Nav site={props.data.nav}/>
        </header>
    </>
    )
}

export default Header;