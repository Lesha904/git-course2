function Nav(props) {
   /*  console.log("Nav props", props); */
    return (
    <>
        <nav>
           <ul className="main-navigation">
               {props.site.map( item => <li key={item.link}><a href={item.link}>{item.text}</a></li>) }
           {/* здесь будет распечатан props */}
          </ul>
        </nav>
    </>
    )
}

export default Nav;