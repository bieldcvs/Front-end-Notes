import { FiPlus , FiSearch} from "react-icons/fi";
import { Container , Brand , Menu , Search , Content , NewNote } from "./style";

import { Header } from "../../components/Header";
import { Note } from "../../components/Notas";
import { Input } from "../../components/input";
import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";



export function Home(){
  return(
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>
      <Header/>

      <Menu>
        <li><ButtonText title="Todos" isActive/></li>
        <li><ButtonText title="React"/></li>
        <li><ButtonText title="Nodejs"/></li>
      </Menu>

      <Search>
        <Input placeholder="Como pesquisar pelo titulo" icon={FiSearch}/>
      </Search>

      <Content>
        <Section title="Minhas notas">
        <Note data={{title : 'React' , 
        tags : [
          {id:'1',name:'react'},
          {id:'2',name :'nodejs'}
        ]
        }}
        />
        </Section>
      </Content>
      <NewNote to="/new">
        <FiPlus ></FiPlus>
        Criar nota
      </NewNote>
    </Container>
  );
}