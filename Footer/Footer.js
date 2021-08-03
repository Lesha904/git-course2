import Nav from '../Header2/Nav';

function Footer(props) {
   /*  console.log("Footer props", props); */
    return (
        <footer>
            <h3>{props.data.site_name}</h3>
            {/* <h3>site_name</h3> */}
            <Nav site={props.data.nav}/>
        </footer>
    )
}

export default Footer;