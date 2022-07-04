import logo from '../../imgs/logo.png';

import { 
    Container,
    NavMenu,
    Link,
    List,
    Logo,
    SearchArea,
    SearchBar,
    Heading,
    Tag,
    TagArea
} from './styles';

const Header : React.FC = () => {
    return(
        <Container>
            <NavMenu>
                <Logo src={logo}/>
                <List>
                    <Link>home</Link>
                    <Link>universities</Link>
                    <Link>about</Link>
                </List>
            </NavMenu>

            <SearchArea>
                <Heading>Search for universities, here...</Heading>
                <SearchBar placeholder = 'What university do you want to go to?'/>
                <TagArea>
                    <Tag>África</Tag>
                    <Tag>America</Tag>
                    <Tag>Europa</Tag>
                    <Tag>Asia</Tag>
                </TagArea>
            </SearchArea>
           
        </Container>
    )
}
        

export default Header;